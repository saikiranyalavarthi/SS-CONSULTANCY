import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-blue-900 px-6 py-20">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
          Contact Us
        </h1>
        <p className="text-blue-700 text-lg max-w-2xl mx-auto mb-12">
          Have a question or need expert advice? We’re here to help. Get in
          touch with our consultants for professional guidance and assistance.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-blue-50 rounded-xl p-8 shadow-lg space-y-6">
            <div>
              <label className="block text-blue-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded bg-white border border-blue-300 text-blue-900 focus:border-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-blue-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded bg-white border border-blue-300 text-blue-900 focus:border-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-blue-700 mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-3 rounded bg-white border border-blue-300 text-blue-900 focus:border-blue-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-blue-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 rounded bg-white border border-blue-300 text-blue-900 focus:border-blue-600 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center text-left bg-blue-50 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Our Office
            </h2>
            <p className="text-blue-700 mb-3">
              <strong>SS CONSULTANCY (U.K) LTD</strong>
              <br />
              144A Meanley Road, London, England, E12 6AT
            </p>
            <p className="text-blue-700 mb-3">
              <strong>Email:</strong> info@ssconsultancyuk.com
            </p>
            <p className="text-blue-700 mb-6">
              <strong>Phone:</strong> +44 20 7946 0958
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Office Hours
            </h3>
            <p className="text-blue-700">
              Monday - Friday: 9:00 AM - 6:00 PM <br />
              Saturday: 10:00 AM - 2:00 PM <br />
              Sunday: Closed
            </p>

            <div className="mt-8">
              <iframe
                title="SS Consultancy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19810.604331493367!2d0.0417!3d51.5527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7326f789a5f%3A0x1a0f4d0e6b9f9c29!2sMeanley%20Rd%2C%20London%20E12%206AT%2C%20UK!5e0!3m2!1sen!2sin!4v1704968502630!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
