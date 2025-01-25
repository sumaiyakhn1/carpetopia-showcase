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
    <nav className="absolute w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-playfair font-bold text-white">LUXE CARPETS</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-inter text-sm text-white hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white mt-4 rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block font-inter text-sm hover:text-gray-600 transition-colors px-4"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};