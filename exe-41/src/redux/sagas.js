import {take, actionChannel, call, put, takeEvery, all, fork }  from 'redux-saga/effects'; 


function* getData() {
    const json = yield call(async () => {
      const response = await fetch('https://v6.exchangerate-api.com/v6/1a2ef01bc720c4533f6ef08e/latest/USD');
      const data = await response.json();
      const { conversion_rates } = data;
      const array_data = Object.entries(conversion_rates);
      return array_data;
    });
    yield put({ type: 'SET_DATA', payload: {data: json} });
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function* fetchUsersWatcher() {
    yield takeEvery('LOAD_DATA',getData);
  }

  function* modifyNext(payload) {
    yield call(delay,1000);
    yield put({ type: 'INCREASE_START', payload });
  }

 function* nextStartWatcher() {
    const requestChan = yield actionChannel('FETCH_NEXT')
    while (true) {
      const {payload} = yield take(requestChan)
      yield call(modifyNext,payload);
    }
  }

  export default function* rootSaga(){
    yield all([fork(fetchUsersWatcher), fork(nextStartWatcher)]);
  }






