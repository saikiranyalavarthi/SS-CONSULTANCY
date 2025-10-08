// src/components/HeroBanner.jsx
import React from "react";
import heroImage from "/banner1.jpg"; // Add your image in src/assets

export default function HeroBanner() {
  return (
    <section className="bg-white min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
            Welcome to SS CONSULTANTS
          </h1>
          <p className="text-blue-700 text-lg md:text-xl leading-relaxed">
            The strongest pillar of every organization is its people, and we
            help you get the right people at the right time — humanly possible.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Explore Services
            </button>
            <button className="border border-blue-700 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition">
              Talk to Consultant
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Consultancy Banner"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
