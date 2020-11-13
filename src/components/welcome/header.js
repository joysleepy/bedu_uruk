import React from "react";
import { Link } from 'react-router-dom'; 

function Header(){
    return(
		<nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
			<div className="container">
				<a className="navbar-brand" href="index.html">
					<img src='./asets/images/Uruk_logo-01.png' alt="URUK Logo"></img>
				</a>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse" id="navbar">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link" href="#main">Que es URÜK
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#features">Beneficios</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#secondary">Secondary</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#newsletter">Newsletter</a>
						</li>
						<li className="nav-item">
							<Link className="nav-link uruk-text" to="/register">Registrarse</Link>
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