import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const carpets = [
  {
    id: 1,
    name: "Persian Elegance",
    price: "$499",
    images: [
      "/carpet/modern/nmd.png",
      "/carpet/modern/nmd1.png",
      "https://via.placeholder.com/152"
    ],
    description: "Handwoven Persian carpet with intricate designs."
  },
  {
    id: 2,
    name: "Classic Wool Rug",
    price: "$299",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/153"
    ],
    description: "Premium wool rug for a cozy home feel."
  },
  {
    id: 3,
    name: "Vintage Moroccan",
    price: "$399",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/154"
    ],
    description: "Authentic Moroccan carpet with vintage appeal."
  },
  {
    id: 4,
    name: "Modern Abstract",
    price: "$199",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/155"
    ],
    description: "Stylish abstract patterns for a contemporary look."
  }
];

const Modern = () => {
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
            <h1 className="font-playfair text-4xl text-center mb-12">Modern Collections</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      <p className="text-gray-600">{carpet.price}</p>
    </div>
  );
};

export default Modern;
