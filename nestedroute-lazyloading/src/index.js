import ReactDOM from 'react-dom/client';
import RouterData from './router';
import {  RouterProvider,} from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><RouterProvider router={RouterData}/></>);


