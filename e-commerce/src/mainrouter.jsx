import * as React from "react";
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import HomePage from './pages/homepage'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <><HomePage /></>,
    },{
        path: "/store",
        element: <><HomePage /></>,
    },{
        path: "/mac",
        element: <><HomePage /></>,
    },{
        path: "/ipad",
        element: <><HomePage /></>,
    },{
        path: "/iphone",
        element: <><HomePage /></>,
    },{
        path: "/watch",
        element: <><HomePage /></>,
    },{
        path: "/airpods",
        element: <><HomePage /></>,
    },{
        path: "/tvandhome",
        element: <><HomePage /></>,
    },{
        path: "/entertainment",
        element: <><HomePage /></>,
    },{
        path: "/accessories",
        element: <><HomePage /></>,
    },{
        path: "/support",
        element: <><HomePage /></>,
    }
])

export default Router;