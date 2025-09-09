import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Data
const categories = [
  {
    title: "Tufted",
    subtitle: "Explore Now!",
    description:
      "Exquisite craftsmanship meets premium materials in our Indo-Tibetan collection, perfect for sophisticated spaces.",
    image: "/carpet/tufted/tufted-cover-photo.webp",
    type: "Indo-Tibbetan",
    link: "/collections/tufted",
  },
  {
    title: "Pile Durry",
    subtitle: "Explore Now!",
    description:
      "Durable and stylish, our Pile Durry collection brings contemporary flair to modern interiors with unique weaves.",
    image: "/carpet/pile-dhurry/md1.webp",
    type: "Pile Durry",
    link: "/collections/pile-dhurry",
  },
  {
    title: "Indo-Tibbetan",
    subtitle: "Explore Now!",
    description:
      "Experience luxury with hand-knotted Indo-Tibetan rugs, blending heritage artistry and timeless elegance.",
    image: "/carpet/indo-tibetan/indo-tibet-cover.webp",
    type: "Indo-Tibbetan",
    link: "/collections/indo-tibetan",
  },
];

// Animation Variants
const fadeIn = (direction: "left" | "right", delay = 0) => ({
  hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

export const Categories = () => {
  const [activeFilter, setActiveFilter] = useState("Prayer Mat");

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#fdfaf6] via-[#f9f5ef] to-[#f7f2ea] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl text-center mb-12 md:mb-20 text-[#4b2e2e]"
        >
          OUR COLLECTION
        </motion.h2>

        {/* Layout */}
        <div className="space-y-16 md:space-y-28">
          {categories.map((category, index) => {
            const isEven = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  className="relative group w-full h-[70vh] lg:w-1/2 overflow-hidden rounded-2xl shadow-xl max-w-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={fadeIn(isEven ? "left" : "right", 0)}
                >
                  <Link to={category.link}>
                    <motion.img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4b2e2e]/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                </motion.div>

                {/* Text */}
                <motion.div
                  className="w-full lg:w-1/2 space-y-4 md:space-y-5 text-center lg:text-left"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  variants={fadeIn(isEven ? "right" : "left", 0.2)}
                >
                  <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-[#3b2c23]">
                    {category.title}
                  </h3>
                  <p className="text-[#7b5e57] text-base md:text-lg tracking-wide">
                    {category.subtitle}
                  </p>
                  <p className="text-[#5a463f] text-sm italic md:text-base leading-relaxed max-w-prose mx-auto lg:mx-0">
                    {category.description}
                  </p>
                  <Link
                    to={category.link}
                    onMouseEnter={() => setActiveFilter(category.type)}
                    className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-[#4b2e2e] text-white font-medium shadow-md transition-all duration-300 hover:bg-[#c6a87d] hover:text-[#2d1b0f] hover:-translate-y-1"
                  >
                    Explore {category.title} →
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
