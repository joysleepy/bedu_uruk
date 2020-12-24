import React, { useState } from 'react'

const Context = React.createContext({});

export function UserContextProvider({ children }){
    
    const[ usrData, setUsrData] = useState(null); // asi funciona bien

    // ESTA DEFINICION / INICIALIZACION CREO NO ME LA PERMITE
    // const [ usrData, setUsrData] = useState({
    //     nombre: 'Juan', 
    //     apellido: 'Perez' 
    // });
    
    return(
        <Context.Provider value = {{usrData, setUsrData}} >
            { children }
        </Context.Provider>
    ); 
}

export default Context

