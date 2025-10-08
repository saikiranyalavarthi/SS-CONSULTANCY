import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-900 flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-800">
          Welcome to SS CONSULTANCY (U.K) LTD
        </h1>
        <p className="max-w-2xl mx-auto text-blue-700 text-lg leading-relaxed">
          We provide professional consultancy services for businesses and
          individuals — from company registration to immigration guidance and
          strategic planning.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/services"
            className="bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Explore Our Services
          </a>
          <a
            href="/consultant"
            className="border border-blue-700 text-blue-800 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition"
          >
            Talk to a Consultant
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 py-16">
        <div className="bg-blue-50 rounded-xl p-6 text-center shadow-lg hover:shadow-blue-300/50 transition">
          <h3 className="text-xl font-bold text-blue-700 mb-2">
            Company Details
          </h3>
          <p className="text-blue-800">
            <strong>Company No:</strong> 14281616
            <br />
            <strong>Status:</strong> Active
            <br />
            <strong>Registered:</strong> 8 Aug 2022
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 text-center shadow-lg hover:shadow-blue-300/50 transition">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Our Mission</h3>
          <p className="text-blue-800">
            To deliver trusted and practical consultancy solutions that empower
            businesses and individuals to succeed in the U.K. market.
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 text-center shadow-lg hover:shadow-blue-300/50 transition">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Our Location</h3>
          <p className="text-blue-800">
            144a Meanley Road,
            <br />
            London, England, E12 6AT
          </p>
        </div>
      </section>
    </main>
  );
}
