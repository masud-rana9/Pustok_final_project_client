import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useBooks from "../../hooks/useBooks";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import { RiDeleteBin6Fill } from "react-icons/ri";

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Pustok || Manage Books</title>
        <meta name="description" content="Pustok || Manage Books" />
      </Helmet>

      <SectionTitle header={"Manage Books"} headerTitle={"Books"} />
      <table className="min-w-full bg-white text-xl">
        <thead className="bg-slate-300 p-4 ">
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
                  <FaRegEdit className="text-2xl text-blue-500" />
                </td>
              </Link>
              <td className="py-2">
                <button
                  className=" px-4 py-2 "
                  onClick={() => handleDeleteCart(item._id)}
                >
                  <RiDeleteBin6Fill className="text-2xl text-red-500" />
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
