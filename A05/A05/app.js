var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var users = require('./routes/users');

//mongoDb connection
require('./db/mongo.connection')

//router's
var studentsMongo = require('./routes/students/students.routes')
var professorMongo = require('./routes/professor/professors.routes.mongo')


var app = express();

//configuração
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())


app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
 next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

//Usar no servidor
app.use('/students/crud', studentsMongo);
app.use('/professors/', professorMongo)
module.exports = app;
