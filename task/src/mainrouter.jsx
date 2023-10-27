import * as React from "react";
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './homepage';
import SignUp from './signup';
import LoginPage from './login'
import TaskTwo from './tasktwo'

const LoginRouter = React.lazy(()=>{return import('./loginrouter')})

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <><HomePage/></>,
  },,{
    path: "/homepage",
    element: <><HomePage/></>,
  },{
    path: "/signup",
    element: <><SignUp/></>,
  },{
    path: "/tasktwo",
    element: <><HomePage/><TaskTwo/></>,
  },{
    path: "login/*",
    element: <Suspense fallback={<h2>Loading...</h2>}><LoginRouter/></Suspense>,
  }
]);

export default MainRouter;


