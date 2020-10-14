const spawn = require('child_process').spawn;
const message = 'input number 20 ';
let child = spawn(process.execPath, ['exe2.js'], { stdio: 'pipe', stdout: 'pipe', stderr: 'pipe' });

child.stdout.on('data', function (data) {
    console.log('what I got',data.toString());
});
child.stdin.on('data', function (data) {
    console.log(data.toString());
});