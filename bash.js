//Output a prompt
process.stdout.write("prompt > ");

//need these files
require("./pwd.js");
require("./ls.js");
require("./cat.js");
require("./date.js");

done = (output) => {
  console.log(output);
  process.stdout.write("prompt > ");
}