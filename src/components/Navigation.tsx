import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "#products" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 transition-transform hover:scale-105 duration-300"
          >
            <img 
              src="/placeholder.svg" 
              alt="Luxe Carpets Logo" 
              className="h-10 w-10"
            />
            <h1 className="text-2xl font-playfair font-bold text-white">LUXE CARPETS</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-inter text-sm text-white hover:text-gray-300 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            className="md:hidden text-white hover:bg-white/10 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? "max-h-64 opacity-100 translate-y-0" 
              : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="py-4 space-y-4 bg-white/10 backdrop-blur-sm mt-4 rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block font-inter text-sm text-white hover:text-gray-300 transition-colors duration-300 px-4"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};