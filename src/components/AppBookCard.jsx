// In AppBookCard.js
const AppBookCard = ({ book }) => {
  const { name, image, recipe, category, price } = book;
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-gray-600 italic">{recipe}</p>
      <p className="text-gray-800 font-semibold mt-2">Category: {category}</p>
      <p className="text-green-600 font-bold mt-2">${price}</p>
    </div>
  );
};

export default AppBookCard;
