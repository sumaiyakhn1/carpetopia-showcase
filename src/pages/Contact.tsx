import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel2";
import { Mail, Phone, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <Navigation />
      <main>
        <Carousel height="400px" />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl text-center mb-12">Contact Us</h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <h2 className="font-playfair text-2xl">Send us a message</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full p-3 border rounded-lg"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="font-playfair text-2xl">Get in touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">dreamknotcreations7@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+91-7703033761</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">Goriyana, Bhadohi</p>
                      <p className="text-gray-600">Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;