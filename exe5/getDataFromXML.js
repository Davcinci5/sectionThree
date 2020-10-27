const fs = require('fs');

function getDataFromXML (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            try {
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    });
}

module.exports = getDataFromXML;
