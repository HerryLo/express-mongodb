const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

ArtcileListSchema.statics.findbytitle = function(title, callback) {
    return this.model('mongoose').find({title: title}, callback);
}

const artListModel = mongoose.model('artList', ArtcileListSchema);

module.exports = artListModel
