import React from 'react'; 
import '../css/welcome.css'; 

import Header           from './welcome/header'; 
import Main             from './welcome/main'; 
import JumboWelcome     from './welcome/jumbo_welcome'; 
import Infobody         from './welcome/infobody';
import Contacto         from './welcome/contacto'; 
import Footer           from './welcome/footer';  

function Welcome({userData, updateUserData}){
    return(
        <>
            <Header userData={ userData } updateUserData={ updateUserData }></Header>
            <Main />
            <Infobody />
            <JumboWelcome />
            <Contacto /> 
            <Footer />
        </>
    );
}
export default Welcome; 