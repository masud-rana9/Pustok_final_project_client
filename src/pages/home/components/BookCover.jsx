const BookCover = ({ image, title, description }) => {
  return (
    // <div className="bg-white  overflow-hidden">
    //   <div
    //     className={`w-full relative flex items-center justify-center text-white ${height} bg-cover`}
    //     style={{
    //       backgroundImage: `url(${image})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //   >
    //     <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
    //     {/* Dark overlay */}
    //     <div className="relative z-10 text-center px-4">
    //       <h1 className="text-5xl font-bold mb-2 text-white hover:text-blue-400 transition-colors duration-300 ease-in-out">
    //         {title}
    //       </h1>
    //       <p className="text-2xl max-w-2xl mx-auto text-gray-300 hover:text-blue-200 transition-colors duration-300 ease-in-out">
    //         {description}
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div className="relative">
      <img
        src={image}
        alt="Contact Us"
        className="w-full h-[40vh] object-cover"
      />
      <div className="absolute  inset-0 bg-gray-600 bg-opacity-40 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-white text-center md:text-4xl text-2xl font-bold">
          {/* Feel free to contact with us */}
          {title}
        </h1>
        <p className="text-white text-center text-xl md:text-2xl font-bold">
          {/* If you want to know about pustok */}
          {description}
        </p>
      </div>
    </div>
  );
};

export default BookCover;
