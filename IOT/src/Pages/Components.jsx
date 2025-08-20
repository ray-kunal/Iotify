import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SearchBar from "../Components/Seachbar";
import ComponentCard from "../Components/ComponentCard";
import { ListFilter } from "lucide-react"

function Components() {
  const [current, setCurrent] = useState(1);

  const cardsPerPage = 10;
  const allComponents = Array.from({ length: 40 }, (_, i) => (
    <ComponentCard key={i} />
  ));
  const totalPages = Math.ceil(allComponents.length / cardsPerPage);

  const startIndex = (current - 1) * cardsPerPage;
  const currentCards = allComponents.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <div className="flex flex-col w-full justify-between">
      <Navbar />
      <div className="flex-1 flex flex-col min-h-screen bg-gray-100">
        <main className="flex-1 container mx-auto p-4">
          <div className="flex flex-row gap-2 items-center justify-center">
            <SearchBar />
            <div className="">
              <button className="px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 flex items-center gap-2 transition-all">
                <ListFilter className="inline" />
                Filters
              </button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentCards.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-2xl hover:shadow-lg transition"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() =>
                current !== 1
                  ? setCurrent(current - 1)
                  : alert("No previous page available")
              }
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 active:scale-95 transition-all text-sm sm:text-base"
            >
              Prev
            </button>

            <span className="text-lg sm:text-xl font-semibold">{current}</span>

            <button
              onClick={() =>
                current < totalPages
                  ? setCurrent(current + 1)
                  : alert("No next page available")
              }
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 active:scale-95 transition-all text-sm sm:text-base"
            >
              Next
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Components;
