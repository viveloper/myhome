import axios from 'axios';
import { SERVICE_BASE_URL } from '../constants';

class Services {
  signIn = async (email, password) => {
    const url = `${SERVICE_BASE_URL}/signin`;
    const body = { email, password };
    try {
      const res = await axios.post(url, body);
      const user = res.data;
      return user;
    }
    catch (error) {
      throw error;
    }
  }

  fetchPosts = async (token, category) => {
    const url = `${SERVICE_BASE_URL}/api/posts/${category}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const posts = res.data;
      return posts;
    }
    catch (error) {
      throw error;
    }
  }

  fetchTodoList = async (token, author) => {
    const url = `${SERVICE_BASE_URL}/api/todo?author=${author}`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const todoList = res.data;
      return todoList;
    }
    catch (error) {
      throw error;
    }
  }

  addTodo = async (token, todo) => {
    const url = `${SERVICE_BASE_URL}/api/todo`;
    try {
      const res = await axios.post(url, todo, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const result = res.data;
      return result;
    }
    catch (error) {
      throw error;
    }
  }

  deleteTodo = async (token, id) => {
    const url = `${SERVICE_BASE_URL}/api/todo/${id}`;
    try {
      const res = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const result = res.data;
      return result;
    }
    catch (error) {
      throw error;
    }
  }

  updateTodo = async (token, todo) => {
    const url = `${SERVICE_BASE_URL}/api/todo/${todo._id}`;
    try {
      const res = await axios.put(url, todo, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const result = res.data;
      return result;
    }
    catch (error) {
      throw error;
    }
  }
}


export default new Services();