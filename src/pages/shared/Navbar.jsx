import { useContext, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { BsCartPlus } from "react-icons/bs";
import useCarts from "../../hooks/useCarts";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [carts] = useCarts();
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navItem = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/books" },
    // { name: "Dashboard", path: "/dashboard/add-book" },
    { name: "Store", path: "/store/Medical" },
  ];

  return (
    <div className=" bg-[#0074D9] border-b-2 sticky top-0 z-50">
      <div className="  md:z-10 p-4 md:px-10 flex container mx-auto  sticky top-0 z-50">
        {/* Logo + Burger/Cross Icon for mobile */}
        <div
          onClick={() => setIsopen(!isopen)}
          className="md:hidden cursor-pointer"
        >
          {isopen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <CiMenuBurger className="text-white text-3xl" />
          )}
        </div>

        {/* Logo for Desktop */}
        <div className=" hidden md:block size-32 text-white">
          {/* <img src={logo} alt="logo" /> */}
          <Link to="/">
            <img src="../../../public/logo2-removebg-preview.png" alt="" />
          </Link>
        </div>

        {/* Navbar Items */}
        <div
          className={`md:flex md:flex-row md:items-center md:gap-3.5 absolute md:relative left-0 w-full transition-all duration-500 ease-in-out ${
            isopen ? "top-14 bg-[#0074D9]" : "-top-96"
          } md:top-0 ${isopen ? "block" : "hidden md:block"}`}
        >
          <div className="md:flex md:ml-auto">
            {" "}
            {/* Add this wrapper */}
            {navItem.map((nav) => (
              <Link
                className="text-white text-xl p-4 block md:inline-block"
                to={nav.path}
                key={nav.name}
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <div className="md:flex items-center gap-2 justify-between">
            {user && (
              <Link to="/dashboard" className="text-white text-xl p-4">
                Dashboard
              </Link>
            )}
            <Link to="/dashboard/carts">
              <div className="text-blue-700 mt-2 md:mt-0 p-2 flex w-full md:w-20 justify-center  items-center bg-white rounded-full  gap-2">
                <BsCartPlus className="text-xl mt-2 " />
                <span className="text-sm">{carts.length}</span>
              </div>
            </Link>
            {user ? (
              <>
                <button
                  className="text-white text-lg my-3 md:my-0 w-full md:w-20 rounded-full border border-white p-2 "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-white my-3 md:my-0 w-full text-lg rounded-full border border-white p-2 ">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
