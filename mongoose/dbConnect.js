var mongoose = require('mongoose');
var constant = require('../utils/constant.js');
var artListModel = require('../model/artListModel.js');
var LoginModel = require('../model/LoginModel.js');

mongoose.Promise = global.Promise;
global.mongoose = mongoose

function connect() {
    mongoose.connect(constant.dbUrl, {
        useMongoClient: true
    })
    var db = mongoose.connection;
    db.once('open', function (callback) {
        console.log('db connection success:');
    });
    db.on('error', function () {
        console.log('db connection error:')
    });
}
module.exports = {
    connect: connect,
    mongoose: mongoose
}