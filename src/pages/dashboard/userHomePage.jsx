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

  return (
    <div className="container mx-auto p-4 pt-6 mt-10 bg-gray-100 ">
      <div className="flex justify-between mb-4">
        <h2 className="text-3xl font-bold text-gray-900">User Home Page</h2>
        <div className="flex items-center space-x-4">
          <button
            className={`text-lg font-medium ${
              selectedTab === "dashboard"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-600"
            } py-2 px-4 rounded`}
            onClick={() => setSelectedTab("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`text-lg font-medium ${
              selectedTab === "settings"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-600"
            } py-2 px-4 rounded`}
            onClick={() => setSelectedTab("settings")}
          >
            Settings
          </button>
        </div>
      </div>

      {selectedTab === "dashboard" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Activity</h3>
            <p className="text-lg font-medium text-gray-600">
              Monthly Average: 50
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Posts</h3>
            <p className="text-lg font-medium text-gray-600">Total Posts: 42</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Achievements</h3>
            <p className="text-lg font-medium text-gray-600">3 New Badges</p>
          </div>
          <div className="col-span-3 bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Activity Chart</h3>
            <LineChart width={1100} height={600} data={userData}>
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
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold text-gray-900">Settings</h3>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label
                className="text-lg font-medium text-gray-600"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-green-500"
                type="text"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-lg font-medium text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-green-500"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <button
              className="text-lg font-medium bg-green-500 text-white py-2 px-4 rounded"
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
