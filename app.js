var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var csrf = require('csurf')
var bodyParser = require('body-parser')
require('./database/database')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var authRouter = require('./routes/auth')

var app = express();

// setup route middlewares
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/public');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/auth', authRouter)
app.get('/*/',csrfProtection, function(req, res, next) {
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.render('index.html', {token: req.csrfToken()})
})

module.exports = app;
