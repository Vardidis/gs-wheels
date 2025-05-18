const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    icon: String,
    name: String,
    title: {
        type: String,
        required: false
    },
    text: String
});

module.exports =  mongoose.model('success_stories', StorySchema);