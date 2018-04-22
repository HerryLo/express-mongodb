'use strict';

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _connectMongo = require('connect-mongo');

var _connectMongo2 = _interopRequireDefault(_connectMongo);

var _constant = require('./utils/constant');

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var MongoStore = (0, _connectMongo2.default)(_expressSession2.default);

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: false
}));
app.use((0, _cookieParser2.default)('secret'));
app.use((0, _expressSession2.default)({
    name: 'JSTOKEN',
    secret: 'recommandasdasdascsfywenfkuwedniwefuwnfiw', // 建议使用 128 个字符的随机字符串
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        url: _constant2.default.dbUrl
    })
}));
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

(0, _index2.default)(app);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwiTW9uZ29TdG9yZSIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJuYW1lIiwic2VjcmV0IiwicmVzYXZlIiwic2F2ZVVuaW5pdGlhbGl6ZWQiLCJzdG9yZSIsInVybCIsImRiVXJsIiwic3RhdGljIiwiam9pbiIsIl9fZGlybmFtZSIsImFsbCIsInJlcSIsInJlcyIsIm5leHQiLCJoZWFkZXIiLCJlcnIiLCJFcnJvciIsInN0YXR1cyIsImxvY2FscyIsIm1lc3NhZ2UiLCJlcnJvciIsImdldCIsInJlbmRlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE1BQU0sd0JBQVo7QUFDQSxJQUFNQyxhQUFhLHFEQUFuQjs7QUFFQUQsSUFBSUUsR0FBSixDQUFRLHNCQUFPLEtBQVAsQ0FBUjtBQUNBRixJQUFJRSxHQUFKLENBQVEscUJBQVdDLElBQVgsRUFBUjtBQUNBSCxJQUFJRSxHQUFKLENBQVEscUJBQVdFLFVBQVgsQ0FBc0I7QUFDMUJDLGNBQVU7QUFEZ0IsQ0FBdEIsQ0FBUjtBQUdBTCxJQUFJRSxHQUFKLENBQVEsNEJBQWEsUUFBYixDQUFSO0FBQ0FGLElBQUlFLEdBQUosQ0FBUSw4QkFBUTtBQUNaSSxVQUFNLFNBRE07QUFFWkMsWUFBUSwyQ0FGSSxFQUV5QztBQUNyREMsWUFBUSxLQUhJO0FBSVpDLHVCQUFtQixJQUpQO0FBS1pDLFdBQU8sSUFBSVQsVUFBSixDQUFlO0FBQ2xCVSxhQUFLLG1CQUFTQztBQURJLEtBQWY7QUFMSyxDQUFSLENBQVI7QUFTQVosSUFBSUUsR0FBSixDQUFRLGtCQUFRVyxNQUFSLENBQWUsZUFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFFBQXJCLENBQWYsQ0FBUjtBQUNBZixJQUFJZ0IsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0JDLElBQXBCLEVBQTBCO0FBQ25DRCxRQUFJRSxNQUFKLENBQVcsNkJBQVgsRUFBMEMsR0FBMUM7QUFDQUYsUUFBSUUsTUFBSixDQUFXLDhCQUFYLEVBQTJDLGtCQUEzQztBQUNBRixRQUFJRSxNQUFKLENBQVcsOEJBQVgsRUFBMkMsNkJBQTNDO0FBQ0FEO0FBQ0gsQ0FMRDs7QUFPQSxxQkFBT25CLEdBQVA7O0FBRUFBLElBQUlFLEdBQUosQ0FBUSxVQUFVZSxHQUFWLEVBQWVDLEdBQWYsRUFBb0JDLElBQXBCLEVBQTBCO0FBQzlCLFFBQUlFLE1BQU0sSUFBSUMsS0FBSixDQUFVLFdBQVYsQ0FBVjtBQUNBRCxRQUFJRSxNQUFKLEdBQWEsR0FBYjtBQUNBSixTQUFLRSxHQUFMO0FBQ0gsQ0FKRDs7QUFNQXJCLElBQUlFLEdBQUosQ0FBUSxVQUFVbUIsR0FBVixFQUFlSixHQUFmLEVBQW9CQyxHQUFwQixFQUF5QkMsSUFBekIsRUFBK0I7QUFDbkNELFFBQUlNLE1BQUosQ0FBV0MsT0FBWCxHQUFxQkosSUFBSUksT0FBekI7QUFDQVAsUUFBSU0sTUFBSixDQUFXRSxLQUFYLEdBQW1CVCxJQUFJakIsR0FBSixDQUFRMkIsR0FBUixDQUFZLEtBQVosTUFBdUIsYUFBdkIsR0FBdUNOLEdBQXZDLEdBQTZDLEVBQWhFO0FBQ0FILFFBQUlLLE1BQUosQ0FBV0YsSUFBSUUsTUFBSixJQUFjLEdBQXpCO0FBQ0FMLFFBQUlVLE1BQUosQ0FBVyxPQUFYO0FBQ0gsQ0FMRDs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQjlCLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXMvaW5kZXgnXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmYXZpY29uIGZyb20gJ3NlcnZlLWZhdmljb24nXG5cbmltcG9ydCBsb2dnZXIgZnJvbSAnbW9yZ2FuJ1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nXG5pbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gJ2Nvbm5lY3QtbW9uZ28nXG5pbXBvcnQgY29uc3RhbnQgZnJvbSAnLi91dGlscy9jb25zdGFudCdcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgTW9uZ29TdG9yZSA9IGNvbm5lY3RNb25nbyhzZXNzaW9uKTtcblxuYXBwLnVzZShsb2dnZXIoJ2RldicpKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe1xuICAgIGV4dGVuZGVkOiBmYWxzZVxufSkpO1xuYXBwLnVzZShjb29raWVQYXJzZXIoJ3NlY3JldCcpKTtcbmFwcC51c2Uoc2Vzc2lvbih7XG4gICAgbmFtZTogJ0pTVE9LRU4nLFxuICAgIHNlY3JldDogJ3JlY29tbWFuZGFzZGFzZGFzY3NmeXdlbmZrdXdlZG5pd2VmdXduZml3JywgLy8g5bu66K6u5L2/55SoIDEyOCDkuKrlrZfnrKbnmoTpmo/mnLrlrZfnrKbkuLJcbiAgICByZXNhdmU6IGZhbHNlLFxuICAgIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlLFxuICAgIHN0b3JlOiBuZXcgTW9uZ29TdG9yZSh7XG4gICAgICAgIHVybDogY29uc3RhbnQuZGJVcmxcbiAgICB9KVxufSkpO1xuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAncHVibGljJykpKTtcbmFwcC5hbGwoJyonLCBmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCIsIFwiKlwiKTtcbiAgICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLCBcIlgtUmVxdWVzdGVkLVdpdGhcIik7XG4gICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIiwgXCJQVVQsUE9TVCxHRVQsREVMRVRFLE9QVElPTlNcIik7XG4gICAgbmV4dCgpO1xufSk7XG5cbnJvdXRlcihhcHApO1xuXG5hcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ05vdCBGb3VuZCcpO1xuICAgIGVyci5zdGF0dXMgPSA0MDQ7XG4gICAgbmV4dChlcnIpO1xufSk7XG5cbmFwcC51c2UoZnVuY3Rpb24gKGVyciwgcmVxLCByZXMsIG5leHQpIHtcbiAgICByZXMubG9jYWxzLm1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcbiAgICByZXMubG9jYWxzLmVycm9yID0gcmVxLmFwcC5nZXQoJ2VudicpID09PSAnZGV2ZWxvcG1lbnQnID8gZXJyIDoge307XG4gICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gICAgcmVzLnJlbmRlcignZXJyb3InKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDsiXX0=