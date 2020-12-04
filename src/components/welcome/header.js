import React from "react";
import { Link } from 'react-router-dom'; 

import '../../css/header.css'; 
import Uruk_logo from '../../images/Uruk_logo-01.png'; 

function Header(){
    return(
		<nav id="header" className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
			<div className="container">
				<a className="navbar-brand" href="index.html">
					<img src={Uruk_logo} alt="URUK Logo"></img>
				</a>

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
						<li className="nav-item btn-w-navy">
							<Link className="nav-link uruk-text" to="/register">Regístrate</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link uruk-text" to="/login">Ingresar</Link>
						</li>
					</ul>
				</div>
        	</div>
    	</nav>
    );
}

export default Header; 