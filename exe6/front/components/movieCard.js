import { x } from './hola.js';
class MovieCard extends HTMLElement {
    constructor () {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.movie = {};
    }

    // eslint-disable-next-line accessor-pairs
    set article (movie) {
        this.movie = movie;
        this.root.innerHTML = `
            <style>
            .user-card {
                font-family: 'Arial', sans-serif;
                background: #001399;
                width: 400px;
                display: grid;
                grid-template-columns: 1.5fr 2fr;
                grid-gap: 10px;
                margin-bottom: 15px;
                border-bottom: #F4BC1C 5px solid;
            }
            .user-card h2,h3 {
            color: #F4BC1C;
            }
        
            .user-card p {
                color: #F9F9F3;
            }
        
            .user-card img {
                width: 100%;
                height:270px;
       
            }
        
            .user-card button {
                cursor: pointer;
                background: #F4BC1C;
                color: #001399;
                border: 0;
                border-radius: 5px;
                padding: 5px 10px;
                margin-bottom: 5px;
            }
            .visible{
                display: ${movie.checked ? "block" : "none"}
            }
            </style>
            <div class="user-card" id="${movie.imdbID}">
                <img src="${movie.Poster}"/>
                <div>
                    <h2>Title</h2>
                    <p>${movie.Title}</p>
                    <h3>Year</h3>
                    <p>${movie.Year}</p>
                    <div class="visible">
                        <star-ranking></star-ranking>
                    </div>
                    <button id="event-movie">${movie.checked ? "DELETE" : "ADD TO WATCH LIST"}</button>
                </div>
            </div>`;
    }

    connectedCallback () {
        this.shadowRoot.querySelector('#event-movie').addEventListener('click', async () => {
            let data = await x(this.movie);
            if (data.errors) return;
            const userCard = this.shadowRoot.querySelector(`#${this.movie.imdbID}`);
            userCard.style.display = 'none';
            console.log(data);
        });
    }
}

customElements.define('movie-card', MovieCard);
