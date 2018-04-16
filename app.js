var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var movie = require('./routes/movie');
var artList = require('./routes/article/artList');
var users = require('./routes/user/users');
var fetchImg = require('./routes/other/fetchImg');
var register = require('./routes/user/register');
var login = require('./routes/user/login');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser('secret'));
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