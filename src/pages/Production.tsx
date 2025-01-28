import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Production = () => {
  const productionSteps = [
    {
      title: "Design Consultation",
      description: "Our expert designers work closely with clients to understand their vision and requirements, creating custom designs that perfectly match their aesthetic preferences.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    },
    {
      title: "Material Selection",
      description: "We source the finest materials including premium wool, silk, and natural fibers to ensure exceptional quality and durability in every piece.",
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80"
    },
    {
      title: "Hand Knotting",
      description: "Our skilled artisans meticulously hand-knot each carpet, maintaining traditional techniques while incorporating modern design elements.",
      image: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?auto=format&fit=crop&q=80"
    },
    {
      title: "Quality Control",
      description: "Each piece undergoes rigorous quality checks throughout the production process to ensure it meets our high standards of excellence.",
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair text-center mb-12">
              Our In-House Production Process
            </h1>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
              At Rug Art Creations, we take pride in our meticulous production process, 
              combining traditional craftsmanship with modern techniques to create 
              exceptional pieces that stand the test of time.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {productionSteps.map((step, index) => (
                <div 
                  key={step.title}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-playfair mb-4">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair text-center mb-12">
              Why Choose Our In-House Production?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-playfair mb-4">Quality Control</h3>
                <p className="text-gray-600">
                  Direct oversight of every production stage ensures consistent quality.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-playfair mb-4">Customization</h3>
                <p className="text-gray-600">
                  Complete control over the design and production process allows for unlimited customization options.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-playfair mb-4">Craftsmanship</h3>
                <p className="text-gray-600">
                  Our skilled artisans bring decades of experience to every piece they create.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Production;