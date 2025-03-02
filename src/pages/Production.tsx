import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import ProductionProcess from "@/components/ProductionProcess";

const Production = () => {
  const productionSteps = [
    {
      title: "Raw Material",
      description:
        "We source high-quality yarns like viscose, bamboo, Tencel, wool, and cotton from reputed mills across various regions.",
      image:
        "/carpet/production/p1.jpg",
    },
    {
      title: "Dyeing",
      description:
        "Patterns and motifs come alive through the dyeing process. Our dyes are screen printed, eco-friendly, and azo-free.",
      image:
        "/carpet/production/p2.jpg",
    },
    {
      title: "Weaving",
      description:
        "Our unit specializes in loom-knotted, hand-tufted, durry weavings, and more.",
      image:
        "/carpet/production/p3.jpg",
    },
    {
      title: "Shearing",
      description:
        "Shearing is done after weaving to level the piles to the same height.",
      image:
        "/carpet/production/p4.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Carousel height="400px" />
        {/* Animated Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         <ProductionProcess productionSteps={productionSteps} />

        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Production;
