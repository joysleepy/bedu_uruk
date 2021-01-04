import React from 'react';
import Login from '../components/login';
import Welcome from '../components/welcome';
import Main from "../components/main";
import Register from '../components/register';

export default[
   {
        path: '/',
        exact: true,
        component: () => <Welcome/>
    },
    {
        path: '/login/:res?/:variant?/:message?',
        exact: true,
        component: () => <Login/>
    },
    {
        path: '/main',
        component: () => <Main/>
    },
    {
        path: '/register',
        component: () => <Register/>
    }
];

