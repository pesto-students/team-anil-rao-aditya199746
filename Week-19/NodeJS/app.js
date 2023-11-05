const fs = require('fs');
const readline = require('readline');
const greetings = require('./Greetings');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name? ', (name) => {
  const greeting = greetings.generateGreeting(name);
  fs.writeFile('output.txt', greeting, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Greeting saved to output.txt');
    }
    rl.close();
  });
});