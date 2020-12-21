const BD = require('../../oracle/configdb');
const { getWatchList } = require('../../oracle/queries');

const watchList = async (_, __, { user }) => {
    if (!user) throw new Error('you must be logged in');
    const userid = user.id;
    try {
        const data = await BD.Open(getWatchList, { userid });
        const watchList = data.rows.reduce((prev, current) => {
            prev.push({
                Title: current[1],
                Year: current[2],
                imdbID: current[0],
                Poster: current[3],
                watch: current[4],
                rate: current[5]
            });
            return prev;
        }, []);
        return watchList;
    } catch (error) {
        console.log(error);
    }
};
module.exports = watchList;
