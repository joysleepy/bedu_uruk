import React from 'react'
import { Link } from "react-router-dom";

export default function Admfooter() {
    return (
		<footer className="main-footer" style={{ bottom: 0 }}>
			<strong>Copyright © 2012-2025 <Link to="https://hgsoft.mx">HGSoft.mx</Link>.</strong>
			Derechos Reservados.
			<div className="float-right d-none d-sm-inline-block">
				<b>Version Alpha</b> 0.0.5
			</div>
		</footer>
    ); 
}
