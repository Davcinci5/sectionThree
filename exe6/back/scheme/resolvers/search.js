const searchMovie = require('../omdb/searchMovie');

const search = async (parent, { chain }, { user }) => {
    if (!user) throw new Error('Session');
    try {
        const array = await searchMovie(chain);
        return array;
    } catch (error) {
        throw new Error('Session');
    }
};
module.exports = search;
