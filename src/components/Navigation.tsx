import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "In House Production", path: "/production" },
    { name: "Collections", path: "/collections" },
    { name: "Events", path: "/events" },
    { name: "Contact Us", path: "/contact" }
  ];

  const handleNavigation = (path: string) => {
    console.log(`Navigating to: ${path}`);
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-20">
      {/* Top Email Bar */}
      <div className="w-full bg-black text-white py-1 text-center text-sm">
        Contact Us At dreamknotcreations7@gmail.com
      </div>

      <nav className="w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center py-4">
            {/* Logo Section */}
            <div className="w-full md:w-auto flex justify-between items-center mb-4 md:mb-6">
              <div className="flex items-center gap-4">
                {/* Logo Space */}
                <div className="w-36 h-36 bg-transparent rounded flex items-center justify-center">
  <img
    src="/DKClogo.png"
    alt="Logo"
    className="w-full h-full object-contain"
  />
</div>
                <Link to="/" className="text-3xl font-playfair font-bold text-white">
                  Dream Knot Creations
                </Link>
              </div>
              
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
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className="font-inter text-white hover:text-gray-300 transition-all duration-300 
                    relative after:content-[''] after:absolute after:w-full after:scale-x-0 
                    after:h-0.5 after:bottom-0 after:left-0 after:bg-white 
                    after:origin-bottom-right after:transition-transform after:duration-300 
                    hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden w-full py-4 space-y-4 bg-black/90 mt-4 rounded-lg animate-fade-in">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className="block w-full text-white hover:text-gray-300 transition-colors px-4 py-2 text-center"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};