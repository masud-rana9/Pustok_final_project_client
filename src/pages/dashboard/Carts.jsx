import Swal from "sweetalert2";
import useCarts from "../../hooks/useCarts";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Carts = () => {
  const [carts, refetch] = useCarts();
  const totalPrice = carts.reduce((sum, item) => item.price + sum, 0);
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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
  return (
    <div className="w-full">
      <div className="flex items-center gap-96 text-white font-thin text-2xl w-full p-6 rounded-lg bg-slate-300">
        <h2>Items: {carts.length}</h2>
        <h2>Total Price: {totalPrice.toFixed(2)}</h2>
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
            <th className="py-2">Price</th>
            <th className="py-2">Email</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item, index) => (
            <tr
              key={index}
              className="text-center border-b-4 border-b-white bg-gray-100"
            >
              <td className="py-2">{index + 1}</td>
              {/* <td className="py-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover"
                />
              </td> */}
              <td className="py-2">{item.name}</td>
              <td className="py-2">${item.price}</td>
              <td className="py-2">{item.email}</td>
              <td className="py-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDeleteCart(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Carts;
