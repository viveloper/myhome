import {combineReducers} from 'redux';
import postsReducer from './posts';
import loadingReducer from './loading';
import todoReducer from './todo';

const rootReducer = combineReducers({
    posts: postsReducer,
    todoList: todoReducer,
    loading: loadingReducer
});

export default rootReducer;