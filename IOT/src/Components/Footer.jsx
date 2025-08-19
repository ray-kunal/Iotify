import { Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1a4f] text-white">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-bold mb-3">IoTify</h2>
          <p className="text-sm text-blue-100">
            Innovate. Build. Deliver.
            <br />
            Making IoT accessible for every student.
          </p>
        </div>

        <div className="flex justify-center md:justify-center space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        <div className="text-sm space-y-2 text-center md:text-right">
          <a href="mailto:info@iotify.com" className="flex items-center justify-center md:justify-end space-x-2 hover:text-gray-200 transition">
            <Mail className="h-5 w-5" />
            <span>info@iotify.com</span>
          </a>
          <a href="tel:+919876543210" className="flex items-center justify-center md:justify-end space-x-2 hover:text-gray-200 transition">
            <Phone className="h-5 w-5" />
            <span>+91 98765 43210</span>
          </a>
          <a href="/contact" className="flex items-center justify-center md:justify-end space-x-2 hover:text-gray-200 transition">
            <span>Contact Us</span>
          </a>
        </div>

      </div>
      <div className="border-t border-white py-4 text-center text-xs text-blue-200">
        © {new Date().getFullYear()} IoTify. All rights reserved.
      </div>
    </footer>
  );
}
