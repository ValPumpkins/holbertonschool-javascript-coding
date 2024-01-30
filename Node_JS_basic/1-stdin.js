console.log('Welcome to Holberton School, what is your name?');

const readline = require('readline');

const inputRead = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

inputRead.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  inputRead.close();
});

module.exports = inputRead;
