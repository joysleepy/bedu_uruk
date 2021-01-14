import axios from 'axios'; 
import jwt from 'jsonwebtoken'; 

import { useLocalStorage }  from '../hooks/useLocalStorage'; 

export async function isAuthenticaded() {
    const promise =  await axios.get('auth'); 
    // console.log('promise', promise); 
    return promise.data.result;
}

export function GetDataFromToken(){
    // Trataremos de extraer el token del localStorage
    // lo traduciremos y enviaremos un array con los 
    // datos traducidos
    const [token, setToken] = useLocalStorage('token', '');
    
    if(token !== ''){
        return jwt.decode(token).data; 
    }
    return false;
}