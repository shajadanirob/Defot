import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Shope from "../Pages/Shpoe/Shope";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/shope',
          element: <Shope/>
        }
      ],
    },
    {
      path:'/login',
      element: <Login/>,

    },
    {
      path:'/signUp',
      element: <Register/>
    }
  ]);

export default Router  