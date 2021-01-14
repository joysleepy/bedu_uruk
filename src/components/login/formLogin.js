import React, { useState, useEffect } from 'react';     // agregamos useContext
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios'; 

import { useFormik } from 'formik'; 
import * as Yup from 'yup'; 
import swal from 'sweetalert'; 

import { SITE_KEY } from '../../keys'; 
import setAutorizationToken from '../utils/setAutorizationToken'; 

import Uruk_logo from '../../images/Uruk_logo-01.png'; 
import { useLocalStorage }  from '../../hooks/useLocalStorage'; 

function FormLogin(props){       
    const [auth, setAuth] = useState(false);

    // Intrentaremos guardar el token en session 
    const [token, setToken] = useLocalStorage('token', ''); 

    const handleLoaded = _ => {
        window.grecaptcha.ready(_ => {
          window.grecaptcha
            .execute(SITE_KEY, { action: "submit" })
            .then(token => { 
                formik.setFieldValue('gToken', token);
            })
        })
    }
    
    useEffect(() => {
        // Mejora Ozz
        handleLoaded();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const initialValues = {
        gToken: '', 
        usuario: '', 
        password: '', 
    }
    
    const postData = (data) => {
        const headers = {
            'Content-type': 'application/json; charset=UTF-8'
        }

        axios.post('auth', data, {headers: headers}).then(
            res => {
                // console.log(res); 
                if (res.data.result){   // si login ok
                    const access_token  = res.data.jwt; 
                    //const expire_at     = res.data.expire_at; 
                                        
                    // Ahora lo guardaremos en un custom hook que guardara en localStorage
                    setToken(access_token); 

                    // Este metodo es para que persista en todas los envios mediante axios
                    setAutorizationToken(access_token); 
                    setAuth(true); 
                }
                else{
                    swal(res.data.message);
                    console.log(res.data.log); 
                }	
            }, 
            err => {
                console.log(err); 
            }
        )
    }

    const onSubmit = values => {
        handleLoaded();
        // console.log(values); 
        postData(values); 
        //updateIsLogged(true); 
    }
    
    const validationSchema = Yup.object({
        usuario: Yup.string().email('Formato inválido').required('Requerido'), 
        password: Yup.string().required('Requerido'), 
    });

    const formik = useFormik({
        initialValues, 
        onSubmit, 
        validationSchema 
    });  
    
    const mostrarPassword = () => {
        // let cambio      = document.getElementById("password");
        // let eye_pass    = document.getElementById('eye_pass');
        
        // if(cambio.type == "password"){
        //     cambio.type = "text";
        //     eye_pass.classList.remove('fa-eye-slash').add('fa-eye');
        // }
        // else{
        //     cambio.type = "password";
        //     eye_pass.classList.remove('fa-eye').add('fa-eye-slash');
        // }
    }
    
    if(token && auth){
        // Si tenemos token y auth redireccionamos a main
        return (<Redirect to='/main'/>)
    }

    return(        
        <div className="row mt-2">
            <div className="col-12 mb-4 col-md-6 mb-md-0" style={{display: "flex", alignItems: "center"}}>
                <Link to="/">
                    <img className="w-100" src={Uruk_logo} alt="uruk main logo"></img>
                </Link>
            </div>
            <div className="col-12 mb-4 col-md-6 mb-md-0">
                <div id="loginbox" style={{marginTop:"50px"}} className="mainbox">                    
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <div className="panel-title">Iniciar Sesi&oacute;n</div>
                            <div style={{float:"right", fontSize: "80%", position: "relative", top:"-25px"}}><a href="recupera.html">¿Se te olvid&oacute; tu contraseña?</a></div>
                        </div>     
                    
                        <div style={{paddingTop:"30px"}} className="panel-body" >
                            <form id="loginform" className="form-horizontal" action="" method="POST" 
                                autoComplete="off" onSubmit={formik.handleSubmit}>
                                <input type="hidden" name="gToken" id="gToken" onChange={formik.handleChange} value={formik.values.gToken} />
                                
                                <div style={{marginBottom: "25px"}} className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text fa fa-user icon"></span>
                                    </div>   
                                    <input type="text" className="form-control" name="usuario" placeholder="email" {...formik.getFieldProps('usuario')} /> 
                                    {formik.touched.usuario && formik.errors.usuario ? <span className="label__error">{formik.errors.usuario}</span> : null }
                                </div>
                                
                                <div style={{marginBottom: "25px"}} className="input-group">
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" {...formik.getFieldProps('password')}  />
                                    <div className="input-group-append">
                                        <button id="show_password" className="btn btn-primary" type="button" onClick={mostrarPassword()}> 
                                            <span id="eye_pass" className="fa fa-eye-slash icon"></span> 
                                        </button>
                                    </div>
                                    {formik.touched.password && formik.errors.password ? <span className="label__error">{formik.errors.password}</span> : null }
                                </div>
                                
                                <div style={{marginTop:"10px"}} className="form-group">
                                    <div className="col-sm-12 controls text-right">
                                        <button id="btn-login" type="submit" className="btn btn-success bg-uruk-navy">Iniciar Sesi&oacute;n</button>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <div className="col-md-12 control">
                                        <div style={{borderTop: "1px solid #888", paddingTop:"15px", fontSize:"85%"}} >
                                            No tienes una cuenta aún? <Link to="/register">Registrate aquí</Link>
                                        </div>
                                    </div>
                                </div>    
                            </form>
                        </div>                     
                    </div>  
                </div>
            </div>
        </div>
    );
}
export default FormLogin;