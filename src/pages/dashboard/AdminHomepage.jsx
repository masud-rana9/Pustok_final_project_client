import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const data = [
  { name: "January", users: 100, sales: 1000 },
  { name: "February", users: 120, sales: 1200 },
  { name: "March", users: 150, sales: 1500 },
  { name: "April", users: 180, sales: 1800 },
  { name: "May", users: 200, sales: 2000 },
  { name: "June", users: 220, sales: 2200 },
  { name: "July", users: 250, sales: 2500 },
  { name: "August", users: 270, sales: 2700 },
  { name: "September", users: 300, sales: 3000 },
  { name: "October", users: 320, sales: 3200 },
  { name: "November", users: 350, sales: 3500 },
  { name: "December", users: 400, sales: 4000 },
];

const AdminHomePage = () => {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto p-6 pt-8 mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-blue-700 flex items-center space-x-3">
          <span>{user.displayName}</span>
          <button
            onClick={handleLogout}
            className="border border-blue-600 bg-blue-600 text-white ml-4 py-2 px-4 rounded-full transition duration-200 hover:bg-blue-700 focus:outline-none"
          >
            Logout
          </button>
        </h2>
        <div className="flex items-center space-x-4">
          <button
            className={`text-lg font-medium transition duration-200 ${
              selectedTab === "dashboard"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } py-2 px-6 rounded-lg hover:bg-blue-400 hover:text-white focus:outline-none`}
            onClick={() => setSelectedTab("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`text-lg font-medium transition duration-200 ${
              selectedTab === "settings"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } py-2 px-6 rounded-lg hover:bg-blue-400 hover:text-white focus:outline-none`}
            onClick={() => setSelectedTab("settings")}
          >
            Settings
          </button>
        </div>
      </div>

      {selectedTab === "dashboard" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h3 className="text-lg font-bold text-blue-800">Users</h3>
            <p className="text-2xl font-semibold text-gray-700">1000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h3 className="text-lg font-bold text-blue-800">Sales</h3>
            <p className="text-2xl font-semibold text-gray-700">$10000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h3 className="text-lg font-bold text-blue-800">Revenue</h3>
            <p className="text-2xl font-semibold text-gray-700">$50000</p>
          </div>
          <div className="col-span-3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <h3 className="text-lg font-bold text-blue-800">Sales Chart</h3>
            <LineChart width={800} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
          <h3 className="text-lg font-bold text-blue-800">Settings</h3>
          <form className="space-y-4 mt-4">
            <div className="flex flex-col">
              <label className="text-md font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-md font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="text-lg font-medium bg-blue-500 text-white py-2 px-6 rounded-lg transition duration-200 hover:bg-blue-600 focus:outline-none"
              type="submit"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminHomePage;
