const spawn = require('child_process').spawn;
let child =  spawn(process.execPath,['exe1.js'],{ stdio: 'pipe',stdout:'pipe',stderr:'pipe' })
child.stdout.on('data',function(data){
    console.log(data.toString());
})

