import router from './routes/index'
import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'

import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'
import connectMongo from 'connect-mongo'
import constant from './utils/constant'

const app = express();
const MongoStore = connectMongo(session);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser('secret'));
app.use(session({
    name: 'JSTOKEN',
    secret: 'recommandasdasdascsfywenfkuwedniwefuwnfiw', // 建议使用 128 个字符的随机字符串
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        url: constant.dbUrl
    })
}));
app.use(express.static(path.join(__dirname, 'public')));
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

router(app);

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