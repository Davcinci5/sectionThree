const BD = require('../../../oracle/configdb');
const { selectUser, createUser } = require('../../../oracle/queries');
const { encryptPassword } = require('../../../password/bcrypt');
const { createToken, setToken } = require('../../../token/token');

const createUserfn = async (parent, { name, pass }, context) => {
    try {
        pass = encryptPassword(pass);
        await BD.Open(createUser, { name, pass });
        const getPreviousUser = await BD.Open(selectUser, { name });
        const user = {
            id: getPreviousUser.rows[0][0],
            name: getPreviousUser.rows[0][1]
        };
        const token = createToken(user);
        setToken(context, token);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};
module.exports = createUserfn;
