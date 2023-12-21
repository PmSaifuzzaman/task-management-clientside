import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddToDo from "../pages/AddToDo/AddToDo";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/aboutUs",
          element: <AboutUs></AboutUs>
        },
        {
          path: "/addToDo",
          element: <AddToDo></AddToDo>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ],
    },
  ]);

export default router;