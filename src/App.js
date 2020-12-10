import { useState, useEffect } from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import axios from 'axios'; 
import jwt from 'jsonwebtoken'; 

import './App.css';

import Welcome from './components/welcome'; 
import Register from './components/register'; 
import Login from './components/login';
import Footer from './components/welcome/footer';

import setAutorizationToken from './components/utils/setAutorizationToken'; 

setAutorizationToken(localStorage.access_token); 


function App() {
	const [userData, setUserData] = useState({});
	
	const updateUserData = (state) => {
		setUserData(state);
	}
	
	
	useEffect(() => {
		axios.get('checkToken').then(
			res => {
				// console.log(res); 
				if (res.data.result){ // si el token aun esta vigente
					let decoded_token = jwt.decode(localStorage.access_token); 
					console.log(decoded_token); 
					updateUserData(decoded_token.data); 
				}
				else{
					console.log(res.data.message); 
				}	
			}, 
			err => {
				console.log(err); 
			}
		)
    }, []);
	
	return (
		<BrowserRouter basename={'/front'}>
			<Route exact path="/" component={ () => <Welcome userData={ userData } updateUserData={ updateUserData }/>} />
			<Route exact path="/register" component={ () => <Register userData={ userData } updateUserData={ updateUserData }/> } />
			<Route exact path="/login/:res?/:variant?/:message?" component={ () => <Login updateUserData={ updateUserData } /> } />
			<Footer />
		</BrowserRouter>
  	);
}

export default App;
