const AppCategorybanner = ({ item }) => {
  return (
    <div className="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden relative transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <img
        src={item.url}
        alt={item.title}
        className="w-full h-[40vh] object-cover transition-transform duration-300 hover:scale-110"
      />
      <h3 className="text-4xl uppercase text-center -mt-20 text-white pb-5 bg-opacity-60 bg-black transition-opacity duration-300 hover:bg-opacity-80">
        {item.title}
      </h3>
    </div>
  );
};

export default AppCategorybanner;
