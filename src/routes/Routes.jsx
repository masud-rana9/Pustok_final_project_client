import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Books from "../pages/home/Books";
import BookStore from "../pages/home/BookStore";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import Carts from "../pages/dashboard/Carts";
import Allusers from "../pages/dashboard/Allusers";
import AddItem from "../pages/dashboard/AddItem";
import ManageBook from "../pages/dashboard/ManageBook";
import Editbook from "../pages/dashboard/Editbook";

export const router = createBrowserRouter([
  //home related routes
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: (
          <PrivateRoutes>
            <Books></Books>
          </PrivateRoutes>
        ),
      },
      {
        path: "/store/:CategoryName",
        element: <BookStore />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  //dashboard routes
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/carts",
        element: <Carts />,
      },
      {
        path: "/dashboard/all-users",
        element: <Allusers />,
      },
      {
        path: "/dashboard/add-book",
        element: (
          <PrivateRoutes>
            <AddItem />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/manage-book",
        element: (
          <PrivateRoutes>
            <ManageBook />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/edit-book/:id",
        element: (
          <PrivateRoutes>
            <Editbook />
          </PrivateRoutes>
        ),
      },
    ],
  },

  //not found

  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);
