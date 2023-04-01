import axios from 'axios'

const axiosRequest = axios.create({
    baseURL:'https://serviceapi.onrender.com/api/',
    withCredentials:true
});

export default axiosRequest;