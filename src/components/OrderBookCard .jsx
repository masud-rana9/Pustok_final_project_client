import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "./../hooks/useAxiosSecure";
import useCarts from "../hooks/useCarts";

const OrderBookCard = ({ book }) => {
  console.log(book);
  const { authorName, description, image, name, price, status, _id } = book;
  const { user } = useAuth();
  const [, refetch] = useCarts();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (book) => {
    if (user && user.email) {
      const cartItem = {
        bookId: _id,
        name,
        email: user.email,
        price,
        status,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login first",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-white relative h-[550px] p-4 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
      <p className="text-lg text-gray-600 mt-1">{authorName}</p>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <p className="text-lg text-gray-800 font-semibold mt-2">
        Category: {book.category}
      </p>
      <p className="text-lg font-bold mt-2">
        Status:{" "}
        <span className={status === "Free" ? "text-green-600" : "text-red-600"}>
          {status}
        </span>
      </p>
      <p className="text-lg text-gray-800 font-bold mt-2">
        Price: {price !== null ? `$${price}` : "Free"}
      </p>
      <button
        className="mt-4 bg-blue-600 text-white absolute bottom-4 md:left-28 left-48 lg:left-40 py-2 px-4 rounded-lg w-40 hover:bg-blue-700 transition-colors duration-300"
        onClick={() => handleAddToCart(book)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default OrderBookCard;
