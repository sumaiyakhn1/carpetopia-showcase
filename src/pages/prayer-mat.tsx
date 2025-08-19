import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel2";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const carpets = [
  {
    id: 1,
    name: "Elegant Prayer Mat",
    price: "70 x 110cm (27.5 x 43.3in)",
    images: [
      "/carpet/prayer-rug/nab1.0.png",
      "/carpet/prayer-rug/nab1.1.png",
      "/carpet/prayer-rug/nab1.2.png"
    ],
    description:  "Handwoven prayer mat with intricate patterns, blending soft pastel hues and bold textures for a warm, inspiring space."
  },
  {
    id: 2,
    name: "Classic Wool Rug",
    price: "70 x 110cm (27.5 x 43.3in)",
    images: [
      "/carpet/prayer-rug/nab2.0.png",
      "/carpet/prayer-rug/nab2.1.png",
      "/carpet/prayer-rug/nab2.2.png"
    ],
    description: "Premium wool rug with a cozy home feel and a timeless checkered pattern."
  },
  {
    id: 3,
    name: "Classic Prayer Rug",
    price: "70 x 110cm (27.5 x 43.3in)",
    images: [
      "/carpet/prayer-rug/nab3.0.png",
      "/carpet/prayer-rug/nab3.1.png",
      "/carpet/prayer-rug/nab3.2.png"
    ],
    description: "Authentic Prayer Rug with vintage appeal."
  },

];

const Abstract = () => {
  const [selectedCarpet, setSelectedCarpet] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (carpet) => {
    setSelectedCarpet(carpet);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCarpet(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedCarpet.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedCarpet.images.length) % selectedCarpet.images.length);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Carousel height="400px" />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl text-center mb-12">Prayer Mat Collections</h1>
            <p className="max-w-2xl mx-auto text-center text-gray-700 mb-8">
      A prayer mat, is a piece of fabric used for prayers. 
      It provides a clean space for worship and often features intricate patterns and symbolic designs that enhance the spiritual experience.
    </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {carpets.map((carpet) => (
                <CarpetCard key={carpet.id} carpet={carpet} onClick={() => openModal(carpet)} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Modal for Image Viewing */}
      {selectedCarpet && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button className="absolute top-4 right-4 text-white" onClick={closeModal}>
            <X size={30} />
          </button>
          <button className="absolute left-4 text-white" onClick={prevImage}>
            <ChevronLeft size={40} />
          </button>
          <img src={selectedCarpet.images[currentImageIndex]} alt={selectedCarpet.name} className="max-w-full max-h-[80vh] rounded-lg" />
          <button className="absolute right-4 text-white" onClick={nextImage}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

const CarpetCard = ({ carpet, onClick }) => {
  return (
    <div className="relative border rounded-lg shadow-lg p-4 hover:shadow-xl cursor-pointer" onClick={onClick}>
      <img src={carpet.images[0]} alt={carpet.name} className="w-full h-50 object-cover rounded-md transition-all duration-500" />
      <h2 className="text-lg font-semibold mt-2">{carpet.name}</h2>
      <p className="text-sm font-semibold mt-2">{carpet.description}</p>
      {/* <p className="text-gray-600">{carpet.price}</p> */}
    </div>
  );
};

export default Abstract;
