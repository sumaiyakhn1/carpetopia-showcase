import { useState } from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel2";
import { Footer } from "@/components/Footer";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const rugs = [
  {
    id: 1,
    name: "Graphite Hex",
    price: "$499",
    image: "/carpet/oriental/or1.jpg",
    description:
      "With a deep charcoal base and raised interlocking hexagon motifs, this durry creates a bold yet elegant visual impact. Its plush texture and subtle sheen make it perfect for elevating a contemporary or industrial-themed living area.",
  },
  {
    id: 2,
    name: "Ivory Diamond Weave ",
    price: "$599",
    image: "/carpet/oriental/or2.jpg",
    description:
      "Designed with a clean, geometric diamond pattern, this rug’s soft ivory tones and raised texture make it a perfect fit for modern, minimalist spaces.",
  },
  {
    id: 3,
    name: "Bold Crossline Heritage",
    price: "$699",
    image: "/carpet/oriental/or3.jpg",
    description:
      "Thick, intersecting diagonal lines in black and grey give this rug a bold, tribal aesthetic. Its structured symmetry adds depth and grounding to rustic or contemporary settings.",
  },
  {
    id: 4,
    name: "Heading: Tribal Echo",
    price: "$799",
    image: "/carpet/oriental/or4.jpg",
    description:
      "An intricate grid of repeating tribal shapes gives this rug a rhythmic and textural appeal. The black-on-ivory palette adds contrast and cultural richness to classic interiors.",
  },
  {
    id: 5,
    name: "Midnight Diamond Lux",
    price: "$899",
    image: "/carpet/oriental/or5.jpg",
    description:
      "This plush durry features bold diamond motifs in dark graphite and silver-grey tones. Its deep contrast and strong patterning offer a statement piece for luxe living spaces.",
  },
  {
    id: 6,
    name: "Woven Dot Grid",
    price: "$999",
    image: "/carpet/oriental/or6.jpg",
    description:
      "Combining clean lines and dotted forms, this rug showcases a patterned grid in high contrast. Its modern design and bold structure are ideal for contemporary interiors with a creative edge.",
  },

  {
    id: 8,
    name: "Parallel Weave Stripe",
    price: "$1199",
    image: "/carpet/oriental/or8.jpg",
    description:
      " Showcasing sharply defined parallel weaves in deep grey tones, this durry adds a bold, structured element to contemporary interiors. The striking diagonal pattern enhances visual flow in any room.",
  },
  {
    id: 9,
    name: "Antique Mist Wash",
    price: "$1299",
    image: "/carpet/oriental/or9.jpg",
    description:
      " With a softly faded palette of ash blue, cream, and grey, this rug evokes the charm of aged textiles. Its washed-out finish and subtle texture create a tranquil, vintage-inspired atmosphere.",
  }

];

const ZoomModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} className="max-w-full max-h-full">
        <TransformWrapper
          doubleClick={{ disabled: false }}
          wheel={{ step: 100 }}
          pinch={{ step: 5 }}
          zoomAnimation={{ size: 300 }}
        >
          <TransformComponent>
            <img
              src={image}
              alt="Zoomable rug"
              className="max-h-[90vh] object-contain"
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

const Oriental = () => {
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Carousel height="400px" />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl text-center mb-12">Indo-Tibbetan</h1>
            <p className="max-w-2xl mx-auto text-center text-gray-700 mb-10">
              Indo-Tibbetan rugs combine traditional Tibetan artistry with Indian craftsmanship.
              Known for their symbolic motifs and rich textures, these rugs infuse cultural heritage into modern spaces.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {rugs.map((rug) => (
                <div
                  key={rug.id}
                  className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={rug.image}
                    alt={rug.name}
                    className="w-full h-64 object-cover cursor-zoom-in"
                    onClick={() => setZoomImage(rug.image)}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{rug.name}</h2>
                    <p className="text-sm mt-2 text-gray-700">{rug.description}</p>
                    <p className="text-md mt-3 text-gray-800 font-bold">{rug.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Zoom Modal */}
      <ZoomModal image={zoomImage} onClose={() => setZoomImage(null)} />
    </div>
  );
};

export default Oriental;
