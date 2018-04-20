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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
    extended: false
}));
app.use((0, _cookieParser2.default)('secret'));
app.use((0, _expressSession2.default)({
    name: 'JSTOKEN',
    secret: 'recommandasdasdascsfywenfkuwedniwefuwnfiw', // 建议使用 128 个字符的随机字符串
    cookie: { maxAge: 1000 * 60 * 10 },
    resave: false,
    saveUninitialized: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsIm5hbWUiLCJzZWNyZXQiLCJjb29raWUiLCJtYXhBZ2UiLCJyZXNhdmUiLCJzYXZlVW5pbml0aWFsaXplZCIsInN0YXRpYyIsImpvaW4iLCJfX2Rpcm5hbWUiLCJhbGwiLCJyZXEiLCJyZXMiLCJuZXh0IiwiaGVhZGVyIiwiZXJyIiwiRXJyb3IiLCJzdGF0dXMiLCJsb2NhbHMiLCJtZXNzYWdlIiwiZXJyb3IiLCJnZXQiLCJyZW5kZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE1BQU0sd0JBQVo7QUFDQUEsSUFBSUMsR0FBSixDQUFRLHNCQUFPLEtBQVAsQ0FBUjtBQUNBRCxJQUFJQyxHQUFKLENBQVEscUJBQVdDLElBQVgsRUFBUjtBQUNBRixJQUFJQyxHQUFKLENBQVEscUJBQVdFLFVBQVgsQ0FBc0I7QUFDMUJDLGNBQVU7QUFEZ0IsQ0FBdEIsQ0FBUjtBQUdBSixJQUFJQyxHQUFKLENBQVEsNEJBQWEsUUFBYixDQUFSO0FBQ0FELElBQUlDLEdBQUosQ0FBUSw4QkFBUTtBQUNaSSxVQUFNLFNBRE07QUFFWkMsWUFBUSwyQ0FGSSxFQUV5QztBQUNyREMsWUFBUSxFQUFFQyxRQUFRLE9BQUssRUFBTCxHQUFRLEVBQWxCLEVBSEk7QUFJWkMsWUFBUSxLQUpJO0FBS1pDLHVCQUFtQjtBQUxQLENBQVIsQ0FBUjtBQU9BVixJQUFJQyxHQUFKLENBQVEsa0JBQVFVLE1BQVIsQ0FBZSxlQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsUUFBckIsQ0FBZixDQUFSO0FBQ0FiLElBQUljLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CQyxJQUFwQixFQUEwQjtBQUNuQ0QsUUFBSUUsTUFBSixDQUFXLDZCQUFYLEVBQTBDLEdBQTFDO0FBQ0FGLFFBQUlFLE1BQUosQ0FBVyw4QkFBWCxFQUEyQyxrQkFBM0M7QUFDQUYsUUFBSUUsTUFBSixDQUFXLDhCQUFYLEVBQTJDLDZCQUEzQztBQUNBRDtBQUNILENBTEQ7O0FBT0EscUJBQU9qQixHQUFQOztBQUVBQSxJQUFJQyxHQUFKLENBQVEsVUFBVWMsR0FBVixFQUFlQyxHQUFmLEVBQW9CQyxJQUFwQixFQUEwQjtBQUM5QixRQUFJRSxNQUFNLElBQUlDLEtBQUosQ0FBVSxXQUFWLENBQVY7QUFDQUQsUUFBSUUsTUFBSixHQUFhLEdBQWI7QUFDQUosU0FBS0UsR0FBTDtBQUNILENBSkQ7O0FBTUFuQixJQUFJQyxHQUFKLENBQVEsVUFBVWtCLEdBQVYsRUFBZUosR0FBZixFQUFvQkMsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQ25DRCxRQUFJTSxNQUFKLENBQVdDLE9BQVgsR0FBcUJKLElBQUlJLE9BQXpCO0FBQ0FQLFFBQUlNLE1BQUosQ0FBV0UsS0FBWCxHQUFtQlQsSUFBSWYsR0FBSixDQUFReUIsR0FBUixDQUFZLEtBQVosTUFBdUIsYUFBdkIsR0FBdUNOLEdBQXZDLEdBQTZDLEVBQWhFO0FBQ0FILFFBQUlLLE1BQUosQ0FBV0YsSUFBSUUsTUFBSixJQUFjLEdBQXpCO0FBQ0FMLFFBQUlVLE1BQUosQ0FBVyxPQUFYO0FBQ0gsQ0FMRDs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQjVCLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXMvaW5kZXgnXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmYXZpY29uIGZyb20gJ3NlcnZlLWZhdmljb24nXG5cbmltcG9ydCBsb2dnZXIgZnJvbSAnbW9yZ2FuJ1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmFwcC51c2UobG9nZ2VyKCdkZXYnKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcbiAgICBleHRlbmRlZDogZmFsc2Vcbn0pKTtcbmFwcC51c2UoY29va2llUGFyc2VyKCdzZWNyZXQnKSk7XG5hcHAudXNlKHNlc3Npb24oe1xuICAgIG5hbWU6ICdKU1RPS0VOJyxcbiAgICBzZWNyZXQ6ICdyZWNvbW1hbmRhc2Rhc2Rhc2NzZnl3ZW5ma3V3ZWRuaXdlZnV3bmZpdycsIC8vIOW7uuiuruS9v+eUqCAxMjgg5Liq5a2X56ym55qE6ZqP5py65a2X56ym5LiyXG4gICAgY29va2llOiB7IG1heEFnZTogMTAwMCo2MCoxMCB9LFxuICAgIHJlc2F2ZTogZmFsc2UsXG4gICAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IHRydWVcbn0pKTtcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycpKSk7XG5hcHAuYWxsKCcqJywgZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XG4gICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIiwgXCJYLVJlcXVlc3RlZC1XaXRoXCIpO1xuICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCIsIFwiUFVULFBPU1QsR0VULERFTEVURSxPUFRJT05TXCIpO1xuICAgIG5leHQoKTtcbn0pO1xuXG5yb3V0ZXIoYXBwKTtcblxuYXBwLnVzZShmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdOb3QgRm91bmQnKTtcbiAgICBlcnIuc3RhdHVzID0gNDA0O1xuICAgIG5leHQoZXJyKTtcbn0pO1xuXG5hcHAudXNlKGZ1bmN0aW9uIChlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLmxvY2Fscy5tZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG4gICAgcmVzLmxvY2Fscy5lcnJvciA9IHJlcS5hcHAuZ2V0KCdlbnYnKSA9PT0gJ2RldmVsb3BtZW50JyA/IGVyciA6IHt9O1xuICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xuICAgIHJlcy5yZW5kZXIoJ2Vycm9yJyk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcHA7Il19