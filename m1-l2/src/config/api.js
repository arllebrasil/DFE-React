import axios from 'axios';

const baseURL = 'https://hn.algolia.com/api/v1';

const api = axios.create({baseURL, headers:{
    'Content-type':'application/json',
}});

export default api;