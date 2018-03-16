'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* 模式 */
var UserSchema = new Schema({
    user: String,
    password: String,
    time: String
});

/* 查找 */
UserSchema.statics.findUser = function (data) {
    var _this = this;

    return new Promise(function (resolve, reject) {
        _this.find(data, function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
};

/* 创建用户 */
UserSchema.statics.createUser = function (data) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
        _this2.create(data, function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
};

var UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
//# sourceMappingURL=UserModel.js.map