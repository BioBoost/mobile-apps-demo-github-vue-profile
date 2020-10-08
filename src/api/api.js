import axios from 'axios';

export default () => {
  // npm install --save dotenv
  // console.log(`TOKEN ${process.env.VUE_APP_API_TOKEN}`);

  let api = axios.create({
    baseURL: `https://api.github.com`,
    headers: {
      Authorization: `Bearer ${process.env.VUE_APP_API_TOKEN}`
    }
  });

  return api;
}