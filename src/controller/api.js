import artListModel from '../model/artListModel'
import utils from '../utils/utils'

const Artdata = {
    title: '【计算机本科补全计划】CCF计算机职业资格认证 201709-01/02详解',
    content: '正文之前 貌似我找到的那个题目网站更新了一波最新的题目。不过201709 只有1、2 题，所以先做了吧（其实是我自己对能不能做出第三题 持怀疑态度！）宝宝心里苦啊！！！😭！！...',
    time: new Date(),
    username: '大力_Darcy',
    imgSrc: 'http://upload-images.jianshu.io/upload_images/3810775-d4361a41b22572b1.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    avatarImg: 'http://upload.jianshu.io/users/upload_avatars/2313466/fee3d9d86554?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    attention: 34,
    comment: 110
};

class API {
    /**
     * 查找文章列表
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async artList(req, res, next) {
        try {
            const result = await artListModel.findArtList({});
            if (result.length > 0) {
                res.send({ data: result, code: 0 });
            }
        } catch (e) {
            console.log(e);
            next();
        }
    }

    /**
     * 创建文章列表
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async createArtList(req, res, next) {
        try {
            const result = await artListModel.createArtList(Artdata);
            if (result.length > 0) {
                res.send({ data: result, code: 0 });
            }
        } catch (e) {
            console.log(e);
            next();
        }
    }

    /**
     * 图片抓取
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async fetchImg(req, res, next) {
        const query = req.query;
        const url = query.imgSrc;
        if (url) {
            utils.GetImg(url)
                .then(function (url) {
                    res.redirect('/img/' + url);
                });
        } else {
            res.send({ data: "", code: 0 });
        }
    }
}

module.exports = new API()

