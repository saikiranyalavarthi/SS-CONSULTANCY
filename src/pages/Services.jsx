import React from "react";

export default function Services() {
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
    <main className="min-h-screen bg-white text-blue-900 px-6 py-20">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6">
          Our Services
        </h1>
        <p className="text-blue-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          We provide a complete range of professional consultancy solutions to
          support businesses, entrepreneurs, and individuals across the United
          Kingdom.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-blue-300/50 transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {s.title}
              </h3>
              <p className="text-blue-800 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
