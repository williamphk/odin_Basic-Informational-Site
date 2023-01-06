var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        html = fs.readFileSync('./index.html');
        res.end(html)
    }
    else if (req.url === "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        html = fs.readFileSync('./about.html');
        res.end(html)
    }
    else if (req.url === "/contact-me") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        html = fs.readFileSync('./contact-me.html');
        res.end(html)
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        html = fs.readFileSync('./404.html');
        res.end(html)
    }
}).listen(8080);