const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
    section: Number,
    items: [Object]
});

module.exports =  mongoose.model('texts', TextSchema);