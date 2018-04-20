'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _UserModel = require('../model/UserModel');

var _UserModel2 = _interopRequireDefault(_UserModel);

var _constant = require('../utils/constant');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = function () {
  function User() {
    (0, _classCallCheck3.default)(this, User);
  }

  (0, _createClass3.default)(User, [{
    key: 'login',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
        var user, password, result, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = req.query.user;
                password = req.query.password;
                _context.prev = 2;
                _context.next = 5;
                return _UserModel2.default.findUser({
                  user: user,
                  password: password
                });

              case 5:
                result = _context.sent;
                data = result[0];

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
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](2);

                console.log(_context.t0);
                next();

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
      }));

      function login(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'register',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
        var user, password, userName, data, result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                user = req.query.user;
                password = req.query.password;
                _context2.prev = 2;

                if (!(user && password)) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 6;
                return _UserModel2.default.findUser({
                  user: user
                });

              case 6:
                userName = _context2.sent;

                if (!(userName.length > 0)) {
                  _context2.next = 11;
                  break;
                }

                res.send({ data: [], code: 1, desc: _constant.Desregister.exist });
                _context2.next = 16;
                break;

              case 11:
                data = {
                  user: user,
                  password: password,
                  time: (0, _stringify2.default)(new Date())
                };
                _context2.next = 14;
                return _UserModel2.default.createUser(data);

              case 14:
                result = _context2.sent;

                res.send({ data: result, code: 1, desc: _constant.Desregister.success });

              case 16:
                _context2.next = 22;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2['catch'](2);

                console.log(err);
                next();

              case 22:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 18]]);
      }));

      function register(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return register;
    }()
  }]);
  return User;
}();

module.exports = new User();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL3VzZXJzLmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwidXNlciIsInF1ZXJ5IiwicGFzc3dvcmQiLCJmaW5kVXNlciIsInJlc3VsdCIsImRhdGEiLCJzZXNzaW9uIiwiSlNUT0tFTiIsInNlbmQiLCJjb2RlIiwiZGVzYyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyTmFtZSIsImxlbmd0aCIsImV4aXN0IiwidGltZSIsIkRhdGUiLCJjcmVhdGVVc2VyIiwic3VjY2VzcyIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0lBRU1BLEk7Ozs7Ozs7OzJHQUNRQyxHLEVBQUtDLEcsRUFBS0MsSTs7Ozs7O0FBQ2RDLG9CLEdBQU9ILElBQUlJLEtBQUosQ0FBVUQsSTtBQUNqQkUsd0IsR0FBV0wsSUFBSUksS0FBSixDQUFVQyxROzs7dUJBRUosb0JBQVVDLFFBQVYsQ0FBbUI7QUFDdENILHdCQUFNQSxJQURnQztBQUV0Q0UsNEJBQVVBO0FBRjRCLGlCQUFuQixDOzs7QUFBZkUsc0I7QUFJQUMsb0IsR0FBT0QsT0FBTyxDQUFQLEM7O0FBQ2Isb0JBQUlDLElBQUosRUFBVTtBQUNSUixzQkFBSVMsT0FBSixDQUFZQyxPQUFaLEdBQXNCRixJQUF0QjtBQUNBUCxzQkFBSVUsSUFBSixDQUFTO0FBQ1BDLDBCQUFNLENBREM7QUFFUEMsMEJBQU0sTUFGQztBQUdQTCwwQkFBTUE7QUFIQyxtQkFBVDtBQUtELGlCQVBELE1BT087QUFDTFAsc0JBQUlVLElBQUosQ0FBUztBQUNQQywwQkFBTSxDQURDO0FBRVBDLDBCQUFNLFVBRkM7QUFHUEwsMEJBQU07QUFIQyxtQkFBVDtBQUtEOzs7Ozs7OztBQUVETSx3QkFBUUMsR0FBUjtBQUNBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2R0FJV0YsRyxFQUFLQyxHLEVBQUtDLEk7Ozs7OztBQUNqQkMsb0IsR0FBT0gsSUFBSUksS0FBSixDQUFVRCxJO0FBQ2pCRSx3QixHQUFXTCxJQUFJSSxLQUFKLENBQVVDLFE7OztzQkFFckJGLFFBQVFFLFE7Ozs7Ozt1QkFDYSxvQkFBVUMsUUFBVixDQUFtQjtBQUN4Q0gsd0JBQU1BO0FBRGtDLGlCQUFuQixDOzs7QUFBakJhLHdCOztzQkFHRkEsU0FBU0MsTUFBVCxHQUFrQixDOzs7OztBQUNwQmhCLG9CQUFJVSxJQUFKLENBQVMsRUFBRUgsTUFBTSxFQUFSLEVBQVlJLE1BQU0sQ0FBbEIsRUFBcUJDLE1BQU0sc0JBQVlLLEtBQXZDLEVBQVQ7Ozs7O0FBRU1WLG9CLEdBQU87QUFDWEwsd0JBQU1BLElBREs7QUFFWEUsNEJBQVVBLFFBRkM7QUFHWGMsd0JBQU0seUJBQWUsSUFBSUMsSUFBSixFQUFmO0FBSEssaUI7O3VCQUtRLG9CQUFVQyxVQUFWLENBQXFCYixJQUFyQixDOzs7QUFBZkQsc0I7O0FBQ05OLG9CQUFJVSxJQUFKLENBQVMsRUFBRUgsTUFBTUQsTUFBUixFQUFnQkssTUFBTSxDQUF0QixFQUF5QkMsTUFBTSxzQkFBWVMsT0FBM0MsRUFBVDs7Ozs7Ozs7OztBQUlKUix3QkFBUUMsR0FBUixDQUFZUSxHQUFaO0FBQ0FyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLTnNCLE9BQU9DLE9BQVAsR0FBaUIsSUFBSTFCLElBQUosRUFBakIiLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vbW9kZWwvVXNlck1vZGVsJ1xuaW1wb3J0IHsgU2VuZGZvcm1hdCwgRGVzcmVnaXN0ZXJ9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50J1xuXG5jbGFzcyBVc2VyIHtcbiAgYXN5bmMgbG9naW4ocmVxLCByZXMsIG5leHQpIHtcbiAgICBjb25zdCB1c2VyID0gcmVxLnF1ZXJ5LnVzZXI7XG4gICAgY29uc3QgcGFzc3dvcmQgPSByZXEucXVlcnkucGFzc3dvcmQ7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFVzZXJNb2RlbC5maW5kVXNlcih7XG4gICAgICAgIHVzZXI6IHVzZXIsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gcmVzdWx0WzBdO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmVxLnNlc3Npb24uSlNUT0tFTiA9IGRhdGE7XG4gICAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgICBjb2RlOiAwLFxuICAgICAgICAgIGRlc2M6ICfnmbvlvZXmiJDlip8nLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgY29kZTogMSxcbiAgICAgICAgICBkZXNjOiAn55So5oi35ZCN5oiW5a+G56CB6ZSZ6K+vJyxcbiAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVnaXN0ZXIocmVxLCByZXMsIG5leHQpIHtcbiAgICBjb25zdCB1c2VyID0gcmVxLnF1ZXJ5LnVzZXI7XG4gICAgY29uc3QgcGFzc3dvcmQgPSByZXEucXVlcnkucGFzc3dvcmQ7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh1c2VyICYmIHBhc3N3b3JkKSB7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gYXdhaXQgVXNlck1vZGVsLmZpbmRVc2VyKHtcbiAgICAgICAgICB1c2VyOiB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodXNlck5hbWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJlcy5zZW5kKHsgZGF0YTogW10sIGNvZGU6IDEsIGRlc2M6IERlc3JlZ2lzdGVyLmV4aXN0IH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXI6IHVzZXIsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgICAgICB0aW1lOiBKU09OLnN0cmluZ2lmeShuZXcgRGF0ZSgpKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBVc2VyTW9kZWwuY3JlYXRlVXNlcihkYXRhKTtcbiAgICAgICAgICByZXMuc2VuZCh7IGRhdGE6IHJlc3VsdCwgY29kZTogMSwgZGVzYzogRGVzcmVnaXN0ZXIuc3VjY2VzcyB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVXNlcigpIl19