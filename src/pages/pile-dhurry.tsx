import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel2";
import { Footer } from "@/components/Footer";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const rugs = [
  {
    id: 1,
    name: "Monochrome Wave Durry",
    price: "$299",
    image: "/carpet/pile-dhurry/md1.jpg",
    description:
      "This durry features a soft monochromatic palette of grey and white with a repeating wave-like checkered pattern. The plush texture and visual rhythm add a cozy and contemporary feel to any living space, ideal for modern and minimalist interiors.",
  },
  {
    id: 3,
    name: "Ash Line Grid Durry",
    price: "$499",
    image: "/carpet/pile-dhurry/md3.jpg",
    description:
      "Subtle yet striking, this durry is woven in light ash grey with fine, linear patterns forming large overlapping geometric shapes. Its soft surface and understated design offer an elegant, airy look—suitable for contemporary, Scandinavian-inspired interiors.",
  },
  {
    id: 4,
    name: "Frosted Maze Durry",
    price: "$599",
    image: "/carpet/pile-dhurry/md4.jpg",
    description:
      "Showcasing a modern maze-like design in a frosty silver-grey hue, this durry blends clean linear cuts with a smooth matte texture. Its crisp and symmetrical pattern adds a refined, structured element to any space, ideal for minimalist or Scandinavian-inspired interiors.",
  },
  {
    id: 6,
    name: "Ivory Grid Durry",
    price: "$799",
    image: "/carpet/pile-dhurry/md6.jpg",
    description:
      "This durry features a raised geometric grid in soft ivory tones, combining depth with a light, airy appearance. The texture creates a play of light and shadow, offering a sophisticated touch to neutral interiors and calm spaces.",
  },
  {
    id: 7,
    name: "Slate Arrow Durry",
    price: "$899",
    image: "/carpet/pile-dhurry/md7.jpg",
    description:
      "Decorated with scattered chevron and arrow-like strokes in charcoal over a muted slate base, this piece balances tradition and trend. The dynamic linear composition gives movement and energy, making it ideal for creative workspaces or modern living rooms.",
  },
  {
    id: 8,
    name: "Urban Block Durry",
    price: "$999",
    image: "/carpet/pile-dhurry/or1.jpg",
    description:
      "Showcasing an artistic layout of staggered blocks and brush strokes in greys and blues, this durry captures the raw elegance of urban architecture. The abstract pattern gives a structured yet freeform look, perfect for industrial, modern, or minimalist interiors seeking a bold statement piece.",
  },
  {
    id: 9,
    name: "Duststorm Fade Durry",
    price: "$1099",
    image: "/carpet/pile-dhurry/or2.jpg",
    description:
      "With a dusty charcoal base and a distressed diamond grid fading across the surface, this durry brings a weathered, lived-in charm. The worn textures and dark palette create depth and character, ideal for rustic modern or bohemian-inspired spaces.",
  },
  {
    id: 10,
    name: "Midnight Star Durry",
    price: "$1199",
    image: "/carpet/pile-dhurry/or3.jpg",
    description:
      "This durry features a unique star-like geometric pattern spread across a soft slate-grey backdrop. The interlinked star motif brings a sense of symmetry and rhythm while maintaining a calm, subdued tone—perfect for contemporary and transitional home décor.",
  },
  {
    id: 11,
    name: "Urban Fade Durry",
    price: "$1299",
    image: "/carpet/pile-dhurry/or4.jpg",
    description:
      "A striking mix of faded navy, ash, and beige tones gives this durry a modern, weathered look. The abstract, vertical pattern resembles worn paint or city walls aged by time, delivering a raw, expressive edge that suits urban chic or industrial-style homes.",
  },
];

// Zoom Modal Component
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

const Modern = () => {
  const [zoomImage, setZoomImage] = useState(null);



  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Carousel height="400px" />
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-4xl text-center mb-12">Pile Durry</h1>
            <p className="max-w-2xl mx-auto text-center text-gray-700 mb-10">
              Pile durries are contemporary flat-weave rugs known for their soft surface and durable structure.
              Handcrafted using traditional techniques, they effortlessly blend style, comfort, and artistry.
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
                    {/* <p className="text-md mt-3 text-gray-800 font-bold">{rug.price}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Zoom Image Modal */}
      <ZoomModal image={zoomImage} onClose={() => setZoomImage(null)} />
    </div>
  );
};

export default Modern;
