// models/snippetModel.js
const mongoose = require('mongoose');

// Define the schema for a Snippet
const SnippetSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
    ,
    code: {
        type: String,
        required: true,
    },
    tagInput: [{
        type: String
    }],
    user:{
        type: mongoose.Schema.Types.ObjectId, // Correct type reference
        ref: 'UserModel' // Assuming you have a Snippet mode
    }
});

module.exports = mongoose.model('SnippetModel', SnippetSchema);
