import React from "react";

export default function Consultant() {
  return (
    <main className="min-h-screen bg-white text-blue-900 px-6 py-20 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">
        Talk to a Consultant
      </h1>
      <p className="text-blue-700 text-lg leading-relaxed max-w-2xl text-center mb-10">
        Our expert consultants are available to assist you with business
        registration, immigration queries, and compliance solutions. Reach out
        for a confidential discussion.
      </p>

      <form className="bg-blue-50 p-8 rounded-xl w-full max-w-md space-y-5 shadow-lg">
        <div>
          <label className="block text-blue-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded bg-white border border-blue-300 text-blue-900 focus:border-blue-600 outline-none"
          />
        </div>

        <div>
          <label className="block text-blue-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded bg-white border border-blue-300 text-blue-900 focus:border-blue-600 outline-none"
          />
        </div>

        <div>
          <label className="block text-blue-700 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Your message..."
            className="w-full p-3 rounded bg-white border border-blue-300 text-blue-900 focus:border-blue-600 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-800 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      <div className="text-blue-700 text-sm mt-8 text-center">
        <p>Registered Office: 144a Meanley Road, London, England, E12 6AT</p>
        <p>Company Number: 14281616</p>
      </div>
    </main>
  );
}
