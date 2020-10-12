const spawn = require('child_process').spawn;

test('verify child process', async(done)=>{
    let bar = "[-------------------------------------------------]".split("");
    let bar2  = ['\x1B[2;1H','[\x1B[2;2H-\x1B[2;3H-\x1B[2;4H-\x1B[2;5H-\x1B[2;6H-\x1B[2;7H-\x1B[2;8H-\x1B[2;9H-\x1B[2;10H-\x1B[2;11H-\x1B[2;12H-\x1B[2;13H-\x1B[2;14H-\x1B[2;15H-\x1B[2;16H-\x1B[2;17H-\x1B[2;18H-\x1B[2;19H-\x1B[2;20H-\x1B[2;21H-\x1B[2;22H-\x1B[2;23H-\x1B[2;24H-\x1B[2;25H-\x1B[2;26H-\x1B[2;27H-\x1B[2;28H-\x1B[2;29H-\x1B[2;30H-\x1B[2;31H-\x1B[2;32H-\x1B[2;33H-\x1B[2;34H-\x1B[2;35H-\x1B[2;36H-\x1B[2;37H-\x1B[2;38H-\x1B[2;39H-\x1B[2;40H-\x1B[2;41H-\x1B[2;42H-\x1B[2;43H-\x1B[2;44H-\x1B[2;45H-\x1B[2;46H-\x1B[2;47H-\x1B[2;48H-\x1B[2;49H-\x1B[2;50H-\x1B[2;51H]'];
    let counter = 0;

    let child =  await spawn(process.execPath,['exe1.js'],{ stdio: 'pipe',stdout:'pipe',stderr:'pipe' });
    
    child.stdout.on('data',function(data){
        expect(data.toString().trim()).toBe(bar[counter++]);
    }); 

    jest.setTimeout(14000);
    done();

});

