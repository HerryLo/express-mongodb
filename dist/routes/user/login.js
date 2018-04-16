'use strict';

var express = require('express');
var router = express.Router();
var UserModel = require('../../model/UserModel');

var _require = require('../../utils/constant'),
    Sendformat = _require.Sendformat;

var loginCheck = function loginCheck(query, d) {
    var user = query.user;
    var password = query.password;
    if (!d) return false;
    if (user != d.user || password != d.password) {
        return '用户名或密码错误';
    } else {
        return '成功';
    }
};

router.get('/', function (req, res, next) {
    var cookies = req.cookies;
    var user = req.query.user;
    var password = req.query.password;
    UserModel.findUser({
        user: user
    }).then(function (result) {
        var d = result[0];
        var obj = {};
        var desc = loginCheck(req.query, d);
        if (d) {
            res.send({ code: 0, desc: desc, data: [] });
        } else {
            res.send({ code: 1, desc: desc, data: data });
        }
    });
});

module.exports = router;
//# sourceMappingURL=login.js.map