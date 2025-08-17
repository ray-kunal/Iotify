// Sidebar.jsx
import React from "react";
import {
  X, Home, Package, Layers, GraduationCap, Briefcase,
  Mail, Phone, ShoppingCart, Instagram, Twitter, Linkedin, Search as SearchIcon
} from "lucide-react";

export default function Sidebar({ open, onEnter, onLeave, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden={open ? "false" : "true"}
      />
      <aside
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={`fixed right-0 top-0 z-50 h-screen w-80 max-w-[85vw] bg-white/90 backdrop-blur-md shadow-2xl border-l border-gray-200 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-between px-5 h-16 border-b">
          <div className="text-xl font-bold">IoTify</div>
          <button onClick={onClose} className="p-2 rounded hover:bg-gray-100 active:scale-95 transition" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <div className="relative mb-4">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="Search" className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
          </div>
          <nav className="space-y-1">
            <a href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"><Home className="h-5 w-5" /><span>Home</span></a>
            <a href="/buy-components" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"><Package className="h-5 w-5" /><span>Components</span></a>
            <a href="/projects" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"><Layers className="h-5 w-5" /><span> My Projects</span></a>
            <a href="/workshops" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"><GraduationCap className="h-5 w-5" /><span>Workshops</span></a>
            <a href="/careers" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"><Briefcase className="h-5 w-5" /><span>Careers</span></a>
            <a href="/contact" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"><Phone className="h-5 w-5" /><span>Contact</span></a>
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href="/buy-components" className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"><ShoppingCart className="h-4 w-4" /><span>Get Components</span></a>
            <a href="mailto:info@iotify.com" className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition"><Mail className="h-4 w-4" /><span>Email Us</span></a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition"><Twitter className="h-5 w-5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition"><Instagram className="h-5 w-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-100 transition"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </aside>
    </>
  );
}
