import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    user: String,
    password: String,
    time: String
})

UserSchema.statics = {
    /* 查找 */
    async findUser(data) {
        const result = await this.find(data);
        return result;
    },
    /* 创建用户 */
    async createUser(){
        const result = await this.create(data);
        return result;
    }

}

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel

