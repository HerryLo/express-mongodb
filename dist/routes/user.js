'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../controller/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/login', _users2.default.login);
router.get('/register', _users2.default.register);

exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlci5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJSb3V0ZXIiLCJnZXQiLCJsb2dpbiIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLGtCQUFRQyxNQUFSLEVBQWY7O0FBRUFELE9BQU9FLEdBQVAsQ0FBVyxRQUFYLEVBQXFCLGdCQUFLQyxLQUExQjtBQUNBSCxPQUFPRSxHQUFQLENBQVcsV0FBWCxFQUF3QixnQkFBS0UsUUFBN0I7O2tCQUVlSixNIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vY29udHJvbGxlci91c2VycydcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLmdldCgnL2xvZ2luJywgVXNlci5sb2dpbik7XG5yb3V0ZXIuZ2V0KCcvcmVnaXN0ZXInLCBVc2VyLnJlZ2lzdGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIl19