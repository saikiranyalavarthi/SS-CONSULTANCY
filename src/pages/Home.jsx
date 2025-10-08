import React from "react";
import About from "./About";
import Consultant from "./Consultant";
import HeroBanner from "../Components/HeroBanner";
import BannerSlider from "../Components/BannerSlider";

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
    <main className="bg-white text-blue-900">
      {/* Hero Section */}
      {/* <BannerSlider /> */}
      <HeroBanner />

      {/* Our Services Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 w-full">
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

      {/* About Section */}
      <About />

      {/* Consultant Section */}
      <Consultant />
    </main>
  );
}
