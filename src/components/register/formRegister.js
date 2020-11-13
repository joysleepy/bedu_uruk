import React, { useEffect } from 'react'; 
import { BASE_API, SITE_KEY, SECRET_KEY } from '../../keys'; 
import { useFormik } from 'formik'; 

// const gtokenContainer   = document.getElementById("gToken"); 

console.log(BASE_API); 

function FormRegister(){
    
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
        // Add reCaptcha
        const script = document.createElement("script"); 
        script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`; 
        script.addEventListener("load", handleLoaded)
        document.body.appendChild(script)
    }, []);


    const formik = useFormik({
        initialValues: {
            gToken: '', 
            Nombres: '', 
            Apellido_Paterno: '', 
            Apellido_Materno: '', 
            email: '', 
            PWD: '', 
            RE_PWD: '' 
        }, 
        onSubmit: values => {
            console.log('Form values: ', formik.values); 
        }
    });  

    return(
        <div className="col-12 col-md-6" style={{display: "flex", alignItems: "center"}}>
            <div id="signupbox" className="container gradientBox pt-2 pb-2">
                <div className="text-center text-uppercase">
                    <small>No esperes más</small>
                    <h2>Regístrate</h2>
                </div>
                
                <form id="signupform" className="row" action="" method="POST" autoComplete="off" onSubmit={formik.handleSubmit}>
                    
                    <input type="hidden" name="gToken" id="gToken" onChange={formik.handleChange} value={formik.values.gToken} />
                    
                    <div id="signupalert" style={{display:'none'}} className="alert alert-danger">
                        <p>Error:</p>
                        <span></span>
                    </div>
                    
                    <div className="form-group col-lg-6">
                        <label htmlFor="Nombres" className="control-label mb-0">Nombres:</label>
                        <input type="text" className="form-control" name="Nombres" placeholder="Nombres" onChange={formik.handleChange} value={formik.values.Nombres} required />
                    </div>
                    
                    <div className="form-group col-lg-6">
                        <label htmlFor="Apellido_Paterno" className="control-label mb-0">Apellido Paterno</label>
                        <input type="text" className="form-control" name="Apellido_Paterno" id="Apellido_Paterno" placeholder="Apellido Paterno" onChange={formik.handleChange} value={formik.values.Apellido_Paterno} required />
                    </div>
                    
                    <div className="form-group col-lg-6">
                        <label htmlFor="Apellido_Materno" className="control-label mb-0">Apellido Materno</label>
                        <input type="text" className="form-control" name="Apellido_Materno" id="Apellido_Materno" placeholder="Apellido Materno" onChange={formik.handleChange} value={formik.values.Apellido_Materno} />
                    </div>
                                                
                    <div className="form-group col-lg-6">
                        <label htmlFor="email" className="control-label mb-0">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} required />
                    </div>
                    
                    <div className="form-group col-lg-6">
                        <label htmlFor="PWD" className="control-label mb-0">Password</label>
                        <input type="password" className="form-control" name="PWD" id="PWD" placeholder="Password" onChange={formik.handleChange} value={formik.values.PWD} required />
                    </div>
                    
                    <div className="form-group col-lg-6">
                        <label htmlFor="RE_PWD" className="control-label mb-0">Confirmar Password</label>
                        <input type="password" className="form-control" name="RE_PWD" id="RE_PWD" placeholder="Confirmar Password" onChange={formik.handleChange} value={formik.values.RE_PWD} required />
                    </div>
                    
                    <div className="form-group col text-right">                                      
                        <button id="btn-signup" type="submit" className="btn btn-info"><i className="icon-hand-right"></i>Registrarse</button> 
                    </div>
                </form>    
            
                <pre className="results__display-wrapper">
                    <code className="results__display" style={{}}></code>
                </pre>                             
            </div>
        </div>
    );
} 
export default FormRegister; 