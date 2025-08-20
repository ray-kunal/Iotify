import React from "react";

function ComponentCard() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:scale-105 hover:shadow-xl transition">
      <img
        src="https://via.placeholder.com/300"
        alt="Component"
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">Component 1</h3>
      <p className="text-sm text-gray-600 mb-2">Description of component</p>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  );
}

export default ComponentCard;
