import { createBrowserRouter } from "react-router-dom";
import Homepage from './home';
import Aboutus from './aboutus';

const router = createBrowserRouter([
    {
      path: "/",
      element: <><Homepage/></>,
    },{
        path: "/aboutus",
        element: <><Homepage/><Aboutus/></>,
    }
  ]);

export default router;