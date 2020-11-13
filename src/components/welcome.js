import React from 'react'; 
import '../css/welcome.css'; 

import Header       from './welcome/header'; 
import Main         from './welcome/main'; 
import Features     from './welcome/features'; 
import Secondary    from './welcome/secondary'; 
import Newsletter   from './welcome/newsletter'; 

function Welcome(){
    return(
        <>
            <Header></Header>
            <Main />
            <Features />
            <Secondary />
            <Newsletter /> 
        </>
    );
}
export default Welcome; 