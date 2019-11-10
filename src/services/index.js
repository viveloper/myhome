import axios from 'axios';
import { SERVICE_BASE_URL } from '../constants';

class Services {
  signIn = async (email, password) => {
    const url = `${SERVICE_BASE_URL}/signin`;
    const postData = { email, password };
    try{
      const user = await axios.post(url, postData);
      return user;
    }
    catch(error){
      throw error;
    }
  }
}

export default new Services();