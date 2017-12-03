var express = require('express');
var artListModel = require('../../model/artListModel.js').artListModel;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var artList = new artListModel();
    artListModel.find(function (error, result) {
        if (error) {
            console.log(error);
        } else {
            console.log(result); // result 为空\
            res.send({data: result,code: 0});
        }
    })
    
});

module.exports = router;
