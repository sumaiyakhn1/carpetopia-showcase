import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Clock,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#fffdf8] via-[#fcf7ee] to-[#fffdf8] text-[#3e3e3e] mt-32 overflow-hidden">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#f6ecda]/40 via-[#fcf7ee]/30 to-[#fffdf8]/40 blur-3xl opacity-50 -z-10" />

      {/* Glass effect overlay */}
      <div className="absolute inset-0 -z-10 bg-white/50 backdrop-blur-xl border-t border-[#f6ecda] rounded-t-3xl shadow-inner" />

      <div className="container mx-auto px-6 py-20">
        <motion.div
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 items-start"
>
  {/* Brand */}
  <motion.div variants={fadeInUp} className="space-y-4">
    <div className="flex items-center gap-4">
      <div className="bg-gradient-to-br from-[#e4d5b7] to-[#d6bfa6] w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg">
        <Award className="text-white w-6 h-6" />
      </div>
      <h3 className="font-playfair text-3xl text-[#2f2f2f] hover:text-[#6b6b6b] transition-colors">
        DreamKnot Creations
      </h3>
    </div>
    <p className="text-[#555555] text-base leading-relaxed max-w-xs font-playfair">
      Crafting luxury carpets since 1995. Timeless tradition with a refined
      modern touch.
    </p>
    <div className="flex items-center gap-2 text-[#6b6b6b] font-playfair font-medium text-sm">
      <Clock className="w-4 h-4" />
      <span>Est. 1995</span>
    </div>
  </motion.div>

  {/* Contact */}
  <motion.div variants={fadeInUp} className="space-y-6">
    <h4 className="text-[#2f2f2f] text-2xl font-playfair tracking-wide">
      Contact
    </h4>
    <ul className="space-y-4 font-playfair">
      {[ 
        { icon: Mail, text: "naushad@dreamknotcreations.com", href: "mailto:naushad@dreamknotcreations.com" },
        { icon: Phone, text: "+91 770 303 3761", href: "tel:+917703033761" },
        { icon: MapPin, text: "Goriyana Mohallah, Bhadohi, UP" },
      ].map((item, i) => (
        <motion.li
          key={i}
          whileHover={{ x: 6 }}
          className="flex items-start gap-3 text-[#555555] text-sm transition"
        >
          <item.icon className="w-5 h-5 text-[#d6bfa6] shrink-0" />
          {item.href ? (
            <a
              href={item.href}
              className="hover:text-[#2f2f2f] transition-colors font-medium"
            >
              {item.text}
            </a>
          ) : (
            <span>{item.text}</span>
          )}
        </motion.li>
      ))}
    </ul>
  </motion.div>

  {/* Quick Links */}
  <motion.div variants={fadeInUp} className="space-y-6">
    <h4 className="text-[#2f2f2f] font-playfair text-2xl tracking-wide">
      Quick Links
    </h4>
    <ul className="space-y-3 text-[#555555] text-sm font-medium">
      {["Home", "Collections", "Contact Us"].map((link, i) => (
        <motion.li
          key={i}
          whileHover={{ x: 8 }}
          className="group flex items-center gap-3 transition"
        >
          <span className="w-1.5 h-1.5 bg-[#e4d5b7] rounded-full group-hover:scale-125 transition-transform"></span>
          <Link
            to={
              link === "Home"
                ? "/"
                : `/${link.toLowerCase().replace(" ", "")}`
            }
            className="hover:text-[#2f2f2f] transition-colors font-playfair"
          >
            {link}
          </Link>
        </motion.li>
      ))}
    </ul>
  </motion.div>

  {/* Appointment & Social */}
  <motion.div variants={fadeInUp} className="space-y-8">
    <h4 className="bg-gradient-to-r from-[#dec085] via-[#dc964c] to-[#d6a13f] inline-block text-transparent bg-clip-text font-playfair text-2xl font-semibold tracking-wide">
      Book Appointment
    </h4>
    <p className="text-[#555555] font-playfair text-sm leading-relaxed max-w-xs">
      Schedule a free consultation to discuss your carpet project with our
      designers.
    </p>
    <motion.a
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 6px 18px rgba(228, 213, 183,0.4)",
      }}
      href="https://calendly.com/dreamknotcreations7/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex font-playfair items-center font-bold gap-2 bg-gradient-to-r from-[#ddbe80] via-[#d7a168] to-[#c98930] px-6 py-3 rounded-full shadow-md transition-all text-[#2f2f2f]"
    >
      <Calendar className="w-5 h-5" />
      Book Consultation
    </motion.a>

    {/* <div className="flex gap-4">
      {[Facebook, Instagram].map((Icon, i) => (
        <motion.a
          key={i}
          whileHover={{ scale: 1.15 }}
          href="#"
          className="p-3 bg-[#fcf7ee] hover:bg-[#f6ecda] rounded-full transition shadow-sm"
        >
          <Icon className="w-5 h-5 text-[#3e3e3e]" />
        </motion.a>
      ))}
    </div> */}
  </motion.div>
</motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6 border-t border-[#f6ecda] pt-6 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-[#6b6b6b] gap-4"
        >
          <p>&copy; {new Date().getFullYear()} Dream Knot Creations.</p>
          <p className="flex items-center gap-3">
            <span>Handcrafted in Bhadohi</span> <span>•</span>{" "}
            <span>Premium Quality Guaranteed</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
