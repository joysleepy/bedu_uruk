import React, { useState, useEffect } from 'react';     // agregamos useContext
import { Redirect, Route } from "react-router-dom";

import { isAuthenticaded } from '../components/auth'; 

export default function MainRouter(props) {
    const [loading, setLoading] = useState(true);
    const [isAut, setIsAut]     = useState(false);

    const { component: Component, ...rest } = props;
    
    useEffect(() => {
        const fetchData = async () => {

            const res = await isAuthenticaded();
            
            setIsAut(res);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <Route
            {...rest}
            render={() =>
                isAut ? (
                    <Component {...props} />
                ) : loading ? (
                    <div>LOADING...</div>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
}