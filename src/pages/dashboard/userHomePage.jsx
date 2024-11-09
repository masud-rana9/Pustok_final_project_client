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

const userData = [
  { name: "January", activity: 30, posts: 5 },
  { name: "February", activity: 50, posts: 8 },
  { name: "March", activity: 45, posts: 7 },
  { name: "April", activity: 60, posts: 10 },
  { name: "May", activity: 75, posts: 12 },
  { name: "June", activity: 65, posts: 9 },
  { name: "July", activity: 80, posts: 15 },
  { name: "August", activity: 70, posts: 13 },
  { name: "September", activity: 85, posts: 14 },
  { name: "October", activity: 90, posts: 16 },
  { name: "November", activity: 95, posts: 17 },
  { name: "December", activity: 100, posts: 18 },
];

const UserHomePage = () => {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const {user,logOut}=useAuth()
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
    <div className="container mx-auto p-6  mt-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium text-gray-800">
          {user.displayName}
          <button onClick={handleLogout} className="border border-gray-500 bg-blue-500 text-white ml-5 py-2 px-3  rounded-full text-base ">
            Logout
          </button>
        </h2>
        <div className="flex items-center space-x-4">
          {["dashboard", "settings"].map((tab) => (
            <button
              key={tab}
              className={`text-lg font-semibold py-2 px-6 rounded-lg transition-all duration-300 ${
                selectedTab === tab
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {selectedTab === "dashboard" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700">Activity</h3>
            <p className="text-lg font-medium text-gray-600 mt-2">
              Monthly Average: <span className="text-blue-600">50</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700">Posts</h3>
            <p className="text-lg font-medium text-gray-600 mt-2">
              Total Posts: <span className="text-blue-600">42</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-700">Achievements</h3>
            <p className="text-lg font-medium text-gray-600 mt-2">
              3 New Badges
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-700">Activity Chart</h3>
            <LineChart width={700} height={400} data={userData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="activity"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="posts" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-700">Settings</h3>
          <form className="space-y-6 mt-4">
            <div className="flex flex-col">
              <label
                className="text-lg font-semibold text-gray-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-lg font-semibold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <button
              className="w-full text-lg font-semibold bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
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

export default UserHomePage;
