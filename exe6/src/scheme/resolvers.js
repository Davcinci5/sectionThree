const BD = require('../oracle/configdb');
const {
    deleteFromWatchList,
    addMovie,
    addWatchList,
    createUser,
    selectUser,
    updateWatched,
    updateRate,
    getWatchList
} = require('../oracle/queries');

const searchMovie = require('./omdb/searchMovie');

const {
    createToken,
    setToken,
    clearCookie
} = require('../token/token');

const { comparePassword, encryptPassword } = require('../password/bcrypt');

const resolvers = {
    Query: {
        currentUser: async (parent, args, context) => {
            if (context.user) return context.user;
            clearCookie(context);
        },
        getWatchList: async (parent, args, { user }) => {
            if (!user) throw new Error('you must be logged in');
            const userid = user.id;
            try {
                const data = await BD.Open(getWatchList, { userid });
                console.log(data.rows);
                return true;
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        search: async (parent, { chain }, { user }) => {
            // if (!user) throw new Error('you must be logged in');
            try {
                const array = await searchMovie(chain);
                return array;
            } catch (error) {
                console.log(error);
            }
        },
        login: async (parent, { name, pass }, context) => {
            try {
                const user = await BD.Open(selectUser, { name });
                if (user.rows[0] === undefined) throw new Error('User Not Found');
                const savedPassword = user.rows[0][2];
                if (!comparePassword(pass, savedPassword)) throw new Error('Incorrect Password');
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
        },
        createUser: async (parent, { name, pass }, context) => {
            try {
                pass = encryptPassword(pass);
                await BD.Open(createUser, { name, pass });
                // missing: verify uniqueness in name, 'function'
                const getPreviousUser = await BD.Open(selectUser, { name });
                const user = {
                    id: getPreviousUser.rows[0][0],
                    name: getPreviousUser.rows[0][1]
                };
                const token = createToken(user.id);
                setToken(context, token);
                return user;
            } catch (error) {
                console.log(error);
            }
        },
        addMovie: async (parent, { imdbid, title, year, poster }, { user }) => {
        // if (!user) throw new Error('you must be logged in');
            try {
                await BD.Open(addMovie, { imdbid, title, year, poster });
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        addWatchList: async (parent, { userid, imdbid }, { user }) => {
            if (!user) throw new Error('you must be logged in');
            try {
                await BD.Open(addWatchList, { userid, imdbid });
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        deleteFromWatchList: async (parent, { userid, imdbid }, { user }) => {
            if (!user) throw new Error('you must be logged in');
            try {
                await BD.Open(deleteFromWatchList, { userid, imdbid });
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        updateWatchedValue: async (parent, { watched, userid, imdbid }, { user }) => {
            if (!user) throw new Error('you must be logged in');
            try {
                watched = watched === 0 ? 1 : 0;
                await BD.Open(updateWatched, { watched, userid, imdbid });
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        updateRateValue: async (parent, { rate, userid, imdbid }, { user }) => {
            if (!user) throw new Error('you must be logged in');
            try {
                await BD.Open(updateRate, { rate, userid, imdbid });
                return true;
            } catch (error) {
                console.log(error);
            }
        }

    }
};
module.exports = resolvers;
