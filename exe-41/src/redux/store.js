import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer'
import rootSaga from './sagas';

let sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, middleware);
sagaMiddleware.run(rootSaga);

window.store =store;
window.dispatcher = {
    fetchData: () => {
        store.dispatch({type:'LOAD_DATA'});
    }
}

export default store;