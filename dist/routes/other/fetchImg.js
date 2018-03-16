'use strict';

var express = require('express');
var utils = require('../../utils/utils.js');
var router = express.Router();

/**
 * 抓取图片
 */
router.get('/', function (req, res, next) {
    var query = req.query;
    var url = query.imgSrc;
    if (url) {
        utils.GetImg(url).then(function (url) {
            res.redirect('/img/' + url);
        });
    } else {
        res.send({ data: "", code: 0 });
    }
});

module.exports = router;
//# sourceMappingURL=fetchImg.js.map