var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session"); /* instalación y requerimiento de session */
const db = require("./database/models");

var mainRouter = require('./routes/main');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');
var searchResultsRouter = require('./routes/searchResults');

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
}))

/* pasar datos de session a locals para dejarlos disponibles en todas las vistas (se debe hacer antes de declarar las rutas) */
app.use(function (req, res, next) {
  if (req.session.User != undefined) {
    res.locals.User = req.session.User; /* consultar si está bien poner User o tiene que ser otra cosa */
  }
  return next();
})

/* gestionar cookie */ /* preguntar por qué antes no se crea la cookie como en las diapositivas res.cookie(userId, valor?, { maxAge: 1000 * 60 * 5})*/
app.use(function (req, res, next) {
  /* se realiza si existe una cookie */
  if(req.cookies.userId != undefined && req.session.User == undefined) {
    let idCookie = req.cookies.userId;

    db.User.findByPk(idCookie)
    .then(function () {
      
    })
  }
})


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
