const spawn = require('child_process').spawn;

test('verify bar loading using child process, testing just one cycle', (done)=>{
     let bar = ['\x1B[1;1H',
               '[--------------------]','\x1B[1;1H',
               '[*-------------------]','\x1B[1;1H',
               '[**------------------]','\x1B[1;1H',
               '[***-----------------]','\x1B[1;1H',
               '[****----------------]','\x1B[1;1H',
               '[*****---------------]','\x1B[1;1H',
               '[******--------------]','\x1B[1;1H',
               '[*******-------------]','\x1B[1;1H',
               '[********------------]','\x1B[1;1H',
               '[*********-----------]','\x1B[1;1H',
               '[-*********----------]','\x1B[1;1H',
               '[--*********---------]','\x1B[1;1H',
               '[---*********--------]','\x1B[1;1H',
               '[----*********-------]','\x1B[1;1H',
               '[-----*********------]','\x1B[1;1H',
               '[------*********-----]','\x1B[1;1H',
               '[-------*********----]','\x1B[1;1H',
               '[--------*********---]','\x1B[1;1H',
               '[---------*********--]','\x1B[1;1H',
               '[----------*********-]','\x1B[1;1H',
               '[-----------*********]','\x1B[1;1H',
               '[------------********]','\x1B[1;1H',
               '[-------------*******]','\x1B[1;1H',
               '[--------------******]','\x1B[1;1H',
               '[---------------*****]','\x1B[1;1H',
               '[----------------****]','\x1B[1;1H',
               '[-----------------***]','\x1B[1;1H',
               '[------------------**]','\x1B[1;1H',
               '[-------------------*]','\x1B[1;1H',
               '[--------------------]','\x1B[1;1H',
               '[--------------------]'
                ];

    let counter = 0;

    jest.setTimeout(14000);
    let child =   spawn(process.execPath,['exe1.js'],{ stdio: 'pipe',stdout:'pipe',stderr:'pipe' });
    
    child.stdout.on('data',function(data){
        expect(data.toString()).toBe(bar[counter++]);
        if(counter === bar.length) done();
    });
});