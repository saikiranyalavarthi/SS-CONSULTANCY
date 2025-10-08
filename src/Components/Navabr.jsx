import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white text-navy-900 shadow-md fixed w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-800">
          SS Consultancy
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-blue-900">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link to="/Consultant" className="hover:text-blue-600 transition">
            Consultant
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-blue-900"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-900 text-white flex flex-col items-center py-4 space-y-4 shadow-lg">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-blue-200 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="hover:text-blue-200 transition"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="hover:text-blue-200 transition"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-blue-200 transition"
          >
            Contact
          </Link>
          <Link
            to="/Consultant"
            onClick={() => setOpen(false)}
            className="hover:text-blue-200 transition"
          >
            Consultant
          </Link>
        </div>
      )}
    </header>
  );
}
