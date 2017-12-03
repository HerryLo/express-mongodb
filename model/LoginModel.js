var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
    user: String,
    password: String
})

var LoginModel = mongoose.model('user', LoginSchema)

function LoginFun(obj) {
    if(typeof obj == 'object'){
        var login = new LoginModel(obj);
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

module.exports = {
    LoginModel: LoginModel,
    LoginFun: LoginFun
}

