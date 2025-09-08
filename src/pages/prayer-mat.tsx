import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { StickyMenu } from "@/components/StickyMenu";
import { Carousel } from "@/components/Carousel2";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";


const carpets = [
  {
    id: 1,
    name: "Elegant Prayer Mat",
    price: "70 x 110cm (27.5 x 43.3in)",
    images: [
      "/carpet/prayer-rug/Elegant-prayer-mat.jpg",
      "/carpet/prayer-rug/nab1.1.png",
      "/carpet/prayer-rug/nab1.2.png",
    ],
    description:
      "Handwoven prayer mat with intricate patterns, blending soft pastel hues and bold textures for a warm, inspiring space.",
  },
  {
    id: 2,
    name: "Classic Wool Rug",
    price: "70 x 110cm (27.5 x 43.3in)",
    images: [
      "/carpet/prayer-rug/prayer-carpet.jpg",
      "/carpet/prayer-rug/nab2.1.png",
      "/carpet/prayer-rug/nab2.2.png",
    ],
    description:
      "Premium wool rug with a cozy home feel and a timeless checkered pattern.",
  },
  {
    id: 3,
    name: "Classic Prayer Rug",
    price: "70 x 110cm (27.5 x 43.3in)",
    images: [
      "/carpet/prayer-rug/classic-prayer-rug.jpg",
      "/carpet/prayer-rug/nab3.1.png",
      "/carpet/prayer-rug/nab3.2.png",
    ],
    description: "Authentic Prayer Rug with vintage appeal.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const Abstract = () => {
  const [selectedCarpet, setSelectedCarpet] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (carpet) => {
    setSelectedCarpet(carpet);
    setCurrentImageIndex(0);
  };

  const closeModal = () => setSelectedCarpet(null);

  const nextImage = () =>
    selectedCarpet &&
    setCurrentImageIndex(
      (prev) => (prev + 1) % selectedCarpet.images.length
    );

  const prevImage = () =>
    selectedCarpet &&
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedCarpet.images.length) %
        selectedCarpet.images.length
    );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedCarpet) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedCarpet]);

  return (
    <div className="min-h-screen font-[Outfit] bg-[#FAF9F6] text-gray-800">
      <Header />
      <Navigation />
      <StickyMenu />
      <main>
        
        <section className="relative py-24 bg-gradient-to-b from-cream-200 via-cream-100 to-cream-200 overflow-hidden">
  {/* Floating subtle orbs */}
  <motion.div
    className="absolute -top-10 -left-10 w-40 h-40 bg-brown-200/30 rounded-full blur-3xl"
    animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-0 right-0 w-52 h-52 bg-brown-300/20 rounded-full blur-3xl"
    animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="container mx-auto px-6 relative z-10">
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl mt-10 font-playfair text-center font- mb-6 bg-gradient-to-r from-brown-700 to-brown-500 bg-clip-text text-"
    >
      Prayer Mat Collections
    </motion.h1>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="max-w-2xl mx-auto text-center italic text-brown-700/80 mb-14 leading-relaxed"
    >
      A prayer mat is more than a fabric — it provides a sacred space
      for worship, enriched with intricate designs and timeless
      patterns that inspire reflection and peace.
    </motion.p>

    {/* Grid */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {carpets.map((carpet, i) => (
        <CarpetCard
          key={carpet.id}
          carpet={carpet}
          onClick={() => openModal(carpet)}
          index={i}
        />
      ))}
    </motion.div>
  </div>
</section>

      </main>
      <Footer />

      {/* Modal */}
      {selectedCarpet && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeModal}
          >
            <X size={30} />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/40 hover:bg-black/70 rounded-full p-2"
            onClick={prevImage}
          >
            <ChevronLeft size={36} />
          </button>

          <div className="relative max-w-full max-h-[80vh] flex items-center justify-center">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={selectedCarpet.images[currentImageIndex]}
              alt={`${selectedCarpet.name} ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] rounded-lg object-contain shadow-2xl"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
              {currentImageIndex + 1} / {selectedCarpet.images.length}
            </div>
          </div>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/40 hover:bg-black/70 rounded-full p-2"
            onClick={nextImage}
          >
            <ChevronRight size={36} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

const CarpetCard = ({ carpet, onClick, index }) => (
  <motion.div
    custom={index}
    variants={fadeUp}
    whileHover={{ y: -6, scale: 1.02 }}
    className="group relative rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden border border-gray-100 cursor-pointer transition-all duration-500"
    onClick={onClick}
  >
    <div className="relative overflow-hidden">
      <motion.img
        src={carpet.images[0]}
        alt={carpet.name}
        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {carpet.images.length > 1 && (
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
          +{carpet.images.length - 1}
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
        <span className="text-white text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
          Click to explore
        </span>
      </div>
    </div>

    <div className="p-5">
      <h2 className="text-lg font-semibold mb-2">{carpet.name}</h2>
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
        {carpet.description}
      </p>
      <p className="mt-3 text-sm font-medium text-gray-900">
        {}
      </p>
    </div>
  </motion.div>
);

export default Abstract;
