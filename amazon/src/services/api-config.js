import axios from 'axios';
//originally keep baseURL : "http://localhost:3000"  << JUST LIKE THAT 
//make sure to grab the heroku.com link not heroku.api 
const baseUrl=process.env.NODE_ENV==='production' ? ' https://amazon-replica-andri.herokuapp.com/': 'http://localhost:3000'
const api = axios.create({
  baseURL:baseUrl
})

export default api;