const express = require('express')
const router = express.Router()
const Snippet = require("../models/SnippetModel")

router.post('/main',(req,res)=>{
 const data = req.body;
 console.log(data)
})