import React from "react";
import About from "./About";
import Consultant from "./Consultant";

export default function Home() {
  const services = [
    {
      title: "Digital Marketing",
      desc: "Boost your visibility with SEO, Google Ads, and social media strategies to reach the right audience.",
    },
    {
      title: "App Development",
      desc: "We build fast, secure iOS and Android apps using modern technologies.",
    },
    {
      title: "Website Development",
      desc: "SEO-optimized websites built with Next.js and Tailwind CSS for speed and UX.",
    },
    {
      title: "WordPress Development",
      desc: "Custom themes and plugins for powerful, manageable WordPress websites.",
    },
  ];

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

      {/* Our Services Section */}
      <section className="max-w-6xl mx-auto py-16 w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-blue-300/50 transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-blue-800 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <About />
      <Consultant />
    </main>
  );
}
