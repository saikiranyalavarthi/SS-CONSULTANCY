import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-blue-900 px-6 py-20">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6">About Us</h1>
        <p className="text-blue-700 text-lg leading-relaxed max-w-3xl mx-auto">
          SS CONSULTANCY (U.K) LTD, established in 2022, is a London-based firm
          offering business, immigration, and compliance consultancy services.
          We specialize in guiding startups, entrepreneurs, and professionals
          through the complexities of U.K. regulations — helping them establish
          and grow successfully.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-blue-50 rounded-xl p-6 shadow-lg hover:shadow-blue-300/50 transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Our Vision
            </h3>
            <p className="text-blue-800">
              To be the most trusted consultancy partner for businesses
              expanding into and across the United Kingdom.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 shadow-lg hover:shadow-blue-300/50 transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Our Mission
            </h3>
            <p className="text-blue-800">
              To empower individuals and companies by simplifying complex legal,
              immigration, and business processes through transparent guidance.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 shadow-lg hover:shadow-blue-300/50 transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Our Approach
            </h3>
            <p className="text-blue-800">
              We combine real-world experience with practical solutions —
              delivering professional, cost-effective consultancy that delivers
              measurable results.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
