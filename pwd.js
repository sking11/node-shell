// The stdin 'data' event fires after a user types in a line
const { cwd } = require("node:process");

require("./bash.js");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === "pwd") {
    done(`${cwd()}`);
  }
});