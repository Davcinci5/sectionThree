const {stdout} = require("process");
const {cursorTo} = require("readline");

let writeCharacter = (x,char) => {
    cursorTo(stdout,x,1);
    stdout.write(char);
}

let delay = (sec) => new Promise(res => setTimeout(res,sec));

let isPrime = (n) => {
    if (n%2==0) return false; 
    for(let i=3;i<=Math.sqrt(n);i+=2) { 
        if(n%i==0) 
            return false; 
    } 
    return true; 
}


let createBar = (n) =>{
    let size =50,
    counter = 0,
    x_position = 1,
    space = " ",
    advance = 0,
    reset = "\x1b[0m";

    let getPorcentage = (amount) =>Math.floor((amount*100)/n);
    let howMuchToDisplay = (porcentage)=>Math.floor((porcentage*size-1)/100);


    writeCharacter(0,"[")
    for (let i = 1; i <= size; i++) {
        writeCharacter(i,space)
    }
    writeCharacter(size+1,"]");

    return async(foundElements) =>{ 
        let increasePorcentage = getPorcentage(foundElements),bg,fg;
         advance = howMuchToDisplay(increasePorcentage);
         if(increasePorcentage<30){
             //red
             bg = "\x1b[41m";
             fg = "\x1b[31m";
         }else if(increasePorcentage < 65){
             //yellow
             bg = "\x1b[43m";
             fg = "\x1b[33m";
         }else{
             //red
             bg = "\x1b[42m";
             fg = "\x1b[32m";
         }
         for(;counter<=advance;){
               process.stdout.write(bg); 
                writeCharacter(x_position++,space);
                process.stdout.write(reset);
                await delay(90); 
                counter++;
            }
            process.stdout.write(fg);
            writeCharacter(size+2,`${increasePorcentage}%`);
            process.stdout.write(reset);            
    }
}



let findFirstN = async(n) => {
    
    let results = [2]
    let progress = createBar(n);
    let counter = 1;
    let actual = 3;
await progress(counter);
    while(counter < n){
        if(isPrime(actual)){
            results.push(actual);
            await progress(++counter);
        }
        actual++;
        await delay(10);
    }
    cursorTo(stdout,0,2);
    return results;

}

//    process.stdout.write('how many prime numbers do you wanna find?');
//    process.stdin.on('data',async(data)=>{
//        let number =  parseInt(data.toString());
//        const arrayPrime =  await findFirstN(number);
//        console.log(arrayPrime);
//        process.exit();
//    })
 module.exports = findFirstN;