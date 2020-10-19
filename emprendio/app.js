var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
<<<<<<< Updated upstream
//PRUEBA
//RUTAS EMPRENDIO
//HOME
=======
>>>>>>> Stashed changes

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
var homeRuta= require('./routes/home');
app.use('/home', homeRuta);
//EMPRENDEDORES
var emprendedoresRuta= require('./routes/emprendedores');
app.use('/emprendedores', emprendedoresRuta);
//PRODUCTOS
var productosRuta = require('./routes/productos');
app.use('/productos', productosRuta);

//HOME
var homeRuta= require('./routes/home');
app.use('/home', homeRuta);
//EMPRENDEDORES
var emprendedoresRuta= require('./routes/emprendedores');
app.use('/emprendedores', emprendedoresRuta);
//PRODUCTOS
var productosRuta = require('./routes/productos');
app.use('/productos', productosRuta);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
