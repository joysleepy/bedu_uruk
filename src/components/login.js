import React from 'react'; 
import { useParams } from 'react-router';
import { Alert } from 'react-bootstrap';
import FormLogin from './login/formLogin'; 

function Login(){
    let { res, variant, message } = useParams(); 
    
    return(
        <section id="content" className="mt-4" style={{height: "80vh"}}>
            <div className="container">
                {res && <Alert variant={variant}>{message}</Alert>}
                <FormLogin />
            </div>
        </section>
    );
}
export default Login; 