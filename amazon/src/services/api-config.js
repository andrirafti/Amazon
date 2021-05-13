import axios from 'axios';
//originally keep baseURL=localhost:3000
//make sure to grab the heroku.com link not heroku.api 
// const baseUrl=process.env.NODE_ENV==='production' ? 'https://films-netflix.herokuapp.com': 'http://localhost:3000'
const api = axios.create({
  baseURL:"http://localhost:3000"
})

export default api;