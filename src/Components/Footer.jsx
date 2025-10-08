import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            SS Consultancy (U.K) LTD
          </h2>
          <p className="text-blue-100 leading-relaxed">
            Empowering businesses and individuals with expert consultancy,
            strategy, and professional support across multiple domains in the
            U.K.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-blue-200 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-300 transition">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/consultant"
                className="hover:text-yellow-300 transition"
              >
                Consultant
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-blue-200 mb-3">
            Get in Touch
          </h3>
          <p className="text-blue-100">
            144A Meanley Road, London, England, E12 6AT
          </p>
          <p className="text-blue-100 mt-2">
            <strong>Email:</strong> info@ssconsultancyuk.com
          </p>
          <p className="text-blue-100 mt-1">
            <strong>Phone:</strong> +44 20 7946 0958
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-yellow-300 hover:text-yellow-200 transition text-xl"
            >
              🌐
            </a>
            <a
              href="#"
              className="text-yellow-300 hover:text-yellow-200 transition text-xl"
            >
              🔗
            </a>
            <a
              href="#"
              className="text-yellow-300 hover:text-yellow-200 transition text-xl"
            >
              ✉️
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-200 text-sm">
        © {new Date().getFullYear()} SS CONSULTANCY (U.K) LTD — All Rights
        Reserved.
      </div>
    </footer>
  );
}
