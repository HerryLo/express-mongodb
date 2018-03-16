const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* 模式 */
const ArtcileListSchema = new Schema({
    title: String,
    content: String,
    time: String,
    username: String,
    imgSrc: String,
    attention: Number,
    comment: Number,
    avatarImg: String
})

/* 查找 */
ArtcileListSchema.statics.findbytitle = function (data) {
    return new Promise((resolve, reject) => {
        this.find(data, function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    })

}

const artListModel = mongoose.model('artList', ArtcileListSchema);

module.exports = artListModel
