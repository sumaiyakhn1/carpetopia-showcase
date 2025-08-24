import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    // { name: "In House Production", path: "/production" },
    { name: "Collections", path: "/collections" },
    // { name: "Events", path: "/events" },
    { name: "Contact Us", path: "/contact" }
  ];

  const handleNavigation = (path: string) => {
    console.log(`Navigating to: ${path}`);
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Header Section - Scrolls Away */}
      <div className="relative z-20">
        {/* Top Email Bar */}
        <div className="w-full bg-black text-white py-1 text-center text-sm">
          Contact Us At dreamknotcreations7@gmail.com
        </div>

        {/* Logo Section */}
        <div className="w-full bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
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
              
              {/* Mobile Menu Button - Always Visible */}
              <Button
                variant="ghost"
                className="md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Menu */}
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled 
          ? 'translate-y-0 bg-black/95 backdrop-blur-sm shadow-lg' 
          : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo for sticky nav */}
            <Link to="/" className="text-xl font-playfair font-bold text-white">
              DKC
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
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

            {/* Mobile Menu Button for sticky nav */}
            <Button
              variant="ghost"
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Fixed Position */}
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden bg-black/95 backdrop-blur-sm mx-4 rounded-lg animate-fade-in">
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="block w-full text-white hover:text-gray-300 transition-colors px-4 py-3 text-center hover:bg-white/10 rounded"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};