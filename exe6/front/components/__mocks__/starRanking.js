/* eslint-disable no-tabs */
const { doRequest, createUpdateRateValue, createUpdateWatchedValue } = require('../tools/queries.js');

class StarRanking extends HTMLElement {
    constructor () {
        super();
        this.watch = this.getAttribute('watch');
        this.rank = this.getAttribute('rank');
        this.imdbid = this.getAttribute('imdbid');
        const template2 = this.setTemplate(this.rank);
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template2.content.cloneNode(true));
        this.toggleStar();
    }

    toggleStar (watch = this.watch) {
        const checked = this.shadowRoot.querySelector('#watched');
        const startRanking = this.shadowRoot.querySelector('.unselected');
        if (watch == 1) {
            checked.checked = true;
            startRanking.style.visibility = 'visible';
        } else {
            startRanking.style.visibility = 'hidden';
        }
    }

    async updateCheck () {
        this.watch ^= 1;
        const query = createUpdateWatchedValue(this.watch, this.imdbid);
        try {
            await doRequest(query);
        } catch (error) {
            console.log(error);
        }
    }

    async updateStar (rate) {
        const query = createUpdateRateValue(rate, this.imdbid);
        try {
            await doRequest(query);
        } catch (error) {
            console.log(error);
        }
    }

    setTemplate (rank) {
        const template = document.createElement('template');
        template.innerHTML = `<style>
            @import "components/css/starRanking.css"
        </style>
        <div>
            <label class="container">Watched
            <input type="checkbox" id="watched">
            <span class="checkmark"></span>
            </label>
            <div class="unselected">
            <fieldset> 
                <input type="radio" id="five" name="rank" value="5" ${rank === '5' ? 'checked' : ''}><label class="star" for="five"></label>
                <input type="radio" id="four" name="rank" value="4" ${rank === '4' ? 'checked' : ''}><label class="star" for="four"></label>
                <input type="radio" id="three" name="rank" value="3"${rank === '3' ? 'checked' : ''}><label class="star" for="three"></label>
                <input type="radio" id="two" name="rank" value="2"  ${rank === '2' ? 'checked' : ''}><label class="star" for="two"></label>
                <input type="radio" id="one" name="rank" value="1"  ${rank === '1' ? 'checked' : ''}><label class="star" for="one"></label>
            </fieldset>
            </div>
        </div>`;
        return template;
    }

    handlerFieldset (e) {
        if (e.target.value) { this.updateStar(e.target.value); };
    }

    handleWatch () {
        this.updateCheck(); this.toggleStar();
    }

    connectedCallback () {
        this.shadowRoot.querySelector('fieldset').addEventListener('click', (e) => {
            if (e.target.value) { this.updateStar(e.target.value); };
        });
        this.shadowRoot.querySelector('#watched').addEventListener('click', () => {
            this.updateCheck(); this.toggleStar();
        });
    }

    disconnectedCallback () {
        this.shadowRoot.querySelector('fieldset').removeEventListener('click', (e) => {
            if (e.target.value) { this.updateStar(e.target.value); };
        });
        this.shadowRoot.querySelector('#watched').removeEventListener('click', () => {
            this.updateCheck(); this.toggleStar();
        });
    }
}

customElements.define('star-ranking', StarRanking);