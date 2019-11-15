import { FETCH_TODO_LIST_SUCCESS, FETCH_TODO_LIST_FAILURE, ADD_TODO_SUCCESS, DELETE_TODO_SUCCESS, UPDATE_TODO_SUCCESS } from "../constants";

const initialState = [];

const todo = (previousState = initialState, action) => {
  if (action.type === FETCH_TODO_LIST_SUCCESS) {
    return action.todoList;
  }
  else if (action.type === FETCH_TODO_LIST_FAILURE) {
    return initialState;
  }
  else if (action.type === ADD_TODO_SUCCESS) {
    return [...previousState, action.todo];
  }  
  else if (action.type === DELETE_TODO_SUCCESS) {    
    const newState = [];
    previousState.forEach(todo => {
      if (todo._id !== action.id) {
        newState.push(todo);
      }
    });    
    return newState;
  }  
  else if (action.type === UPDATE_TODO_SUCCESS) {
    const newState = [];
    previousState.forEach(todo => {
      if (todo._id !== action.todo._id) {
        newState.push(todo);
      }
      else {
        newState.push(action.todo);
      }
    });    
    return newState;
  }  
  else {
    return previousState;
  }
}

export default todo;