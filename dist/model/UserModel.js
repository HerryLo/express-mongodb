'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var UserSchema = new Schema({
    user: String,
    password: String,
    time: String
});

UserSchema.statics = {
    /* 查找 */
    findUser: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
            var result;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.find(data);

                        case 2:
                            result = _context.sent;
                            return _context.abrupt('return', result);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function findUser(_x) {
            return _ref.apply(this, arguments);
        }

        return findUser;
    }(),

    /* 创建用户 */
    createUser: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var result;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.create(data);

                        case 2:
                            result = _context2.sent;
                            return _context2.abrupt('return', result);

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function createUser() {
            return _ref2.apply(this, arguments);
        }

        return createUser;
    }()
};

var UserModel = _mongoose2.default.model('user', UserSchema);

module.exports = UserModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9Vc2VyTW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwiVXNlclNjaGVtYSIsInVzZXIiLCJTdHJpbmciLCJwYXNzd29yZCIsInRpbWUiLCJzdGF0aWNzIiwiZmluZFVzZXIiLCJkYXRhIiwiZmluZCIsInJlc3VsdCIsImNyZWF0ZVVzZXIiLCJjcmVhdGUiLCJVc2VyTW9kZWwiLCJtb2RlbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxtQkFBU0EsTUFBeEI7QUFDQSxJQUFNQyxhQUFhLElBQUlELE1BQUosQ0FBVztBQUMxQkUsVUFBTUMsTUFEb0I7QUFFMUJDLGNBQVVELE1BRmdCO0FBRzFCRSxVQUFNRjtBQUhvQixDQUFYLENBQW5COztBQU1BRixXQUFXSyxPQUFYLEdBQXFCO0FBQ2pCO0FBQ01DLFlBRlc7QUFBQSw2R0FFRkMsSUFGRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUdRLEtBQUtDLElBQUwsQ0FBVUQsSUFBVixDQUhSOztBQUFBO0FBR1BFLGtDQUhPO0FBQUEsNkRBSU5BLE1BSk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBTWpCO0FBQ01DLGNBUFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVFRLEtBQUtDLE1BQUwsQ0FBWUosSUFBWixDQVJSOztBQUFBO0FBUVBFLGtDQVJPO0FBQUEsOERBU05BLE1BVE07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDQUFyQjs7QUFjQSxJQUFNRyxZQUFZLG1CQUFTQyxLQUFULENBQWUsTUFBZixFQUF1QmIsVUFBdkIsQ0FBbEI7O0FBRUFjLE9BQU9DLE9BQVAsR0FBaUJILFNBQWpCIiwiZmlsZSI6IlVzZXJNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICB1c2VyOiBTdHJpbmcsXG4gICAgcGFzc3dvcmQ6IFN0cmluZyxcbiAgICB0aW1lOiBTdHJpbmdcbn0pXG5cblVzZXJTY2hlbWEuc3RhdGljcyA9IHtcbiAgICAvKiDmn6Xmib4gKi9cbiAgICBhc3luYyBmaW5kVXNlcihkYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZmluZChkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIC8qIOWIm+W7uueUqOaItyAqL1xuICAgIGFzeW5jIGNyZWF0ZVVzZXIoKXtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jcmVhdGUoZGF0YSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG59XG5cbmNvbnN0IFVzZXJNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKCd1c2VyJywgVXNlclNjaGVtYSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlck1vZGVsXG5cbiJdfQ==