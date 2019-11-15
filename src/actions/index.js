import { FETCH_POSTS, FETCH_TODO_LIST, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../constants";

export const fetchPost = (token, category) => ({
  type: FETCH_POSTS,
  token,
  category
});

export const fetchTodoList = (token, author) => ({
  type: FETCH_TODO_LIST,
  token,
  author
});

export const addTodo = (token, todo) => ({
  type: ADD_TODO,
  token,
  todo
});

export const deleteTodo = (token, id) => ({
  type: DELETE_TODO,
  token,
  id
});

export const updateTodo = (token, todo) => ({
  type: UPDATE_TODO,
  token,
  todo
});