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

// async function test () {
//     // let pass = '12345';
//     // let name = "Diego";
//     // //let sql = 'insert into name values (:id,:name)';
//     // let sql2 = 'insert into user_movie (user_name,user_password) values(:name,:pass)';
//     // try {
//     //     let result = await Open(sql2, { name, pass });
//     //     console.log(result);
//     // } catch (error) {
//     //     console.log(error);
//     // }
//     let result = await Open("select * from name where id_person = 1", [], false);
//     let [id, name] = result.rows[0];
//     console.log({ id, name });
// }
// test();
exports.Open = Open;
