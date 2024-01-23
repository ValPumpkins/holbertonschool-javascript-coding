#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (!error) {
    const todoData = JSON.parse(body);
    const completedTasksByUser = {};

    todoData.forEach((todo) => {
    if (todo.completed) {
      if (completedTasksByUser[todo.userId]) {
        completedTasksByUser[todo.userId]++;
      } else {
        completedTasksByUser[todo.userId] = 1;
      }
    }
    })
    console.log(completedTasksByUser);
  } else {
    console.error(error);
  }
});
