
const fs = require('fs');

function createTableFromCsv (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            try {
                resolve(CreateTable(data));
            } catch (error) {
                reject(error);
            }
        });
    });
}

function splitRowintoArray (row, arreElements = [], idxStart = 0) {
    if (idxStart > row.length) return arreElements;
    let indexEnd = row[idxStart] === '"' ? row.indexOf('"', idxStart + 1) + 1 : row.indexOf(',', idxStart);
    if (indexEnd === -1 || indexEnd > row.length) indexEnd = row.length;
    arreElements.push(row.substring(idxStart, indexEnd));
    return splitRowintoArray(row, arreElements, indexEnd + 1);
};

function createRow (data) {
    let arreCharacteres = splitRowintoArray(data);
    if (arreCharacteres.length > 11 || arreCharacteres.length < 1) {
        throw new Error('Invalid amount of rows');
    }
    let currentRow;
    let spaceXElement = 18;
    const character = '|';
    const reducer = (row, element, idx) => {
        if (element.length > spaceXElement) {
            currentRow = element.substring(0, spaceXElement) + character;
        } else {
            let spaceAvailable = Math.floor((spaceXElement - element.length) / 2);
            currentRow = ' '.repeat(spaceAvailable) + element + ' '.repeat(spaceAvailable) + character;
            if (currentRow.length !== spaceXElement + 1) {
                currentRow = ' ' + currentRow;
            }
        }
        if (idx === 0) currentRow = character + currentRow;
        row += currentRow;
        return row;
    };
    let newRow = arreCharacteres.reduce(reducer, '');
    return newRow;
}

function CreateTable (data) {
    let arreData = data.split('\n');
    let reducer = (row, element) => {
        let newRow = createRow(element);
        row += newRow + '\n';
        return row;
    };
    let table = arreData.reduce(reducer, '');
    return table;
}

//createTableFromCsv('./pokemon3.csv').then(console.log);
module.exports = createTableFromCsv;