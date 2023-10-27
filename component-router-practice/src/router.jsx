import { createBrowserRouter } from "react-router-dom";
import Homepage from './homepage'
import Menupage from './menu'
import  './style.css';


const router = createBrowserRouter([
    {
        path: "/",
        element: <><Homepage/></>,
    },/*{
        path: "/menu",
        element: <><Homepage/></>,
    }*/,{
        path: "/menu",
        element: <><Menupage/></>,
    },
]);

export default router;