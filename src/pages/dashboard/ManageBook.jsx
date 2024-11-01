import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import useBooks from "../../hooks/useBooks";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageBook = () => {
  const [books, loading, refetch] = useBooks();
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 13;
  const axiosSecure = useAxiosSecure();

  const handleDeleteCart = (id) => {
    console.log(id);
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
        axiosSecure.delete(`/books/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: `Book has been deleted.`,
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  // Calculate total pages
  const totalPages = Math.ceil(books.length / booksPerPage);

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full">
      <div className="flex items-center gap-96 text-white font-thin text-2xl w-full p-6 rounded-lg bg-slate-300">
        <h2>Items: </h2>
        <h2>Total Price: </h2>
        <button className="bg-blue-500 text-white px-8 py-2 rounded">
          Pay
        </button>
      </div>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Sl</th>
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Edit</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((item, index) => (
            <tr
              key={index}
              className="text-center border-b-4 border-b-white bg-gray-100"
            >
              <td className="py-2">{indexOfFirstBook + index + 1}</td>
              <td className="py-2">{item.name}</td>
              <td className="py-2">
                {item.price ? <>${item.price}</> : <>{item.status}</>}
              </td>

              <Link to={`/dashboard/edit-book/${item._id}`}>
                <td className="py-2 flex items-center justify-center">
                  <FaRegEdit className="text-3xl" />
                </td>
              </Link>
              <td className="py-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDeleteCart(item._id)}
                >
                  <MdOutlineDelete className="text-3xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4 space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ManageBook;
