import React from "react";
import { useParams } from "react-router-dom";

const products = {
  1: { name: "Smartphone", price: "$499", description: "High-quality smartphone with great features." },
  2: { name: "Laptop", price: "$899", description: "Powerful laptop for work and gaming." },
  3: { name: "Headphones", price: "$99", description: "Noise-canceling headphones with rich sound." },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id];

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-lg text-green-600">{product.price}</p>
    </div>
  );
};

export default ProductDetail;
