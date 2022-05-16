//usando mongoose
var mongoose = require('mongoose')

//conexão local
var mongoDbUrl = 'mongodb://127.0.0.1:27017/web'
mongoose.connect(mongoDbUrl, {useNewUrlParser:true})

//armazenando a conexão em uma variavel
var db = mongoose.connection

//listeners
db.on('connected',()=>{
    console.log('Mongoose Connected to '+mongoDbUrl);
   });
   db.on('disconnected',()=>{
    console.log('Mongoose Disconnected to '+mongoDbUrl);
   });
   db.on('error',(err)=>{
    console.log('Mongoose Error: '+err);
   });
   