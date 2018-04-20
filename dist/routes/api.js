'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _api = require('../controller/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/artList', _api2.default.artList);
router.get('/fetchImg', _api2.default.artList);

exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXBpLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsIlJvdXRlciIsImdldCIsImFydExpc3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsa0JBQVFDLE1BQVIsRUFBZjs7QUFFQUQsT0FBT0UsR0FBUCxDQUFXLFVBQVgsRUFBdUIsY0FBSUMsT0FBM0I7QUFDQUgsT0FBT0UsR0FBUCxDQUFXLFdBQVgsRUFBd0IsY0FBSUMsT0FBNUI7O2tCQUVlSCxNIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgQVBJIGZyb20gJy4uL2NvbnRyb2xsZXIvYXBpJ1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvYXJ0TGlzdCcsIEFQSS5hcnRMaXN0KTtcbnJvdXRlci5nZXQoJy9mZXRjaEltZycsIEFQSS5hcnRMaXN0KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIl19