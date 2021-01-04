import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect, useHistory } from 'react-router-dom'; 

import '../../css/header.css'; 
import Uruk_logo from '../../images/Uruk_logo_clean.png'; 
import AuthContext from "../../store/AutContext";
import Welcome from "../register";
import jwt from 'jsonwebtoken'; 

function Header(){
	const history = useHistory();
	const [auth, setAuth] = useState(false);
	const [userData, setUserData] = useState({});
	const handleLogout = () => {
		localStorage.clear();
		setAuth(false);
		setUserData({});

	}

	useEffect(() => {
		if(localStorage.access_token){
			const t = jwt.decode(localStorage.access_token).data;
			if(t){
				setUserData(t);
			}
		}
	}, [])

	let optRegistrarse;
	let optRegistrado; 

	if (userData.Nombre){
		optRegistrado = (
			<li className="w-nav-item">
				<span className="nav-link"> {userData.Nombres}  
					<Link to={'/'} onClick={handleLogout}> Salir </Link>
				</span>
			</li>
		);
	}
	else{
		optRegistrarse = (
			<li className="w-nav-item btn-w-navy btn-w-navy-header">
							<Link className="nav-link uruk-text" to="/register">Regístrate</Link>
			</li>
		);

		optRegistrado = (
			<li className="w-nav-item">
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
						<li className="w-nav-item">
							<a className="nav-link" href="#main">Conócenos
							</a>
						</li>
						<li className="w-nav-item">
							<a className="nav-link" href="#features">Ofrece</a>
						</li>
						<li className="w-nav-item">
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