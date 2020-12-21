const BD = require('../../oracle/configdb');
const { movieExists, addMovie, watchListExist, addWatchList } = require('../../oracle/queries');

const addMoviefn = async (parent, { imdbid, title, year, poster }, { user }) => {
    if (!user) throw new Error('Session');
    try {
        let exists = await BD.Open(movieExists, { imdbid });
        if (exists.rows.length === 0) {
            await BD.Open(addMovie, { imdbid, title, year, poster });
        }
        const userid = user.id;
        exists = await BD.Open(watchListExist, { userid, imdbid });
        if (exists.rows.length === 0) {
            await BD.Open(addWatchList, { userid, imdbid });
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw new Error('Session');
    }
};
module.exports = addMoviefn;
