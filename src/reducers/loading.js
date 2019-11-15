import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, FETCH_POSTS, FETCH_TODO_LIST, FETCH_TODO_LIST_SUCCESS, FETCH_TODO_LIST_FAILURE, ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, DELETE_TODO, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE } from "../constants";

const initialState = false;

const loading = (previousState = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
        case FETCH_TODO_LIST:
        case ADD_TODO:
        case DELETE_TODO:
            return true;
        case FETCH_POSTS_SUCCESS:
        case FETCH_POSTS_FAILURE:
        case FETCH_TODO_LIST_SUCCESS:
        case FETCH_TODO_LIST_FAILURE:
        case ADD_TODO_SUCCESS:
        case ADD_TODO_FAILURE:
        case DELETE_TODO_SUCCESS:
        case DELETE_TODO_FAILURE:
            return false;
        default:
            return previousState;
    }
}

export default loading;