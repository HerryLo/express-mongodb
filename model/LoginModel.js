var mongoose = require('mongoose');
var Schema = require('../mongoose/Schema');

var LoginModel = mongoose.model('user', Schema.LoginSchema)

function LoginFun(obj) {
    if(typeof obj == 'object'){
        var login = new LoginModel();
        login.save(function(){
            LoginModel.find(function(error,result){
                if(error) {
                    console.log(error);
                } else {
                    console.log(result); // result 为空
                }
            })
        })
    }
}

module.exports = LoginFun

