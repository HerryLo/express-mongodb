var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtcileListSchema = new Schema({
    title: String,
    content: String,
    time: String,
    username: String,
    imgSrc: String,
    attention: Number,
    comment: Number,
    avatarImg: String
})

var artListModel = mongoose.model('artList', ArtcileListSchema);

function artListFun(obj) {
    if (typeof obj == 'object') {
        var artList = new artListModel(obj);
        artList.save(function () {
            artListModel.find(function (error, result) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(result); // result 为空
                }
            })
        })
    }
}

module.exports = {
    artListModel: artListModel,
    artListFun: artListFun
}
