const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: Number,
    tag: String,
    secTag: String,
    title: String,
    subtitle: String,
    thumbnail: String,
    sub: [String],
    desc: String,
    chars: [Object]
});

module.exports =  mongoose.model('items',  ProductSchema);