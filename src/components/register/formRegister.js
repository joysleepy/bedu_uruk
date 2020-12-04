import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

import { useFormik } from 'formik'; 
import * as Yup from 'yup'; 
import swal from 'sweetalert'; 

import { BASE_API, SITE_KEY } from '../../keys'; 

function FormRegister(){
    const [registerOk, setRegisterOk]   = useState(false); 
    const [emailReg, setEmailReg]       = useState(null); 
    const [boxUpTitle, setBoxUpTitle]   = useState('No esperes más'); 
    const [boxTitle, setBoxTitle]       = useState('REGÍSTRATE'); 

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
        // Add reCaptcha FUNCIONA !!!!
        // const script = document.createElement("script"); 
        // script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`; 
        // script.addEventListener("load", handleLoaded)
        // document.body.appendChild(script)
        
        // Esta mejora de performance la sugirio teacher Ozz: cargar la API en el index.html y en el componente 
        // solo invocarel metodo dentro de este hook 
        handleLoaded();
    }, []);

    const initialValues = {
        gToken: '', 
        Nombres: '', 
        Apellido_Paterno: '', 
        Apellido_Materno: '', 
        email: '', 
        PWD: '', 
        RE_PWD: '' 
    }
    
    async function postData(data){
        try{
            //console.log('postData', data);

            let response = await fetch(`${BASE_API}registro`, {
                method: 'POST',
                body: JSON.stringify(data, null, "  "),
                //body: data, 
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }); 
            if (response.ok){
                response.json().then(result => {
                    if(result.result){
                        setEmailReg(result.datas.email);
                        setBoxUpTitle('registro exitoso');
                        setBoxTitle('¡MUCHAS GRACIAS!');
                        setRegisterOk(true);
                    }
                    else{
                        swal(result.message); 
                    }
                }); 
            }
        }
        catch(e){
            console.log(e); 
        }
    }

    const onSubmit = values => {
        handleLoaded();
        // console.log('Form values: ', values); 
        postData(values); 
    }
    
    const validationSchema = Yup.object({
        Nombres: Yup.string().required('Requerido'), 
        Apellido_Paterno: Yup.string().required('Requerido'), 
        Apellido_Materno: Yup.string().required('Requerido'), 
        email: Yup.string().email('Formato inválido').required('Requerido'), 
        PWD: Yup.string().required('Requerido'), 
        RE_PWD: Yup.string().required('Requerido'), 
    });

    const formik = useFormik({
        initialValues, 
        onSubmit, 
        validationSchema 
    });  

    // console.log('Form errors', formik.errors); 

    return(
        <div className="col-12 col-md-6" style={{display: "flex", alignItems: "center"}}>
            <div id="signupbox" className="container gradientBox pt-2 pb-2">
                <div className="text-center text-uppercase">
                    <small>{boxUpTitle}</small>
                    <h2>{boxTitle}</h2>
                </div>
                
                { registerOk ? (
                    <>
                        <p>
                            <strong>Sus datos fueron recibidos y almacenados de manera exitosa</strong>
                        </p>
                        <p>
                            Se ha enviado un correo electrónico a la dirección proporcionada <strong>{emailReg}</strong> <br />
                            Por favor siga las instrucciones de dicho correo para activar su cuenta, si este no llegó a su bandeja de 
                            entrada, por favor revise también en su bandeja de elementos no deseados y/o spam.
                        </p>
                        <p className="text-right">
                            <Link to='/login'>Ir a Login</Link> | <Link to='/'>Regresar a Página Principal</Link> 
                        </p>
                    </>
                ) : (
                    <form id="signupform" className="row" action="" method="POST" autoComplete="off" onSubmit={formik.handleSubmit}>
                    
                        <input type="hidden" name="gToken" id="gToken" onChange={formik.handleChange} value={formik.values.gToken} />
                        
                        <div id="signupalert" style={{display:'none'}} className="alert alert-danger">
                            <p>Error:</p>
                            <span></span>
                        </div>
                        
                        <div className="form-group col-lg-6">
                            <label htmlFor="Nombres" className="control-label mb-0">Nombres:</label>
                            <input type="text" className="form-control" name="Nombres" placeholder="Nombres" {...formik.getFieldProps('Nombres')} />
                            {formik.touched.Nombres && formik.errors.Nombres ? <span>{formik.errors.Nombres}</span> : null }
                        </div>
                        
                        <div className="form-group col-lg-6">
                            <label htmlFor="Apellido_Paterno" className="control-label mb-0">Apellido Paterno</label>
                            <input type="text" className="form-control" name="Apellido_Paterno" id="Apellido_Paterno" placeholder="Apellido Paterno" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Apellido_Paterno} />
                            {formik.touched.Apellido_Paterno && formik.errors.Apellido_Paterno ? <span>{formik.errors.Apellido_Paterno}</span> : null }
                        </div>
                        
                        <div className="form-group col-lg-6">
                            <label htmlFor="Apellido_Materno" className="control-label mb-0">Apellido Materno</label>
                            <input type="text" className="form-control" name="Apellido_Materno" id="Apellido_Materno" placeholder="Apellido Materno" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Apellido_Materno} />
                            {formik.touched.Apellido_Materno && formik.errors.Apellido_Materno ? <span>{formik.errors.Apellido_Materno}</span> : null }
                        </div>
                                                    
                        <div className="form-group col-lg-6">
                            <label htmlFor="email" className="control-label mb-0">Email</label>
                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                            {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null }
                        </div>
                        
                        <div className="form-group col-lg-6">
                            <label htmlFor="PWD" className="control-label mb-0">Password</label>
                            <input type="password" className="form-control" name="PWD" id="PWD" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.PWD} />
                            {formik.touched.PWD && formik.errors.PWD ? <span>{formik.errors.PWD}</span> : null }
                        </div>
                        
                        <div className="form-group col-lg-6">
                            <label htmlFor="RE_PWD" className="control-label mb-0">Confirmar Password</label>
                            <input type="password" className="form-control" name="RE_PWD" id="RE_PWD" placeholder="Confirmar Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.RE_PWD} />
                            {formik.touched.RE_PWD && formik.errors.RE_PWD ? <span>{formik.errors.RE_PWD}</span> : null }
                        </div>
                        
                        <div className="form-group col text-right">                                      
                            <button id="btn-signup" type="submit" className="btn btn-info"><i className="icon-hand-right"></i>Registrarse</button> 
                        </div>
                    </form>    
                )}


                <pre className="results__display-wrapper">
                    <code className="results__display" style={{}}></code>
                </pre> 

            </div>
        </div>
    );
} 
export default FormRegister; 