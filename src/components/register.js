import React from 'react'; 
import '../css/welcome.css'; 

import Header           from './welcome/header'; 
import WhyRegister      from './register/whyRegister'; 
import FormRegister     from './register/formRegister'; 
import Footer           from './welcome/footer';

function Welcome({ userData, updateUserData }){
    return(
        <>
        <Header userData={ userData } updateUserData={ updateUserData }></Header>
        <section id="content" className="mt-4">
            <div className="container">
                <div className="row mt-2">
                    <WhyRegister />
                    <FormRegister /> 
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}
export default Welcome; 