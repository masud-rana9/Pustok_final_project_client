import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Swal from "sweetalert2";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Contactdetailspage = () => {
  const axiosSecure = useAxiosSecure();

  const itemsPerPage = 10; // Show 10 items per page
  const [currentPage, setCurrentPage] = useState(1);
  const { data: contact = [], refetch } = useQuery({
    queryKey: ["contact"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contact");
      return res.data;
    },
  });

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
        axiosSecure.delete(`/contact/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Message has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  // Calculate the items to show based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = contact.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(contact.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="">
      <div className="w-full p-6 bg-gray-100">
        <Helmet>
          <title>Pustok || Contact Details</title>
          <meta name="description" content="Pustok || Contact" />
        </Helmet>

        <SectionTitle header={"Contact Details"} headerTitle={"Details"} />

        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Message</th>
              <th className="py-2">Phone No</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr
                key={item._id}
                className="text-center border-b-4 border-b-white bg-gray-100"
              >
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.email}</td>
                <td className="py-2">{item.message}</td>
                <td className="py-2">{item.phone}</td>
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
    </div>
  );
};

export default Contactdetailspage;
