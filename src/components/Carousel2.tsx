import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const slides = [
  {
    image: "/carousalimg1.avif",
    title: "",
    description: "",
  },
  {
    image: "carousalimg2.avif",
    title: "",
    description: "",
  },
  {
    image: "carousalimg3.jpg",
    title: "",
    description: "",
  },
];

interface CarouselProps {
  height?: string;
}

export const Carousel = ({ height = "600px" }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className={`relative overflow-hidden`} style={{ height }}>
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