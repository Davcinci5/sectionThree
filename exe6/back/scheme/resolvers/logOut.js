const { clearCookie } = require('../../token/token');

const logOut = (parent, args, context) => {
    clearCookie(context);
    return true;
};

module.exports = logOut;
