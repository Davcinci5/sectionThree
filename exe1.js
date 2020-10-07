const {stdout} = require("process");
const {cursorTo} = require("readline");

const loadingBar = (counter) =>{
    let size =50,
    x_position = 1,
    y_position = 1,
    tail = 10,
    dash = "-",
    equal = "=",
    speed_up = 10;
    stdout.write("\x1B[?25l");
    let arreFinal = [];

    let writeCharacter = (x,char) => {
        arreFinal[x] = char;
            cursorTo(stdout,x,y_position);
            stdout.write(char);
    }

    let delay = (sec) => new Promise(res => setTimeout(res,sec));
    
    writeCharacter(0,"[")
    for (let i = 1; i < size; i++) {
        writeCharacter(i,dash)
    }
    writeCharacter(size,"]")
    

    let loading =  async(cycles) =>{
        let count = 0; 
        while(count<cycles){
            writeCharacter(x_position++,equal)
            if(x_position > tail){
                writeCharacter(x_position-tail,dash)
            }

            await delay(speed_up);

            if(x_position === size){
                let leftTail = x_position-tail;
                while(leftTail < size){
                    writeCharacter(leftTail++,dash)
                    await delay(speed_up*2);
                }
                x_position = 1;
            }
            count++
         }
         stdout.write("\x1B[?25h");
          cursorTo(stdout,0,10);
         return arreFinal.join("");
        
    }
    return loading(counter);
    
};

module.exports = loadingBar;
    


