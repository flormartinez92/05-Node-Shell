// Un prompt como output
process.stdout.write("prompt > ");

const commands = require("./commands");

process.stdin.on("data", function (data) {
  let params = data.toString().trim();
  let [command, ...args] = params.split(" "); // Divide lo que ingresa en comandos y en argumentos

  if (commands[command]) {
    commands[command](args);
  } else {
    process.stdout.write("You typed: " + params);
    process.stdout.write("\nprompt > ");
  }
});
