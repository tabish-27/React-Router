import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Smartphone", price: "$499" },
  { id: 2, name: "Laptop", price: "$899" },
  { id: 3, name: "Headphones", price: "$99" },
];

const ProductListing = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Products</h2>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <Link to={`/products/${product.id}`} className="text-blue-500">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
