import { createBrowserRouter } from 'react-router-dom';
import Homepage from './homepage'
import ContactUs from './Contactus'
import AboutUs from './Aboutus'
import Example from './Example'
import React,{ Suspense } from 'react';

const ClassCompo = React.lazy(()=>{return import('./ClassCompo')})
const RouterReact = createBrowserRouter([
    {
        path: "/",
        element: <><Homepage/></>,
    },{
        path: "/Contactus",
        element: <><Homepage/><ContactUs/></>,
    },
    ,{
        path: "/Aboutus",
        element: <><Homepage/><AboutUs/></>,
    },{
        path: "/example",
        element: <><Homepage/><Example/></>,
        children: [
            {
                path: "classcompo/*",
                //element: "testing",
                element: <Suspense fallback={<h2>Loading...</h2>}><ClassCompo/></Suspense>
            }
        ]
    },
    
]);

export default RouterReact;