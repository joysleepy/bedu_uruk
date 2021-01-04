import React,{ useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../store/AutContext";
import jwt from 'jsonwebtoken'; 

export default function MainRouter(props) {
    if(localStorage.access_token){
        const t = jwt.decode(localStorage.access_token).data;
        if(t){
            return <Route  {...props} />;
        }
    }
    return <Redirect to='/' />;

}