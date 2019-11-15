import {all, call} from 'redux-saga/effects';
import postsSaga from './posts';
import todoSaga from './todo';

function* rootSaga() {
    yield all([call(postsSaga), call(todoSaga)]);
};

export default rootSaga;