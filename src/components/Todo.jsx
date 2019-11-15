import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from './Layout';
import withAuth from '../hoc/withAuth';
import { fetchTodoList, addTodo, deleteTodo, updateTodo } from '../actions';
import './Todo.css';

const Todo = props => {
  const { todoList, loading, fetchTodoList, addTodo, deleteTodo, updateTodo, user } = props;

  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchTodoList(user.token, user.username);
  }, [fetchTodoList, user.token, user.username]);

  const handleChange = e => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (title) {
      const todo = {
        title,
        author: user.username,
        completed: false
      }
      addTodo(user.token, todo);
      setTitle('');
    }
  }

  const handleDelete = id => {
    deleteTodo(user.token, id);
  }

  const handleCheck = todo => {
    const updatedTodo = {
      ...todo,
      completed: !todo.completed
    };
    updateTodo(user.token, updatedTodo);
  }

  const reverseTodoList = [...todoList].reverse();

  return (
    <Layout>
      <div className="todo">
        <h3>TODO</h3>
        <form className="todo-form" onSubmit={handleSubmit}>
          <textarea name="title" onChange={handleChange} value={title}></textarea>
          <button className="button button-block" type="submit">ADD</button>
        </form>
        <ul className="todo-list">
          {
            reverseTodoList.map(todo => {
              return (
                <li key={todo._id} className={todo.completed === false ? 'todo-item' : 'todo-item todo-item-completed'}>
                  <button className="button-check" onClick={() => { handleCheck(todo) }}>{todo.completed && <i className="fas fa-check"></i>}</button>
                  <p className="todo-title">{todo.title}</p>
                  <div>
                    <button className="button-up">
                      <i className="fas fa-angle-up"></i>
                    </button>
                    <button className="button-down">
                      <i className="fas fa-angle-down"></i>
                    </button>
                    <button className="button-edit">
                      <i className="far fa-edit"></i>
                    </button>
                    <button className="button-delete" onClick={() => { handleDelete(todo._id) }}>
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </div>
                  {todo.completed && <div className="todo-completed-msg">completed</div>}
                </li>
              )
            })
          }
        </ul>
      </div>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todoList,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodoList: (token, author) => {
      dispatch(fetchTodoList(token, author));
    },
    addTodo: (token, todo) => {
      dispatch(addTodo(token, todo));
    },
    deleteTodo: (token, id) => {
      dispatch(deleteTodo(token, id));
    },
    updateTodo: (token, todo) => {
      dispatch(updateTodo(token, todo));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Todo));