import { Toaster } from "react-hot-toast";
import {  RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes/Routes";

function App() {

  return (
    <div  className=" max-w-screen-2xl mx-auto bg-emerald-50" >
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
    </div>
  );
}

export default App;
