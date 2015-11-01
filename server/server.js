var express = require('express');
var app     = express();
var server  = require('http').Server(app);
var site    = (typeof(process.env.NODE_ENV)!='undefined') ? 
  'dist' : 'site';

console.log("Server serving: "+site);

app.use(express.static(site));
app.use(express.static('server/public'));

app.use('/sub',function(request,response){
  response.send(request.host);
});

module.exports = server;
