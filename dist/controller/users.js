'use strict';

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

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = function () {
  function User() {
    (0, _classCallCheck3.default)(this, User);

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.encryption = this.encryption.bind(this);
    this.Md5 = this.Md5.bind(this);
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
                  password: this.Md5(password),
                  time: new Date()
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

                console.log(_context2.t0);
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
  }, {
    key: 'encryption',
    value: function encryption(password) {
      var newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
      return newpassword;
    }
  }, {
    key: 'Md5',
    value: function Md5(password) {
      var md5 = _crypto2.default.createHash('md5');
      return md5.update(password).digest('base64');
    }
  }]);
  return User;
}();

module.exports = new User();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL3VzZXJzLmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJsb2dpbiIsImJpbmQiLCJyZWdpc3RlciIsImVuY3J5cHRpb24iLCJNZDUiLCJyZXEiLCJyZXMiLCJuZXh0IiwidXNlciIsInF1ZXJ5IiwicGFzc3dvcmQiLCJmaW5kVXNlciIsInJlc3VsdCIsImRhdGEiLCJzZXNzaW9uIiwiSlNUT0tFTiIsInNlbmQiLCJjb2RlIiwiZGVzYyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyTmFtZSIsImxlbmd0aCIsImV4aXN0IiwidGltZSIsIkRhdGUiLCJjcmVhdGVVc2VyIiwic3VjY2VzcyIsIm5ld3Bhc3N3b3JkIiwic3Vic3RyIiwibWQ1IiwiY3JlYXRlSGFzaCIsInVwZGF0ZSIsImRpZ2VzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVNQSxJO0FBQ0osa0JBQWE7QUFBQTs7QUFDWCxTQUFLQyxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQWI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0QsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtFLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQkYsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDQSxTQUFLRyxHQUFMLEdBQVcsS0FBS0EsR0FBTCxDQUFTSCxJQUFULENBQWMsSUFBZCxDQUFYO0FBQ0Q7Ozs7OzJHQUVXSSxHLEVBQUtDLEcsRUFBS0MsSTs7Ozs7O0FBQ2RDLG9CLEdBQU9ILElBQUlJLEtBQUosQ0FBVUQsSTtBQUNqQkUsd0IsR0FBV0wsSUFBSUksS0FBSixDQUFVQyxROzs7dUJBRUosb0JBQVVDLFFBQVYsQ0FBbUI7QUFDdENILHdCQUFNQSxJQURnQztBQUV0Q0UsNEJBQVVBO0FBRjRCLGlCQUFuQixDOzs7QUFBZkUsc0I7QUFJQUMsb0IsR0FBT0QsT0FBTyxDQUFQLEM7O0FBQ2Isb0JBQUlDLElBQUosRUFBVTtBQUNSUixzQkFBSVMsT0FBSixDQUFZQyxPQUFaLEdBQXNCRixJQUF0QjtBQUNBUCxzQkFBSVUsSUFBSixDQUFTO0FBQ1BDLDBCQUFNLENBREM7QUFFUEMsMEJBQU0sTUFGQztBQUdQTCwwQkFBTUE7QUFIQyxtQkFBVDtBQUtELGlCQVBELE1BT087QUFDTFAsc0JBQUlVLElBQUosQ0FBUztBQUNQQywwQkFBTSxDQURDO0FBRVBDLDBCQUFNLFVBRkM7QUFHUEwsMEJBQU07QUFIQyxtQkFBVDtBQUtEOzs7Ozs7OztBQUVETSx3QkFBUUMsR0FBUjtBQUNBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2R0FJV0YsRyxFQUFLQyxHLEVBQUtDLEk7Ozs7OztBQUNqQkMsb0IsR0FBT0gsSUFBSUksS0FBSixDQUFVRCxJO0FBQ2pCRSx3QixHQUFXTCxJQUFJSSxLQUFKLENBQVVDLFE7OztzQkFFckJGLFFBQVFFLFE7Ozs7Ozt1QkFDYSxvQkFBVUMsUUFBVixDQUFtQjtBQUN4Q0gsd0JBQU1BO0FBRGtDLGlCQUFuQixDOzs7QUFBakJhLHdCOztzQkFHRkEsU0FBU0MsTUFBVCxHQUFrQixDOzs7OztBQUNwQmhCLG9CQUFJVSxJQUFKLENBQVMsRUFBRUgsTUFBTSxFQUFSLEVBQVlJLE1BQU0sQ0FBbEIsRUFBcUJDLE1BQU0sc0JBQVlLLEtBQXZDLEVBQVQ7Ozs7O0FBRU1WLG9CLEdBQU87QUFDWEwsd0JBQU1BLElBREs7QUFFWEUsNEJBQVUsS0FBS04sR0FBTCxDQUFTTSxRQUFULENBRkM7QUFHWGMsd0JBQU0sSUFBSUMsSUFBSjtBQUhLLGlCOzt1QkFLUSxvQkFBVUMsVUFBVixDQUFxQmIsSUFBckIsQzs7O0FBQWZELHNCOztBQUNOTixvQkFBSVUsSUFBSixDQUFTLEVBQUVILE1BQU1ELE1BQVIsRUFBZ0JLLE1BQU0sQ0FBdEIsRUFBeUJDLE1BQU0sc0JBQVlTLE9BQTNDLEVBQVQ7Ozs7Ozs7Ozs7QUFJSlIsd0JBQVFDLEdBQVI7QUFDQWI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFJT0csUSxFQUFTO0FBQ3BCLFVBQU1rQixjQUFjLEtBQUt4QixHQUFMLENBQVMsS0FBS0EsR0FBTCxDQUFTTSxRQUFULEVBQW1CbUIsTUFBbkIsQ0FBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsSUFBa0MsS0FBS3pCLEdBQUwsQ0FBU00sUUFBVCxDQUEzQyxDQUFwQjtBQUNBLGFBQU9rQixXQUFQO0FBQ0E7Ozt3QkFDSWxCLFEsRUFBUztBQUNiLFVBQU1vQixNQUFNLGlCQUFPQyxVQUFQLENBQWtCLEtBQWxCLENBQVo7QUFDQSxhQUFPRCxJQUFJRSxNQUFKLENBQVd0QixRQUFYLEVBQXFCdUIsTUFBckIsQ0FBNEIsUUFBNUIsQ0FBUDtBQUNDOzs7OztBQUlIQyxPQUFPQyxPQUFQLEdBQWlCLElBQUlwQyxJQUFKLEVBQWpCIiwiZmlsZSI6InVzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVsL1VzZXJNb2RlbCdcbmltcG9ydCB7IFNlbmRmb3JtYXQsIERlc3JlZ2lzdGVyfSBmcm9tICcuLi91dGlscy9jb25zdGFudCdcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJ1xuXG5jbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVnaXN0ZXIgPSB0aGlzLnJlZ2lzdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbmNyeXB0aW9uID0gdGhpcy5lbmNyeXB0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5NZDUgPSB0aGlzLk1kNS5iaW5kKHRoaXMpO1xuICB9XG4gIFxuICBhc3luYyBsb2dpbihyZXEsIHJlcywgbmV4dCkge1xuICAgIGNvbnN0IHVzZXIgPSByZXEucXVlcnkudXNlcjtcbiAgICBjb25zdCBwYXNzd29yZCA9IHJlcS5xdWVyeS5wYXNzd29yZDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgVXNlck1vZGVsLmZpbmRVc2VyKHtcbiAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRbMF07XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICByZXEuc2Vzc2lvbi5KU1RPS0VOID0gZGF0YTtcbiAgICAgICAgcmVzLnNlbmQoe1xuICAgICAgICAgIGNvZGU6IDAsXG4gICAgICAgICAgZGVzYzogJ+eZu+W9leaIkOWKnycsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgICBjb2RlOiAxLFxuICAgICAgICAgIGRlc2M6ICfnlKjmiLflkI3miJblr4bnoIHplJnor68nLFxuICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyByZWdpc3RlcihyZXEsIHJlcywgbmV4dCkge1xuICAgIGNvbnN0IHVzZXIgPSByZXEucXVlcnkudXNlcjtcbiAgICBjb25zdCBwYXNzd29yZCA9IHJlcS5xdWVyeS5wYXNzd29yZDtcbiAgICB0cnkge1xuICAgICAgaWYgKHVzZXIgJiYgcGFzc3dvcmQpIHtcbiAgICAgICAgY29uc3QgdXNlck5hbWUgPSBhd2FpdCBVc2VyTW9kZWwuZmluZFVzZXIoe1xuICAgICAgICAgIHVzZXI6IHVzZXJcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh1c2VyTmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmVzLnNlbmQoeyBkYXRhOiBbXSwgY29kZTogMSwgZGVzYzogRGVzcmVnaXN0ZXIuZXhpc3QgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgdXNlcjogdXNlcixcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLk1kNShwYXNzd29yZCksXG4gICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFVzZXJNb2RlbC5jcmVhdGVVc2VyKGRhdGEpO1xuICAgICAgICAgIHJlcy5zZW5kKHsgZGF0YTogcmVzdWx0LCBjb2RlOiAxLCBkZXNjOiBEZXNyZWdpc3Rlci5zdWNjZXNzIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgZW5jcnlwdGlvbihwYXNzd29yZCl7XG5cdFx0Y29uc3QgbmV3cGFzc3dvcmQgPSB0aGlzLk1kNSh0aGlzLk1kNShwYXNzd29yZCkuc3Vic3RyKDIsIDcpICsgdGhpcy5NZDUocGFzc3dvcmQpKTtcblx0XHRyZXR1cm4gbmV3cGFzc3dvcmRcblx0fVxuICBNZDUocGFzc3dvcmQpe1xuXHRcdGNvbnN0IG1kNSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKTtcblx0XHRyZXR1cm4gbWQ1LnVwZGF0ZShwYXNzd29yZCkuZGlnZXN0KCdiYXNlNjQnKTtcbiAgfVxuICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVXNlcigpIl19