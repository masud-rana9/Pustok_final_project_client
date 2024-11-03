import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" w-full container mx-auto flex flex-col md:px-10 md:py-4 mt-20">
      <div className=" lg:flex  justify-between items-center mb-3 lg:my-10">
        <div className="flex items-center justify-between">
          <h1 className="">
            <Link to={"/"}>
              <h1 className="text-3xl font-bold text-blue-600">PUATOK</h1>
            </Link>
          </h1>
          <div className="lg:hidden flex justify-center items-center gap-6 text-gray-600 text-2xl cursor-pointer">
            {/* <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              <FaInstagram />
            </a> */}

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              <FaTwitter />
            </a>

            {/* <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              <FaGithub />
            </a> */}
          </div>
        </div>

        {/* <div className="flex justify-between lg:justify-center items-center lg:gap-10 mt-2 lg:mt-0 ">
          <p>About</p>
          <p>Feature</p>
          <p>Contact Us</p>
          <p>Support</p>
        </div> */}
        <div className="hidden lg:flex justify-center items-center gap-6 text-gray-600  cursor-pointer text-2xl">
          {/* <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaInstagram />
          </a> */}

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaTwitter />
          </a>

          {/* <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaGithub />
          </a> */}
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center mb-4 mt-1 lg:mt-0 space-y-4 lg:space-y-0 lg:space-x-6">
        <p className="lg:w-full text-center lg:text-left text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer">
          © Copyright {currentYear}, All Rights Reserved
        </p>
        <div className="w-full flex justify-between lg:justify-end items-center gap-6 text-gray-600">
          <p className="hover:text-primary transition-colors duration-300 cursor-pointer">
            Privacy Policy
          </p>
          <p className="hover:text-primary transition-colors duration-300 cursor-pointer">
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
