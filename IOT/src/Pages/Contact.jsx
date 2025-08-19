import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { SendHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Navbar />
      <div className="flex-1 w-full flex flex-col items-center mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-8 rounded shadow w-full"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleInputChange}
                required
                className="block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
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
                value={email}
                onChange={handleInputChange}
                required
                className="block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="block w-full border border-gray-300 rounded-md p-2"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex flex-row items-between"
          >
            <span className="flex-1">Send</span>
            <SendHorizontal className="inline-block mr-2" />
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
