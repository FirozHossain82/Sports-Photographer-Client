import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceSection from "../../Pages/Shared/ServiceComponents/ServiceSection/ServiceSection";
import SignUp from "../../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home dataSize={3}></Home>
        },
        {
          path:'/home',
          element:<Home dataSize={3}></Home>
        },
        {
          path:'/service',
          element:<ServiceSection></ServiceSection>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    }
  ])
  export default router;