const http = require('http');
const fs = require('fs');
const url = require('url');

var dateTime = require('./MyFirstModule');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.write("Date and Time : " + dateTime.myDateTime() + "\n");
    // res.write(req.url);
    // res.end();

    var parsedUrl = url.parse(req.url, true);
    var fileName = '/home/jana/myProjects/angular/server/' + parsedUrl.pathname;

    fs.readFile(fileName, (err, data) => {

        if(err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end("404 not found");
        }

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end("read file");

    });

})

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});
