'use strict';

var express = require('express');
var router = express.Router();
var UserModel = require('../../model/UserModel');

var _require = require('../../utils/constant'),
    Desregister = _require.Desregister;

router.get('/', function (req, res, next) {
    var user = req.query.user;
    var password = req.query.password;
    if (user && password) {
        UserModel.findUser({
            user: user
        }).then(function (result) {
            if (result.length > 0) {
                res.send({ data: [], code: 1, desc: Desregister.exist });
            } else {
                var data = {
                    user: user,
                    password: password,
                    time: JSON.stringify(new Date())
                };
                UserModel.createUser(data).then(function (result) {
                    res.send({ data: result, code: 1, desc: Desregister.success });
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }).catch(function (err) {
            console.log(err);
        });
    } else {
        res.send({ data: [], code: 1, desc: Desregister.hint });
    }
});

module.exports = router;
//# sourceMappingURL=register.js.map