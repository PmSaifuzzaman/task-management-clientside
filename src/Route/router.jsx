import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddToDo from "../pages/AddToDo/AddToDo";
import PrivateRoute from "./PrivateRoute";
import ManageTodo from "../pages/ManageToDo/ManageTodo";
import UpdateToDo from "../pages/UpdateToDo/UpdateToDo";



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
          element: <PrivateRoute><AddToDo></AddToDo></PrivateRoute>
        },
        {
          path: "/updateToDo/:id",
          element: <PrivateRoute><UpdateToDo></UpdateToDo></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/myTask/${params.id}`)
        },
        {
          path: "/manageToDo",
          element: <PrivateRoute><ManageTodo></ManageTodo></PrivateRoute>
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