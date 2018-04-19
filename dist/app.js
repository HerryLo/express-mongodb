'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var movie = require('./routes/movie');
var artList = require('./routes/article/artList');
var users = require('./routes/user/users');
var fetchImg = require('./routes/other/fetchImg');
var register = require('./routes/user/register');
var login = require('./routes/user/login');

var app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser('secret'));
app.use(session({
    name: 'JSTOKEN',
    secret: 'recommandasdasdascsfywenfkuwedniwefuwnfiw', // 建议使用 128 个字符的随机字符串
    cookie: { maxAge: 1000 * 60 * 10 },
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

/* get cookies */

// app.use('/', index);
// app.use('/users', users);
app.use('/api/movie', movie);
app.use('/api/artlist', artList);
app.use('/api/fetchImg', fetchImg);
app.use('/api/register', register);
app.use('/api/login', login);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJwYXRoIiwiZmF2aWNvbiIsImxvZ2dlciIsImNvb2tpZVBhcnNlciIsImJvZHlQYXJzZXIiLCJzZXNzaW9uIiwiaW5kZXgiLCJtb3ZpZSIsImFydExpc3QiLCJ1c2VycyIsImZldGNoSW1nIiwicmVnaXN0ZXIiLCJsb2dpbiIsImFwcCIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJuYW1lIiwic2VjcmV0IiwiY29va2llIiwibWF4QWdlIiwicmVzYXZlIiwic2F2ZVVuaW5pdGlhbGl6ZWQiLCJzdGF0aWMiLCJqb2luIiwiX19kaXJuYW1lIiwiYWxsIiwicmVxIiwicmVzIiwibmV4dCIsImhlYWRlciIsImVyciIsIkVycm9yIiwic3RhdHVzIiwibG9jYWxzIiwibWVzc2FnZSIsImVycm9yIiwiZ2V0IiwicmVuZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVQyxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQUlDLE9BQU9ELFFBQVEsTUFBUixDQUFYO0FBQ0EsSUFBSUUsVUFBVUYsUUFBUSxlQUFSLENBQWQ7QUFDQSxJQUFJRyxTQUFTSCxRQUFRLFFBQVIsQ0FBYjtBQUNBLElBQUlJLGVBQWVKLFFBQVEsZUFBUixDQUFuQjtBQUNBLElBQUlLLGFBQWFMLFFBQVEsYUFBUixDQUFqQjtBQUNBLElBQUlNLFVBQVVOLFFBQVEsaUJBQVIsQ0FBZDs7QUFFQSxJQUFJTyxRQUFRUCxRQUFRLGdCQUFSLENBQVo7QUFDQSxJQUFJUSxRQUFRUixRQUFRLGdCQUFSLENBQVo7QUFDQSxJQUFJUyxVQUFVVCxRQUFRLDBCQUFSLENBQWQ7QUFDQSxJQUFJVSxRQUFRVixRQUFRLHFCQUFSLENBQVo7QUFDQSxJQUFJVyxXQUFXWCxRQUFRLHlCQUFSLENBQWY7QUFDQSxJQUFJWSxXQUFXWixRQUFRLHdCQUFSLENBQWY7QUFDQSxJQUFJYSxRQUFRYixRQUFRLHFCQUFSLENBQVo7O0FBRUEsSUFBSWMsTUFBTWYsU0FBVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBZSxJQUFJQyxHQUFKLENBQVFaLE9BQU8sS0FBUCxDQUFSO0FBQ0FXLElBQUlDLEdBQUosQ0FBUVYsV0FBV1csSUFBWCxFQUFSO0FBQ0FGLElBQUlDLEdBQUosQ0FBUVYsV0FBV1ksVUFBWCxDQUFzQjtBQUMxQkMsY0FBVTtBQURnQixDQUF0QixDQUFSO0FBR0FKLElBQUlDLEdBQUosQ0FBUVgsYUFBYSxRQUFiLENBQVI7QUFDQVUsSUFBSUMsR0FBSixDQUFRVCxRQUFRO0FBQ1phLFVBQU0sU0FETTtBQUVaQyxZQUFRLDJDQUZJLEVBRXlDO0FBQ3JEQyxZQUFRLEVBQUVDLFFBQVEsT0FBSyxFQUFMLEdBQVEsRUFBbEIsRUFISTtBQUlaQyxZQUFRLEtBSkk7QUFLWkMsdUJBQW1CO0FBTFAsQ0FBUixDQUFSO0FBT0FWLElBQUlDLEdBQUosQ0FBUWhCLFFBQVEwQixNQUFSLENBQWV4QixLQUFLeUIsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFFBQXJCLENBQWYsQ0FBUjs7QUFFQWIsSUFBSWMsR0FBSixDQUFRLEdBQVIsRUFBYSxVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0JDLElBQXBCLEVBQTBCO0FBQ25DRCxRQUFJRSxNQUFKLENBQVcsNkJBQVgsRUFBMEMsR0FBMUM7QUFDQUYsUUFBSUUsTUFBSixDQUFXLDhCQUFYLEVBQTJDLGtCQUEzQztBQUNBRixRQUFJRSxNQUFKLENBQVcsOEJBQVgsRUFBMkMsNkJBQTNDO0FBQ0FEO0FBQ0gsQ0FMRDs7QUFPQTs7QUFFQTtBQUNBO0FBQ0FqQixJQUFJQyxHQUFKLENBQVEsWUFBUixFQUFzQlAsS0FBdEI7QUFDQU0sSUFBSUMsR0FBSixDQUFRLGNBQVIsRUFBd0JOLE9BQXhCO0FBQ0FLLElBQUlDLEdBQUosQ0FBUSxlQUFSLEVBQXlCSixRQUF6QjtBQUNBRyxJQUFJQyxHQUFKLENBQVEsZUFBUixFQUF5QkgsUUFBekI7QUFDQUUsSUFBSUMsR0FBSixDQUFRLFlBQVIsRUFBc0JGLEtBQXRCOztBQUVBQyxJQUFJQyxHQUFKLENBQVEsVUFBVWMsR0FBVixFQUFlQyxHQUFmLEVBQW9CQyxJQUFwQixFQUEwQjtBQUM5QixRQUFJRSxNQUFNLElBQUlDLEtBQUosQ0FBVSxXQUFWLENBQVY7QUFDQUQsUUFBSUUsTUFBSixHQUFhLEdBQWI7QUFDQUosU0FBS0UsR0FBTDtBQUNILENBSkQ7O0FBTUFuQixJQUFJQyxHQUFKLENBQVEsVUFBVWtCLEdBQVYsRUFBZUosR0FBZixFQUFvQkMsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQ25DRCxRQUFJTSxNQUFKLENBQVdDLE9BQVgsR0FBcUJKLElBQUlJLE9BQXpCO0FBQ0FQLFFBQUlNLE1BQUosQ0FBV0UsS0FBWCxHQUFtQlQsSUFBSWYsR0FBSixDQUFReUIsR0FBUixDQUFZLEtBQVosTUFBdUIsYUFBdkIsR0FBdUNOLEdBQXZDLEdBQTZDLEVBQWhFO0FBQ0FILFFBQUlLLE1BQUosQ0FBV0YsSUFBSUUsTUFBSixJQUFjLEdBQXpCO0FBQ0FMLFFBQUlVLE1BQUosQ0FBVyxPQUFYO0FBQ0gsQ0FMRDs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQjVCLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgZmF2aWNvbiA9IHJlcXVpcmUoJ3NlcnZlLWZhdmljb24nKTtcbnZhciBsb2dnZXIgPSByZXF1aXJlKCdtb3JnYW4nKTtcbnZhciBjb29raWVQYXJzZXIgPSByZXF1aXJlKCdjb29raWUtcGFyc2VyJyk7XG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG52YXIgc2Vzc2lvbiA9IHJlcXVpcmUoJ2V4cHJlc3Mtc2Vzc2lvbicpO1xuXG52YXIgaW5kZXggPSByZXF1aXJlKCcuL3JvdXRlcy9pbmRleCcpO1xudmFyIG1vdmllID0gcmVxdWlyZSgnLi9yb3V0ZXMvbW92aWUnKTtcbnZhciBhcnRMaXN0ID0gcmVxdWlyZSgnLi9yb3V0ZXMvYXJ0aWNsZS9hcnRMaXN0Jyk7XG52YXIgdXNlcnMgPSByZXF1aXJlKCcuL3JvdXRlcy91c2VyL3VzZXJzJyk7XG52YXIgZmV0Y2hJbWcgPSByZXF1aXJlKCcuL3JvdXRlcy9vdGhlci9mZXRjaEltZycpO1xudmFyIHJlZ2lzdGVyID0gcmVxdWlyZSgnLi9yb3V0ZXMvdXNlci9yZWdpc3RlcicpO1xudmFyIGxvZ2luID0gcmVxdWlyZSgnLi9yb3V0ZXMvdXNlci9sb2dpbicpO1xuXG52YXIgYXBwID0gZXhwcmVzcygpO1xuXG4vLyBhcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICd2aWV3cycpKTtcbi8vIGFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2phZGUnKTtcbi8vIHVuY29tbWVudCBhZnRlciBwbGFjaW5nIHlvdXIgZmF2aWNvbiBpbiAvcHVibGljXG4vLyBhcHAudXNlKGZhdmljb24ocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycsICdmYXZpY29uLmljbycpKSk7XG5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgZXh0ZW5kZWQ6IGZhbHNlXG59KSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcignc2VjcmV0JykpO1xuYXBwLnVzZShzZXNzaW9uKHtcbiAgICBuYW1lOiAnSlNUT0tFTicsXG4gICAgc2VjcmV0OiAncmVjb21tYW5kYXNkYXNkYXNjc2Z5d2VuZmt1d2Vkbml3ZWZ1d25maXcnLCAvLyDlu7rorq7kvb/nlKggMTI4IOS4quWtl+espueahOmaj+acuuWtl+espuS4slxuICAgIGNvb2tpZTogeyBtYXhBZ2U6IDEwMDAqNjAqMTAgfSxcbiAgICByZXNhdmU6IGZhbHNlLFxuICAgIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlXG59KSk7XG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSkpO1xuXG5hcHAuYWxsKCcqJywgZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XG4gICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIiwgXCJYLVJlcXVlc3RlZC1XaXRoXCIpO1xuICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCIsIFwiUFVULFBPU1QsR0VULERFTEVURSxPUFRJT05TXCIpO1xuICAgIG5leHQoKTtcbn0pO1xuXG4vKiBnZXQgY29va2llcyAqL1xuXG4vLyBhcHAudXNlKCcvJywgaW5kZXgpO1xuLy8gYXBwLnVzZSgnL3VzZXJzJywgdXNlcnMpO1xuYXBwLnVzZSgnL2FwaS9tb3ZpZScsIG1vdmllKTtcbmFwcC51c2UoJy9hcGkvYXJ0bGlzdCcsIGFydExpc3QpO1xuYXBwLnVzZSgnL2FwaS9mZXRjaEltZycsIGZldGNoSW1nKTtcbmFwcC51c2UoJy9hcGkvcmVnaXN0ZXInLCByZWdpc3Rlcik7XG5hcHAudXNlKCcvYXBpL2xvZ2luJywgbG9naW4pO1xuXG5hcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ05vdCBGb3VuZCcpO1xuICAgIGVyci5zdGF0dXMgPSA0MDQ7XG4gICAgbmV4dChlcnIpO1xufSk7XG5cbmFwcC51c2UoZnVuY3Rpb24gKGVyciwgcmVxLCByZXMsIG5leHQpIHtcbiAgICByZXMubG9jYWxzLm1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcbiAgICByZXMubG9jYWxzLmVycm9yID0gcmVxLmFwcC5nZXQoJ2VudicpID09PSAnZGV2ZWxvcG1lbnQnID8gZXJyIDoge307XG4gICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gICAgcmVzLnJlbmRlcignZXJyb3InKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDsiXX0=