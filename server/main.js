const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./routes/index');

mongoose.connect('mongodb://localhost:27017/test');
 
//conncet to mongodb server
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log('connected mongodb server!');
});

 
const port = 8080;
 
//bodyParser setting
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api', api);
 
app.listen(port, () => {
  console.log('Express is listening on port', port);
});