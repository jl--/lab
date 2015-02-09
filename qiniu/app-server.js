
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var config = {
  server: {
    port: 6003,
    address: '127.0.0.1'
  }
};


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
  return res.status(200).send({
    name: 'jl--'
  });
});
app.post('/',function(req,res){
  return res.status(200).send( req.body || {
    name: 'jl'
  });
});


app.listen(config.server.port, config.server.address);
console.log(config.server.address + ':' + config.server.port);
