"use client";
import React from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { StickyMenu } from "@/components/StickyMenu";
import { Carousel } from "@/components/Carousel2";
import { Mail, Phone, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import Calendly from "@/components/Calendly";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "38cc1a95-829b-498c-8485-1255b987d396");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ Something went wrong, please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <Navigation />
      <StickyMenu />
      <main>
        

{/* Contact Section */}
<section className="relative py-24 overflow-hidden">
  {/* Background gradient glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-white to-cream-100 -z-10" />

  {/* Floating sweet icons */}
  <motion.div
    animate={{ y: [0, -25, 0], opacity: [0.3, 0.7, 0.3] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute top-16 left-12 text-[#d9b382]/40 text-5xl"
  >
    ✉
  </motion.div>
  <motion.div
    animate={{ y: [0, 25, 0], opacity: [0.3, 0.7, 0.3] }}
    transition={{ duration: 7, repeat: Infinity }}
    className="absolute bottom-20 right-14 text-[#8b5e3c]/40 text-6xl"
  >
    ☎
  </motion.div>
  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute top-1/4 right-1/5 text-[#6B4226]/30 text-7xl"
  >
   ✨
  </motion.div>
  <motion.div
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    className="absolute bottom-32 left-1/3 text-[#d9b382]/30 text-4xl"
  >
    ❋
  </motion.div>
  <motion.div
    animate={{ y: [0, -15, 0], x: [0, 15, -15, 0] }}
    transition={{ duration: 10, repeat: Infinity }}
    className="absolute top-1/2 left-10 text-[#a67c52]/40 text-5xl"
  >
    ✦
  </motion.div>
  <motion.div
    animate={{ y: [0, 20, 0], x: [0, -20, 20, 0] }}
    transition={{ duration: 12, repeat: Infinity }}
    className="absolute top-1/3 right-10 text-[#c19a6b]/40 text-4xl"
  >
    ✨
  </motion.div>

  <div className="container mx-auto px-4 py-12 relative">
    {/* Heading with underline animation */}
    <motion.h1
      className="font-playfair text-5xl text-center mb-16 tracking-tight relative inline-block mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      Get in Touch
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-[#8b5e3c] to-[#d9b382] rounded-full origin-left"
      />
    </motion.h1>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Form */}
      <motion.div
        className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-gray-200 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="font-playfair text-2xl mb-6">Send us a message</h2>
        <form className="space-y-5" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6B4226] outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6B4226] outline-none transition-all"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6B4226] outline-none transition-all"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-[#6B4226] text-white px-8 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
          >
            Send Message
          </motion.button>
        </form>
        <span className="block text-sm text-gray-600 mt-4">{result}</span>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="space-y-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="font-playfair text-2xl">Contact Information</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#f8f5f2] rounded-xl shadow-sm">
              <Mail className="h-6 w-6 text-[#6B4226]" />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">naushad@dreamknotcreations.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#f8f5f2] rounded-xl shadow-sm">
              <Phone className="h-6 w-6 text-[#6B4226]" />
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+91 77030 33761</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#f8f5f2] rounded-xl shadow-sm">
              <MapPin className="h-6 w-6 text-[#6B4226]" />
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">Goriyana Mohallah, Bhadohi</p>
              <p className="text-gray-600">Uttar Pradesh, 221401</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>

  {/* Calendly Embed */}
  <motion.div
    className="mt-20 container mx-auto px-4"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    <Calendly />
  </motion.div>
</section>


      </main>
      <Footer />
    </div>
  );
};

export default Contact;
