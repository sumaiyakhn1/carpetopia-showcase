import { useState } from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { StickyMenu } from "@/components/StickyMenu";
import { Carousel } from "@/components/Carousel2";
import { Footer } from "@/components/Footer";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion } from "framer-motion";

const rugs = [
  {
    id: 1,
    name: "Monochrome Wave Durry",
    price: "₹299",
    image: "/carpet/tufted/tufted-image-1.jpg",
    description:
      "This durry features a soft monochromatic palette of grey and white with a repeating wave-like checkered pattern. The plush texture and visual rhythm add a cozy and contemporary feel to any living space, ideal for modern and minimalist interiors.",
  },
  {
    id: 3,
    name: "Ash Line Grid Durry",
    price: "₹499",
    image: "/carpet/tufted/Tufted-ash-carpet.jpg",
    description:
      "Subtle yet striking, this durry is woven in light ash grey with fine, linear patterns forming large overlapping geometric shapes. Its soft surface and understated design offer an elegant, airy look—suitable for contemporary, Scandinavian-inspired interiors.",
  },
  {
    id: 4,
    name: "Frosted Maze Durry",
    price: "₹599",
    image: "/carpet/tufted/Frosted-image-carpet.jpg",
    description:
      "Showcasing a modern maze-like design in a frosty silver-grey hue, this durry blends clean linear cuts with a smooth matte texture. Its crisp and symmetrical pattern adds a refined, structured element to any space, ideal for minimalist or Scandinavian-inspired interiors.",
  },
  {
    id: 6,
    name: "Ivory Grid Durry",
    price: "₹799",
    image: "/carpet/tufted/Ivory-grid-carpet.jpg",
    description:
      "This durry features a raised geometric grid in soft ivory tones, combining depth with a light, airy appearance. The texture creates a play of light and shadow, offering a sophisticated touch to neutral interiors and calm spaces.",
  },
];

// Zoom Modal Component
const ZoomModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full"
      >
        <TransformWrapper
          doubleClick={{ disabled: false }}
          wheel={{ step: 100 }}
          pinch={{ step: 5 }}
          zoomAnimation={{ size: 300 }}
        >
          <TransformComponent>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              src={image}
              alt="Zoomable rug"
              className="max-h-[90vh] object-contain"
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </motion.div>
  );
};

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Tufted = () => {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <Navigation />
      <StickyMenu />
      <main>
        <section className="py-40">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 via-cream-200 to-brown-200">
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-brown-200/30 via-transparent to-cream-300/40"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              />

              {/* Floating glowing orbs */}
              <motion.div
                className="absolute top-20 left-12 w-44 h-44 bg-brown-400/30 rounded-full blur-3xl"
                animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-16 right-20 w-72 h-72 bg-cream-400/40 rounded-full blur-3xl"
                animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Content */}
              <motion.div
                className="relative z-10 container mx-auto px-6 text-center"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.h1
                  className="font-playfair text-5xl md:text-6xl mb-6 tracking-tight text-brown-900 drop-shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  Tufted Carpets
                </motion.h1>

                <motion.p
                  className="max-w-2xl mx-auto italic text-lg md:text-xl text-brown-700 leading-relaxed"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                >
                  Soft textures, bold designs, and timeless craftsmanship. Discover the perfect balance of comfort and artistry in our Tufted Collection.
                </motion.p>

                <motion.button
                  className="mt-8 px-8 py-3 cursor-default rounded-full bg-brown-800 text-cream-500 font-semibold text-lg shadow-xl hover:bg-brown-900 transition-all"
                  whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px rgba(120,72,40,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Collection
                </motion.button>
              </motion.div>
            </section>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-16">
              {rugs.map((rug) => (
                <motion.div
                  key={rug.id}
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-gray-200 flex flex-col"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ y: -6 }}
                >
                  {/* Image wrapper with aspect ratio */}
                  <motion.div whileHover={{ scale: 1.03 }} className="w-full">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={rug.image}
                        alt={rug.name}
                        className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
                        onClick={() => setZoomImage(rug.image)}
                      />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <div className="p-4 sm:p-5 flex flex-col flex-grow">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                      {rug.name}
                    </h2>
                    <p className="text-sm mt-2 text-gray-600 leading-relaxed line-clamp-3">
                      {rug.description}
                    </p>
                    
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Zoom Image Modal */}
      <ZoomModal image={zoomImage} onClose={() => setZoomImage(null)} />
    </div>
  );
};

export default Tufted;
