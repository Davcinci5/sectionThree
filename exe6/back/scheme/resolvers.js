const currentUser = require('./resolvers/currentUser');
const getWatchList = require('./resolvers/getWatchList');
const logOut = require('./resolvers/logOut');
const search = require('./resolvers/search');
const login = require('./resolvers/login');
const createUser = require('./resolvers/createUser');
const addMoviefn = require('./resolvers/addMovie');
const deleteFromWatchList = require('./resolvers/deleteFromWatch');
const updateWatchedValue = require('./resolvers/updateWatchedValue');
const updateRateValue = require('./resolvers/updateRateValue');
const resolvers = {
    Query: {
        currentUser,
        getWatchList,
        logOut
    },
    Mutation: {
        search,
        login,
        createUser,
        addMovie: addMoviefn,
        deleteFromWatchList,
        updateWatchedValue,
        updateRateValue
    }
};
module.exports = resolvers;
