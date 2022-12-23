import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
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
          path: '/service/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/myreviews',
          element:<MyReviews></MyReviews>
        },
        {
          path: '/addservice',
          element: <AddService></AddService>
        }

      ]
    }
  ])
  export default router;