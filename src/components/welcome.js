import React from 'react'; 
import '../css/welcome.css'; 

import Header       from './welcome/header'; 
import Main         from './welcome/main'; 
// import Features     from './welcome/features'; 
// import Secondary    from './welcome/secondary'; 
import JumboWelcome    from './welcome/jumbo_welcome'; 
//import Newsletter   from './welcome/newsletter'; 
import Infobody from './welcome/infobody';
import Contacto from './welcome/contacto'; 

function Welcome(){
    return(
        <>
            <Header></Header>
            <Main />
            <Infobody />
            <JumboWelcome />
            <Contacto /> 
        </>
    );
}
export default Welcome; 