
import { doRequest, createUserQuery, createLoginQuery } from '../tools/queries.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import "components/css/session.css"
</style>
<div class="wrapper">
<img src="mypenguin.jpg" class="penguin">
<form action="" method="post">
    <div class=".form">
        <label for="username">Username</label>
        <input type="text" name="username" placeholder="username">
        <span class="alert hide" id="usr-msg"></span>
    </div>
    <div class=".form">
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="password">
        <span class="alert hide" id="pass-msg">Messa</span>
    </div>
    <button id="btn-session">Log in</button>
</form>

<div class="toogle">
    <p class="message" for="name">Don't have an account? <a class="link-msg" href="/"> Sign up</a></p>
</div>
</div>
`;
class LogSigUp extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.logIn = true;
        document.body.style.backgroundColor = '#91a8ae';
    }

    toggleSession (event) {
        event.preventDefault();
        this.logIn = !this.logIn;
        const message = this.shadowRoot.querySelector('.message');
        const buttonSession = this.shadowRoot.querySelector('#btn-session');
        if (this.logIn) {
            message.innerHTML = 'Don\'t have an account? <a class="link-msg" href="/"> Sign up </a>';
            buttonSession.innerText = 'Log in';
        } else {
            message.innerHTML = 'Have an account? <a class="link-msg" href="/"> Log in </a>';
            buttonSession.innerText = 'Sign up';
        }
    }

    delay () {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    async displayError ({ code, message }) {
        let element;
        switch (code) {
        case 1:
            element = this.shadowRoot.querySelector('#usr-msg');
            break;
        case 2:
            element = this.shadowRoot.querySelector('#pass-msg');
            break;
        }
        element.classList.add('show');
        element.classList.remove('hide');
        element.innerHTML = message;
        await this.delay();
        element.classList.add('hide');
        element.classList.remove('show');
        element.innerHTML = message;
    }

    async startSession (event) {
        event.preventDefault();
        const name = this.shadowRoot.querySelector('input[type="text"]').value;
        const pass = this.shadowRoot.querySelector('input[type="password"]').value;
        if (name.length === 0) {
            this.displayError({ code: 1, message: 'please, input name' });
            return;
        } else if (pass.length === 0) {
            this.displayError({ code: 2, message: 'please, input password' });
            return;
        }
        const query = this.logIn ? createLoginQuery(name, pass) : createUserQuery(name, pass);
        const { errors } = await doRequest(query);
        if (!errors) {
            location.hash = '#dashboard';
        } else {
            this.displayError(errors[0]);
        }
    }

    connectedCallback () {
        this.shadowRoot.querySelector('.message').addEventListener('click', (event) => this.toggleSession(event));
        this.shadowRoot.querySelector('form').addEventListener('submit', (event) => this.startSession(event));
    }

    disconnectedCallback () {
        this.shadowRoot.querySelector('.message').removeEventListener('click', (event) => this.toggleSession(event));
        this.shadowRoot.querySelector('form').removeEventListener('submit', (event) => this.startSession(event));
    }
}
customElements.define('log-sign-up', LogSigUp);
