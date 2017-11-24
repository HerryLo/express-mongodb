var mongoose = require('mongoose');
var constant = require('../utils/constant.js');
var LoginFun = require('../model/LoginModel.js');

mongoose.Promise = global.Promise;
global.mongoose = mongoose

function connect() {
    mongoose.connect(constant.dbUrl, {useMongoClient: true})

    var db = mongoose.connection;

    db.once('open', function (callback) {
        console.log('db connection success:');
        LoginFun({user: 'liuheng', password: 123456});
    });

    db.on('error',()=> {
        console.log('db connection error:')
    });
}

exports.connect = connect;
exports.mongoose = mongoose;  