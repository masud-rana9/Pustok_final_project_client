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
    { name: "Dashboard", path: "/dashboard" },
    { name: "Store", path: "/store/Medical" },
    { name: "Login", path: "/login" },
  ];

  return (
    <div className="bg-[#0074D9]  md:z-10 p-4 md:px-10 flex justify-evenlyitems-center sticky top-0 z-50">
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
      <div className=" hidden md:block w-40 h-20 text-white">
        {/* <img src={logo} alt="logo" /> */}LOGO
      </div>

      {/* Navbar Items */}
      <div
        className={`md:flex md:flex-row md:items-center md:gap-16 absolute md:relative left-0 w-full transition-all duration-500 ease-in-out ${
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
          <Link to="/dashboard/carts">
            <div className="text-white p-4">
              <BsCartPlus className="text-2xl mt-2 " />
              <span className="text-xl">{carts.length}</span>
            </div>
          </Link>
          {user ? (
            <>
              <button className="text-white" onClick={handleLogout}>
                Logout || {user.displayName}
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
