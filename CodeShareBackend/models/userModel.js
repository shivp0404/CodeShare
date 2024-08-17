// models/userModel.js
const mongoose = require('mongoose');
const SnippetModel = require('./SnippetModel').schema;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    snippets: [
        {
            type: SnippetModel, // Correct type reference
           // Assuming you have a Snippet model
        }
    ]
});

module.exports = mongoose.model('userModel', UserSchema);
