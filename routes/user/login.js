const express = require('express');
const router = express.Router();
const UserModel = require('../../model/UserModel')
const {Sendformat} = require('../../utils/constant')

const loginCheck = (query, d)=> {
    const user = query.user;
    const password = query.password;
    if(!d) return false;
    if(user != d.user || password != d.password){
        return '用户名或密码错误'
    }else{
        return '成功'
    }
}

router.get('/', (req, res, next) => {
    const cookies = req.cookies;
    const user = req.query.user;
    const password = req.query.password;
    UserModel.findUser({
        user: user
    }).then(function (result) {
        const d = result[0];
        let obj = {};
        let desc = loginCheck(req.query, d);
        if (d) {
            res.send({code: 0, desc: desc, data:[]});
        } else {
            res.send({code: 1, desc: desc, data: data});
        }

    })

});

module.exports = router;
