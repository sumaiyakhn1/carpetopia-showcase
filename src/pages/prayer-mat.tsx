import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { StickyMenu } from "@/components/StickyMenu";
import { Carousel } from "@/components/Carousel2";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
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
    if (selectedCarpet) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedCarpet.images.length);
    }
  };

  const prevImage = () => {
    if (selectedCarpet) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedCarpet.images.length) % selectedCarpet.images.length);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedCarpet) {
        if (e.key === 'ArrowRight') {
          nextImage();
        } else if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'Escape') {
          closeModal();
        }
      }
    };

    if (selectedCarpet) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedCarpet, currentImageIndex]);

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <StickyMenu />
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

      {/* Enhanced Modal for Image Viewing */}
      {selectedCarpet && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10" 
            onClick={closeModal}
          >
            <X size={30} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 hover:bg-black/70 rounded-full p-2" 
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>
          
          <div className="relative max-w-full max-h-[80vh]">
            <img 
              src={selectedCarpet.images[currentImageIndex]} 
              alt={`${selectedCarpet.name} ${currentImageIndex + 1}`} 
              className="max-w-full max-h-[80vh] rounded-lg object-contain" 
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {selectedCarpet.images.length}
            </div>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 hover:bg-black/70 rounded-full p-2" 
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>
          
          {/* Navigation Instructions */}
          <div className="absolute bottom-4 left-4 text-white/70 text-sm bg-black/50 px-3 py-1 rounded-full">
            Use ← → arrow keys or click arrows to navigate
          </div>
        </div>
      )}
    </div>
  );
};

const CarpetCard = ({ carpet, onClick }) => {
  return (
    <div className="relative border rounded-lg shadow-lg p-4 hover:shadow-xl cursor-pointer group" onClick={onClick}>
      <div className="relative overflow-hidden rounded-md">
        {/* Main Image */}
        <img 
          src={carpet.images[0]} 
          alt={carpet.name} 
          className="w-full h-50 object-cover transition-all duration-500 group-hover:scale-105" 
        />
        
        {/* Multiple Images Indicator */}
        {carpet.images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium">
            +{carpet.images.length - 1}
          </div>
        )}
        
        {/* Small Blurred Images Preview */}
        {carpet.images.length > 1 && (
          <div className="absolute bottom-3 left-3 flex gap-1">
            {carpet.images.slice(1, Math.min(4, carpet.images.length)).map((img, imgIndex) => (
              <div key={imgIndex} className="w-8 h-8 rounded overflow-hidden border border-white/30">
                <img
                  src={img}
                  alt={`${carpet.name} ${imgIndex + 2}`}
                  className="w-full h-full object-cover filter blur-[1px] opacity-80"
                />
              </div>
            ))}
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-medium">Click to view all images</span>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className="text-lg font-semibold mt-2">{carpet.name}</h2>
      <p className="text-sm font-semibold mt-2">{carpet.description}</p>
      {/* <p className="text-gray-600">{carpet.price}</p> */}
    </div>
  );
};

export default Abstract;
