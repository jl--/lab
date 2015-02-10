
var configs = require('./configs/config');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var utils = require('./utils');


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, If-Modified-Since');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.get('/',function(req,res){
  var data = {
    name: 'jl--'
  };
  return res.status(200).send(data);
});
app.post('/',function(req,res){
  var data = req.body || {};
  data.guid = utils.guid.generate();
  return res.status(200).send(data);
});


app.listen(configs.server.port, configs.server.address);
console.log('//////////// lab.jlxycz  qiniu //////////');
console.log(configs.server.address + ':' + configs.server.port);
