import ReactDOM from 'react-dom/client';
import Routerdata from './router';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {  RouterProvider,} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><RouterProvider router={Routerdata}/></>);

