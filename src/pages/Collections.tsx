import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";

const Collections = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Carousel />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl text-center mb-12">Our Collections</h1>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-lg"></div>
                <h3 className="font-playfair text-xl">Modern Collection</h3>
                <p className="text-gray-600">Contemporary designs for modern spaces</p>
              </div>
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-lg"></div>
                <h3 className="font-playfair text-xl">Classic Collection</h3>
                <p className="text-gray-600">Timeless patterns and traditional motifs</p>
              </div>
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-lg"></div>
                <h3 className="font-playfair text-xl">Luxury Collection</h3>
                <p className="text-gray-600">Premium materials and exquisite craftsmanship</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;