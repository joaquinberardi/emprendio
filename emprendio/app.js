var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

let db = require("./database/models");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const session = require ("express-session");
app.use(session({secret: "Mensaje secreto"}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//HOME
var homeRuta= require('./routes/home');
app.use('/home', homeRuta);
//EMPRENDEDORES
var emprendedoresRuta= require('./routes/emprendedores');
app.use('/emprendedores', emprendedoresRuta);
//PRODUCTOS
var productosRuta = require('./routes/productos');
app.use('/productos', productosRuta);
//USUARIO
var usuarioRuta = require('./routes/usuario');
app.use('/usuario', usuarioRuta);

// RECORDAR USUARIO
app.use(function(req, res, next){
  res.locals = {
    usuarioLogueado: req.session.usuarioLogueado
  }
  next();
})

// Hacer cosas que se hacen en todas las páginas
app.use(function(req, res, next){
  if (req.cookies.idUsuarioLogueado != undefined && req.session.usuarioLogueado == undefined){
    db.Usuario.findByPk (req.cookies.idUsuarioLogueado)
    .then(function(user){
      req.session.usuarioLogueado = user;
      res.redirect(req.originalUrl);
    })
  }
  else {
    return next();
  }
})

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
