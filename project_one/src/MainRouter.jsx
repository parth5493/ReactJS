import * as React from "react";
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import LoginPage from './LoginPage' 
import APIExamplePage from './APIExamplePage'
import SliderPage from './SliderPage'
import APIExampleOne from './APIExampleOne'
import APIExampleTwo from './APIExampleTwo'
import APIExampleThree from './APIExampleThree'
import SOAPvsREST from './SOAPvsREST'
import { Suspense } from 'react';

const AdminRouter = React.lazy(()=>{return import('./admin/adminrouter')})

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <><HomePage/></>,
  },{
    path: "/homepage",
    element: <><HomePage/></>,
  },{
    path: "/contactus",
    element: <><HomePage/><ContactUs/></>,
  },{
    path: "/aboutus",
    element: <><HomePage/><AboutUs/></>,
  },{
    path: "/signin",
    element: <><LoginPage/></>,
  },{
    path: "/slider",
    element: <><HomePage/><SliderPage/></>,
  },{
    path: "/api",
    element: <><HomePage/><APIExamplePage/></>,
    children: [
      {
        path: "apiexampleone",
        element: <><APIExampleOne /></>
      }, {
        path: "apiexampletwo",
        element: <><APIExampleTwo /></>
      }, {
        path: "apiexamplethree",
        element: <><APIExampleThree /></>
      }, {
        path: "soapvsrest",
        element: <><SOAPvsREST /></>
      }
    ]
  },{
    path: "admin/*",
    element: <Suspense fallback={<h2>Loading...</h2>}><AdminRouter/></Suspense>,
  }
]);

export default MainRouter;