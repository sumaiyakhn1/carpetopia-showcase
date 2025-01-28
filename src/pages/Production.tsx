import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Production = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black/50 flex items-center justify-center">
        <img 
          src="/lovable-uploads/e61d1d6d-872f-4cf2-82d4-b99f3ef1a2da.png" 
          alt="Production Process" 
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <h1 className="text-5xl font-playfair font-bold text-white text-center z-10">
          In-House Production
        </h1>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg">
            Rug Art Creations, a premier exporter of Indian handmade carpets,
            combines top-quality craftsmanship with innovative designs through
            complete in-house production. Founded by Mr. Ahsan Ullah and led by
            Mr. Ali Ullah since the 1990s, the company has set a global standard
            for excellence. Our 50,000 sq. ft. facility in Bhadohi oversees the entire
            process—processing, finishing, and packaging—all under one roof.
          </p>
        </div>

        {/* Production Process */}
        <div className="space-y-20">
          {/* Raw Material Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-playfair font-bold mb-4">Raw Material</h2>
              <p className="text-lg">
                We source high-quality yarns like viscose, bamboo, Tencel, wool, and cotton
                from reputed mills across various regions. Our commitment to quality begins
                with selecting the finest materials available.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/lovable-uploads/e61d1d6d-872f-4cf2-82d4-b99f3ef1a2da.png" 
                alt="Raw Materials" 
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Dyeing Process */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/e61d1d6d-872f-4cf2-82d4-b99f3ef1a2da.png" 
                alt="Dyeing Process" 
                className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-4">Dyeing</h2>
              <p className="text-lg">
                Patterns and motifs come alive through our dyeing process. Our expert
                craftsmen use traditional techniques combined with modern technology
                to create vibrant and long-lasting colors.
              </p>
            </div>
          </div>

          {/* Additional processes can be added here following the same pattern */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Production;