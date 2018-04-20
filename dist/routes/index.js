'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

exports.default = function (app) {
  app.use('/user', _user2.default);
  app.use('/api', _api2.default);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsicm91dGVyIiwiUm91dGVyIiwiYXBwIiwidXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsa0JBQVFDLE1BQVIsRUFBZjs7a0JBRWUsVUFBQ0MsR0FBRCxFQUFTO0FBQ3RCQSxNQUFJQyxHQUFKLENBQVEsT0FBUjtBQUNBRCxNQUFJQyxHQUFKLENBQVEsTUFBUjtBQUNELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJ1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgKGFwcCkgPT4ge1xuICBhcHAudXNlKCcvdXNlcicsIHVzZXIpO1xuICBhcHAudXNlKCcvYXBpJywgYXBpKTtcbn1cbiJdfQ==