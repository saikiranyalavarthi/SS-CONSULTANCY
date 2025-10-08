import React from "react";

export default function Services() {
  const services = [
    {
      title: "Business Registration & Compliance",
      desc: "End-to-end company setup, including U.K. business registration, HMRC compliance, and document preparation.",
    },
    {
      title: "Visa & Immigration Consultancy",
      desc: "Guidance for work, business, and dependent visas with professional document support and legal coordination.",
    },
    {
      title: "Market Entry Advisory",
      desc: "Helping foreign businesses establish presence in the U.K. with research, strategy, and expansion planning.",
    },
    {
      title: "Information & Research Services",
      desc: "Tailored business intelligence and information reports to support decision-making and investment strategies.",
    },
    {
      title: "Financial & Tax Assistance",
      desc: "Connecting clients with accounting, taxation, and audit partners for compliance and business optimization.",
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
