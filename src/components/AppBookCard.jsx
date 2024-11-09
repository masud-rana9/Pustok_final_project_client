const AppBookCard = ({ book }) => {
  const { name, image, category, price, authorName, description, status } =
    book;

  return (
    <div className="flex bg-white border p-4 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-40 h-52 object-cover rounded mr-4" // Width set to 40 and height set to 52 for consistent display
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mt-2">{name}</h3>
          <p className="text-gray-800 font-semibold mt-2">
            Category: {category}
          </p>
          <p className="text-gray-800 font-semibold mt-2">
            Author: {authorName}
          </p>
          <p className="text-gray-800 mt-2 text-[12px]">{description}</p>
        </div>
        <p className="text-green-600 font-bold mt-2">
          {status === "Paid" ? `$${price}` : "Free"}
        </p>
      </div>
    </div>
  );
};

export default AppBookCard;
