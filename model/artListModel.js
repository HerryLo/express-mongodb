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

ArtcileListSchema.static ({
    findbytitle: function(obj, callback) {
        if (typeof obj == 'object') {
            return this.model('mongoose').find(obj, callback);
        }
    }
})

const artListModel = mongoose.model('artList', ArtcileListSchema);

module.exports = artListModel
