const BookCover = ({ image, title, description, height = "h-60" }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div
        className={`w-full relative flex items-center justify-center text-white ${height} bg-cover`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>{" "}
        {/* Dark overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-lg max-w-2xl mx-auto">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCover;
