/* eslint-disable no-undef */

//BACK
jest.mock('../exe6/back/scheme/resolvers/createUser');
jest.mock('../exe6/back/password/bcrypt');
jest.mock('../exe6/back/oracle/configdb');
jest.mock('../exe6/back/token/token');
jest.mock('../exe6/back/scheme/omdb/searchMovie');

const currentUser = require('../exe6/back/scheme/resolvers/currentUser');
const createUserfn = require('../exe6/back/scheme/resolvers/createUser');
const getWathList = require('../exe6/back/scheme/resolvers/getWatchList');
const login = require('../exe6/back/scheme/resolvers/login');
const addMoviefn = require('../exe6/back/scheme/resolvers/addMovie');
const deleteFromWatchListfn = require('../exe6/back/scheme/resolvers/deleteFromWatch');
const updateWatchedValue = require('../exe6/back/scheme/resolvers/updateWatchedValue');
const updateRateValue = require('../exe6/back/scheme/resolvers/updateRateValue');
const search = require('../exe6/back/scheme/omdb/searchMovie');

//FRONT
require('@testing-library/jest-dom/extend-expect');

//session
jest.mock('../exe6/front/components/Session');
//starRanking
jest.mock('../exe6/front/components/starRanking');
//dashboard
jest.mock('../exe6/front/components/Dashboard');
//movie card
jest.mock('../exe6/front/components/movieCard');

jest.mock('../exe6/front/tools/queries');

//BACK TESTING

test('get current user with id 27 and Name Diego', async () => {
    const context = { user: { id: '27', name: 'Diego' } };
    const mockUser = { id: '27', name: 'Diego' };
    const data = await currentUser(undefined, undefined, context);
    expect(data).toEqual(mockUser);
});

test('get undefined, when user does not exist ', async () => {
    const context = { res: { clearCookie: () => { } } };
    const data = await currentUser(undefined, undefined, context);
    expect(data).toBe(undefined);
});

test('Create a new user successfully ', async () => {
    const context = {};
    const data = await createUserfn(undefined, { name: 'Armando', pass: '321test' }, context);
    expect(data).toEqual({ id: 1, name: 'Armando' });
});

test('Getting Watch List ', async () => {
    myWatchList = [{ Poster: 'https://123', Title: 'Batman', Year: '1994', imdbID: 'imdb1', rate: 0, watch: 0 },
        { Poster: 'https://123', Title: 'Joker', Year: '1993', imdbID: 'imdb2', rate: 0, watch: 0 }];
    const context = { user: { id: 1 } };
    const data = await getWathList(undefined, undefined, context);
    expect(data).toEqual(myWatchList);
});

test('Getting user Diego from login function ', async () => {
    const args = { name: 'Diego', pass: '123test' };
    const context = { };
    const data = await login(undefined, args, context);
    expect(data).toEqual({ id: 2, name: 'Diego' });
});

test('Getting user Armando from login function ', async () => {
    const args = { name: 'Armando', pass: '123test' };
    const context = { };
    const data = await login(undefined, args, context);
    expect(data).toEqual({ id: 1, name: 'Armando' });
});

test('Adding a movie successfully ', async () => {
    const args = { poster: 'https://123', title: 'Joker', year: '1993', imdbid: 'imdb2' };
    const context = { user: { id: 1 } };
    const data = await addMoviefn(undefined, args, context);
    expect(data).toBe(true);
});

test('return false when Adding a movie because of it already exists  ', async () => {
    const args = { poster: 'https://123', title: 'Joker', year: '1993', imdbid: 'imdb1' };
    const context = { user: { id: 1 } };
    const data = await addMoviefn(undefined, args, context);
    expect(data).toBe(false);
});

test('remove movie from watchList successfully ', async () => {
    const args = { imdbid: 'imdb1' };
    const context = { user: { id: 1 } };
    const data = await deleteFromWatchListfn(undefined, args, context);
    expect(data).toBe(true);
});

test('update watch property successfully ', async () => {
    const args = { watched: 0, imdbid: 'imdb1' };
    const context = { user: { id: 1 } };
    const data = await updateWatchedValue(undefined, args, context);
    expect(data).toBe(true);
});

test('update rate property successfully ', async () => {
    const args = { rate: 1, imdbid: 'imdb1' };
    const context = { user: { id: 1 } };
    const data = await updateRateValue(undefined, args, context);
    expect(data).toBe(true);
});

test('test search function ', async () => {
    const data = await search('Batman');
    expect(data).toEqual({ Poster: 'https://123', Title: 'Batman', Year: '1994', imdbID: 'imdb1' });
});

// FRONT-END

test('create a session component', () => {
    document.body.innerHTML = `
    <main></main>  
    `;
    const main = document.querySelector('main');
    const element = document.createElement('log-sign-up');
    main.appendChild(element);
    expect(main.children.length).toBe(1);
    expect(main.children[0].tagName).toBe('LOG-SIGN-UP');
});

test('create a movie-dashboard component', () => {
    document.body.innerHTML = `
    <main></main>  
    `;
    const main = document.querySelector('main');
    const element = document.createElement('movie-dashboard');
    main.appendChild(element);
    expect(main.children.length).toBe(1);
    expect(main.children[0].tagName).toBe('MOVIE-DASHBOARD');
});

test('create a movie-card component', () => {
    document.body.innerHTML = `
    <main></main>  
    `;
    const main = document.querySelector('main');
    const element = document.createElement('movie-card');
    main.appendChild(element);
    expect(main.children.length).toBe(1);
    expect(main.children[0].tagName).toBe('MOVIE-CARD');
});

test('create a star-ranking component', () => {
    document.body.innerHTML = `
    <main></main>  
    `;
    const main = document.querySelector('main');
    const element = document.createElement('star-ranking');
    main.appendChild(element);
    expect(main.children.length).toBe(1);
    expect(main.children[0].tagName).toBe('STAR-RANKING');
});
