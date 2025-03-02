import { motion } from "framer-motion";
import React from "react";

interface ProductionStep {
  title: string;
  description: string;
  image: string;
}

interface ProductionProcessProps {
  productionSteps: ProductionStep[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProductionProcess: React.FC<ProductionProcessProps> = ({ productionSteps }) => {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-playfair text-center mb-16"
        >
          Our In-House Production Process
        </motion.h1>

        <div className="relative">
          {productionSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className={`relative flex flex-col md:flex-row items-center gap-8 mb-20 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <motion.div
                className="md:w-1/2 w-full px-4 md:px-12"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-playfair mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>

              <motion.div
                className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img src={step.image} alt={step.title} className="w-full h-64 object-cover" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;
