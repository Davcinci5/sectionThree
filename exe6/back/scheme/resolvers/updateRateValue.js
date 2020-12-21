const BD = require('../../oracle/configdb');
const { updateRate } = require('../../oracle/queries');

const updateRateValue = async (parent, { rate, imdbid }, { user }) => {
    if (!user) throw new Error();
    try {
        const userid = user.id;
        await BD.Open(updateRate, { rate, userid, imdbid });
        return true;
    } catch (error) {
        throw new Error('Session');
    }
};
module.exports = updateRateValue;
