import axios from 'axios';

export default function setAutorizationToken(token){
    if (token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else{
        delete axios.defaults.headers.common['Authorization']; 
        // PROBANDO SI LO PODEMOS QUITAR TAMBIEN DEL LOCAL STORAGE
        window.localStorage.clear();
    }
}