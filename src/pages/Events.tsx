import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      date: "March 15, 2024",
      title: "Spring Collection Launch",
      description: "Join us for the exclusive reveal of our Spring 2024 collection.",
      location: "Main Showroom"
    },
    {
      date: "April 2, 2024",
      title: "Carpet Care Workshop",
      description: "Learn expert tips for maintaining your luxury carpets.",
      location: "Design Center"
    },
    {
      date: "May 20, 2024",
      title: "Artisan Showcase",
      description: "Meet our master craftsmen and watch live demonstrations.",
      location: "Production Facility"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair text-center mb-12">Upcoming Events</h1>
            <div className="max-w-4xl mx-auto space-y-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-gray-600 mt-1" />
                    <div>
                      <p className="text-gray-600 mb-2">{event.date}</p>
                      <h3 className="text-2xl font-playfair mb-2">{event.title}</h3>
                      <p className="text-gray-700 mb-2">{event.description}</p>
                      <p className="text-gray-600">
                        <strong>Location:</strong> {event.location}
                      </p>
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

export default Events;