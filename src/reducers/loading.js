import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, FETCH_POSTS } from "../constants";

const initialState = false;

const loading = (previousState = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return true;
        case FETCH_POSTS_SUCCESS:
        case FETCH_POSTS_FAILURE:
            return false;
        default:
            return previousState;
    }
}

export default loading;