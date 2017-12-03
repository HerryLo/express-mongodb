var mongoose = require('mongoose');
var constant = require('../utils/constant.js');

var artList = require('../model/artListModel.js');
var Login = require('../model/LoginModel.js');

mongoose.Promise = global.Promise;
global.mongoose = mongoose

function connect() {
    mongoose.connect(constant.dbUrl, {
        useMongoClient: true
    })

    var db = mongoose.connection;

    db.once('open', function (callback) {
        console.log('db connection success:');
        artList.artListFun({
            title: '【计算机本科补全计划】CCF计算机职业资格认证 201709-01/02详解',
            content: '正文之前 貌似我找到的那个题目网站更新了一波最新的题目。不过201709 只有1、2 题，所以先做了吧（其实是我自己对能不能做出第三题 持怀疑态度！）宝宝心里苦啊！！！😭！！...',
            time: new Date(),
            username: '大力_Darcy',
            imgSrc: 'http://upload-images.jianshu.io/upload_images/3810775-d4361a41b22572b1.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
            avatarImg: 'http://upload.jianshu.io/users/upload_avatars/2313466/fee3d9d86554?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
            attention: 34,
            comment: 110
        });
    });

    db.on('error', () => {
        console.log('db connection error:')
    });
}

exports.connect = connect;
exports.mongoose = mongoose;