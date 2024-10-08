const mongoose = require('mongoose');
const prodSchema = mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    tags:String, // consider as category
    count: Number,
    img:String
});
module.exports = mongoose.model("Product",prodSchema);