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
    name: "Graphite Hex",
    image: "/carpet/indo-tibetan/Graphic-hex.jpg",
    description:
      "With a deep charcoal base and raised interlocking hexagon motifs, this durry creates a bold yet elegant visual impact.",
  },
  {
    id: 2,
    name: "Ivory Diamond Weave",
    image: "/carpet/indo-tibetan/ivory-diamond.jpg",
    description:
      "Designed with a clean, geometric diamond pattern, its soft ivory tones and raised texture fit perfectly in minimalist spaces.",
  },
  {
    id: 3,
    name: "Tribal Echo",
    image: "/carpet/indo-tibetan/diamond-carpet.jpg",
    description:
      "An intricate grid of repeating tribal shapes gives this rug a rhythmic and textural appeal with cultural richness.",
  },
  {
    id: 4,
    name: "Midnight Diamond Lux",
    image: "/carpet/indo-tibetan/Midnight-carpet.jpg",
    description:
      "This plush rug features bold diamond motifs in graphite and silver-grey tones, perfect as a luxe statement piece.",
  },
  {
    id: 5,
    name: "Woven Dot Grid",
    image: "/carpet/indo-tibetan/or9.jpg",
    description:
      "Combining clean lines and dotted forms, this rug showcases bold structure for contemporary creative interiors.",
  },
];

const ZoomModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl max-h-[90vh] p-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <TransformWrapper>
          <TransformComponent>
            <img
              src={image}
              alt="Zoomable rug"
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-xl"
            />
          </TransformComponent>
        </TransformWrapper>
      </motion.div>
    </motion.div>
  );
};

const Oriental = () => {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <Navigation />
      <StickyMenu />

      <main>
       

        {/* Intro Section */}
    {/* Hero Section */}
{/* Hero Section */}
<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 via-cream-200 to-brown-300">
  {/* Animated Gradient Overlay */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-tr from-brown-200/30 via-transparent to-cream-300/30"
    animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    style={{ backgroundSize: "200% 200%" }}
  />

  {/* Floating glowing orbs */}
  <motion.div
    className="absolute top-20 left-10 w-44 h-44 bg-brown-400/30 rounded-full blur-3xl"
    animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-16 right-20 w-72 h-72 bg-cream-400/40 rounded-full blur-3xl"
    animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute top-1/2 left-1/2 w-60 h-60 bg-brown-200/20 rounded-full blur-2xl"
    animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Wavy fabric-like animated lines */}
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <motion.div
      className="absolute w-[200%] h-[200%] bg-[url('/patterns/waves.svg')] bg-repeat"
      animate={{ x: ["0%", "20%", "0%"], y: ["0%", "10%", "0%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>

  {/* Hero content */}
  <motion.div
    className="relative z-10 container mx-auto px-6 text-center"
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <motion.h1
      className="font-playfair text-6xl md:text-7xl  mb-6 tracking-tight text-brown-900 drop-shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      Indo-Tibetan Collection
    </motion.h1>

    <motion.p
      className="max-w-2xl mx-auto italic text-xl md:text-2xl text-brown-700 leading-relaxed relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.6 }}
    >
      Indo-Tibetan rugs combine traditional artistry with Indian craftsmanship. 
      Known for their symbolic motifs and rich textures, these rugs infuse 
      cultural heritage into modern spaces.
    </motion.p>

    <motion.button
      className="mt-10 px-8 py-3 rounded-full bg-brown-800 text-cream-500 font-semibold text-lg shadow-xl hover:bg-brown-900 transition-all"
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px rgba(120,72,40,0.6)" }}
      whileTap={{ scale: 0.95 }}
    >
      Explore Collection
    </motion.button>
  </motion.div>
</section>



        {/* Rugs Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {rugs.map((rug, index) => (
                <motion.div
                  key={rug.id}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={rug.image}
                      alt={rug.name}
                      className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-110 cursor-zoom-in"
                      onClick={() => setZoomImage(rug.image)}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-4 text-white">
                        <p className="text-sm opacity-90">Click to zoom</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2 font-playfair group-hover:text-gray-800 transition-colors">
                      {rug.name}
                    </h2>
                    <p className="text-gray-600 italic leading-relaxed text-sm">
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

      {/* Zoom Modal */}
      {zoomImage && <ZoomModal image={zoomImage} onClose={() => setZoomImage(null)} />}
    </div>
  );
};

export default Oriental;
