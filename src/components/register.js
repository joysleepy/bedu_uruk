import React from 'react'; 


import WhyRegister      from './register/whyRegister'; 
import FormRegister     from './register/formRegister'; 

function Welcome(){
    return(
        <section id="content" className="mt-4">
            <div className="container">
                <div className="row mt-2">
                    <WhyRegister />
                    <FormRegister /> 
                </div>
            </div>
        </section>
    );
}
export default Welcome; 