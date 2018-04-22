import fs from 'fs'
import request from 'request'
import path from 'path'

/**
 * 抓取图片
 * @param url
 * @constructor
 */
 async function GetImg(url) {
    return new Promise((resolve, reject) => {
        request.head(url, (err, res, body) => {
            if (err) {
                console.log(err);
            } else {
                const filename = new Date().getTime() + url.substr(-4, 4)
                const fspath = path.join(__dirname, './../public/');

                const dir = path.join(__dirname, './../public/img/' + filename);
                request(url).pipe(fs.createWriteStream(dir));
                console.log('拉取成功');
                resolve(filename);
            }
        });
    })
}

/**
 * 检查目录是否存在
 */
function isExists(path) {
    fs.exists(path, function (exists) {
        if (exists) {
            return true;
        }
        if (!exists) {
            return false;
        }
    })
}


module.exports = {
    GetImg: GetImg
}