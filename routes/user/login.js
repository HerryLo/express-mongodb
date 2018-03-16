const express = require('express');
const router = express.Router();
const UserModel = require('../../model/UserModel')
const {Sendformat} = require('../../utils/constant')

router.get('/', (req, res, next) => {
    const cookies = req.cookies;
    const user = req.query.user;
    const password = req.query.password;
    UserModel.findUser({
        user: user
    }).then(function (result) {
        const d = result[0];
        let obj = {};
        if (d) {

        } else {

        }
        res.send({code: code, desc: desc, data: data});
    })

});

module.exports = router;
