const express = require('express');
const utils = require('../utils/utils.js');
const router = express.Router();

/**
 * 抓取图片
 */
router.get('/', function (req, res, next) {
    const query = req.query;
    const url = query.imgSrc;
    if (url) {
        utils.GetImg(url)
            .then(function (url) {
                res.redirect('/img/' + url);
            });
    } else {
        res.send({data: "", code: 0});
    }
});

module.exports = router;