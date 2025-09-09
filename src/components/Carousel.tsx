"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://res.cloudinary.com/dqxhomda3/image/upload/v1757447894/Home-Photo-1_xxf52u.jpg",
    title: "Luxury Indo-Tibetan Carpets",
    description: "Handcrafted excellence for your home",
  },
  {
    image: "https://res.cloudinary.com/dqxhomda3/image/upload/v1757447893/Home-page-2_xitzs3.jpg",
    title: "Prayer Collection",
    description: "Contemporary designs for modern spaces",
  },
  {
    image: "https://res.cloudinary.com/dqxhomda3/image/upload/v1757447893/home-page-3_v22g9e.jpg",
    title: "Traditional Elegance",
    description: "Timeless patterns that tell stories",
  },
];

interface CarouselProps {
  height?: string;
}

export const Carousel = ({ height = "100vh" }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height }}
      aria-label="Featured Carpet Collections"
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            aria-live="polite"
          >
            {/* Background Image */}
            <motion.img
              src={slides[current].image}
              alt={`${slides[current].title} – ${slides[current].description}`}
              className="w-full h-full object-cover"
              loading={current === 0 ? "lazy" : "lazy"}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeInOut" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-10 sm:bottom-16 left-5 sm:left-10 md:left-20 text-left px-4 sm:px-6">
              <motion.h1
                key={slides[current].title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="font-sans text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-white mb-3 sm:mb-4 tracking-tight leading-snug"
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                key={slides[current].description}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="text-sm sm:text-base md:text-xl text-gray-200 max-w-md sm:max-w-xl leading-relaxed"
              >
                {slides[current].description}
              </motion.p>

             <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, delay: 0.5 }}
>
  <Link to="/collections" aria-label="Explore Carpet Collection">
    <Button
      className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black text-xs sm:text-sm md:text-base rounded-full hover:bg-gray-100 transition"
    >
      Explore Collection
    </Button>
  </Link>
</motion.div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
