import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">Dream Knot Creations</h3>
            <p className="text-gray-300">Crafting luxury carpets with passion and precision since 1995.</p>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>dreamknotcreations7@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+917703033761</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Goriyana Mohallah, Bhadohi,UP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              </li>
              {/* <li>
                <Link to="/production" className="hover:text-gray-300 transition-colors">In House Production</Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          {/* <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div> */}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dream Knot Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};