const parseString = require('xml2js').parseString;

function convertXMltoObj (xml) {
    return new Promise((resolve, reject) => {
        parseString(xml, function (error, result) {
            if (error) reject(error);
            else resolve(result);
        });
    });
}

module.exports = convertXMltoObj;
