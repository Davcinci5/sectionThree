const deleteFromWatchList = 'DELETE FROM watch_list WHERE id_user = :userid AND imdbid = :imdbid';

const addMovie = 'insert into movie values(:imdbid,:title,:year,:poster)';

const addWatchList = 'insert into watch_list (id_user,imdbid) values (:userid,:imdbid)';

const createUser = 'insert into user_movie (user_name,user_password) values(:name,:pass)';

const selectUser = 'SELECT * FROM user_movie WHERE user_name = :name';

const updateWatched = 'UPDATE watch_list SET watched = :watched WHERE id_user = :userid AND imdbid = :imdbid';

const updateRate = 'UPDATE watch_list SET rate = :rate WHERE id_user = :userid AND imdbid = :imdbid';

const getWatchList = 'SELECT mov.*, watchl.watched, watchl.rate FROM movie mov INNER JOIN watch_list watchl ON watchl.id_user = :userid AND mov.imdbid = watchl.imdbid';

module.exports = { deleteFromWatchList, addMovie, addWatchList, createUser, selectUser, updateWatched, updateRate, getWatchList };
