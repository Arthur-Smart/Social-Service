import axios from 'axios'

const axiosRequest = axios.create({
    baseURL:'http://localhost:8800/api/',
    withCredentials:true
});

export default axiosRequest;