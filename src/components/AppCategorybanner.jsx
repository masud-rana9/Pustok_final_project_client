const AppCategorybanner = ({ item }) => {
  return (
    <div className="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden relative transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <img
        src={item.url}
        alt={item.title}
        className="w-full h-[35vh] object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-20 bg-black transition-opacity duration-300 hover:bg-opacity-40 ">
        <h3 className="text-4xl uppercase text-center  text-white  ">
          {item.title}
        </h3>
        <p className="text-2xl text-center text-white  transition-opacity duration-300 ">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default AppCategorybanner;
