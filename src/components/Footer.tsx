import { Facebook, Instagram, Mail, MapPin, Phone, Calendar, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold">Dream Knot Creations</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Crafting luxury carpets with passion and precision since 1995. 
              We bring traditional craftsmanship to modern spaces.
            </p>
            <div className="flex items-center gap-2 text-amber-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Est. 1995</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-amber-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                <a 
                  href="mailto:naushad@dreamknotcreations.com" 
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  naushad@dreamknotcreations.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                <a 
                  href="tel:+917703033761" 
                  className="text-gray-300 hover:text-amber-300 transition-colors"
                >
                  +91 770 303 3761
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">Goriyana Mohallah, Bhadohi, UP</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-semibold text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-300 transition-colors flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-300 hover:text-amber-300 transition-colors flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></span>
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-amber-300 transition-colors flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-amber-400 rounded-full group-hover:scale-150 transition-transform"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Book Appointment & Social */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-playfair text-xl font-semibold text-amber-400">Book Appointment</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Schedule a free consultation to discuss your carpet project and get expert advice.
              </p>
              <a
                href="https://calendly.com/dreamknotcreations7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                Book Free Consultation
              </a>
            </div>

            {/* Social Media */}
            {/* <div className="space-y-3">
              <h3 className="font-playfair text-lg font-semibold text-amber-400">Follow Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-amber-600 hover:bg-amber-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Dream Knot Creations. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Handcrafted with ❤️ in Bhadohi</span>
              <span>•</span>
              <span>Premium Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};