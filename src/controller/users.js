
import UserModel from '../model/UserModel'
import { Sendformat, Desregister} from '../utils/constant'
import crypto from 'crypto'

class User {
  constructor(){
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.encryption = this.encryption.bind(this);
    this.Md5 = this.Md5.bind(this);
  }
  
  async login(req, res, next) {
    const user = req.query.user;
    const password = req.query.password;
    try {
      const result = await UserModel.findUser({
        user: user,
        password: password
      });
      const data = result[0];
      if (data) {
        req.session.JSTOKEN = data;
        res.send({
          code: 0,
          desc: '登录成功',
          data: data
        });
      } else {
        res.send({
          code: 1,
          desc: '用户名或密码错误',
          data: []
        });
      }
    } catch (err) {
      console.log(err);
      next();
    }
  }

  async register(req, res, next) {
    const user = req.query.user;
    const password = req.query.password;
    try {
      if (user && password) {
        const userName = await UserModel.findUser({
          user: user
        });
        if (userName.length > 0) {
          res.send({ data: [], code: 1, desc: Desregister.exist })
        } else {
          const data = {
            user: user,
            password: this.Md5(password),
            time: new Date()
          }
          const result = await UserModel.createUser(data);
          res.send({ data: result, code: 1, desc: Desregister.success })
        }
      }
    } catch (err) {
      console.log(err);
      next();
    }
  }

  encryption(password){
		const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
		return newpassword
	}
  Md5(password){
		const md5 = crypto.createHash('md5');
		return md5.update(password).digest('base64');
  }
  
}

module.exports = new User()