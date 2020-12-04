import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import './App.css';

import Welcome from './components/welcome'; 
import Register from './components/register'; 
import Login from './components/login';
import Footer from './components/welcome/footer'; 

function App() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={ Welcome } />
			<Route exact path="/register" component={ Register } />
			<Route exact path="/login/:res?/:variant?/:message?" component={ Login } />
			<Footer />
		</BrowserRouter>
  	);
}

export default App;
