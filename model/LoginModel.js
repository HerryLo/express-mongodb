var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
    user: String,
    password: String,
    time: String
})

var LoginModel = mongoose.model('user', LoginSchema)

module.exports = LoginModel

