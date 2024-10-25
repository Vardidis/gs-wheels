const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    tel: String,
    text: String,
    read: Boolean,
    date: String   
});

const Message = mongoose.model('messages',  MessageSchema);

module.exports = Message;