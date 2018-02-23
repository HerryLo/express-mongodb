const fs = require('fs');
const request = require('request');
const path = require('path');

/**
 * 抓取图片
 * @param url
 * @constructor
 */
function GetImg(url) {
    return new Promise(function(resolve, reject){
        request.head(url, function (err, res, body) {
            if(err){
                console.log(err);
            }else{
                const filename = new Date().getTime()+url.substr(-4,4)
                const dir = path.join(__dirname ,'./../public/img/'+filename);
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