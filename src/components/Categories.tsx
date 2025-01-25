import { Card, CardContent } from "./ui/card";

const categories = [
  {
    title: "Persian",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80",
  },
  {
    title: "Modern",
    image: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?auto=format&fit=crop&q=80",
  },
  {
    title: "Traditional",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80",
  },
  {
    title: "Contemporary",
    image: "https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?auto=format&fit=crop&q=80",
  },
];

export const Categories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl text-center mb-12">Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer overflow-hidden">
              <CardContent className="p-0 relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="font-playfair text-2xl text-white">{category.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};