var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session"); /* instalación y requerimiento de session */

var mainRouter = require('./routes/main');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var searchResultsRouter = require('./routes/searchResults');

const db = require("./database/models");
const Usuario = db.User; /* alias del modelo */

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static((__dirname, 'public')));

/* configuración session */
app.use(session({
  secret: "proyectoProg2", /* texto único que identifica al sitio */
  resave: false,
  saveUninitialized: true
}));

/* pasar datos de session a locals para dejarlos disponibles en todas las vistas (se debe hacer antes de declarar las rutas) */
app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  return next();
});

app.use(function (req, res, next) {
  /* chequear que no tengamos un usuario en session y sí tengamos cookie */
  if(req.session.user == undefined && req.cookies.userId !== undefined){
    /* buscar al usuario de la base de datos */
    Usuario.findByPk(req.cookies.userId)
      .then(function (user) {
        /* pasar al usuario a session y luego a locals */
        req.session.user = user;
        res.locals.user = user;
        return next();
      })
      .catch(function (error) {
        console.log(error)
      })
  } else { 
      return next();
  }
});

/* rutas del sitio */
app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/results', searchResultsRouter);

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
