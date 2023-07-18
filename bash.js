// Un prompt como output
process.stdout.write("prompt > ");

const commands = require("./commands");

process.stdin.on("data", function (data) {
  let cmd = data.toString().trim();
  let [command, ...argumento] = cmd.split(" "); // Divide lo que ingresa en comandos y en argumentos

  if (commands[command]) {
    commands[command](argumento);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }

  // Avanzá por tu cuenta con el resto del código.
});
