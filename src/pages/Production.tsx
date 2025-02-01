import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";

const Production = () => {
  const productionSteps = [
    {
      title: "Raw Material",
      description: "We source high-quality yarns like viscose, bamboo, Tencel, wool, and cotton from reputed mills across various regions.",
      image: "https://images.unsplash.com/photo-1603566345694-53e4f4f4c171?auto=format&fit=crop&q=80"
    },
    {
      title: "Dyeing",
      description: "Patterns and motifs come alive through the dyeing process. Our dyes are screen printed, eco-friendly, and azo-free.",
      image: "https://images.unsplash.com/photo-1620218776119-2bc322e2d7ad?auto=format&fit=crop&q=80"
    },
    {
      title: "Weaving",
      description: "Our unit specializes in loom-knotted, hand-tufted, durry weavings, and more.",
      image: "https://images.unsplash.com/photo-1599401677465-ea8638b1eb6d?auto=format&fit=crop&q=80"
    },
    {
      title: "Shearing",
      description: "Shearing is done after weaving to level the piles to the same height.",
      image: "https://images.unsplash.com/photo-1598867543295-e64536e10058?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Carousel height="400px" />
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair text-center mb-16">
              Our In-House Production Process
            </h1>
            
            <div className="relative">
              {/* Enhanced rope design */}
             
              <div className="absolute left-1/2 top-0 bottom-0 w-[3px] transform -translate-x-1/2">
                {/* Main rope body */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-700 via-amber-500 to-amber-700"></div>
                
                {/* Texture overlay */}
                <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#000_2px,#000_4px)]"></div>
                
                {/* Highlight */}
                <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-amber-200 via-transparent to-amber-200 opacity-50"></div>
                
                {/* Shadow */}
                <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-amber-900 via-transparent to-amber-900 opacity-50"></div>
              </div>
              
              {/* Production steps */}
              {productionSteps.map((step, index) => (
                <div 
                  key={step.title}
                  className={`relative flex items-center gap-8 mb-20 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <h3 className="text-2xl font-playfair mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  {/* Enhanced connector node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6">
                    {/* Outer circle */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg"></div>
                    {/* Inner circle */}
                    <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-amber-300 to-amber-500"></div>
                    {/* Highlight */}
                    <div className="absolute inset-[4px] rounded-full bg-gradient-to-br from-amber-200 to-transparent opacity-50"></div>
                  </div>
                  
                  {/* Image */}
                  <div className="w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Production;