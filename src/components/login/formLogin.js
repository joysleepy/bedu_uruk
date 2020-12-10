import React, { useState, useEffect } from 'react'; 
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios'; 
import jwt from 'jsonwebtoken'; 

import { useFormik } from 'formik'; 
import * as Yup from 'yup'; 
import swal from 'sweetalert'; 

import { BASE_API, SITE_KEY } from '../../keys'; 
import setAutorizationToken from '../utils/setAutorizationToken'; 

import Uruk_logo from '../../images/Uruk_logo-01.png'; 


function FormLogin({ updateUserData }){    
    
    const[isLogged, setIsLogged] = useState(false);
   
    const updateIsLogged = (state) => {
        
        console.log('updateIsLogged con: ' + state); 
        
        setIsLogged(true);
        // console.log('isLogged: ' + isLogged);   NO TIENE CASO YA QUE ES ASYNCRONO
	}

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
                    const expire_at     = res.data.expire_at; 
                    
                    // almacenamos jwt en local storage
                    localStorage.setItem("access_token", access_token);
                    localStorage.setItem("expire_at", expire_at);  
                    
                    //y la guardamos para el resto de la aplicacion
                    setAutorizationToken(access_token); 

                    // intentando decodear el token..
                    // console.log(jwt.decode(access_token));
                    let decoded_token = jwt.decode(access_token); 
                    console.log(decoded_token); 
                    
                    // Me ROMPIO LA CABEZA! PRIMERO ES EL CAMBIO DE ESTADO!!!
                    updateIsLogged(true); 
                    
                    // Y SEGUNDO EL MANDAR LA DATA AL PARENT, de lo contrario el parent se actualizaba y el estado de este componente volvia a FALSE
                    updateUserData(decoded_token.data); // en teoria esta actualiza por el state del componente padre (abuelo en este caso)  
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

    // async function postData(data){

    //     // ESTE APARTADO FUNCIONA CORRECTAMENTE
    //     // try{
    //     //     console.log('postData', data);

    //     //     let response = await fetch(`${BASE_API}auth`, {
    //     //         method: 'POST',
    //     //         body: JSON.stringify(data, null, "  "),
    //     //         headers: {
    //     //             'Content-type': 'application/json; charset=UTF-8'
    //     //         }
    //     //     }); 
    //     //     if (response.ok){
    //     //         response.json().then(result => {
    //     //             if(result.result){
    //     //                 // redirect...
    //     //                 swal('Éxito!', 'Credenciales correctas... redirect a dashboard', 'success'); 
    //     //                 console.log(result); 
    //     //                 // 08 DICIEMBRE 2020
    //     //                 // almacenamos jwt en local storage
    //     //                 localStorage.setItem("access_token", result.jwt);
    //     //                 localStorage.setItem("expire_at", result.expire_at);
    //     //             }
    //     //             else{
    //     //                 swal(result.message); 
    //     //             }
    //     //         }); 
    //     //     }
    //     // }
    //     // catch(e){
    //     //     console.log(e); 
    //     // }

    //     // Martes 08 de Diciembre 2020 - Intentando con axios
    //     try {
    //         const headers = {
    //             'Content-type': 'application/json; charset=UTF-8'
    //         }

    //         const response = await axios.post(`auth`, data, {headers: headers});
    //         console.log(response);
            
    //         if (response.data.result){
    //             const access_token  = response.data.jwt; 
    //             const expire_at     = response.data.expire_at; 
                
    //             // almacenamos jwt en local storage
    //             localStorage.setItem("access_token", access_token);
    //             localStorage.setItem("expire_at", expire_at);

    //             // y la guardamos para el resto de la aplicacion
    //             setAutorizationToken(access_token); 

    //             // intentando decodear el token..
    //             // console.log(jwt.decode(access_token));
    //             let decoded_token = jwt.decode(localStorage.access_token); 
    //             console.log(decoded_token); 
    //             updateUserData(decoded_token.data); 

    //             // para trabajar el redirect
    //             updateIsLogged(true); 

    //         }
    //         else{
    //             swal(response.data.message);         
    //         }

    //     } 
    //     catch (error) {
    //         console.error(error);
    //     }
    // }





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

    if(isLogged){
       console.log('islogged es en teoria true...'); 
       return <Redirect to={'/'} />
    }
    else{
        // console.log('always wrong...');
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
                <div className="panel panel-info" >
                    <div className="panel-heading">
                        <div className="panel-title">Iniciar Sesi&oacute;n</div>
                        <div style={{float:"right", fontSize: "80%", position: "relative", top:"-25px"}}><a href="recupera.html">¿Se te olvid&oacute; tu contraseña?</a></div>
                    </div>     
                    
                    <div style={{paddingTop:"30px"}} className="panel-body" >
                        
                        <form id="loginform" className="form-horizontal" action="" method="POST" autoComplete="off" onSubmit={formik.handleSubmit}>
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