var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

var db = require('./db');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  // genid: function(req) {
  //   return genuuid() // use UUIDs for session IDs
  // },
  secret: 'keyboard cat'
}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/', function (req, res) {
  res.render('index', { list: db.list, logined: res.session.logined })
})

app.post('/add', function (req, res) {
  // console.log(req.body.title)
  db.add({ title: req.body.title })
  res.redirect('/')
})

app.get('/del', function (req, res) {
  let index = req.query.index;
  db.del(index);
  res.redirect('/');
})

app.post("/login", function (req, res) {
  let username = req.body.loginname;
  let password = req.body.password;
  if (username === "hyq" && password === "123") {
    res.session.logined = true;
    res.end("success login")
  } else {
    res.send("error login")
  }
})

app.get('/logout', function (req, res) {
  res.session.logined = false;
  res.send();
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
