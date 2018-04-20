import mongoose from 'mongoose'

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

ArtcileListSchema.statics = {
    /* 查找 */
    async findArtList(data) {
        const result = await this.find(data);
        return result;
    },
    /* 创建 */
    async createArtList(data) {
        const result = await this.create(data);
        return result;
    }
}

const artListModel = mongoose.model('artList', ArtcileListSchema);

module.exports = artListModel
