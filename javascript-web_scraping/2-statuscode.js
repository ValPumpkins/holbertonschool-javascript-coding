#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (err, response) => {
  if (err) {
    console.error(err);
  } else {
    // Print the status code
    console.log(`code: ${response.statusCode}`);
  }
});
