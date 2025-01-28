import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <p>Bhadohi, Uttar Pradesh, India</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <p>+91 XXXXXXXXXX</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <p>rugartcreations@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/production" className="hover:text-gray-300">In House Production</Link></li>
              <li><Link to="/collections" className="hover:text-gray-300">Collections</Link></li>
              <li><Link to="/events" className="hover:text-gray-300">Events</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Rug Art Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};