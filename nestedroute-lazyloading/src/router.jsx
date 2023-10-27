import { createBrowserRouter } from "react-router-dom";
import Hompage from './homepage';
import Contactus from './contactus';
import Aboutus from './about';
import Example from './example'
import React,{ Suspense } from "react";

//const FunctionalCompoReact = React.lazy(()=> {return import ("./FunctionalCompoReact")})
const ClassCompoReact = React.lazy(()=> {return import ("./ClassCompoReact")})
const router = createBrowserRouter ([
    {
        path: "/",
        element: <><Hompage/></>,
    }, {
        path: "/contactus",
        element: <><Hompage/><Contactus/></>,
    },
    {
        path: "/about",
        element: <><Hompage/><Aboutus/></>,
    },{
        path: "/example",
        element: <><Hompage/><Example/></>,
        children: [
            {
                //path: "functionalcompo",
                path: "classcompo/*",
                //element: "testing"
                //element: <Suspense fallback={<h2>Loading...</h2>}> <FunctionalCompoReact/></Suspense>,
                element: <Suspense fallback={<h2>Loading...</h2>}> <ClassCompoReact/></Suspense>,
                
            }] 
    }

]);

export default router;