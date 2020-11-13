import React from 'react'; 

import FormLogin from './login/formLogin'; 

function Login(){
    return(
        <section id="content" className="mt-4" style={{height: "80vh"}}>
            <div className="container">
                <FormLogin />
            </div>
        </section>
    );
}
export default Login; 