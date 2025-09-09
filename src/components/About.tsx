"use client";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Sparkles, Star, Feather } from "lucide-react";
import { useEffect, useState } from "react";

export const About = () => {
  const headingText = `DreamKnot - Creation`.split("");

  // Track cursor for floating icons
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#fdf6ec] via-[#f9f1e6] to-[#fdf6ec] overflow-hidden pt-32 pb-24"
      aria-labelledby="about-heading"
    >
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>About Us | DreamKnot Creations - Carpets, Rugs & Prayer Mats</title>
        <meta
          name="description"
          content="Discover DreamKnot Creations – makers of handcrafted Carpets, Prayer Mats, Rugs, and weaved yarn. Tradition meets craftsmanship to bring timeless elegance to your home."
        />
      </Helmet>

      {/* Floating icons */}
      <motion.div
        animate={{ x: mousePos.x * 60, y: mousePos.y * 60 }}
        transition={{ type: "spring", stiffness: 40 }}
        className="absolute top-16 left-10 text-[#a67c52]/20"
      >
        <Sparkles size={56} />
      </motion.div>
      <motion.div
        animate={{ x: -mousePos.x * 40, y: mousePos.y * 30 }}
        transition={{ type: "spring", stiffness: 40 }}
        className="absolute bottom-24 right-16 text-[#a67c52]/20"
      >
        <Star size={64} />
      </motion.div>
      <motion.div
        animate={{ x: mousePos.x * 40, y: -mousePos.y * 40 }}
        transition={{ type: "spring", stiffness: 40 }}
        className="absolute top-40 right-1/4 text-[#a67c52]/10"
      >
        <Feather size={52} />
      </motion.div>

      {/* Heading */}
      <motion.h2
        id="about-heading"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
        className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center tracking-wide text-[#4b3621] drop-shadow-sm flex justify-center flex-wrap mt-10"
      >
        About{" "} 
        <span className="ml-3 flex flex-wrap relative bg-gradient-to-r from-[#8b5e3c] via-[#a67c52] to-[#d9b382] bg-clip-text text-transparent animate-gradient">
          
            <motion.span
              
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.4 }}
              viewport={{ amount: 0.3 }}
              className="inline-block"
            >
              Dreamknot Creations
            </motion.span>
         
        </span>
        
      </motion.h2>
      

      {/* Decorative Divider */}
      {/* Decorative Divider */}
<motion.div
  initial={{ scaleX: 0, opacity: 0 }}
  whileInView={{ scaleX: 1, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
  viewport={{ once: true }}
  className="relative w-40 h-[2px] bg-gradient-to-r from-[#a67c52] via-[#d9b382] to-[#a67c52] mx-auto mt-10 mb-20"
>
  <Sparkles className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#a67c52]" size={20} />
</motion.div>

{/* ✅ Floating Text Card right under heading */}
<motion.div
  initial={{ opacity: 0, y: 100, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true, amount: 0.4 }}
  className="relative z-20 max-w-3xl mx-auto bg-white/90 backdrop-blur-lg 
             rounded-3xl shadow-2xl p-8 md:p-12 text-center"
>
  <p className="text-lg md:text-xl italic text-[#4b3621] leading-relaxed">
    At{" "}
    <span className="font-semibold text-[#8b5e3c]">DreamKnot Creations</span>,  
    every thread is a blend of{" "}
    <em className="bg-[#a67c52]/10 px-1 rounded">tradition and craftsmanship</em>.  
    Whether it’s the{" "}
    <strong className="text-[#8b5e3c]">comfort of a prayer mat</strong> or the{" "}
    <strong className="text-[#8b5e3c]">grace of a rug</strong>, our creations transform spaces into{" "}
    <span className="bg-gradient-to-r from-[#a67c52] to-[#d9b382] bg-clip-text text-transparent font-bold">
      homes filled with warmth and elegance
    </span>.
  </p>
</motion.div>

      {/* Background Image */}
      <div className="relative w-full h-[110vh] mt-20">
        <motion.img
          src="/About-Image-back.webp"
          alt="Craftsman weaving a carpet"
          className="absolute inset-0 w-full h-full object-cover brightness-90"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Floating Videos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-16 left-12 w-[280px] h-[180px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
        >
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://res.cloudinary.com/dqxhomda3/video/upload/v1757449856/About-video_giudn5.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-16 right-20 w-[320px] h-[200px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
        >
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://res.cloudinary.com/dqxhomda3/video/upload/v1757449856/About-video_giudn5.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* Floating Text Card Overlapping Image */}



    </section>
  );
};
