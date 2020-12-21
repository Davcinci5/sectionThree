/* eslint-disable no-const-assign */
/* eslint-disable camelcase */
// const sqlObj = {

//  'UPDATE watch_list SET watched = :watched WHERE id_user = :userid AND imdbid = :imdbid';

// 'UPDATE watch_list SET rate = :rate WHERE id_user = :userid AND imdbid = :imdbid';

// };
function father () {
    const dataBaseMock = {
        users: { Armando: [1, 'Armando'], Diego: [2, 'Diego'] },
        movies: { imdb1: true },
        watch_list: {
            1: [['imdb1', 'Batman', '1994', 'https://123', 0, 0], ['imdb2', 'Joker', '1993', 'https://123', 0, 0]]
        }
    };

    let id_user_counter = 1;

    return {
        'SELECT * FROM user_movie WHERE user_name = :name': ({ name }) => {
            const obj = { rows: [] };
            const user = dataBaseMock.users[name];
            if (user !== undefined) {
                obj.rows.push(user);
            }
            return obj;
        },
        'INSERT INTO user_movie (user_name,user_password) values(:name,:pass)': ({ name, pass }) => {
            dataBaseMock.users[name] = [++id_user_counter, name, pass];
            return true;
        },
        'SELECT mov.*, watchl.watched, watchl.rate FROM movie mov INNER JOIN watch_list watchl ON watchl.id_user = :userid AND mov.imdbid = watchl.imdbid': ({ userid }) => {
            const obj = { rows: [] };
            obj.rows.push(...dataBaseMock.watch_list[userid]);
            return obj;
        },
        'SELECT 1 FROM movie WHERE imdbid = :imdbid': ({ imdbid }) => {
            const obj = { rows: [] };
            if (dataBaseMock.movies[imdbid]) obj.rows.push(1);
            return obj;
        },
        'INSERT into movie values(:imdbid,:title,:year,:poster)': () => {
            return true;
        },
        'SELECT 1 FROM watch_list WHERE id_user = :userid AND imdbid = :imdbid': ({userid, imdbid}) => {
            const obj = { rows: [] };
            if (dataBaseMock.movies[imdbid] && dataBaseMock.watch_list[userid]) obj.rows.push(1);
            return obj;
        },
        'INSERT into watch_list (id_user,imdbid) values (:userid,:imdbid)': () => {
            return true;
        },
        'DELETE FROM watch_list WHERE id_user = :userid AND imdbid = :imdbid': () => {
            return true;
        },
        'UPDATE watch_list SET watched = :watched WHERE id_user = :userid AND imdbid = :imdbid': () => {
            return true;
        },
        'UPDATE watch_list SET rate = :rate WHERE id_user = :userid AND imdbid = :imdbid': () => {
            return true;
        }
    };
}

function Open (sql, binds) {
    const mock = father();
    return Promise.resolve(mock[sql](binds));
}

exports.Open = Open;
