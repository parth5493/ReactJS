import { createBrowserRouter } from 'react-router-dom';
import Homepage from './homepage'
import About from './about'
import Menu from './menu'
import Contact from './contact'
import './style.css'
import React, { Suspense } from 'react';

const ClassCompo = React.lazy(()=>{return import('./classcompo')})
const ReactRouter = createBrowserRouter([
    {
        path: "/",
        element: <><Homepage/></>,
    },{
        path: "/about",
        element: <><Homepage/><About/></>,
    },{
        path: "/menu",
        element: <><Homepage/><Menu/></>,
    },{
        path: "/contact",
        element: <><Homepage/><Contact/></>,
        children: [
            {
                path: "inquery/*",
                element: <Suspense fallback={<h2>Loading...</h2>}><ClassCompo/></Suspense>,
            }
        ]
    },
]) 

export default ReactRouter;