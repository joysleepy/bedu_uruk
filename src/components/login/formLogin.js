import React from 'react'; 
import { Link } from 'react-router-dom';


function FormLogin(){
    return(
        <div class="row mt-2">
            <div class="col-12 mb-4 col-md-6 mb-md-0" style={{display: "flex", "align-items": "center"}}>
                <Link to="/">
                    <img class="w-100" src="./assets/images/Uruk_logo-01.png" alt="uruk main logo"></img>
                </Link>
            </div>
            <div className="col-12 mb-4 col-md-6 mb-md-0">
            <div id="loginbox" style={{"margin-top":"50px"}} className="mainbox">                    
                <div className="panel panel-info" >
                    <div className="panel-heading">
                        <div className="panel-title">Iniciar Sesi&oacute;n</div>
                        <div style={{float:"right", "font-size": "80%", position: "relative", top:"-25px"}}><a href="recupera.html">¿Se te olvid&oacute; tu contraseña?</a></div>
                    </div>     
                    
                    <div style={{"padding-top":"30px"}} className="panel-body" >
                        
                        <div style={{display:"none"}} id="login-alert" className="alert alert-danger col-sm-12"></div>
                        
                        <form id="loginform" className="form-horizontal" action="" method="POST" autocomplete="off">
                            <input type="hidden" name="google-response-token" id="google-response-token" value="" />
                            
                            <div style={{"margin-bottom": "25px"}} className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text fa fa-user icon"></span>
                                </div>   
                                <input id="usuario" type="text" className="form-control" name="usuario" value="" placeholder="usuario o email" required />                                     
                            </div>
                            
                            <div style={{"margin-bottom": "25px"}} className="input-group">
                                <input id="password" type="password" className="form-control" name="password" placeholder="password" required />
                                <div className="input-group-append">
                                    <button id="show_password" className="btn btn-primary" type="button" onclick="mostrarPassword()"> 
                                        <span id="eye_pass" className="fa fa-eye-slash icon"></span> 
                                    </button>
                                </div>
                            </div>
                            
                            <div style={{"margin-top":"10px"}} className="form-group">
                                <div className="col-sm-12 controls text-right">
                                    <button id="btn-login" type="submit" className="btn btn-success bg-uruk-navy">Iniciar Sesi&oacute;n</button>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <div className="col-md-12 control">
                                    <div style={{"border-top": "1px solid #888", "padding-top":"15px", "font-size":"85%"}} >
                                        No tienes una cuenta aún? <Link to="/register">Registrate aquí</Link>
                                    </div>
                                </div>
                            </div>    
                        </form>
                        
                        <pre className="results__display-wrapper">
                            <code className="results__display"></code>
                        </pre>

                    </div>                     
                </div>  
            </div>
        </div>
        </div>
    );
}
export default FormLogin;