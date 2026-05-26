import axios from 'axios'
const baseURL ='https://codehire-eifr.onrender.com/api';

const axiosinstance = axios.create({
  baseURL,
  withCredentials: true,
})

export default axiosinstance