import {combineReducers} from 'redux';
import postsReducer from './posts';
import loadingReducer from './loading';

const rootReducer = combineReducers({
    posts: postsReducer,
    loading: loadingReducer
});

export default rootReducer;