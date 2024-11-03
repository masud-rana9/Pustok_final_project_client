import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddItem from "../pages/dashboard/AddItem";
import Allusers from "../pages/dashboard/Allusers";
import Carts from "../pages/dashboard/Carts";
import ManageBook from "../pages/dashboard/ManageBook";
import Books from "../pages/home/Books";
import BookStore from "../pages/home/BookStore";
import Home from "../pages/home/Home";
import PrivateRoutes from "./PrivateRoutes";

import EditBook from "../pages/dashboard/Editbook";
import MyBooks from "../pages/dashboard/MyBooks";
import EditUserBook from "../pages/dashboard/EditUserBook";

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
        element: <Books></Books>,
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
            <EditBook />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/edit-userBook/:id",
        element: (
          <PrivateRoutes>
            <EditUserBook />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/my-books",
        element: (
          <PrivateRoutes>
            <MyBooks />
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
