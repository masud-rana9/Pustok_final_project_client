import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaAddressBook,
  FaBook,
  FaCartPlus,
  FaFileContract,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdCalendarViewMonth, MdDashboard } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isAdmin] = useAdmin();

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <div className="md:flex mx-auto container ">
      <Helmet>
        <title>Pustok || Dashboard</title>
        <meta name="description" content="Pustok || Dashboard" />
      </Helmet>

      <div className="space-y-4 flex md:flex-col bg-slate-300 p-8 md:w-[40%] shadow-lg md:min-h-screen ">
        {isAdmin ? (
          <>
            <h2
              className={`flex items-center space-x-2 ${
                activeItem === "dashboard"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md  text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("dashboard")}
            >
              <MdDashboard className="text-2xl " />
              <Link
                to="/dashboard"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                Dashboard
              </Link>
            </h2>
            <h2
              className={`flex items-center space-x-2 ${
                activeItem === "admin-home"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md  text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("admin-home")}
            >
              <FaUser className="text-2xl" />
              <Link
                to="/dashboard/admin-home"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                Admin Home
              </Link>
            </h2>

            <h2
              className={`flex items-center space-x-2 ${
                activeItem === "add-book"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("add-book")}
            >
              <FaCartPlus className="text-2xl" />
              <Link
                to="/dashboard/add-book"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                Add Book
              </Link>
            </h2>

            <h2
              className={`flex items-center space-x-2 ${
                activeItem === "manage-book"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("manage-book")}
            >
              <MdCalendarViewMonth className="text-2xl" />
              <Link
                to="/dashboard/manage-book"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                Manage Book
              </Link>
            </h2>

            {/* <h2
              className={`flex items-center space-x-2 ${
                activeItem === "manage-bookings"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("manage-bookings")}
            >
              <VscPreview className="text-2xl" />
              <Link
                to="/dashboard/manage-bookings"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                Manage Bookings
              </Link>
            </h2> */}
            <h2
              className={`flex items-center space-x-2 ${
                activeItem === "contact-details"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("contact-details")}
            >
              <VscPreview className="text-2xl" />
              <Link
                to="/dashboard/contact-details"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                Contact Info
              </Link>
            </h2>
            <h2
              className={`flex items-center space-x-2 ${
                activeItem === "all-users"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("all-users")}
            >
              <FaAddressBook className="text-2xl" />
              <Link
                to="/dashboard/all-users"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                All users
              </Link>
            </h2>
          </>
        ) : (
          <>
            <h2
              className={`flex items-center space-x-2 ${
                activeItem === "dashboard"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md  text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("dashboard")}
            >
              <MdDashboard className="text-2xl " />
              <Link
                to="/dashboard"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                Dashboard
              </Link>
            </h2>
            <h2
              className={`flex items-center space-x-2 ${
                activeItem === "user-home"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md  text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("user-home")}
            >
              <FaUser className="text-xl" />
              <Link
                to="/dashboard/user-home"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                User Home
              </Link>
            </h2>

            <h2
              className={`flex items-center space-x-2 ${
                activeItem === "carts"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("carts")}
            >
              <FaCartPlus className="text-2xl" />
              <Link
                to="/dashboard/carts"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                Carts
              </Link>
            </h2>

            <h2
              className={`flex items-center space-x-2 ${
                activeItem === "add-book"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("add-book")}
            >
              <FaCartPlus className="text-2xl" />
              <Link
                to="/dashboard/add-book"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                Add book
              </Link>
            </h2>

            {/* <h2
              className={`flex items-center space-x-2 ${
                activeItem === "reservation"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-6 rounded-md text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("reservation")}
            >
              <MdCalendarViewMonth className="text-2xl" />
              <Link
                to="/dashboard/reservation"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                Reservation
              </Link>
            </h2> */}

            <h2
              className={`flex items-center space-x-2 ${
                activeItem === "add-reviews"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("add-reviews")}
            >
              <VscPreview className="text-2xl" />
              <Link
                to="/dashboard/add-review"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                Add Reviews
              </Link>
            </h2>

            {/* <h2
              className={`flex items-center space-x-2 ${
                activeItem === "my-booking"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-6 rounded-md text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("my-booking")}
            >
              <FaAddressBook className="text-2xl" />
              <Link
                to="/dashboard/my-booking"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                My Booking
              </Link>
            </h2> */}
            <h2
              className={`flex items-center space-x-2 ${
                activeItem === "my-books"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md text-white"
                  : ""
              }`}
              onClick={() => handleItemClick("my-books")}
            >
              <FaBook className="text-2xl" />
              <Link
                to="/dashboard/my-books"
                className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
              >
                My Books
              </Link>
            </h2>
          </>
        )}

        {/* shared menu */}
        <hr className="text-4xl text-black p-4 " />
        <h2
          className={`flex items-center space-x-2 ${
            activeItem === ""
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md text-white"
              : ""
          }`}
          onClick={() => handleItemClick("/")}
        >
          <FaAddressBook className="text-2xl" />
          <Link
            to="/"
            className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
          >
            Home
          </Link>
        </h2>
        <h2
          className={`flex items-center space-x-2 ${
            activeItem === "books"
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md text-white"
              : ""
          }`}
          onClick={() => handleItemClick("books")}
        >
          <FaBook className="text-2xl" />
          <Link
            to="/books"
            className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
          >
            Books
          </Link>
        </h2>
        <h2
          className={`flex items-center space-x-2 ${
            activeItem === "contact"
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-2 rounded-md text-white"
              : ""
          }`}
          onClick={() => handleItemClick("contact")}
        >
          <FaFileContract className="text-2xl" />
          <Link
            to="/contact"
            className="active:bg-slate-400 active:text-white transition-colors duration-200 ease-in-out"
          >
            Contact
          </Link>
        </h2>
      </div>

      <div className="w-screen">
        <div className="bg-slate-300 p-10 flex justify-center items-center">
          <h1 className="text-4xl font- semibold  ">Dashboard</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
