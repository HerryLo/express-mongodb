'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * 抓取图片
 * @param url
 * @constructor
 */
var GetImg = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                            _request2.default.head(url, function (err, res, body) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    var filename = new Date().getTime() + url.substr(-4, 4);
                                    var fspath = _path2.default.join(__dirname, './../public/');

                                    var dir = _path2.default.join(__dirname, './../public/img/' + filename);
                                    (0, _request2.default)(url).pipe(_fs2.default.createWriteStream(dir));
                                    console.log('拉取成功');
                                    resolve(filename);
                                }
                            });
                        }));

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function GetImg(_x) {
        return _ref.apply(this, arguments);
    };
}();

/**
 * 检查目录是否存在
 */


var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isExists(path) {
    _fs2.default.exists(path, function (exists) {
        if (exists) {
            return true;
        }
        if (!exists) {
            return false;
        }
    });
}

module.exports = {
    GetImg: GetImg
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJ1cmwiLCJyZXNvbHZlIiwicmVqZWN0IiwiaGVhZCIsImVyciIsInJlcyIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZmlsZW5hbWUiLCJEYXRlIiwiZ2V0VGltZSIsInN1YnN0ciIsImZzcGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJkaXIiLCJwaXBlIiwiY3JlYXRlV3JpdGVTdHJlYW0iLCJHZXRJbWciLCJpc0V4aXN0cyIsInBhdGgiLCJleGlzdHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUlBOzs7Ozs7d0ZBS0MsaUJBQXNCQSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBQ1Usc0JBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLDhDQUFRQyxJQUFSLENBQWFILEdBQWIsRUFBa0IsVUFBQ0ksR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFDbEMsb0NBQUlGLEdBQUosRUFBUztBQUNMRyw0Q0FBUUMsR0FBUixDQUFZSixHQUFaO0FBQ0gsaUNBRkQsTUFFTztBQUNILHdDQUFNSyxXQUFXLElBQUlDLElBQUosR0FBV0MsT0FBWCxLQUF1QlgsSUFBSVksTUFBSixDQUFXLENBQUMsQ0FBWixFQUFlLENBQWYsQ0FBeEM7QUFDQSx3Q0FBTUMsU0FBUyxlQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsY0FBckIsQ0FBZjs7QUFFQSx3Q0FBTUMsTUFBTSxlQUFLRixJQUFMLENBQVVDLFNBQVYsRUFBcUIscUJBQXFCTixRQUExQyxDQUFaO0FBQ0EsMkRBQVFULEdBQVIsRUFBYWlCLElBQWIsQ0FBa0IsYUFBR0MsaUJBQUgsQ0FBcUJGLEdBQXJCLENBQWxCO0FBQ0FULDRDQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBUCw0Q0FBUVEsUUFBUjtBQUNIO0FBQ0osNkJBWkQ7QUFhSCx5QkFkTSxDQURWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7O29CQUFlVSxNOzs7OztBQWtCaEI7Ozs7O0FBM0JBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBNEJBLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3BCLGlCQUFHQyxNQUFILENBQVVELElBQVYsRUFBZ0IsVUFBVUMsTUFBVixFQUFrQjtBQUM5QixZQUFJQSxNQUFKLEVBQVk7QUFDUixtQkFBTyxJQUFQO0FBQ0g7QUFDRCxZQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNULG1CQUFPLEtBQVA7QUFDSDtBQUNKLEtBUEQ7QUFRSDs7QUFHREMsT0FBT0MsT0FBUCxHQUFpQjtBQUNiTCxZQUFRQTtBQURLLENBQWpCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbi8qKlxuICog5oqT5Y+W5Zu+54mHXG4gKiBAcGFyYW0gdXJsXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuIGFzeW5jIGZ1bmN0aW9uIEdldEltZyh1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXF1ZXN0LmhlYWQodXJsLCAoZXJyLCByZXMsIGJvZHkpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlbmFtZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdXJsLnN1YnN0cigtNCwgNClcbiAgICAgICAgICAgICAgICBjb25zdCBmc3BhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi8uLi9wdWJsaWMvJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi8uLi9wdWJsaWMvaW1nLycgKyBmaWxlbmFtZSk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCh1cmwpLnBpcGUoZnMuY3JlYXRlV3JpdGVTdHJlYW0oZGlyKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aLieWPluaIkOWKnycpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmlsZW5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxufVxuXG4vKipcbiAqIOajgOafpeebruW9leaYr+WQpuWtmOWcqFxuICovXG5mdW5jdGlvbiBpc0V4aXN0cyhwYXRoKSB7XG4gICAgZnMuZXhpc3RzKHBhdGgsIGZ1bmN0aW9uIChleGlzdHMpIHtcbiAgICAgICAgaWYgKGV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgR2V0SW1nOiBHZXRJbWdcbn0iXX0=