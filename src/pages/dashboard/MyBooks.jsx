import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import useUserBook from "../../hooks/useUserBook";
import { BsBoxSeam } from "react-icons/bs";

const MyBooks = () => {
  // const [books, loading, refetch] = useBooks();
  // console.log(books);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 13;
  const axiosSecure = useAxiosSecure();
  const [userBooks, refetch, loading] = useUserBook();
  console.log(userBooks);

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
  const totalPages = Math.ceil(userBooks.length / booksPerPage);

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = userBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!userBooks || userBooks.length === 0) {
    return (
      <div className="flex items-center flex-col justify-center w-full h-[50vh] mx-auto">
        <BsBoxSeam className="text-7xl text-blue-600" />
        <h1 className="text-3xl font-bold text-blue-600">No Books Found</h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* <div className="flex items-center gap-96 text-white font-thin text-2xl w-full p-6 rounded-lg bg-slate-300">
        <h2>Items: </h2>
        <h2>Total Price: </h2>
        <button className="bg-blue-500 text-white px-8 py-2 rounded">
          Pay
        </button>
      </div> */}

      <Helmet>
        <title>Pustok || My Books</title>
        <meta name="description" content="Pustok || My Books" />
      </Helmet>

      <SectionTitle header={"My Books"} headerTitle={"Books"} />

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Sl</th>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
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
              <td className="py-2">{item.userEmail}</td>
              <td className="py-2">
                {item.price ? <>${item.price}</> : <>{item.status}</>}
              </td>

              <Link to={`/dashboard/edit-userBook/${item._id}`}>
                <td className="py-2 flex items-center justify-center">
                  <FaRegEdit className="text-2xl" />
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

export default MyBooks;
