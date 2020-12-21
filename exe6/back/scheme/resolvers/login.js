const BD = require('../../oracle/configdb');
const { selectUser } = require('../../oracle/queries');
const { comparePassword } = require('../../password/bcrypt');
const { createToken, setToken } = require('../../token/token');

const login = async (parent, { name, pass }, context) => {
    try {
        const user = await BD.Open(selectUser, { name });
        if (user.rows[0] === undefined) throw new Error('User');
        const savedPassword = user.rows[0][2];
        if (!comparePassword(pass, savedPassword)) throw new Error('Password');
        const loggedUser = {
            id: user.rows[0][0],
            name: user.rows[0][1]
        };
        const token = createToken(loggedUser);
        setToken(context, token);
        return loggedUser;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = login;
