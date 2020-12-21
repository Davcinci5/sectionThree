const BD = require('../../oracle/configdb');
const { updateWatched } = require('../../oracle/queries');

const updateWatchedValue = async (parent, { watched, imdbid }, { user }) => {
    if (!user) throw new Error();
    try {
        const userid = user.id;
        await BD.Open(updateWatched, { watched, userid, imdbid });
        return true;
    } catch (error) {
        throw new Error('Session');
    }
};
module.exports = updateWatchedValue;
