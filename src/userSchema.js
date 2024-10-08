const mongoose = require('mongoose');
const prodSchema = mongoose.Schema({
    username:String,
    password:String,
    prod:[{}]
});
module.exports = mongoose.model("User",prodSchema);