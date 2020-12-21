const { createSearchQuery, doRequest, logOut, getMyWatchList } = require('../tools/queries.js');

const template = document.createElement('template');

template.innerHTML = `
<style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
    @import "components/css/dashboard.css"
</style>
<ul>
    <li><a class="active" href="#home">◊ Home</a></li>
    <li><a href="#search">∇ Search</a></li>
    <li><a href="#watch">∇ My Watch List</a></li>
    <li><a class="log-out" id="log-out" href="#">◊ Log Out</a></li>
</ul>
<div class="greetings" id="home">
    <h1>The best place for searching movies</h1>
    <img src="mypenguin.jpg" alt="penguin">
</div>
<div id="search">
<p>Search <i class="fa fa-search" aria-hidden="true"></i></p>
    <form class="example" action="#">
        <input type="text" placeholder="Search.." name="search">
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
      <div class="my-list"></div>
</div>
<div id="watch">
    <p>My watch List <i class="fa fa-film" aria-hidden="true"></i></p>
    <div class="my-list"></div> 
    
</div>
`;
class DashBoard extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.actual = this.shadowRoot.querySelector('ul li a');
        document.body.style.backgroundColor = 'white';
        this.watchList = [];
        this.createWatchList();
    }

    removeChildrens (parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.lastElementChild);
        }
    }

    removeFromSearch (element) {
        const parent = this.shadowRoot.querySelector('#search > .my-list');
        return () => parent.removeChild(element);
    };

    removeFromList (element) {
        const parent = this.shadowRoot.querySelector('#watch > .my-list');
        return () => parent.removeChild(element);
    };

    createMovieCard ({ search }, parent, errormsg) {
        if (!search) {
            const msgTag = document.createElement('span');
            msgTag.className = 'my-search-msg';
            msgTag.innerHTML = errormsg;
            parent.appendChild(msgTag);
        } else {
            const watchList = this.shadowRoot.querySelector('#watch > .my-list');
            search.forEach(movie => {
                const el = document.createElement('movie-card');
                movie.watchList = watchList;
                movie.remove = this.removeFromSearch(el);
                el.article = movie;
                parent.appendChild(el);
            });
        }
    }

    async createWatchList () {
        const { data } = await doRequest(getMyWatchList);
        this.watchList = data.getWatchList;
        const parentDiv = this.shadowRoot.querySelector('#watch > .my-list');
        this.removeChildrens(parentDiv);
        this.watchList.forEach(movie => {
            const el = document.createElement('movie-card');
            movie.remove = this.removeFromList(el);
            el.article = movie;
            parentDiv.appendChild(el);
        });
    }

    async doSearch (event) {
        event.preventDefault();
        let query = this.shadowRoot.querySelector('form > input').value;
        const parentDiv = this.shadowRoot.querySelector('#search > .my-list');
        this.removeChildrens(parentDiv);
        query = createSearchQuery(query);
        const { data } = await doRequest(query);
        this.createMovieCard(data, parentDiv, 'Matches not found');
    }

    setActual (event) {
        this.actual.classList.remove('active');
        this.actual = event.target;
        this.actual.classList.add('active');
    }

    async logOut (_) {
        await doRequest(logOut);
        location.hash = '#session';
    }

    connectedCallback () {
        this.shadowRoot.querySelector('form').addEventListener('submit', (event) => this.doSearch(event));
        this.shadowRoot.querySelector('ul').addEventListener('click', (event) => this.setActual(event));
        this.shadowRoot.querySelector('#log-out').addEventListener('click', (event) => this.logOut(event));
    }

    disconnectedCallback () {
        this.shadowRoot.querySelector('form').removeEventListener('submit', (event) => this.doSearch(event));
        this.shadowRoot.querySelector('ul').removeEventListener('click', (event) => this.setActual(event));
        this.shadowRoot.querySelector('#log-out').removeEventListener('click', (event) => this.logOut(event));
    }
}
customElements.define('movie-dashboard', DashBoard);
