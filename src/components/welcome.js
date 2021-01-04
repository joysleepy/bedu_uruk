import React, { useContext } from 'react'; 
import '../css/welcome.css'; 

import Header           from './welcome/header'; 
import Main             from './welcome/main'; 
import JumboWelcome     from './welcome/jumbo_welcome'; 
import Infobody         from './welcome/infobody';
import Contacto         from './welcome/contacto'; 
import Footer           from './welcome/footer';  
import AuthContext from '../store/AutContext';
function Welcome({userData2=null, updateUserData=null}){

    const [auth,userData] = useContext(AuthContext);
    return(
        <>
            <Header></Header>
            <Main />
            <Infobody />
            <JumboWelcome />
            <Contacto /> 
            <Footer />
        </>
    );
}
export default Welcome; 