const { stdout } = require('process');
const { cursorTo } = require('readline');

const writeCharacter = (x, char) => {
    cursorTo(stdout, x, 1);
    stdout.write(char);
};

const delay = (sec) => new Promise(resolve => setTimeout(resolve, sec));

const isPrime = (n) => {
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

const createBar = (primes) => {
    // eslint-disable-next-line
    let size = 50,
        counter = 0,
        x_position = 1,
        space = '-',
        advance = 0,
        reset = '\x1b[0m';

    const getPorcentage = (amount) => Math.floor((amount * 100) / primes);
    const howMuchToDisplay = (porcentage) => Math.floor((porcentage * size - 1) / 100);
    const chooseActualColor = actual => {
        let obj = {};
        if (actual < 30) {
            // red
            obj.bg = '\x1b[41m';
            obj.fg = '\x1b[31m';
        } else if (actual < 65) {
            // yellow
            obj.bg = '\x1b[43m';
            obj.fg = '\x1b[33m';
        } else {
            // red
            obj.bg = '\x1b[42m';
            obj.fg = '\x1b[32m';
        }
        return obj;
    }

    writeCharacter(0, '[');
    for (let i = 1; i <= size; i++) {
        writeCharacter(i, space);
    }
    writeCharacter(size + 1, ']');

    return async (foundElements) => {
        // eslint-disable-next-line prefer-const
        let increasePorcentage = getPorcentage(foundElements);
        // eslint-disable-next-line prefer-const
        let { bg, fg } = chooseActualColor(increasePorcentage);
        advance = howMuchToDisplay(increasePorcentage);

        for (;counter <= advance;) {
            process.stdout.write(bg);
            writeCharacter(x_position++, space);
            process.stdout.write(reset);
            await delay(90);
            counter++;
        }
        process.stdout.write(fg);
        writeCharacter(size + 2, `${increasePorcentage}%`);
        process.stdout.write(reset);
    };
};

let findFirstN = async (n) => {
    let results = [2];
    let progress = createBar(n);
    let counter = 1;
    let actual = 3;
    await progress(counter);
    while (counter < n) {
        if (isPrime(actual)) {
            results.push(actual);
            await progress(++counter);
        }
        actual++;
        await delay(10);
    }
    cursorTo(stdout, 0, 2);
    return results;
};

module.exports = findFirstN;
