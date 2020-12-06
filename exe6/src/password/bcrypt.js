/* eslint-disable camelcase */
const bcrypt = require('bcrypt-nodejs');

const comparePassword = (typed_password, query_password) => {
    return bcrypt.compareSync(typed_password, query_password);
};

const encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

module.exports = { comparePassword, encryptPassword };
