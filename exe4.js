const fs = require('fs');
const ip2loc = require('ip2location-nodejs');

function getDataFromLog () {
    return new Promise((resolve, reject) => {
        fs.readFile('./auth.log.1', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            try {
                resolve(getArre_User_Ip(data));
            } catch (error) {
                reject(error);
            }
        });
    });
}

function getArre_User_Ip(file) {
    let user_ip_regex = /Invalid user (\w+) from (\b((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.)){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\b)/mg;
    let match = user_ip_regex.exec(file);
    let arreUser_Ip = [];
    do {
        arreUser_Ip.push({ user: match[1], ip: match[2] });
    } while ((match = user_ip_regex.exec(file)) !== null);
    return frequencyCountry(arreUser_Ip);
}

function frequencyCountry (arre) {
    const reducer = (obj, useripObj) => {
        let information = ip2loc.IP2Location_get_all(useripObj.ip);
        let country = information.country_long;
        if (obj[country] === undefined) obj[country] = 1;
        else obj[country] += 1;
        return obj;
    };
    ip2loc.IP2Location_init('IP2LOCATION-LITE-DB1.BIN');
    const countries = arre.reduce(reducer, {});
    ip2loc.IP2Location_close();
    return countries;
}

function createTable(data) {
    console.table(data);
}

async function init() {
    let data = await getDataFromLog();
    createTable(data);
    return data;
}
module.exports = init;
