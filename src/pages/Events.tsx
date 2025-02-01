import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Carousel height="400px" />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl text-center mb-12">Upcoming Events</h1>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-playfair text-xl">Holiday Collection Launch</h3>
                  <span className="text-gray-600">December 15, 2023</span>
                </div>
                <p className="text-gray-600">Join us for the exclusive launch of our holiday collection featuring festive designs and winter motifs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-playfair text-xl">Carpet Care Workshop</h3>
                  <span className="text-gray-600">January 5, 2024</span>
                </div>
                <p className="text-gray-600">Learn expert tips and techniques for maintaining your luxury carpets in our interactive workshop.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;