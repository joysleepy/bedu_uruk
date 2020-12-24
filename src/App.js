import { useState, useEffect } from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import axios from 'axios'; 
import jwt from 'jsonwebtoken'; 

import './App.css';

import Welcome from './components/welcome'; 
import Register from './components/register'; 
import Login from './components/login';
import Main from './components/main'; 

import setAutorizationToken from './components/utils/setAutorizationToken'; 
import { isAuthenticaded } from './components/auth'; 

import { UserContextProvider } from './components/context/UserContext'; 

setAutorizationToken(localStorage.access_token); 


function App() {
	const [userData, setUserData] = useState({});
	const [auth, setAuth] = useState(false);
	
	const updateUserData = (state) => {
		setUserData(state);
	}
	
	
	// useEffect(() => {
	// 	axios.get('checkToken').then(
	// 		res => {
	// 			// console.log(res); 
	// 			if (res.data.result){ // si el token aun esta vigente
	// 				let decoded_token = jwt.decode(localStorage.access_token); 
	// 				console.log(decoded_token); 
	// 				updateUserData(decoded_token.data); 
	// 			}
	// 			else{
	// 				// console.log('Empty user data'); 
	// 			}	
	// 		}, 
	// 		err => {
	// 			console.log(err); 
	// 		}
	// 	)
	// }, []);
	
	
    
    useEffect(() => {
        async function handleLogin(){
            const isAuth = await isAuthenticaded();
			
			// console.log('main - isAuth', isAuth);
			setAuth(isAuth); 
			
			// if(isAuth){
			// 	// Auth es true, entonces el token que es el mismo que tenemos tanto en localStorage como en axios es valido aun
			// 	let decoded_token = jwt.decode(localStorage.access_token); 
			// 	// Y actualizamos el status de la variable de estado
			// 	updateUserData(decoded_token.data); 
			// }
			// else{
			// 	// token invalido o expirado
			// 	console.log('Token vacio o expirado, limpiando storage...'); 
			// 	// y tendriamos que tumbarlo del local storage
			// 	setAutorizationToken(); 
			// }
        } 
        
        handleLogin();

    }, [userData]);
	
	return (
		<BrowserRouter basename={'/front'}>
			<UserContextProvider>
				<Route exact path="/register" component={ () => <Register userData={ userData } updateUserData={ updateUserData }/> } />
				<Route exact path="/login/:res?/:variant?/:message?" component={ () => <Login updateUserData={ updateUserData } /> } />
				<Route path="/main" component={ () => <Main userData={ userData } updateUserData={ updateUserData }/>} />
				<Route exact path="/" component={ () => <Welcome userData={ userData } updateUserData={ updateUserData }/>} />
			</UserContextProvider>
		</BrowserRouter>
  	);
}

export default App;
