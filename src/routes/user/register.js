const express = require('express');
const router = express.Router();
const UserModel = require('../../model/UserModel')
const {Desregister} = require('../../utils/constant')

router.get('/', (req, res, next) => {
    const user = req.query.user;
    const password = req.query.password;
    if (user && password) {
        UserModel.findUser({
            user: user
        }).then(function (result) {
            if (result.length > 0) {
                res.send({data: [], code: 1, desc: Desregister.exist})
            } else {
                const data = {
                    user: user,
                    password: password,
                    time: JSON.stringify(new Date())
                }
                UserModel.createUser(data)
                    .then(function (result) {
                        res.send({data: result, code: 1, desc: Desregister.success})
                    }).catch((err) => {
                    console.log(err)
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    } else {
        res.send({data: [], code: 1, desc: Desregister.hint})
    }
})

module.exports = router;