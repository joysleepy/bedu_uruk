import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'; 

import Dash from './pages/dashboard/Dash'; 
import Fiel from './pages/fiel/Fiel';

export default function Admcontent() {
    // let { url, path } = useRouteMatch();
    // console.log('Admcontext url: ',url); 
    
    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">  
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Bienvenido</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <Link to="/main">Home</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Pagina de Inicio
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <Switch>
                    <Route path={`/main/dash`} component={Dash}/>
                    <Route path={`/main`} component={Fiel}/>
                </Switch>
            </div>
        </div>
    );
}
