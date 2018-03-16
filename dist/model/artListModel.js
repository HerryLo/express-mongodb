'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* 模式 */
var ArtcileListSchema = new Schema({
    title: String,
    content: String,
    time: String,
    username: String,
    imgSrc: String,
    attention: Number,
    comment: Number,
    avatarImg: String
});

/* 查找 */
ArtcileListSchema.statics.findbytitle = function (data) {
    var _this = this;

    return new Promise(function (resolve, reject) {
        _this.find(data, function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
};

var artListModel = mongoose.model('artList', ArtcileListSchema);

module.exports = artListModel;
//# sourceMappingURL=artListModel.js.map