const fs = require("fs");
require("./bash.js");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === "ls") {
    fs.readdir("./", "utf8", (err, files) => {
      if (err) {
        throw err;
      } else {
        done(files.join("\n"));
      }
    });
  }
});
