// HeroBanner.jsx
import React, { useState, useEffect } from "react";
import banner2 from "/banner2.jpg";
import banner3 from "/banner3.jpg";

const banners = [
  {
    img: banner2,
    title: "Innovative Solutions",
    subtitle: "Grow your business with our expert guidance.",
    button1: "Get Started",
    button2: "Contact Us",
  },
  {
    img: banner3,
    title: "Join Our Community",
    subtitle: "Connect with like-minded professionals and grow together.",
    button1: "Sign Up",
    button2: "Learn More",
  },
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={banner.img}
            alt={`Banner ${index + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Overlay: Centered Text + Buttons */}
          <div className="absolute inset-0 bg-black/40 flex justify-center items-center px-6">
            <div className="max-w-3xl text-center text-white">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                {banner.title}
              </h1>
              <p className="text-md md:text-lg mb-6">{banner.subtitle}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded font-semibold transition">
                  {banner.button1}
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded font-semibold transition">
                  {banner.button2}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-20"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 z-20"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
