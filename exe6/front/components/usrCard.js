/* eslint-disable no-tabs */
import './starRanking';
const template = document.createElement('template');
template.innerHTML = `
  <style>
  .user-card {
		font-family: 'Arial', sans-serif;
    background: #001399;

		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 10px;
		margin-bottom: 15px;
		border-bottom: #F4BC1C 5px solid;
    }
    .user-card h1,h2 {
    color: #F4BC1C;
    }

    .user-card p {
        color: #F9F9F3;
    }

	.user-card img {
	
	}

	.user-card button {
		cursor: pointer;
		background: #F4BC1C;
		color: #001399;
		border: 0;
		border-radius: 5px;
		padding: 5px 10px;
	}
  </style>
  <div class="user-card">
  <img/>
  <div>
    <h1>Title</h3>
    <p><slot name="title" /></p>
    <h2>Year</h2>
    <p><slot name="year" /></p>
    <button id="add-movie">ADD MOVIE</button>
  </div>
</div>
`;

class UserCard extends HTMLElement {
    constructor () {
        super();

        this.showInfo = true;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('imdb');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    // toggleInfo () {
    //     this.showInfo = !this.showInfo;

    //     const info = this.shadowRoot.querySelector('.info');
    //     const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

    //     if (this.showInfo) {
    //         info.style.display = 'block';
    //         toggleBtn.innerText = 'Hide Info';
    //     } else {
    //         info.style.display = 'none';
    //         toggleBtn.innerText = 'Show Info';
    //     }
    // }

    // connectedCallback () {
    //     this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
    // }

    // disconnectedCallback () {
    //     this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    // }
}

customElements.define('user-card', UserCard);
