import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Collections = () => {
  const collections = [
    {
      title: "Modern Collection",
      description: "Contemporary designs for modern spaces",
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80"
    },
    {
      title: "Traditional Collection",
      description: "Timeless patterns and designs",
      image: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?auto=format&fit=crop&q=80"
    },
    {
      title: "Luxury Collection",
      description: "Premium materials and exquisite craftsmanship",
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair text-center mb-12">Our Collections</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-playfair mb-2">{collection.title}</h3>
                  <p className="text-gray-600">{collection.description}</p>
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

export default Collections;