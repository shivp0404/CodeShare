const express = require("express");
const cors = require("cors");
const connectDB = require("./db.connect/db.connection");

const usersRouter = require("./routes/user");
const path = require("path");
const app = express();

connectDB();

app.use(express.static(path.join(__dirname, "client/")));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

app.use("/", usersRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
