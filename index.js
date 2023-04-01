const http = require('http');

const port = '0.0.0.0'
const host = 'localhost';

const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type','text/plain');
 res.end('Hello World\n');
})


server.listen(port, host, () => {
  console.log(`Server running at port ${port}`)
})