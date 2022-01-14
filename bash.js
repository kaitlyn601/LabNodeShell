process.stdout.write("prompt > ");

process.stdin.on(("data"), (data) =>
{
  const cmd = data.toString().trim();
pwd(cmd)
fsList(cmd)

});
const pwd = require("./pwd")
const fsList = require("./ls")
