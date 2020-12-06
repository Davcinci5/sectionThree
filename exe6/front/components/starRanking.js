/* eslint-disable no-tabs */
const template2 = document.createElement('template');
template2.innerHTML = `
<style>
fieldset{
    float: left;
    border:none;
    margin-left: 0px;
    margin-right: 0px;
    padding-right: 0px;
    padding-left: 0px;

}

.star:before{
    margin: 5px;
    font-size: 25px;
    content: "★";
}
input{
    display: none;
}
.star{
    float: right;
}

.star
{
    color: gray; 
}
input:checked ~ .star{
    color: yellow;
}
.star:hover {
    color: #FFED85;
}
.star:hover ~ label{
    color: #FFED85;
}

.unselected{
    clear: both;
}

/* The container */
.container:before {
    content: "";
}
.container {
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  color: white;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

</style>
<div>
    <label class="container">Watched
    <input type="checkbox" checked="checked" id="watched">
    <span class="checkmark"></span>
    </label>
    <div class="unselected">
    <fieldset> 
        <input type="radio" id="cinco" name="rank" value="5" ><label class="star" for="cinco"></label>
        <input type="radio" id="cuatro" name="rank" value="4"><label class="star" for="cuatro"></label>
        <input type="radio" id="tres" name="rank" value="3"><label class="star" for="tres"></label>
        <input type="radio" id="dos" name="rank" value="2"><label class="star" for="dos"></label>
        <input type="radio" id="uno" name="rank" value="1" ><label class="star" for="uno"></label>
    </fieldset>
    </div>
</div>
`;

class StarRanking extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template2.content.cloneNode(true));
        // const val = this.getAttribute('rank');
        // if (val !== "cero") this.shadowRoot.querySelector(`#${val}`).checked = true;
    }

    toggleStar () {
        const checked = this.shadowRoot.querySelector('#watched');
        const startRanking = this.shadowRoot.querySelector('.unselected');
        if (checked.checked) {
            startRanking.style.visibility = 'visible';
        } else {
            startRanking.style.visibility = 'hidden';
        }
    }

    connectedCallback () {
        this.shadowRoot.querySelector('fieldset').addEventListener('click', (e) => {if(e.target.value){console.log(e.target.value)}});
        this.shadowRoot.querySelector('#watched').addEventListener('click', () => this.toggleStar());
    }

    disconnectedCallback () {
        this.shadowRoot.querySelector('fieldset').removeEventListener();
    }
}

customElements.define('star-ranking', StarRanking);
