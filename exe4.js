/* eslint-disable prefer-const */
/* eslint-disable camelcase */

const fs = require('fs');
const ip2loc = require('ip2location-nodejs');

class Ip2 {
    constructor (obj) {
        this.path = process.env.FILE;
        this.ip2loc = obj;
    }

    init () {
        this.ip2loc.IP2Location_init(this.path || 'IP2LOCATION-LITE-DB1.BIN');
    }

    close () {
        this.ip2loc.IP2Location_close();
    }

    getInformationIP (ip) {
        return this.ip2loc.IP2Location_get_all(ip);
    }
}

function getDataFromLog (path) {
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

function getArre_User_Ip (file, regex) {
    let match = regex.exec(file);
    let arreUser_Ip = [];
    do {
        arreUser_Ip.push({ user: match[1], ip: match[2] });
    } while ((match = regex.exec(file)) !== null);
    return arreUser_Ip;
}

function frequencyCountry (arreNameIP) {
    const ip2locObj = new Ip2(ip2loc);
    const reducer = (obj, { ip }) => {
        let infoIp = ip2locObj.getInformationIP(ip);
        let country = infoIp.country_long;
        if (obj[country] === undefined) obj[country] = 1;
        else obj[country] += 1;
        return obj;
    };
    ip2locObj.init();
    const countries = arreNameIP.reduce(reducer, {});
    ip2locObj.close();
    return countries;
}

function createTable (data) {
    console.table(data);
}
//command FILE='IP2LOCATION-LITE-DB1.BIN' LOG='auth.log.1' node exe4.js
async function init () {
    let regexIP = /Invalid user (\w+) from (\b((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.)){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\b)/mg;
    let dataFile = await getDataFromLog(process.env.LOG);
    let arreUserIp = getArre_User_Ip(dataFile, regexIP);
    let frequency = frequencyCountry(arreUserIp);
    createTable(frequency);
}

// init();
module.exports = { getDataFromLog, getArre_User_Ip, frequencyCountry };
