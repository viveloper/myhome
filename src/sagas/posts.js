import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../constants';
import Services from '../services';

// worker saga
function* fetchPosts(action) {
    const { token, category } = action;
    try{
        const posts = yield call(Services.fetchPosts, token, category);
        yield put({
            type: FETCH_POSTS_SUCCESS,
            posts
        });
    }
    catch(error){
        console.error(error.response);
        yield put({
            type: FETCH_POSTS_FAILURE
        });
    }    
}

// watcher saga
function* postsSaga() {
    yield takeLatest(FETCH_POSTS, fetchPosts);
}

export default postsSaga;