import './components/movieCard.js';
import './components/starRanking.js';

window.addEventListener('load', async () => {
    // const data = await updateCountryFetch();
    // getNews(data.search);
    const data = await test();
    console.log(data);
});

async function getNews (array) {
    const main = document.querySelector('main');
    // console.log(main);

    array.forEach(article => {
        const el = document.createElement('movie-card');
        el.article = article;
        main.appendChild(el);
    });
}

const updateCountryFetch = async () => {
    const graphCoolEndpoint = 'http://localhost:4000/graphql';
    const query = JSON.stringify({
        query: `mutation {
            search(chain: "try") {
                imdbID
                Poster
                Title
                Year
                }
          }
      `
    });

    const response = await fetch(graphCoolEndpoint, {
        credentials: 'include',
        headers: { 'content-type': 'application/json' },
        method: 'POST',
        body: query
    });

    const responseJson = await response.json();
    return responseJson.data;
};

const test = async () => {
    const graphCoolEndpoint = 'http://localhost:4000/graphql';
    // create a user

    // let query = JSON.stringify({
    // //     query: `mutation {
    // //         createUser(name:"Diego",pass:"321test" ) {
    // //             id
    // //             name
    // //         }
    // //       }
    // //   `
    //     //         query: `query {
    //     //         currentUser {
    //     //             id
    //     //             name
    //     //         }
    //     //       }
    //     //   `
    //     query: `mutation {
    //         login(name:"Diego",pass:"321test" ) {
    //             id
    //             name
    //         }
    //       }
    //       `
    // });

    // let response = await fetch(graphCoolEndpoint, {
    //     credentials: 'include',
    //     headers: { 'content-type': 'application/json' },
    //     method: 'POST',
    //     body: query
    // });
    // let responseJson = await response.json();
    // console.log(responseJson);
    const query = JSON.stringify({
        //     query: `mutation {
        //         createUser(name:"Diego",pass:"321test" ) {
        //             id
        //             name
        //         }
        //       }
        //   `
        query: `query {
            currentUser {
                id
                name
            }
          }
       `
        // query: `mutation {
        //     login(name:"Diego",pass:"321test" ) {
        //         id
        //         name
        //     }
        //   }
        //   `
    });
    const response = await fetch(graphCoolEndpoint, {
        credentials: 'include',
        headers: { 'content-type': 'application/json' },
        method: 'POST',
        body: query
    });

    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
};
