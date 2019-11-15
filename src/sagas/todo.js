import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_TODO_LIST, FETCH_TODO_LIST_SUCCESS, FETCH_TODO_LIST_FAILURE, ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAILURE, DELETE_TODO, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE, UPDATE_TODO, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAILURE } from '../constants';
import Services from '../services';

// worker saga
function* fetchTodoList(action) {
  const { token, author } = action;
  try {
    const todoList = yield call(Services.fetchTodoList, token, author);
    yield put({
      type: FETCH_TODO_LIST_SUCCESS,
      todoList
    });
  }
  catch (error) {
    console.error(error.response);
    yield put({
      type: FETCH_TODO_LIST_FAILURE
    });
  }
}
function* addTodo(action) {
  const { token, todo } = action;
  try {
    const result = yield call(Services.addTodo, token, todo);
    yield put({
      type: ADD_TODO_SUCCESS,
      todo: result.todo
    });
  }
  catch (error) {
    console.error(error.response);
    yield put({
      type: ADD_TODO_FAILURE
    });
  }
}
function* deleteTodo(action) {
  const { token, id } = action;
  try {
    const result = yield call(Services.deleteTodo, token, id);
    yield put({
      type: DELETE_TODO_SUCCESS,
      id
    });
  }
  catch (error) {
    console.error(error.response);
    yield put({
      type: DELETE_TODO_FAILURE
    });
  }
}
function* updateTodo(action) {
  const { token, todo } = action;
  try {
    const result = yield call(Services.updateTodo, token, todo);
    yield put({
      type: UPDATE_TODO_SUCCESS,
      todo
    });
  }
  catch (error) {
    console.error(error.response);
    yield put({
      type: UPDATE_TODO_FAILURE
    });
  }
}

// watcher saga
function* todoSaga() {
  yield takeLatest(FETCH_TODO_LIST, fetchTodoList);
  yield takeLatest(ADD_TODO, addTodo);
  yield takeLatest(DELETE_TODO, deleteTodo);
  yield takeLatest(UPDATE_TODO, updateTodo);
}

export default todoSaga;