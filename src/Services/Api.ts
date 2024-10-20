import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:44347/api',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});

export default api;
