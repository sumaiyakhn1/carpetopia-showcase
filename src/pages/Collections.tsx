import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { StickyMenu } from "@/components/StickyMenu";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInVariant = (direction: "left" | "right") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const cards = [
  {
    link: "/collections/tufted",
    img: "/carpet/tufted/tufted-cover-photo.jpg",
    title: "Tufted Collection",
    desc: "Premium materials and exquisite craftsmanship",
  },
  {
    link: "/collections/pile-dhurry",
    img: "/carpet/pile-dhurry/md1.jpg",
    title: "Pile Durry Collection",
    desc: "Contemporary designs for modern spaces",
  },
  {
    link: "/collections/prayer-mat",
    img: "/carpet/prayer-rug/ab1.webp",
    title: "Prayer Mat Collection",
    desc: "Timeless patterns and traditional motifs",
  },
  {
    link: "/collections/indo-tibetan",
    img: "/carpet/indo-tibetan/indo-tibet-cover.jpg",
    title: "Indo-Tibetan Collection",
    desc: "Premium materials and exquisite craftsmanship",
  },
];

const Collections = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf6ec] via-[#f9f1e6] to-[#fdf6ec] overflow-hidden">
      <Header />
      <Navigation />
      <StickyMenu />

      <main>
        {/* Hero Section */}
 <section className="relative min-h-[70vh] md:h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#f7f3ee] via-[#f0e6da] to-[#e7d7c3]">
      {/* Subtle patterned background (using repeating gradient stripes) */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,94,60,0.05)_25%,transparent_25%,transparent_50%,rgba(139,94,60,0.05)_50%,rgba(139,94,60,0.05)_75%,transparent_75%,transparent)] bg-[length:40px_40px] opacity-60 -z-10" />

{/* Floating decorative rings */}
<motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 8, repeat: Infinity }}
  className="absolute w-[600px] h-[600px] rounded-full border-2 border-[#8b5e3c]/50 -z-0"
/>
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
  className="absolute w-[800px] h-[800px] rounded-full border-2 border-[#4b3621]/40 -z-0"
/>


      {/* Decorative sparkles */}
      <motion.span
        animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-28 left-12 text-[#8b5e3c]/40 text-5xl select-none"
      >
        ✦
      </motion.span>
      <motion.span
        animate={{ opacity: [0.3, 0.9, 0.3], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-24 right-16 text-[#d9b382]/50 text-6xl select-none"
      >
        ❋
      </motion.span>

      {/* Heading with per-letter luxury animation */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.07 },
          },
        }}
        className="relative font-playfair text-4xl sm:text-5xl md:text-7xl mb-4 md:mb-6 text-[#2a1c12] drop-shadow-[2px_4px_8px_rgba(0,0,0,0.15)] tracking-wide"
      >
        {"Our Collections".split("").map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50, rotateX: -90 },
              visible: { opacity: 1, y: 0, rotateX: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        {/* Under-text glow line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute left-1/2 -bottom-3 h-[3px] w-36 md:w-48 -translate-x-1/2 bg-gradient-to-r from-[#8b5e3c] via-[#d9b382] to-[#8b5e3c] rounded-full shadow-[0_0_12px_rgba(217,179,130,0.6)]"
        />
      </motion.h1>

      {/* Subtitle with sliding fade */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="text-base sm:text-lg md:text-xl italic text-[#3c2b1a] max-w-xl md:max-w-2xl mx-auto px-4 leading-relaxed drop-shadow-sm"
      >
        Discover our exclusive carpet collection — where{" "}
        <span className="text-[#8b5e3c] font-semibold">
          timeless craftsmanship
        </span>{" "}
        meets <span className="text-[#d9b382] font-semibold">modern design</span>
        . Each piece is woven with care, designed to bring elegance, comfort,
        and lasting beauty to your space.
      </motion.p>

      {/* Floating bottom accent shape */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-[-50px] w-[400px] h-[200px] bg-gradient-to-t from-[#8b5e3c]/30 to-transparent blur-3xl rounded-t-full"
      />
    </section>



        {/* Card Layout */}
        <section className="space-y-20 mt-20 md:space-y-32 container mx-auto px-4 sm:px-6">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInVariant(i % 2 === 0 ? "left" : "right")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <Link to={item.link} className="w-full md:w-1/2 group">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 sm:h-80 md:h-[380px] object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                />
              </Link>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left space-y-3 sm:space-y-4">
                <motion.h3
                  whileHover={{ color: "#8b5e3c" }}
                  className="font-playfair text-2xl sm:text-3xl font-bold text-[#4b3621]"
                >
                  {item.title}
                </motion.h3>
                <p className="text-[#5c4a3d] text-base sm:text-lg">
                  {item.desc}
                </p>
                <Link
                  to={item.link}
                  className="inline-block mt-3 sm:mt-4 rounded-xl bg-[#4b3621] px-5 sm:px-6 py-2.5 sm:py-3 text-sm md:text-base font-medium text-[#fdf6ec] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#d9b382] hover:text-[#4b3621]"
                >
                  Explore Collection →
                </Link>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
