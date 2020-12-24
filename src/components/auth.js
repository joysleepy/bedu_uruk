import axios from 'axios'; 

export async function isAuthenticaded() {
    const promise =  await axios.get('checkToken'); 
    // console.log('promise', promise); 
    return promise.data.result;
}

export default isAuthenticaded;