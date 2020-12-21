import './components/movieCard.js';
import './components/starRanking.js';
import './components/Session.js';
import './components/Dashboard.js';
import { currentUser, removeChildrens } from './tools/queries.js';

window.addEventListener('load', async () => {
    const user = await currentUser();
    const main = document.querySelector('main');
    let element;
    if (!user.currentUser) {
        location.hash = '#session';
        element = document.createElement('log-sign-up');
    } else {
        location.hash = '#dashboard';
        element = document.createElement('movie-dashboard');
    }
    main.appendChild(element);
});

window.addEventListener('hashchange', async (_) => {
    const user = await currentUser();
    const main = document.querySelector('main');
    if (!user.currentUser) {
        removeChildrens(main);
        main.appendChild(document.createElement('log-sign-up'));
        location.hash = '#session';
        return;
    };
    const hash = location.hash;
    switch (hash) {
    case '#dashboard':
        removeChildrens(main);
        main.appendChild(document.createElement('movie-dashboard'));
        break;
    case '#home':
        window.scrollTo(0, 0);
        break;
    case '#session':
        location.hash = '#dashboard';
        break;
    case '#search':
        window.scrollTo(0, 600);
        break;
    case '#watch':
        window.scrollTo(0, 1400);
        break;
    }
});
