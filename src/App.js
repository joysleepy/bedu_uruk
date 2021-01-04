import  React , {useState, useEffect, useContext}  from 'react'; 
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'; 
// import axios from 'axios'; 
import jwt from 'jsonwebtoken'; 

import './App.css';

import setAutorizationToken from './components/utils/setAutorizationToken'; 
import { isAuthenticaded } from './components/auth'; 

// import { UserContextProvider } from './components/context/UserContext'; 
import AuthContext from './store/AutContext';
// import MainRouter from './routers/MainRouter';
import routes from './utils/routes';
import MainRouter from './routers/MainRouter';

setAutorizationToken(localStorage.access_token); 


function App() {
	// const [auth,userData] = useContext(AuthContext);
	const [userData, setUserData] = useState({});
	const [userData2, setUserData2] = useState(false);
	const [auth, setAuth] = useState(false);
	
    useEffect(() => {
        async function handleLogin(){
            const isAuth = await isAuthenticaded();
			
			// console.log('main - isAuth', isAuth);
			if(isAuth){
				if(localStorage.access_token){
					setUserData(jwt.decode(localStorage.access_token).data);
					setAuth(true);
					setUserData2(true);
				}
				
			}else{
				setUserData({});
				setAuth(false);
				setUserData2(false);
			}
			
			
			//eif(isAuth){
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

    }, [auth]);
	
	
	return (
		<AuthContext.Provider value={[auth,userData]}>
			
		<BrowserRouter basename={'/front'}>
			<Switch>
				{routes.map((route,index) => {

					if(route.path == "/main"){
						return (
							<MainRouter 
								key={index}
								exact={route.exact} 
								path={route.path}
								component={route.component}
							/>
						)
					}else{

						return (
							<Route 
								key={index}
								exact={route.exact} 
								path={route.path}
								component={route.component}
							/>
							
						);
					}
					
				}
				)}	
			</Switch>		
							
		</BrowserRouter>

		</AuthContext.Provider>
  	);
}

export default App;
