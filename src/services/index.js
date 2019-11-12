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
      const posts = res.data
      return posts;
    }
    catch (error) {
      throw error;
    }
  }
}


export default new Services();