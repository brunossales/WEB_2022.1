var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// var users = require('./routes/users');
var students = require('./routes/student/StudentRoute')
var professors = require('./routes/professor/ProfessorRoute')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(cookieParser());
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
 next();
});

//Exemplo de como achar o Express na navegação


//app.use('/api/v1/users', users);
app.use('/crud/students', students);
app.use('/crud/professors', professors)

module.exports = app;
