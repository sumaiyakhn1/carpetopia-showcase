import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Prayer Mat",
    subtitle: "Explore Now!",
    image: "/carpet/abstract/nab2.2.png",
    type: "Prayer Mat",
    link: "/collections/abstract",
  },
  {
    title: "Pile Durry",
    subtitle: "Explore Now!",
    image: "/carpet/modern/md1.jpg",
    type: "Pile Durry",
    link: "/collections/modern",
  },
  {
    title: "Indo-Tibbetan",
    subtitle: "Explore Now!",
    image: "/carpet/oriental/or1.jpg",
    type: "Indo-Tibbetan",
    link: "/collections/oriental",
  },
];

const filters = ["Prayer Mat", "Pile Durry", " Indo-Tibbetan"];

export const Categories = () => {
  const [activeFilter, setActiveFilter] = useState("Abstract");

  return (
    <section className="py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl text-center mb-12">OUR COLLECTION</h2>
        
        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "secondary"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full px-6"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              to={category.link} 
              key={index} 
              className="block"
              onMouseEnter={() => setActiveFilter(category.type)} // Change filter on hover
            >
              <div
                className={`group cursor-pointer space-y-4 transition-all duration-500 ${
                  activeFilter === category.type ? "scale-105 z-10" : "blur-[2px] hover:blur-none"
                }`}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-playfair text-xl">{category.title}</h3>
                    <p className="text-gray-600">{category.subtitle}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
