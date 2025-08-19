import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function CareersForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Career Form Submitted:", formData);
    // you can send formData to backend here
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="container flex flex-1 flex-col items-center justify-center mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-8 rounded shadow w-full"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Careers Application
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="mb-6">
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Resume
            </label>
            <div className="mt-1">
              <input
                type="file"
                name="resume"
                id="resume"
                accept=".pdf"
                onChange={handleInputChange}
                required
                className="block w-full text-sm text-gray-600 border border-gray-300 rounded-md p-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CareersForm;
