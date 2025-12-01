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
    image: "/carpet/pile-dhurry/md1.webp",
    description:
      "This durry features a soft monochromatic palette of grey and white with a repeating wave-like checkered pattern. The plush texture and visual rhythm add a cozy and contemporary feel to any living space, ideal for modern and minimalist interiors.",
  },
  {
    id: 3,
    name: "Ash Line Grid Durry",
    price: "₹499",
    image: "/carpet/pile-dhurry/md3.webp",
    description:
      "Subtle yet striking, this durry is woven in light ash grey with fine, linear patterns forming large overlapping geometric shapes. Its soft surface and understated design offer an elegant, airy look—suitable for contemporary, Scandinavian-inspired interiors.",
  },
  {
    id: 4,
    name: "Frosted Maze Durry",
    price: "₹599",
    image: "/carpet/pile-dhurry/md4.webp",
    description:
      "Showcasing a modern maze-like design in a frosty silver-grey hue, this durry blends clean linear cuts with a smooth matte texture. Its crisp and symmetrical pattern adds a refined, structured element to any space, ideal for minimalist or Scandinavian-inspired interiors.",
  },
  {
    id: 6,
    name: "Ivory Grid Durry",
    price: "₹799",
    image: "/carpet/pile-dhurry/md6.webp",
    description:
      "This durry features a raised geometric grid in soft ivory tones, combining depth with a light, airy appearance. The texture creates a play of light and shadow, offering a sophisticated touch to neutral interiors and calm spaces.",
  },
  {
    id: 7,
    name: "Slate Arrow Durry",
    price: "₹899",
    image: "/carpet/pile-dhurry/md7.webp",
    description:
      "Decorated with scattered chevron and arrow-like strokes in charcoal over a muted slate base, this piece balances tradition and trend. The dynamic linear composition gives movement and energy, making it ideal for creative workspaces or modern living rooms.",
  },
  {
    id: 8,
    name: "Urban Block Durry",
    price: "₹999",
    image: "/carpet/pile-dhurry/or1.webp",
    description:
      "Showcasing an artistic layout of staggered blocks and brush strokes in greys and blues, this durry captures the raw elegance of urban architecture. The abstract pattern gives a structured yet freeform look, perfect for industrial, modern, or minimalist interiors seeking a bold statement piece.",
  },
  {
    id: 9,
    name: "Duststorm Fade Durry",
    price: "₹1099",
    image: "/carpet/pile-dhurry/or2.webp",
    description:
      "With a dusty charcoal base and a distressed diamond grid fading across the surface, this durry brings a weathered, lived-in charm. The worn textures and dark palette create depth and character, ideal for rustic modern or bohemian-inspired spaces.",
  },
  {
    id: 10,
    name: "Midnight Star Durry",
    price: "₹1199",
    image: "/carpet/pile-dhurry/or3.webp",
    description:
      "This durry features a unique star-like geometric pattern spread across a soft slate-grey backdrop. The interlinked star motif brings a sense of symmetry and rhythm while maintaining a calm, subdued tone—perfect for contemporary and transitional home décor.",
  },
  {
    id: 11,
    name: "Urban Fade Durry",
    price: "₹1299",
    image: "/carpet/pile-dhurry/or4.webp",
    description:
      "A striking mix of faded navy, ash, and beige tones gives this durry a modern, weathered look. The abstract, vertical pattern resembles worn paint or city walls aged by time, delivering a raw, expressive edge that suits urban chic or industrial-style homes.",
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

const Modern = () => {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <Navigation />
      <StickyMenu />
      <main>
        <section className="py-32">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="relative py-10 sm:py-20 bg-gradient-to-br from-cream-100 via-cream-200 to-brown-100 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-brown-200/30 via-transparent to-cream-300/40"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "300% 300%" }}
              />
              <motion.span
                className="absolute top-8 left-10 text-brown-600/20 text-4xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                ✦
              </motion.span>
              <motion.span
                className="absolute bottom-12 right-12 text-brown-700/20 text-5xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                ◆
              </motion.span>
              <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.h1
                  className="font-playfair text-3xl md:text-4xl font-bold text-brown-900 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Pile Durry Collection
                </motion.h1>
                <motion.p
                  className="max-w-2xl mx-auto text-brown-700 italic text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Handcrafted durries blending comfort, elegance,
                  and timeless artistry for modern living.
                </motion.p>
              </div>
            </section>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {rugs.map((rug) => (
                <motion.div
                  key={rug.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.2 }} 
                  whileHover={{ y: -6 }}
                  className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-gray-200 flex flex-col"
                >
                  {/* Image wrapper */}
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
      <ZoomModal image={zoomImage} onClose={() => setZoomImage(null)} />
    </div>
  );
};

export default Modern;
