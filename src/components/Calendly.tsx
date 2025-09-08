import React from "react";

const Calendly = () => {
  return (
    <section className="text-center py-10">
      {/* Main Heading */}
      <h2 className="text-xl font-semibold mb-2">
        Ready to discuss your project?
      </h2>

      {/* Subtext for clarity */}
      <p className="text-gray-600 mb-6">
        Schedule a free 30-minute consultation call to share your ideas and
        explore how we can work together — no hassle, no commitment.
      </p>

      {/* Black Button */}
      <a
        href="https://calendly.com/dreamknotcreations7/15-minute-exploration-call"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-black text-white font-medium rounded-full shadow-md hover:bg-gray-800 transition duration-300 inline-block"
      >
        Book a Free Consultation
      </a>
    </section>
  );
};

export default Calendly;
