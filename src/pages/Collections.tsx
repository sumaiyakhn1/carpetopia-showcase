import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel2";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Collections = () => {
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
              <Link to="/collections/modern">
              <img src="/carpet/modern/md1.jpg" alt="Carpet Image" className="w-full h-[400px] object-cover rounded-lg" />
              <h3 className="font-playfair text-xl">Pile Durry Collection</h3>
                <p className="text-gray-600">Contemporary designs for modern spaces</p>
                </Link>
              </div>
              <div className="space-y-4">
              <Link to="/collections/abstract">
              <img src="/carpet/abstract/nab2.2.png" alt="Carpet Image" className="w-full h-[400px] object-cover rounded-lg" />
                <h3 className="font-playfair text-xl">Prayer Mat Collection</h3>
                <p className="text-gray-600">Timeless patterns and traditional motifs</p>
                </Link>
              </div>
              <div className="space-y-4">
              <Link to="/collections/oriental">
              <img src="/carpet/oriental/or1.jpg" alt="Carpet Image" className="w-full h-[400px] object-cover rounded-lg" />
                <h3 className="font-playfair text-xl">Indo-Tibbetan Collection</h3>
                <p className="text-gray-600">Premium materials and exquisite craftsmanship</p>
                </Link>
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