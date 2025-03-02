export const Video = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl text-center mb-12">Our Craft</h2>
        <div className="max-w-4xl mx-auto aspect-video">
        <iframe
  className="w-full h-full rounded-lg shadow-lg"
  src="https://www.youtube.com/embed/4hRF4CFS8ww"
  title="Carpet Craftsmanship"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
                
        </div>
      </div>
    </section>
  );
};