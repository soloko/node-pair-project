//output a prompt


// const pwdCmd = process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim();
  const pwdCmd = function (cmd) {
    if (cmd === "pwd") {
    process.stdout.write(process.cwd());
  }
}

//     process.stdout.write('\nprompt > ');
// });

module.exports = pwdCmd
