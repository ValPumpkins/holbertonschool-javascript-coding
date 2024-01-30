const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data
        .split('\n')
        .filter(Boolean)
        .slice(1)
        .map((line) => {
          const [firstname, lastname, age, field] = line.split(',');
          return {
            firstname,
            lastname,
            age,
            field,
          };
        });

      const csStudents = students
        .filter((student) => student.field === 'CS')
        .map((student) => student.firstname)
        .join(', ');

      const sweStudents = students
        .filter((student) => student.field === 'SWE')
        .map((student) => student.firstname)
        .join(', ');

      console.log(`Number of students: ${students.length}`);
      console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents}`);
      console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents}`);

      resolve({
        total: students.length,
        cs: csStudents,
        swe: sweStudents,
      });
    });
  });
}

module.exports = countStudents;
