import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";
import SectionTitle from "./../../components/SectionTitle";

const Allusers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  const handleMakeAdmin = (id) => {
    console.log(id);
    axiosSecure
      .patch(`/users/admin/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Make Admin Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>Pustok || All Users</title>
        <meta name="description" content="Pustok || All Users" />
      </Helmet>

      <SectionTitle header={"All Users"} headerTitle={"Users"} />
      <div className="flex items-center gap-96 text-white font-thin text-2xl w-full p-6  bg-slate-300">
        <h2>Items:{users.length}</h2>
        <h2>Total Price: </h2>
        <button className="bg-blue-500 text-white px-8 py-2 rounded">
          Pay
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Sl</th>
            {/* <th className="py-2">Image</th> */}
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="text-center border-b-4 border-b-white bg-gray-100"
            >
              <td className="py-2">{index + 1}</td>

              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">
                {user.role === "admin" ? (
                  <div className="text-blue-500 ">Admin</div>
                ) : (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleMakeAdmin(user._id)}
                  >
                    Make Admin
                  </button>
                )}
              </td>
              <td className="py-2">
                <button
                  className="  px-4 py-2 rounded"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  <RiDeleteBin6Fill className="text-2xl text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allusers;
