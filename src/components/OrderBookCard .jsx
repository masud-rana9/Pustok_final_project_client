import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "./../hooks/useAxiosSecure";
import useCarts from "../hooks/useCarts";

const OrderBookCard = ({ book }) => {
  const { name, image, recipe, category, price, _id } = book;
  const { user } = useAuth();
  const [, refetch] = useCarts();
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const handleAddToCart = (book) => {
    if (user && user.email) {
      // add to cart
      const carItem = {
        bookId: _id,
        name,
        email: user.email,
        price,
      };

      axiosSecure.post("/carts", carItem).then((res) => {
        console.log(res.data);
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
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded"
        />
        {/* <p>{user?.email}</p> */}
        <h3 className="text-lg font-bold mt-2">{name}</h3>
        <p className="text-gray-600 italic">{recipe}</p>
        <p className="text-gray-800 font-semibold mt-2">Category: {category}</p>
        <p className="text-green-600 font-bold mt-2">${price}</p>
      </div>
      <button
        className="mt-4 bg-blue-600 text-white py-2 px-4 w-32 mx-auto rounded hover:bg-blue-700 transition-colors duration-300"
        onClick={() => handleAddToCart(book)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default OrderBookCard;
