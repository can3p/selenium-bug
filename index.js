var express = require('express');
var fs = require('fs');

function setup_server(html) {
  var app = express();

  app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', html.length);
    res.send(html);
  });

  app.get('/script', function(req, res){
    var ans = 'script_loaded()';
    setTimeout(function() {
      res.setHeader('Content-Type', 'text/javascript');
      res.setHeader('Content-Length', ans.length);
      res.send(ans);
    }, 5000);
  });

  app.get('/xhr', function(req, res){
    var ans = 'xhr_loaded';
    setTimeout(function() {
      res.setHeader('Content-Type', 'text/javascript');
      res.setHeader('Content-Length', ans.length);
      res.send(ans);
    }, 5000);
  });

  app.listen(3000);
  console.log('Listening on port 3000');
}

fs.readFile('template.html', function(err, html) {
  if (err) {
    console.log('unable to read template');
    process.exit(1);
  }

  setup_server(html);
});
