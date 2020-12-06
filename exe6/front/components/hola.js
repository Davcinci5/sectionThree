const x = async (obj) => {
    const graphCoolEndpoint = 'http://localhost:4000/graphql';
    const query = JSON.stringify({
        query: `mutation {
            addMovie(imdbid:"${obj.imdbID}", title:"${obj.Title}", year:"${obj.Year}", poster:"${obj.Poster}")
          }
      `
    });
    const response = await fetch(graphCoolEndpoint, {
        credentials: 'same-origin',
        headers: { 'content-type': 'application/json' },
        method: 'POST',
        body: query
    });
    const responseJson = await response.json();
    return responseJson;
};

export { x };
