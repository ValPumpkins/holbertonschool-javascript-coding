const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  try {
    const studentsData = await countStudents('database.csv');

    response.set('Content-Type', 'text/plain');
    response.write('This is the list of our students\n');
    response.write(`Number of students: ${studentsData.total}\n`);
    response.write(`Number of students in CS: ${studentsData.cs.length}. List: ${studentsData.cs}\n`);
    response.write(`Number of students in SWE: ${studentsData.swe.length}. List: ${studentsData.swe}`);
  } catch (error) {
    response.status(500).send(`Cannot load the database: ${error.message}`);
  } finally {
    response.end();
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
