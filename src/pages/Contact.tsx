import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-playfair font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-center mb-4">We would love to hear from you!</p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" id="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input className="border border-gray-300 rounded-lg p-2 w-full" type="email" id="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
            <textarea className="border border-gray-300 rounded-lg p-2 w-full" id="message" rows="4" required></textarea>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-lg" type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
