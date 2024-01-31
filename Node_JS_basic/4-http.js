const http = require('http');

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello Holberton School!');
});

const port = 1245;

app.listen(port, () => {
  console.log(`Server is running : http://localhost:${port}/`);
});

module.exports = app;
