import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "In House Production", path: "#production" },
    { name: "Collections", path: "#collections" },
    { name: "Events", path: "#events" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <div className="w-full">
      {/* Top Email Bar */}
      <div className="w-full bg-black text-white py-1 text-center text-sm">
        Contact Us At rugartcreations@gmail.com
      </div>

      <nav className="w-full bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center py-4">
            {/* Logo Section */}
            <div className="w-full md:w-auto flex justify-between items-center mb-4 md:mb-6">
              <h1 className="text-3xl font-playfair font-bold text-white">RUG ART CREATIONS</h1>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="font-inter text-white hover:text-gray-300 transition-all duration-300 
                    relative after:content-[''] after:absolute after:w-full after:scale-x-0 
                    after:h-0.5 after:bottom-0 after:left-0 after:bg-white 
                    after:origin-bottom-right after:transition-transform after:duration-300 
                    hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden w-full py-4 space-y-4 bg-black/90 mt-4 rounded-lg animate-fade-in">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block text-white hover:text-gray-300 transition-colors px-4 py-2 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};