import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
// import Production from "./pages/Production";
import Collections from "./pages/Collections";
// import Events from "./pages/Events";
import PileDhurrryCollection from "./pages/pile-dhurry";
import PrayerMatCollection from "./pages/prayer-mat";
import IndoTibetanCollection from "./pages/indo-tibetan";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
     
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/production" element={<Production />} /> */}
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/pile-dhurry" element={<PileDhurrryCollection />} />
          <Route path="/collections/prayer-mat" element={<PrayerMatCollection />} />
          <Route path="/collections/indo-tibetan" element={<IndoTibetanCollection />} />
          {/* <Route path="/events" element={<Events />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;