import Home from "../Home";
import Beaches from "./Beaches"
import ErrorPage from "./ErrorPage";
import BeachProfile from "./BeachProfile";
import About from "./About";
import App from "./App";
import Form from "./Form";

const routes = [
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/",
        element: <Home />,
      
      },
      {
        path: "/beaches",
        element: <Beaches />,
      },
      {
        path: "/form",
        element: <Form />
      },
        

      {
        path: "/beaches/:id",
        element: <BeachProfile />,
      
      }, 
      {
        path: "/about",
        element: <About />,
      
      }
    ]
  }
];
  
  export default routes;