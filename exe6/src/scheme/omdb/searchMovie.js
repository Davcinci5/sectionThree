const https = require('http');
const apikey = '20de9ba9';

const searchMovie = (searchString) => {
    return new Promise((resolve, reject) => {
        https.get(`http://www.omdbapi.com/?s=${searchString}&type=movie&apikey=${apikey}`, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                resolve(JSON.parse(data).Search);
            });
        }).on('error', (err) => {
            reject(err.message);
        });
    });
};
module.exports = searchMovie;
