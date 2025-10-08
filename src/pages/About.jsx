import React from "react";
import aboutImage from "/about1.jpg"; // Your image path

export default function About() {
  const cards = [
    {
      title: "Our Vision",
      desc: "To be the most trusted consultancy partner for businesses expanding into and across the United Kingdom.",
    },
    {
      title: "Our Mission",
      desc: "To empower individuals and companies by simplifying complex legal, immigration, and business processes through transparent guidance.",
    },
    {
      title: "Our Approach",
      desc: "We combine real-world experience with practical solutions — delivering professional, cost-effective consultancy that delivers measurable results.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <div>
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
            About Us
          </h2>
          <p className="text-blue-700 text-lg leading-relaxed mb-10">
            SS CONSULTANCY (U.K) LTD, established in 2022, is a London-based
            firm offering business, immigration, and compliance consultancy
            services. We guide startups, entrepreneurs, and professionals
            through the complexities of U.K. regulations — helping them grow
            successfully.
          </p>

          <div className="space-y-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex items-start bg-white rounded-xl shadow-md p-6 hover:shadow-blue-300/50 transition"
              >
                {/* Optional Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full mr-4 font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-blue-700 text-sm">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-auto rounded-xl shadow-xl hover:scale-105 transform transition duration-500"
          />
          {/* Optional floating card */}
          <div className="absolute bottom-0 right-0 bg-blue-800 text-white p-4 rounded-lg shadow-lg -translate-x-8 translate-y-8 hidden md:block">
            Trusted Consultancy Since 2022
          </div>
        </div>
      </div>
    </section>
  );
}
