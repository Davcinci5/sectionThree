
const graphEndpoint = 'http://localhost:4000/graphql';

const createSearchQuery = (chain) => `mutation {
    search(chain: "${chain}") {
        imdbID
        Poster
        Title
        Year
        }
  }
`;

const createAddMovieQuery = (obj) => `mutation {
    addMovie(imdbid:"${obj.imdbID}", title:"${obj.Title}", year:"${obj.Year}", poster:"${obj.Poster}")
  }
`;

const createLoginQuery = (name, pass) => `mutation {
    login(name:"${name}",pass:"${pass}") {
        id
        name
    }
  }
  `;

const createUserQuery = (name, pass) => `mutation {
         createUser(name:"${name}",pass:"${pass}") {
             id
             name
         }
  }
`;

const doRequest = async (query) => {
    const response = await fetch(graphEndpoint, {
        credentials: 'include',
        headers: { 'content-type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ query })
    });

    const responseJson = await response.json();
    return responseJson;
};

const currentUser = async () => {
    const query = `query {
                 currentUser {
                     id
                     name
                 }
               }
           `;
    const { data } = await doRequest(query);
    return data;
};

const logOut = `query {
    logOut
  }
`;

const getMyWatchList = `
        query{
            getWatchList {
                Title
                Year
                imdbID
                Poster
                watch
                rate
            }
        }`;

const createUpdateWatchedValue = (watched, imdbid) => `mutation {
    updateWatchedValue(watched:${watched}, imdbid:"${imdbid}")
  }`;

const createUpdateRateValue = (rate, imdbid) => `mutation {
    updateRateValue(rate:${rate}, imdbid:"${imdbid}")
}`;

const createDeleteFromWatchListQuery = (imdbid) => `mutation{
        deleteFromWatchList(imdbid:"${imdbid}")
}
`;

const removeChildrens = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.lastElementChild);
    }
};

export { createDeleteFromWatchListQuery, createUpdateRateValue, createUpdateWatchedValue, createSearchQuery, doRequest, currentUser, removeChildrens, createLoginQuery, createUserQuery, logOut, createAddMovieQuery, getMyWatchList };
