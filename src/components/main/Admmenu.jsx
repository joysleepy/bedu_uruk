import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { GetDataFromToken } from '../auth'; 

export default function Admmenu() {
	let { url } = useRouteMatch();
	// console.log('Admmenu url: ',url); 

	const { Nombre_Completo } = GetDataFromToken(); 

	return (
		<aside className="main-sidebar sidebar-dark-primary elevation-4">
			<a href="index3.html" className="brand-link">
				<img src="dist/img/AdminLTELogo.png"
					alt="AdminLTE Logo"
					className="brand-image img-circle elevation-3"
					style={{ opacity: ".8" }}
				/>
				<span className="brand-text font-weight-light">Unión URUK</span>
			</a>

			<div className="sidebar">
				<div className="user-panel mt-3 pb-3 mb-3 d-flex">
					<div className="image">
						<img src="dist/img/user2-160x160.jpg"
							className="img-circle elevation-2"
							alt="User Avatar"
						/>
					</div>
					<div className="info">
						<span className="d-block text-wite">{Nombre_Completo}</span>
					</div>
				</div>

				<nav className="mt-2">
					<ul className="nav nav-pills nav-sidebar flex-column"
						data-widget="treeview"
						role="menu"
						data-accordion="false">
						<li className="nav-item has-treeview menu-open">
							<Link to="/main" className="nav-link active">
								<i className="nav-icon fas fa-tachometer-alt" />
								<p>
									Bienvenido
									<i className="right fas fa-angle-left" />
								</p>
							</Link>

							<ul className="nav nav-treeview">
								<li className="nav-item">
									<Link className="nav-link" to={`${url}/dash`}>
										<i className="far fa-circle nav-icon" />
										<p>Dashboard v1</p>
									</Link>
								</li>

								<li className="nav-item">
									<Link className="nav-link" to={`${url}/contribuyente`}>
										<i className="far fa-circle nav-icon" />
										<p>Contribuyente</p>
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
	);
}
