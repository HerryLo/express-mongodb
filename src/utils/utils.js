const fs = require('fs');
const request = require('request');
const path = require('path');

/**
 * 抓取图片
 * @param url
 * @constructor
 */
function GetImg(url) {
    return new Promise((resolve, reject) => {
        request.head(url, (err, res, body) => {
            if (err) {
                console.log(err);
            } else {
                const filename = new Date().getTime() + url.substr(-4, 4)
                const dir = path.join(__dirname, './../public/img/' + filename);
                request(url).pipe(fs.createWriteStream(dir));
                console.log('拉取成功');
                resolve(filename);
            }
        });
    })
}

/**
 * 
 */
function isExists(path) {
    fs.exists(path, function (exists) {
        if (exists) {
            return true;
            console.log("文件存在")
        }
        if (!exists) {
            return false;
            console.log("文件不存在")
        }
    })
}


module.exports = {
    GetImg: GetImg
}