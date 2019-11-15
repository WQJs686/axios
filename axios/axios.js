import axios from 'axios';
import cookie from 'js-cookie';
axios.defaults.baseURL = '/api';

axios.interceptors.request.use(
    config => {
        config.headers['authorization'] = cookie.get('token')
        return config;
    }, error => {
        return Promise.reject(error);
    });
    
axios.interceptors.response.use(
    res => {
        return res
    }, err => {
        if (err.request.status === 401) {
            window.location.href = 'http://localhost:8080/login'
        }
        throw err
    }
    );
    
export default axios;
