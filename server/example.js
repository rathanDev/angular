const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var dateTime = require('./MyFirstModule');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write("Date and Time : " + dateTime.myDateTime());
    res.end();
})

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});