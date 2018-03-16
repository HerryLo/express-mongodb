'use strict';

var express = require('express');
var router = express.Router();
var UserModel = require('../../model/UserModel');

var _require = require('../../utils/constant'),
    Sendformat = _require.Sendformat;

router.get('/', function (req, res, next) {
    var cookies = req.cookies;
    var user = req.query.user;
    var password = req.query.password;
    UserModel.findUser({
        user: user
    }).then(function (result) {
        var d = result[0];
        var obj = {};
        if (d) {} else {}
        res.send({ code: code, desc: desc, data: data });
    });
});

module.exports = router;
//# sourceMappingURL=login.js.map