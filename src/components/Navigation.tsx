import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "About Us", path: "/About1" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="w-full font-[playfair]"
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
{/* Left: Logo */}
<div className="flex items-center">
  <Link
    to="/"
    className={`flex items-center font-[Playfair_Display] tracking-tight transition-colors 
      ${isHome && !scrolled ? "text-white" : "text-gray-900"}`}
    aria-label="DreamKnot Creations Homepage"
  >
    <img
      src="/DKClogo.png"
      alt="DreamKnot Creations Logo"
      className="h-20 w-20 md:h-28 md:w-28 object-contain"
    />
    <span className="text-xl sm:text-2xl md:text-3xl font-playfair">
      DreamKnot Creations
    </span>
  </Link>
</div>


  {/* Right: Nav + CTA + Mobile Toggle */}
  <div className="flex items-center space-x-6">
    {/* Desktop Nav */}
    <div className="hidden md:flex items-center space-x-6">
      {navItems.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to={item.path}
            className={`relative px-5 py-2 rounded-full text-base lg:text-lg font-medium transition-all duration-300 
              ${
                isHome && !scrolled
                  ? "text-white hover:text-black hover:bg-white/90"
                  : "text-gray-800 hover:text-white hover:bg-gray-900"
              }`}
          >
            {item.name}
          </Link>
        </motion.div>
      ))}
    </div>

    {/* CTA (Desktop) */}
    <div className="hidden md:block">
      <motion.a
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 6px 18px rgba(228, 213, 183,0.4)",
        }}
        href="https://calendly.com/dreamknotcreations7/15-minute-exploration-call "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex font-playfair items-center font-bold gap-2 bg-gradient-to-r from-[#36332c] via-[#1d1914] to-[#181613] px-6 py-3 rounded-full shadow-md transition-all text-[#dcd0d0]"
      >
        <Calendar className="w-5 h-5" />
        Book Consultation
      </motion.a>
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <Button
        variant="ghost"
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
        className={`p-2 ${
          isHome && !scrolled ? "text-white" : "text-gray-800"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
      </Button>
    </div>
  </div>
</div>

        </div>

        {/* ✅ Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full md:hidden bg-white/95 backdrop-blur-md z-40 flex flex-col items-center py-8 px-6 shadow-lg"
              role="dialog"
              aria-modal="true"
            >
              {/* Nav links */}
              <div className="flex flex-col items-center gap-6 w-full">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className="w-full text-gray-800 text-lg font-medium hover:text-black py-2 text-center"
                  >
                    {item.name}
                  </button>
                ))}

                {/* CTA inside mobile nav */}
                <Link
                  to="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center mt-4 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800"
                >
                  Book an Appointment
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
