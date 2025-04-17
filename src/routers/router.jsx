import {createBrowserRouter} from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/books/About";
import Contact from "../pages/books/Contact";
import Product from "../pages/books/Product";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
        path: "/",
        element: <Home/>,
        },
        {
            path: "/About",
            element: <About/>,
        },
        {
            path: "/Contact",
            element: <Contact/>,
        },
        {
          path: "/Product",
          element: <Product/>,
      }
    ]
    },
  ]);
  
  export default router;