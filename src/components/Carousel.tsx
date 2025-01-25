import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80",
    title: "Luxury Persian Carpets",
    description: "Handcrafted excellence for your home",
  },
  {
    image: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?auto=format&fit=crop&q=80",
    title: "Modern Collection",
    description: "Contemporary designs for modern spaces",
  },
  {
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80",
    title: "Traditional Elegance",
    description: "Timeless patterns that tell stories",
  },
];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="font-playfair text-4xl md:text-6xl mb-4">{slide.title}</h2>
              <p className="font-inter text-lg md:text-xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <Button
        variant="ghost"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
        onClick={prev}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="ghost"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
        onClick={next}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
};