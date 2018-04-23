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
router.get('/fetchImg', _api2.default.fetchImg);

exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXBpLmpzIl0sIm5hbWVzIjpbInJvdXRlciIsIlJvdXRlciIsImdldCIsImFydExpc3QiLCJmZXRjaEltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxrQkFBUUMsTUFBUixFQUFmOztBQUVBRCxPQUFPRSxHQUFQLENBQVcsVUFBWCxFQUF1QixjQUFJQyxPQUEzQjtBQUNBSCxPQUFPRSxHQUFQLENBQVcsV0FBWCxFQUF3QixjQUFJRSxRQUE1Qjs7a0JBRWVKLE0iLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBBUEkgZnJvbSAnLi4vY29udHJvbGxlci9hcGknXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy9hcnRMaXN0JywgQVBJLmFydExpc3QpO1xucm91dGVyLmdldCgnL2ZldGNoSW1nJywgQVBJLmZldGNoSW1nKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIl19