/* eslint-disable camelcase */
/* eslint-disable prefer-const */
/* eslint-disable quote-props */
/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
/* eslint-disable no-undef */

///      this command was used to do the test --->   npm run test:four 'test.log.1' 'test2.log.1'

let { getDataFromLog, getArre_User_Ip, frequencyCountry } = require('../exe4');

test('testing getDataFromLoG, get message from a log', async () => {
    const message = 'Invalid user one from 1.2.127.255\n' +
                    'Invalid user two from 1.3.255.255\n' +
                    'Invalid user three from 1.4.127.255\n' +
                    'Invalid user four from 1.8.255.255\n' +
                    'Invalid user five from 1.10.9.255\n' +
                    'Invalid user six from 1.10.127.255\n' +
                    'Invalid user seven from 1.15.255.255';
    const log = process.argv[4];
    let data = await getDataFromLog(log);
    expect(data).toBe(message);
});

test('testing getDataFromLoG, get message from a log', async () => {
    const message = 'Invalid user oneJapan from 1.21.255.255\n' +
                    'Invalid user twoJapan from 1.32.231.255\n' +
                    'Invalid user threeJapan from 1.33.129.23\n' +
                    'Invalid user fourJapan from 1.33.213.198\n' +
                    'Invalid user fiveJapan from 1.33.213.225\n' +
                    'Invalid user sixJapan from 1.33.255.255\n' +
                    'Invalid user sevenJapan from 1.67.255.255';
    const log = process.argv[5];
    let data = await getDataFromLog(log);
    expect(data).toBe(message);
});

test('gettin the right number of elements in the array from element', async () => {
    const log = process.argv[4];
    let data = await getDataFromLog(log);
    let regexIP = /Invalid user (\w+) from (\b((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.)){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\b)/mg;
    let arreData = getArre_User_Ip(data, regexIP);

    const result =[{"ip": "1.2.127.255", "user": "one"},
        {"ip": "1.3.255.255", "user": "two"},
        {"ip": "1.4.127.255", "user": "three"},
        {"ip": "1.8.255.255", "user": "four"},
        {"ip": "1.10.9.255", "user": "five"},
        {"ip": "1.10.127.255", "user": "six"},
        {"ip": "1.15.255.255", "user": "seven" }
    ];
    expect(arreData).toEqual(result);
});

test('gettin the right number of elements in the array from element', async () => {
    const log = process.argv[5];
    let data = await getDataFromLog(log);
    let regexIP = /Invalid user (\w+) from (\b((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.)){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\b)/mg;
    let arreData = getArre_User_Ip(data, regexIP);

    const result =[{"ip": "1.21.255.255", "user": "oneJapan"},
        {"ip": "1.32.231.255", "user": "twoJapan"},
        {"ip": "1.33.129.23", "user": "threeJapan"},
        {"ip": "1.33.213.198", "user": "fourJapan"},
        {"ip": "1.33.213.225", "user": "fiveJapan"},
        {"ip": "1.33.255.255", "user": "sixJapan"},
        {"ip": "1.67.255.255", "user": "sevenJapan" }
    ];
    expect(arreData).toEqual(result);
});

test('testing frequency for chinase Ips', async () => {
    const log = process.argv[4];
    let data = await getDataFromLog(log);
    let regexIP = /Invalid user (\w+) from (\b((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.)){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\b)/mg;
    let arreData = getArre_User_Ip(data, regexIP);
    let frequency = frequencyCountry(arreData);
    expect(frequency).toEqual({'China': 7});
});

test('testing frequency for japanese Ips', async () => {
    const log = process.argv[5];
    let data = await getDataFromLog(log);
    let regexIP = /Invalid user (\w+) from (\b((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.)){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\b)/mg;
    let arreData = getArre_User_Ip(data, regexIP);
    let frequency = frequencyCountry(arreData);
    expect(frequency).toEqual({'Japan': 7});
});
