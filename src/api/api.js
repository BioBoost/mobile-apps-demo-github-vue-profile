import axios from 'axios';

export default () => {
  let api = axios.create({
    baseURL: `http://localhost:3000`
  });

  return api;
}