const { clearCookie } = require('../../token/token');
const currentUser = async (parent, args, context) => {
    if (context.user) return context.user;
    clearCookie(context);
};

module.exports = currentUser;
