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
import ModernCollection from "./pages/Modern";
import ClassicCollection from "./pages/Abstract";
import LuxuryCollection from "./pages/Oriental";
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
          <Route path="/collections/modern" element={<ModernCollection />} />
          <Route path="/collections/abstract" element={<ClassicCollection />} />
          <Route path="/collections/oriental" element={<LuxuryCollection />} />
          {/* <Route path="/events" element={<Events />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;