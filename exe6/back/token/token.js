const jwt = require('jsonwebtoken');

const options = { expiresIn: '30m' };
const secret = 'forthemoment';

const resolveToken = async (token) => {
    if (token) {
        try {
        // verify makes sure that the token hasn't expired and has been issued by us
            const { user } = jwt.verify(token, secret, options);
            return user;
        // await User.findById(user);
        } catch (err) {
        // Throw new Error(err);
            return null;
        }
    }
};

const createToken = (user) => {
    // Create a token
    const payload = { user: user };
    const token = jwt.sign(payload, secret, options);
    return token;
};

const clearCookie = ({ res }) => {
    res.clearCookie('token', { httpOnly: true });
};

const setToken = (context, token) => {
    context.res.cookie('token', token, { expires: new Date(Date.now() + 8 * 3600000) });
};

module.exports = { createToken, resolveToken, clearCookie, setToken };
