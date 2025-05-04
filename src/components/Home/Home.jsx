import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center p-10">
      <h2 className="text-4xl font-bold text-gray-800">Welcome to ShopEasy</h2>
      <p className="mt-2 text-gray-600 text-lg">Find the best products at amazing prices!</p>
      <Link to="/products" className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-700 transition">
        Browse Products
      </Link>
    </div>
  );
};

export default Home;
