import ReactDOM from 'react-dom/client';
import Routerdata from './router';
import {  RouterProvider,} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><RouterProvider router={Routerdata}/></>);

