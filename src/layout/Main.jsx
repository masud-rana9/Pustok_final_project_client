import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Set the duration of animations in ms
      once: false, // Animation occurs only once
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" w-full px-4 md:container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
