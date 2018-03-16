'use strict';

var mongoose = require('mongoose');
var constant = require('../utils/constant.js');

mongoose.Promise = global.Promise;
global.mongoose = mongoose;

function connect() {
    mongoose.connect(constant.dbUrl, {
        useMongoClient: true
    });
    var db = mongoose.connection;
    db.once('open', function (callback) {
        console.log('db connection success:');
    });
    db.on('error', function () {
        console.log('db connection error:');
        db.close();
    });
}
module.exports = {
    connect: connect,
    mongoose: mongoose
};
//# sourceMappingURL=dbConnect.js.map