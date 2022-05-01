const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

var app = http.createServer(function(request,response){
  const _url = request.url;
 
  const _pathname = url.parse(_url, true).pathname;
  if(_pathname==='/'){
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end(fs.readFileSync(__dirname+'/home.html'));
  }
  else if(_pathname==='/info'){
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end(fs.readFileSync(__dirname+'/info.html'));
    
  }
  else{
    response.writeHead(404);
    response.end("NOT FOUND");
  }
});
app.listen(3000);