import Swal from "sweetalert2";
import { useState } from "react";
import useCarts from "../../hooks/useCarts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Carts = () => {
  const [carts, refetch] = useCarts();

  const totalPrice = carts.reduce((sum, item) => item.price + sum, 0);
  const axiosSecure = useAxiosSecure();
  const itemsPerPage = 10; // Show 10 items per page
  const [currentPage, setCurrentPage] = useState(1);

  const handleDeleteCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Book has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  // Calculate the items to show based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = carts.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(carts.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  console.log(carts);

  return (
    <div className="w-full p-6 bg-gray-100">
      <Helmet>
        <title>Pustok || Cart</title>
        <meta name="description" content="Pustok || Cart" />
      </Helmet>

      <SectionTitle header={"Cart"} headerTitle={"All Cart Info"} />
      <div className="flex items-center justify-between font-thin text-2xl w-full p-6 bg-slate-300">
        <h2>Items: {carts.length}</h2>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        <Link to={"/dashboard/checkout"}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded transition-colors">
            Checkout
          </button>
        </Link>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Sl</th>
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Email</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr
              key={item._id}
              className="text-center border-b-4 border-b-white bg-gray-100"
            >
              <td className="py-2">{startIndex + index + 1}</td>
              <td className="py-2">{item.name}</td>
              <td className="py-2">
                {" "}
                {item.price ? <>${item.price}</> : <>{item.status}</>}
              </td>
              <td className="py-2">{item.email}</td>
              <td className="py-2">
                <button
                  className=" text-white px-4 py-2 rounded"
                  onClick={() => handleDeleteCart(item._id)}
                >
                  <RiDeleteBin6Fill className="text-2xl text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carts;
