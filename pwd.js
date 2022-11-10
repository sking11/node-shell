const { cwd } = require("node:process");

// The stdin 'data' event fires after a user types in a line

module.exports = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === "pwd") {
    console.log(`${cwd()}`);
  }
});

//module.exports = () => {
//   console.log("The number is: " + number);
// };
