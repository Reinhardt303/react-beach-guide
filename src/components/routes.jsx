import Home from "../Home";
import Beaches from "./Beaches"
import ErrorPage from "./ErrorPage";
import BeachProfile from "./BeachProfile";
import About from "./About";

const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/beaches",
      element: <Beaches />,
      errorElement: <ErrorPage />    
    },
    {
      path: "/beaches/:id",
      element: <BeachProfile />,
      errorElement: <ErrorPage />
    }, 
    {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
      },
    ];
  
  export default routes;