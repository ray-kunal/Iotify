import React from "react";
import SearchBar from "../Components/Seachbar";
function Content() {
  return (
    <div className="w-full">
      <SearchBar className="w-full" />
      <section className="px-8 py-16 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              What Do We Do?
            </h2>
            <p className="text-gray-600 mb-6">
              We make IoT innovation simple, fast, and affordable. From
              components to ready-made projects, we deliver everything students
              need to turn ideas into reality.
            </p>
            <ul className="text-gray-600 text-left list-disc list-inside mb-6 space-y-1">
              <li>⚡ Same-day delivery in Greater Noida</li>
              <li>🛠 Ready-made + custom IoT projects</li>
              <li>📚 Hands-on workshops & training</li>
              <li>🤝 End-to-end project guidance</li>
              <li>🌍 Student-focused, community-driven</li>
            </ul>
            <span className="text-sm font-semibold text-blue-500">
              🚀 Innovate. Build. Deliver.
            </span>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Buy IoT Components
            </h2>
            <p className="text-gray-600 mb-6">
              Need IoT parts today? Get same-day delivery in Greater Noida.
              Affordable, reliable, and student-friendly — no waiting for
              Amazon!
            </p>
            <ul className="text-gray-600 text-left list-disc list-inside mb-6 space-y-1">
              <li>🔧 Wide range of IoT components</li>
              <li>💸 Affordable student pricing</li>
              <li>🚚 Fast & reliable delivery</li>
              <li>🛡 Quality-checked inventory</li>
              <li>📦 Easy ordering process</li>
            </ul>
            <a
              href="/buy-components"
              className="inline-block px-6 py-2 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 transition"
            >
              Shop Now
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              Careers @ IoTify
            </h2>
            <p className="text-gray-600 mb-6">
              We don’t just sell IoT projects — we train and hire students to
              build them. Gain real experience, earn certificates, and grow with
              us.
            </p>
            <ul className="text-gray-600 text-left list-disc list-inside mb-6 space-y-1">
              <li>🎓 Internship opportunities</li>
              <li>💼 Real-world IoT projects</li>
              <li>📜 Certificates & career growth</li>
              <li>🤝 Peer-to-peer learning model</li>
              <li>🚀 Work with a growing startup</li>
            </ul>
            <a
              href="/careers"
              className="inline-block px-6 py-2 bg-purple-500 text-white rounded-xl shadow-md hover:bg-purple-600 transition"
            >
              Join Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
