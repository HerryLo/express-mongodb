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
                var fspath = _path2.default.join(__dirname, './../public/');
                var exists = _fs2.default.existsSync(fspath);
                console.log(exists, fspath);
                if (!exists) {
                    _fs2.default.mkdirSync(fspath);
                    _fs2.default.mkdirSync(fspath + 'img');
                }
                var dir = _path2.default.join(__dirname, './../public/img/' + filename);
                (0, _request2.default)(url).pipe(_fs2.default.createWriteStream(dir));
                console.log('拉取成功');
                resolve(filename);
            }
        });
    });
}

module.exports = {
    GetImg: GetImg
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJHZXRJbWciLCJ1cmwiLCJyZXNvbHZlIiwicmVqZWN0IiwiaGVhZCIsImVyciIsInJlcyIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZmlsZW5hbWUiLCJEYXRlIiwiZ2V0VGltZSIsInN1YnN0ciIsImZzcGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJleGlzdHMiLCJleGlzdHNTeW5jIiwibWtkaXJTeW5jIiwiZGlyIiwicGlwZSIsImNyZWF0ZVdyaXRlU3RyZWFtIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLQSxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUFxQjtBQUNqQixXQUFPLHNCQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQywwQkFBUUMsSUFBUixDQUFhSCxHQUFiLEVBQWtCLFVBQUNJLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQ2xDLGdCQUFJRixHQUFKLEVBQVM7QUFDTEcsd0JBQVFDLEdBQVIsQ0FBWUosR0FBWjtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFNSyxXQUFXLElBQUlDLElBQUosR0FBV0MsT0FBWCxLQUF1QlgsSUFBSVksTUFBSixDQUFXLENBQUMsQ0FBWixFQUFlLENBQWYsQ0FBeEM7QUFDQSxvQkFBTUMsU0FBUyxlQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsY0FBckIsQ0FBZjtBQUNBLG9CQUFNQyxTQUFTLGFBQUdDLFVBQUgsQ0FBY0osTUFBZCxDQUFmO0FBQ0FOLHdCQUFRQyxHQUFSLENBQVlRLE1BQVosRUFBb0JILE1BQXBCO0FBQ0Esb0JBQUksQ0FBQ0csTUFBTCxFQUFhO0FBQ1QsaUNBQUdFLFNBQUgsQ0FBYUwsTUFBYjtBQUNBLGlDQUFHSyxTQUFILENBQWFMLFNBQVMsS0FBdEI7QUFDSDtBQUNELG9CQUFNTSxNQUFNLGVBQUtMLElBQUwsQ0FBVUMsU0FBVixFQUFxQixxQkFBcUJOLFFBQTFDLENBQVo7QUFDQSx1Q0FBUVQsR0FBUixFQUFhb0IsSUFBYixDQUFrQixhQUFHQyxpQkFBSCxDQUFxQkYsR0FBckIsQ0FBbEI7QUFDQVosd0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FQLHdCQUFRUSxRQUFSO0FBQ0g7QUFDSixTQWpCRDtBQWtCSCxLQW5CTSxDQUFQO0FBb0JIOztBQUVEYSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2J4QixZQUFRQTtBQURLLENBQWpCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbi8qKlxuICog5oqT5Y+W5Zu+54mHXG4gKiBAcGFyYW0gdXJsXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gR2V0SW1nKHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlcXVlc3QuaGVhZCh1cmwsIChlcnIsIHJlcywgYm9keSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB1cmwuc3Vic3RyKC00LCA0KVxuICAgICAgICAgICAgICAgIGNvbnN0IGZzcGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLy4uL3B1YmxpYy8nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdHMgPSBmcy5leGlzdHNTeW5jKGZzcGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXhpc3RzLCBmc3BhdGgpO1xuICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZzLm1rZGlyU3luYyhmc3BhdGgpO1xuICAgICAgICAgICAgICAgICAgICBmcy5ta2RpclN5bmMoZnNwYXRoICsgJ2ltZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBkaXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi8uLi9wdWJsaWMvaW1nLycgKyBmaWxlbmFtZSk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdCh1cmwpLnBpcGUoZnMuY3JlYXRlV3JpdGVTdHJlYW0oZGlyKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aLieWPluaIkOWKnycpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmlsZW5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBHZXRJbWc6IEdldEltZ1xufSJdfQ==