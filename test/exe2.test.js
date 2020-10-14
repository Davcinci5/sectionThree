const findFirstN = require('../exe2');

//////////////////////////////////////////////
// NOTE: IN ORDER TO RUN THIS THREE TEST I USED THE NEXT COMMAND
// -----------> npm run test:two 20 50 75
/////////////////////////////////////////////

test('EXERCISE 2: find the first 20 prime numbers,', async (done) => {
    jest.setTimeout(14000);
    const number = parseInt(process.argv[4]);

    const array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
    const results = await findFirstN(number);
    expect(number).toBe(20);
    expect(results).toEqual(array);
    done();
});

test('EXERCISE 2: find the first 50 prime numbers,', async (done) => {
    jest.setTimeout(14000);
    const number = parseInt(process.argv[5]);

    const array50 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
        31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
        73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
        127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
        179, 181, 191, 193, 197, 199, 211, 223, 227, 229];
    const results = await findFirstN(number);
    expect(number).toBe(50);
    expect(results).toEqual(array50);
    done();
});

test('EXERCISE 2: find the first 75 prime numbers,', async (done) => {
    jest.setTimeout(14000);
    const number = parseInt(process.argv[6]);

    const array75 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,  37,
        41,  43,  47,  53,  59,  61,  67,  71,  73,  79,  83,  89,
        97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
        157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223,
        227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
        283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
        367, 373, 379];
    const results = await findFirstN(number);
    expect(number).toBe(75);
    expect(results).toEqual(array75);
    done();
});