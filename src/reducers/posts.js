import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from "../constants";

const initialState = [];

const posts = (previousState = initialState, action) => {
    if(action.type === FETCH_POSTS_SUCCESS){
        return action.posts;
    }
    else if(action.type === FETCH_POSTS_FAILURE){
        return initialState;
    }
    else {
        return previousState;
    }
}

export default posts;