var http = require('http'),
    fs = require('fs'),
    url = require('url');
    path = require('path');
var port = process.env.PORT || 9000;

    var acceptedTypes = {
      'css': 'text/css',
      'html': 'text/html',
      'ico': 'image/x-icon',
      'png': 'image/png',
      'jpg': 'image/jpeg'
    }

http.createServer(function (req, res){
  var point = req.url
  var reqPath = req.url === '/' ? '/index.html' : req.url;
  var ext = path.extname(point);

  var reqURL = url.parse(reqPath)
      urlExt = reqURL.pathname.substr(reqURL.pathname.lastIndexOf('.') + 1)



  res.setHeader('Content-Type', acceptedTypes[urlExt]);

  fs.readFile('.'+reqPath, function(err,file){
    if(err){
      res.end("404 File Not Found Yo");
    }else {
      res.end(file);
    }
  })
}).listen(port)
