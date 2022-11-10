//Output a prompt

process.stdout.write('prompt > ');
const { cwd } = require('node:process');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if(cmd === 'pwd') {
    console.log(`${cwd()}`);
  }
});
process.stdout.write('prompt > ');