import React from "react";

// The UpcomingBookCard component that receives book props
const UpcomingBookCard = ({ book }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-200 rounded-lg shadow-md">
      <img
        src={book.image}
        alt={book.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-3xl font-bold mt-5">{book.name}</h2>
      <p className="text-lg text-gray-600">{book.authorName}</p>
      <p className="text-lg text-gray-600">{book.category}</p>
      <p className="text-lg text-gray-600 mt-5">{book.description}</p>
      <p className="text-lg text-gray-600 mt-5">
        Status: <span className="text-green-500">{book.status}</span>
      </p>
      {book.price !== null ? (
        <p className="text-lg text-gray-600 mt-5">Price: ${book.price}</p>
      ) : (
        <p className="text-lg text-gray-600 mt-5">Price: Free</p>
      )}
    </div>
  );
};

export default UpcomingBookCard;
