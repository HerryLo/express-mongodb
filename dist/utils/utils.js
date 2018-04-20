'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 抓取图片
 * @param url
 * @constructor
 */
function GetImg(url) {
    return new _promise2.default(function (resolve, reject) {
        _request2.default.head(url, function (err, res, body) {
            if (err) {
                console.log(err);
            } else {
                var filename = new Date().getTime() + url.substr(-4, 4);
                var dir = _path2.default.join(__dirname, './../public/img/' + filename);
                (0, _request2.default)(url).pipe(_fs2.default.createWriteStream(dir));
                console.log('拉取成功');
                resolve(filename);
            }
        });
    });
}

/**
 * 
 */
function isExists(path) {
    _fs2.default.exists(path, function (exists) {
        if (exists) {
            return true;
            console.log("文件存在");
        }
        if (!exists) {
            return false;
            console.log("文件不存在");
        }
    });
}

module.exports = {
    GetImg: GetImg
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJHZXRJbWciLCJ1cmwiLCJyZXNvbHZlIiwicmVqZWN0IiwiaGVhZCIsImVyciIsInJlcyIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZmlsZW5hbWUiLCJEYXRlIiwiZ2V0VGltZSIsInN1YnN0ciIsImRpciIsImpvaW4iLCJfX2Rpcm5hbWUiLCJwaXBlIiwiY3JlYXRlV3JpdGVTdHJlYW0iLCJpc0V4aXN0cyIsInBhdGgiLCJleGlzdHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtBLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0FBQ2pCLFdBQU8sc0JBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLDBCQUFRQyxJQUFSLENBQWFILEdBQWIsRUFBa0IsVUFBQ0ksR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFDbEMsZ0JBQUlGLEdBQUosRUFBUztBQUNMRyx3QkFBUUMsR0FBUixDQUFZSixHQUFaO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsb0JBQU1LLFdBQVcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEtBQXVCWCxJQUFJWSxNQUFKLENBQVcsQ0FBQyxDQUFaLEVBQWUsQ0FBZixDQUF4QztBQUNBLG9CQUFNQyxNQUFNLGVBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixxQkFBcUJOLFFBQTFDLENBQVo7QUFDQSx1Q0FBUVQsR0FBUixFQUFhZ0IsSUFBYixDQUFrQixhQUFHQyxpQkFBSCxDQUFxQkosR0FBckIsQ0FBbEI7QUFDQU4sd0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FQLHdCQUFRUSxRQUFSO0FBQ0g7QUFDSixTQVZEO0FBV0gsS0FaTSxDQUFQO0FBYUg7O0FBRUQ7OztBQUdBLFNBQVNTLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3BCLGlCQUFHQyxNQUFILENBQVVELElBQVYsRUFBZ0IsVUFBVUMsTUFBVixFQUFrQjtBQUM5QixZQUFJQSxNQUFKLEVBQVk7QUFDUixtQkFBTyxJQUFQO0FBQ0FiLG9CQUFRQyxHQUFSLENBQVksTUFBWjtBQUNIO0FBQ0QsWUFBSSxDQUFDWSxNQUFMLEVBQWE7QUFDVCxtQkFBTyxLQUFQO0FBQ0FiLG9CQUFRQyxHQUFSLENBQVksT0FBWjtBQUNIO0FBQ0osS0FURDtBQVVIOztBQUdEYSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2J2QixZQUFRQTtBQURLLENBQWpCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbi8qKlxuICog5oqT5Y+W5Zu+54mHXG4gKiBAcGFyYW0gdXJsXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gR2V0SW1nKHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlcXVlc3QuaGVhZCh1cmwsIChlcnIsIHJlcywgYm9keSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB1cmwuc3Vic3RyKC00LCA0KVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpciA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLy4uL3B1YmxpYy9pbWcvJyArIGZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0KHVybCkucGlwZShmcy5jcmVhdGVXcml0ZVN0cmVhbShkaXIpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5ouJ5Y+W5oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG59XG5cbi8qKlxuICogXG4gKi9cbmZ1bmN0aW9uIGlzRXhpc3RzKHBhdGgpIHtcbiAgICBmcy5leGlzdHMocGF0aCwgZnVuY3Rpb24gKGV4aXN0cykge1xuICAgICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5paH5Lu25a2Y5ZyoXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5paH5Lu25LiN5a2Y5ZyoXCIpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEdldEltZzogR2V0SW1nXG59Il19