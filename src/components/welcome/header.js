import React from "react";
import { Link } from 'react-router-dom'; 

import '../../css/header.css'; 
import Uruk_logo from '../../images/Uruk_logo_clean.png'; 
import Welcome from "../register";

function Header({userData, updateUserData}){
	
	const handleLogout = () => {
		localStorage.clear();
		updateUserData({});  
	}


	let optRegistrarse;
	let optRegistrado; 

	if (Object.keys(userData).length > 0){
		console.log(typeof userData); 
		optRegistrado = (
			<li className="nav-item">
				<span className="nav-link"> {userData.Nombres}  
					<Link to={'/'} onClick={handleLogout}> Salir </Link>
				</span>
			</li>
		);
	}
	else{
		optRegistrarse = (
			<li className="nav-item btn-w-navy btn-w-navy-header">
							<Link className="nav-link uruk-text" to="/register">Regístrate</Link>
			</li>
		);

		optRegistrado = (
			<li className="nav-item">
				<Link className="nav-link uruk-text" to="/login">Ingresar</Link>
			</li>
		);
	}


	return(
		<nav id="header" className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<img src={Uruk_logo} alt="URUK Logo"></img>
				</Link>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse" id="navbar">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link" href="#main">Conócenos
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#features">Ofrece</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#secondary">Contáctanos</a>
						</li>
						{optRegistrarse}
						{optRegistrado}
					</ul>
				</div>
        	</div>
    	</nav>
    );
}

export default Header; 