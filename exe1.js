// index.js
const process = require("process")
const rdl = require("readline")

 let LoadingBar = async() =>{
    
    let begin = '[--------------------]'.split("");
    let i = 1;
    let tail = 10;
    
    let delay = (sec) => new Promise(res => setTimeout(res,sec));

    while(i<begin.length){
        rdl.cursorTo(process.stdout, 0, 0,()=>process.stdout.write(begin.join("")));
        
        await delay(100);
        begin[i++] = "*"
        if(i>tail){
            begin[i-tail] = "-";
        }
        if(i === begin.length-1){
            let leftTail = i-tail;
                while(leftTail < begin.length-1){
                    begin[leftTail++] = "-";
                    rdl.cursorTo(process.stdout, 0, 0,()=>process.stdout.write(begin.join("")));
                    await delay(100);
                }
        }
         //if(i === begin.length-1) i =1;
    }
    process.exit(0);
}

LoadingBar();