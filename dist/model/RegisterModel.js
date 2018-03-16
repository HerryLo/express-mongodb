'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* 模式 */
var RegisterSchema = new Schema({
    user: String,
    password: String,
    time: String
});

/* 查找 */
RegisterSchema.statics.findUser = function (data) {
    var _this = this;

    return new Promise(function (resolve, reject) {
        _this.find(data, function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
};

/* 创建用户 */
RegisterSchema.statics.createUser = function (data) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
        _this2.create(data, function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
};

var RegisterModel = mongoose.model('user', RegisterSchema);

module.exports = RegisterModel;
//# sourceMappingURL=UserModel.js.map