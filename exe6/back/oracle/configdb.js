/* eslint-disable prefer-const */

const oracledb = require('oracledb');

let cred = {
    user: 'diego',
    password: 'oracle123',
    connectString: 'localhost/xe'
};

async function Open (sql, binds, autoCommit = true) {
    let cnn = await oracledb.getConnection(cred);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;
