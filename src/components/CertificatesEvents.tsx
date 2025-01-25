import { Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const CertificatesEvents = () => {
  const certificates = [
    "Master Carpet Craftsman Certification",
    "Sustainable Materials Excellence",
    "Quality Assurance Gold Standard",
  ];

  const events = [
    {
      date: "December 15, 2023",
      title: "Holiday Collection Launch",
    },
    {
      date: "January 5, 2024",
      title: "Carpet Care Workshop",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6" />
                <span className="font-playfair">Our Certificates</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {certificates.map((cert, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span className="font-inter">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                <span className="font-playfair">Upcoming Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {events.map((event, index) => (
                  <li key={index} className="space-y-1">
                    <p className="font-inter text-sm text-muted-foreground">
                      {event.date}
                    </p>
                    <p className="font-inter">{event.title}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};