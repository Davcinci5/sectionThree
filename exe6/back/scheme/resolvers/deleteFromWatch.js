const BD = require('../../oracle/configdb');
const { deleteFromWatchList } = require('../../oracle/queries');

const deleteFromWatchListfn = async (parent, { imdbid }, { user }) => {
    if (!user) throw new Error();
    try {
        const userid = user.id;
        await BD.Open(deleteFromWatchList, { userid, imdbid });
        return true;
    } catch (error) {
        throw new Error('Session');
    }
};
module.exports = deleteFromWatchListfn;
