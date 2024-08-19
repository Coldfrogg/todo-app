import axios from 'axios';

export const register = (name, email, password) => {
    return axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password
    });
};

export const login = (email, password) => {
    return axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
    });
};
