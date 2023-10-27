import * as React from "react";
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import HomePage from './pages/homepage'
import AccessData from './pages/accessdata'
import ContactUs from './pages/contactus'
import AboutUs from './pages/aboutus'
import LoginPage from './components/loginpage'

const AdminRouter = React.lazy(()=>{return import('./adminrouter')})

const Router = createBrowserRouter([
    {
        path: "/",
        element: <><HomePage /></>,
    }, {
        path: "/homepage",
        element: <><HomePage /></>,
    },{
        path: "/accessapi",
        element: <><AccessData /></>,
    }, {
        path: "/contactus",
        element: <><HomePage /><ContactUs /></>,
    }, {
        path: "/aboutus",
        element: <><HomePage /><AboutUs /></>,
    }, {
        path: "/signin",
        element: <><LoginPage /></>,
    }, {
        path: "admin/*",
        element: <Suspense fallback={<h2>Loading...</h2>}><AdminRouter/></Suspense>,
       }
])

export default Router;