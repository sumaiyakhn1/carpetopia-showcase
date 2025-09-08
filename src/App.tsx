import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState, useRef } from "react";

import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Collections from "./pages/Collections";
import PileDhurrryCollection from "./pages/pile-dhurry";
import PrayerMatCollection from "./pages/prayer-mat";
import IndoTibetanCollection from "./pages/indo-tibetan";
import ScrollToTop from "./components/ScrollToTop";
import About1 from "./pages/About1";
import Tufted from "./pages/Tufted";

import { pageview, GA_MEASUREMENT_ID } from "./lib/ga";

const queryClient = new QueryClient();

// ✅ Transition overlay
function TransitionOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white text-black px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.h1
        className="text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-widest text-center leading-tight"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        DREAM KNOT CREATIONS
      </motion.h1>
    </motion.div>
  );
}

// ✅ GA Listener for route changes
function GAListener() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      pageview(location.pathname + location.search);
    }
  }, [location]);

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, { debug_mode: true, send_page_view: false });
    }
  }, []);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    setShowTransition(true);
    const timer = setTimeout(() => setShowTransition(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Overlay */}
      <AnimatePresence mode="wait">
        {showTransition && <TransitionOverlay key="transition" />}
      </AnimatePresence>

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Dream Knot Creations - Handcrafted Carpets</title>
                    <meta
                      name="description"
                      content="Discover handcrafted carpets and rugs at Dream Knot Creations. Explore unique collections designed with care."
                    />
                  </Helmet>
                  <Index />
                </>
              }
            />
            <Route
              path="/About1"
              element={
                <>
                  <Helmet>
                    <title>About Us | Dream Knot Creations</title>
                    <meta
                      name="description"
                      content="Learn more about Dream Knot Creations, our story, and our dedication to timeless craftsmanship."
                    />
                  </Helmet>
                  <About1 />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Helmet>
                    <title>Contact Us | Dream Knot Creations</title>
                    <meta
                      name="description"
                      content="Get in touch with Dream Knot Creations. We'd love to hear from you!"
                    />
                  </Helmet>
                  <Contact />
                </>
              }
            />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/pile-dhurry" element={<PileDhurrryCollection />} />
            <Route path="/collections/tufted" element={<Tufted />} />
            <Route path="/collections/prayer-mat" element={<PrayerMatCollection />} />
            <Route path="/collections/indo-tibetan" element={<IndoTibetanCollection />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <GAListener /> {/* ✅ Added here */}
          <AnimatedRoutes />
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
