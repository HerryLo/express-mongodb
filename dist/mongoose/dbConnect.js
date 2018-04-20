'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constant = require('../utils/constant');

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
global.mongoose = _mongoose2.default;

function connect() {
    _mongoose2.default.connect(_constant2.default.dbUrl, {
        useMongoClient: true
    });
    var db = _mongoose2.default.connection;
    db.once('open', function (callback) {
        console.log('db connection success:');
    });
    db.on('error', function () {
        console.log('db connection error:');
        db.close();
    });
}
module.exports = {
    connect: connect,
    mongoose: _mongoose2.default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb25nb29zZS9kYkNvbm5lY3QuanMiXSwibmFtZXMiOlsiUHJvbWlzZSIsImdsb2JhbCIsIm1vbmdvb3NlIiwiY29ubmVjdCIsImRiVXJsIiwidXNlTW9uZ29DbGllbnQiLCJkYiIsImNvbm5lY3Rpb24iLCJvbmNlIiwiY2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwib24iLCJjbG9zZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsbUJBQVNBLE9BQVQsR0FBbUJDLE9BQU9ELE9BQTFCO0FBQ0FDLE9BQU9DLFFBQVA7O0FBRUEsU0FBU0MsT0FBVCxHQUFtQjtBQUNmLHVCQUFTQSxPQUFULENBQWlCLG1CQUFTQyxLQUExQixFQUFpQztBQUM3QkMsd0JBQWdCO0FBRGEsS0FBakM7QUFHQSxRQUFNQyxLQUFLLG1CQUFTQyxVQUFwQjtBQUNBRCxPQUFHRSxJQUFILENBQVEsTUFBUixFQUFnQixVQUFDQyxRQUFELEVBQWE7QUFDekJDLGdCQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDSCxLQUZEO0FBR0FMLE9BQUdNLEVBQUgsQ0FBTSxPQUFOLEVBQWUsWUFBSztBQUNoQkYsZ0JBQVFDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBTCxXQUFHTyxLQUFIO0FBQ0gsS0FIRDtBQUlIO0FBQ0RDLE9BQU9DLE9BQVAsR0FBaUI7QUFDYlosYUFBU0EsT0FESTtBQUViRDtBQUZhLENBQWpCIiwiZmlsZSI6ImRiQ29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcbmltcG9ydCBjb25zdGFudCBmcm9tICcuLi91dGlscy9jb25zdGFudCdcblxubW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuZ2xvYmFsLm1vbmdvb3NlID0gbW9uZ29vc2VcblxuZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICBtb25nb29zZS5jb25uZWN0KGNvbnN0YW50LmRiVXJsLCB7XG4gICAgICAgIHVzZU1vbmdvQ2xpZW50OiB0cnVlXG4gICAgfSlcbiAgICBjb25zdCBkYiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XG4gICAgZGIub25jZSgnb3BlbicsIChjYWxsYmFjayk9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYiBjb25uZWN0aW9uIHN1Y2Nlc3M6Jyk7XG4gICAgfSk7XG4gICAgZGIub24oJ2Vycm9yJywgKCk9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYiBjb25uZWN0aW9uIGVycm9yOicpXG4gICAgICAgIGRiLmNsb3NlKCk7XG4gICAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb25uZWN0OiBjb25uZWN0LFxuICAgIG1vbmdvb3NlOiBtb25nb29zZVxufSJdfQ==