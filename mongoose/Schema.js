var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
    user: String,
    password: String
})

module.exports = {
    LoginSchema: LoginSchema
}
