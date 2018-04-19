const express = require('express');
const router = express.Router();
const UserModel = require('../../model/UserModel')
const {Sendformat} = require('../../utils/constant')

const loginCheck = (query, d)=> {
    const user = query.user;
    const password = query.password;
    if(!d || user != d.user || password != d.password){
        return {code: 1, desc: '用户名或密码错误'}
    }else{
        return {code: 0,desc: '成功'}
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
        let obj = loginCheck(req.query, d);
        if (obj.code == 0) {
            let ck = `${new Date().getTime()}&${user}`;
            res.cookie("cookie", ck, {maxAge: 60 * 1000});
            res.send({code: obj.code, desc: obj.desc, data:[]});
        } else {
            res.send({code: obj.code, desc: obj.desc, data: []});
        }
    })

});

module.exports = router;
