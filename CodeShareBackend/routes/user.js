const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const LocalStrategy = require("passport-local").Strategy;
const path = require("path");
const router = express.Router();
const SnippetModel = require("../models/SnippetModel");
const User = require("../models/userModel");

router.use(express.static(path.join(__dirname, "../client/")));

router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());
router.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

router.use(passport.initialize());
router.use(passport.session());

// Passport serialize and deserialize
passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Passport LocalStrategy
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) return done(null, false, { message: "Incorrect username" });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return done(null, false, { message: "Incorrect password" });
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// Register route
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await new User({ username, password: hashedPassword }).save();
    res.redirect("/login");
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login route
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.redirect("/login");
    req.logIn(user, (err) => {
      if (err) return next(err);
      const token = jwt.sign({ user: user.username }, "secret", {
        expiresIn: "1h",
      });
   
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });
      res.redirect(`/user/${user._id}`);
    });
  })(req, res, next);
});



router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send("Error logging out");
    res.clearCookie("token").redirect("/login");
  });
});

function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

router.post("/main/:id" , async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  const newSnippet = new SnippetModel(data);
  newSnippet.user = id;
  
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $push: { snippets: newSnippet } },
      { new: true }
    );
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    await user.save();
    const savedSnippet = await newSnippet.save();
    res.status(201).json("done");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});




router.get("/main/:id/view/:id2", async (req, res) => {
  const userId = req.params.id;
  const snippetId = req.params.id2;

  try {
    // Find user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find snippet in user's snippets array

    const snippet = user.snippets.find((snippet) => snippet._id == snippetId);

    if (!snippet) {
      return res.status(404).json({ error: "Snippet not found" });
    }

    res.json(snippet);
  } catch (error) {
    console.error("Error fetching user or snippet:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching user or snippet" });
  }
});

router.get("/main/:id/edit/:id2", async (req, res) => {
  const snippetId = req.params.id2;

  try {
    // Find user by ID
    const user = await SnippetModel.findById(snippetId);

    if (!user) {
      return res.status(404).json({ error: "Snippet not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user or snippet:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching user or snippet" });
  }
});

router.put("/main/:id/edit/:id2", async (req, res) => {
 const userid = req.params.id;
 const contentid = req.params.id2;
 const data = req.body;

  try {
    const snippet = await SnippetModel.findByIdAndUpdate(contentid,data);
    if (!snippet) { 
      return res.status(404).json({ error: "Snippet not found" });
    }
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const snippetIndex = user.snippets.findIndex(s => s._id.toString() === contentid);
    console.log(snippetIndex)
    if (snippetIndex === -1) {
      // If the snippet is not already in the user's snippets array, add it
      user.snippets.push(contentid);
    } else {
      // If the snippet is already in the user's snippets array, update the entry
      user.snippets[snippetIndex] = data;
    }
    await user.save()
    await snippet.save();
    res.json({ message: "Content updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/main/:id/delete/:id2", async (req, res) => {
  const userid = req.params.id;
  const contentid = req.params.id2;
  try {
    const user = await User.findById(userid);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const snippetIndex = user.snippets.findIndex(s => s._id.toString() === contentid);  
    if (snippetIndex === -1) {
      return res.status(404).json({ error: "Snippet not found" });
    }
    user.snippets.splice(snippetIndex, 1);

    await user.save();
    res.json({ message: "Content deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/main/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const userinfo = await User.findById(userId);

    if (userinfo) {
      res.json(userinfo); // Send the user info as JSON
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the user profile" });
  }
});

router.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const userinfo = await User.findById(userId);

    if (userinfo) {
      res.json(userinfo); // Send the user info as JSON
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the user profile" });
  }
});



module.exports = router;
