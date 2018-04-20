
import UserModel from '../model/UserModel'
import { Sendformat, Desregister} from '../utils/constant'

class User {
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
            password: password,
            time: JSON.stringify(new Date())
          }
          const result = await UserModel.createUser(data);
          res.send({ data: result, code: 1, desc: Desregister.success })
        }
      }
    } catch (e) {
      console.log(err);
      next();
    }
  }
}

module.exports = new User()