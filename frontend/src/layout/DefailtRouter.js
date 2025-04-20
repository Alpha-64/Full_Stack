import React from 'react'
import MainLayout from './MainLayout'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About';
import Login from '../pages/Login';


const DefailtRouter =  createBrowserRouter( [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index:true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "login", element: <Login /> }
        ]
    }
])

export default DefailtRouter
