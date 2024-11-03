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

  return (
    <div className="container mx-auto p-4 pt-6 mt-10 bg-gray-100">
      <div className="flex justify-between mb-4">
        <h2 className="text-3xl font-bold text-gray-900">Admin Home Page</h2>
        <div className="flex items-center space-x-4">
          <button
            className={`text-lg font-medium ${
              selectedTab === "dashboard"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            } py-2 px-4 rounded`}
            onClick={() => setSelectedTab("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`text-lg font-medium ${
              selectedTab === "settings"
                ? "bg-blue-500 text-white"
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
            <h3 className="text-lg font-bold text-gray-900">Users</h3>
            <p className="text-lg font-medium text-gray-600">1000</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Sales</h3>
            <p className="text-lg font-medium text-gray-600">$10000</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Revenue</h3>
            <p className="text-lg font-medium text-gray-600">$50000</p>
          </div>
          <div className="col-span-3 bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold text-gray-900">Sales Chart</h3>
            <LineChart width={1100} height={600} data={data}>
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
        <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold text-gray-900">Settings</h3>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label
                className="text-lg font-medium text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-lg font-medium text-gray-600"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="text-lg font-medium bg-blue-500 text-white py-2 px-4 rounded"
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
