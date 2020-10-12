const {stdout} = require("process");
const {cursorTo} = require("readline");



const loadingBar = (counter) =>{
    let size =50, x_position = 1, y_position = 1, tail = 30, dash = "-", equal = "=", speed_up = 10, openSquare = "[", closeSquare ="]";

    let writeCharacter = (x,char) => {
           cursorTo(stdout,x,y_position);
            stdout.write(char);
    }

    let delay = (sec) => new Promise(res => setTimeout(res,sec));
    let loading =  async(cycles) =>{
        let count = 0; 
        writeCharacter(0,openSquare)
        for (let i = 1; i < size; i++) {
            writeCharacter(i,dash)
        }
        writeCharacter(size,closeSquare)
        while(count<cycles){
            writeCharacter(x_position++,equal);
            if(x_position > tail){
                writeCharacter(x_position-tail,dash)
            }
            await delay(speed_up);
            if(x_position === size){
                let leftTail = x_position-tail;
                while(leftTail < size){
                    writeCharacter(leftTail++,dash)
                    await delay(50);
                }
                x_position = 1;
            }
            count++
         }
        
    }
      loading(counter);
    
};

loadingBar(0)


