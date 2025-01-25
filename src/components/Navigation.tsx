import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Products", "About", "Contact"];

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-playfair font-bold">LUXE CARPETS</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-inter text-sm hover:text-gray-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block font-inter text-sm hover:text-gray-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};