import React, { useContext }from "react";
import { Link, useRouteMatch } from "react-router-dom";

// import UserContext from '../context/UserContext'; 

export default function Admmenu() {
  let { url } = useRouteMatch();
  // const context = useContext(UserContext);
  // console.log('context', context); 

  // const usrData = JSON.parse(context.usrData); 

  // console.log('Admmenu url: ',url); 
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Unión URUK</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Avatar"
            />
          </div>
          <div className="info">
            <span className="d-block">
              {/* { usrData.Nombre_Completo } */}
            </span>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
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
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
