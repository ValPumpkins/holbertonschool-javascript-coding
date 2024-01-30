const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    countStudents(process.argv[2])
      .then(() => {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('This is the list of our students');
      })
      .catch((error) => {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end(`Cannot load the database: ${error.message}`);
      });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('404 Not Found');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running : http://localhost:${port}/`);
});

module.exports = app;
