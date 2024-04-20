// create a web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// create server
http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    var realPath = path.join(__dirname, pathname);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function(exists) {
        if (!exists) {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.write('This request URL ' + pathname + ' was not found on this server.');
            res.end();
        } else {
            fs.readFile(realPath, 'binary', function(err, file) {
                if (err) {
                    res.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    res.end(err);
                } else {
                    var contentType = {
                        'Content-Type': 'text/html'
                    };
                    res.writeHead(200, contentType);
                    res.write(file, 'binary');
                    res.end();
                }
            });
        }
    });
}).listen(3000);

console.log('Server running');