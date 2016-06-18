var express = require('express');
var http    = require('http');
var yargs   = require('yargs');
var path    = require('path');

var app = express();
var server = http.Server(app);

app.use(express.static('.'));
app.use(express.static('./bower_components/'));

app.use(function(req, res, next) {
  if (req.path === '/') {
    res.sendFile(path.join(__dirname, './demo.html'));
  } else {
    next();
  }
});

var port = yargs.argv['port'] || 8080;

server.listen(port, function() {
  console.log('Demo running on port ' + port);
});