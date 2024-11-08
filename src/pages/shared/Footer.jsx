import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-blue-600">
      <footer className=" w-full p-4 container mx-auto flex flex-col md:px-10 md:py-4 mt-20 ">
        <div className=" lg:flex  justify-between items-center mb-3 lg:my-10">
          <div className="flex items-center justify-between">
            <h1 className="">
              <Link to={"/"}>
                <h1 className="text-3xl font-bold text-white">PUATOK</h1>
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
                <FaFacebookF className="text-white" />
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                <FaTwitter className="text-white" />
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
          <div className="hidden lg:flex justify-center items-center gap-6 text-white  cursor-pointer text-2xl">
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
          <p className="lg:w-full text-center text-white lg:text-left  hover:text-primary transition-colors duration-300 cursor-pointer">
            © Copyright {currentYear}, All Rights Reserved
          </p>
          <div className="w-full flex justify-between lg:justify-end items-center gap-6 text-white ">
            <p className="hover:text-primary transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:text-primary text-white transition-colors duration-300 cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </footer>
    </div>
    // <footer className="bg-blue-500  text-white">
    //   <div className="container mx-auto px-4 py-10 ">
    //     <div className="flex flex-col md:flex-row justify-between">
    //       <div className="mb-8 md:mb-0">
    //         <h3 className="font-bold text-lg mb-4">Services</h3>
    //         <ul>
    //           <li>
    //             <a href="#" className="hover:text-blue-500">
    //               Branding
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-blue-500">
    //               Design
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-blue-500">
    //               Marketing
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-blue-500">
    //               Advertisement
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="mb-8 md:mb-0">
    //         <h3 className="font-bold text-lg mb-4">Company</h3>
    //         <ul>
    //           <li>
    //             <a href="#" className="hover:text-blue-500">
    //               About Us
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-blue-500">
    //               Contact
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-blue-500">
    //               Jobs
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-blue-500">
    //               Press Kit
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="mb-8 md:mb-0">
    //         <h3 className="font-bold text-lg mb-4">Legal</h3>
    //         <ul>
    //           <li>
    //             <a href="#" className="hover:text-blue-500">
    //               Terms of Use
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-blue-500">
    //               Privacy Policy
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" className="hover:text-blue-500">
    //               Cookie Policy
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="flex items-center">
    //         <div className=" text-white">
    //           <p># ACME Industries Ltd.</p>
    //           <p>Providing reliable tech since 1992</p>
    //         </div>
    //         <div className="ml-4">
    //           <a href="#" className="text-gray-700 hover:text-blue-500 mr-2">
    //             <i className="fab fa-twitter"></i>
    //           </a>
    //           <a href="#" className="text-gray-700 hover:text-blue-500 mr-2">
    //             <i className="fab fa-youtube"></i>
    //           </a>
    //           <a href="#" className="text-gray-700 hover:text-blue-500">
    //             <i className="fab fa-facebook"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
