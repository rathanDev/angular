const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var dateTime = require('./MyFirstModule');

var fs = require('fs');

const server = http.createServer((req, res) => {

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.write("Date and Time : " + dateTime.myDateTime() + "\n");
    // res.write(req.url);
    // res.end();

    fs.readFile('/home/jana/myProjects/angular/server/test.txt', (err, data) => {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end("read file");
    });

})

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});
