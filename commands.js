const fs = require("fs");

module.exports = {
  pwd: function () {
    // process.stdin.on("data", function (data) {
    let pwd = process.argv.toString(); // Devuelve la ruta de nuestros directorios
    process.stdout.write(pwd); // Esto devuelve lo que se pide (pwd)
    process.stdout.write("\nprompt > "); // Crea de nuevo el prompt > para que el usuario pueda seguir interactuando
  },
  date: function () {
    // process.stdin.on("data", function (data) {
    let date = new Date().toString();
    process.stdout.write(date);
    process.stdout.write("\nprompt > ");
  },
  ls: function () {
    let ls = fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },
  echo: function (strings) {
    let argumentos = strings + "\n";
    process.stdout.write(argumentos.split(",").join(" "));
    process.stdout.write("prompt > ");
  },
  cat: function (filename) {
    filename.forEach((file) => {
      fs.readFile(file.toString(), (err, data) => {
        if (err) throw err;
        process.stdout.write(data + "\n");
        process.stdout.write("prompt > ");
      });
    });
  },
  head: function (filename) {
    filename.forEach((file) => {
      fs.readFile(file.toString(), (err, data) => {
        if (err) throw err;
        const lines = data.toString().split("\n").slice(0, 5);
        const firstFiveLines = lines.join("\n");
        process.stdout.write(firstFiveLines + "\n");
        process.stdout.write("prompt > ");
      });
    });
  },
  tail: function (filename) {
    filename.forEach((file) => {
      fs.readFile(file.toString(), (err, data) => {
        if (err) throw err;
        const lines = data.toString().split("\n").slice(-5);
        const firstFiveLines = lines.join("\n");
        process.stdout.write(firstFiveLines + "\n");
        process.stdout.write("prompt > ");
      });
    });
  },
};
