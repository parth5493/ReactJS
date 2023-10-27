import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import {  RouterProvider} from "react-router-dom";
import CustomStore from './CustomStore'
import MainRouter from './mainrouter'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

console.log("Called MainROuter");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={CustomStore}>
    <RouterProvider router={MainRouter}/>
  </Provider>
);


