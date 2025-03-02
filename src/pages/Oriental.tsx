import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";

const Oriental = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Carousel height="400px" />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl text-center mb-12">Our Collections</h1>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
              <img src="/carpet/modern/md1.jpg" alt="Carpet Image" className="w-full h-[400px] object-cover rounded-lg" />
              <h3 className="font-playfair text-xl">Modern Collection</h3>
                <p className="text-gray-600">Contemporary designs for modern spaces</p>
              </div>
              <div className="space-y-4">
              <img src="/carpet/abstract/ab1.jpg" alt="Carpet Image" className="w-full h-[400px] object-cover rounded-lg" />
                <h3 className="font-playfair text-xl">Classic Collection</h3>
                <p className="text-gray-600">Timeless patterns and traditional motifs</p>
              </div>
              <div className="space-y-4">
              <img src="/carpet/oriental/or1.jpg" alt="Carpet Image" className="w-full h-[400px] object-cover rounded-lg" />
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

export default Oriental;