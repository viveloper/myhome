import {all, call} from 'redux-saga/effects';
import postsSaga from './posts';

function* rootSaga() {
    yield all([call(postsSaga)]);
};

export default rootSaga;