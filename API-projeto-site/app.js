process.env.NODE_ENV = 'production'; // altere para 'production' ou 'dev'

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//importanto as funcionalidades do usuario (armazena valores)
var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios'); 
var leiturasRouter = require('./routes/leituras');

var app = express();

// use essas funcionalidades
app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/leituras', leiturasRouter);

module.exports = app;
