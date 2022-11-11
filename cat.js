const fs = require('fs')
require("./bash.js");

process.stdin.on("data", (data) => {
    const cmd = data.toString().trim(); //remove the newline
    if (cmd.substring(0,3) === "cat") {
        fs.readFile(cmd.substring(4), (err, inputD) => {
            if (err) throw err;
               done(inputD.toString());
         })
}
});