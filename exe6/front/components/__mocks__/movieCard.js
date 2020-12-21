const { doRequest, createAddMovieQuery, createDeleteFromWatchListQuery } = require('../tools/queries.js');

class MovieCard extends HTMLElement {
    constructor () {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.movie = {};
        this.option = '';
    }

    // eslint-disable-next-line accessor-pairs
    set article (movie) {
        this.movie = movie;
        this.option = movie?.watch !== undefined ? 'DELETE' : 'ADD';
        this.root.innerHTML = `
            <style>
            @import "components/css/movie-card.css"
            </style>
            <div class="user-card" id="${movie.imdbID}">
                <img src="${movie.Poster}"/>
                <div>
                    <h2>Title</h2>
                    <p>${movie.Title}</p>
                    <h3>Year</h3>
                    <p>${movie.Year}</p>
                    <div style="display: ${movie?.watch !== undefined ? 'block' : 'none'}">
                        <star-ranking watch=${movie.watch} rank="${movie.rate}" imdbid="${movie.imdbID}"></star-ranking>
                    </div>
                    <button id="event-movie">${movie?.watch !== undefined ? 'DELETE' : 'ADD TO WATCH LIST'}</button>
                </div>
            </div>`;
    }

    connectedCallback () {
        this.shadowRoot.querySelector('#event-movie').addEventListener('click', async () => {
            let query;
            switch (this.option) {
            case 'DELETE' :
                query = createDeleteFromWatchListQuery(this.movie.imdbID);
                break;
            case 'ADD' :
                query = createAddMovieQuery(this.movie);
                break;
            }
            const { errors, data: { addMovie } } = await doRequest(query);
            if (errors) return;
            const oldRemove = this.movie.remove;
            if (this.option === 'ADD' && addMovie) {
                const el = document.createElement('movie-card');
                this.movie.watch = 0;
                this.movie.rate = 0;
                this.movie.remove = () => this.movie.watchList.removeChild(el);
                el.article = this.movie;
                this.movie.watchList.appendChild(el);
            }
            oldRemove();
        });
    }
}

customElements.define('movie-card', MovieCard);
