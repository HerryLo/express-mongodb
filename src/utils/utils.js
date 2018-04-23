import fs from 'fs'
import request from 'request'
import path from 'path'

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
                const fspath = path.join(__dirname, './../public/');
                const exists = fs.existsSync(fspath);
                console.log(exists, fspath);
                if (!exists) {
                    fs.mkdirSync(fspath);
                    fs.mkdirSync(fspath + 'img');
                }
                const dir = path.join(__dirname, './../public/img/' + filename);
                request(url).pipe(fs.createWriteStream(dir));
                console.log('拉取成功');
                resolve(filename);
            }
        });
    })
}

module.exports = {
    GetImg: GetImg
}