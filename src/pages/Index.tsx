import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel";
import { About } from "@/components/About";
import { Video } from "@/components/Video";
import { CertificatesEvents } from "@/components/CertificatesEvents";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Carousel />
        <About />
        <Video />
        <CertificatesEvents />
        <Categories />
      </main>
      <Footer />
    </div>
  );
};

export default Index;