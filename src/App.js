import  React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import './App.css';

import setAutorizationToken from './components/utils/setAutorizationToken'; 
import routes from './utils/routes';
import MainRouter from './routers/MainRouter';

setAutorizationToken(localStorage.token); 

function App() {
	return (
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
  	);
}
export default App;
