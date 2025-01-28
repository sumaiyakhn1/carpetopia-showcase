import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Carousel } from "@/components/Carousel";
import { About } from "@/components/About";
import { Video } from "@/components/Video";
import { CertificatesEvents } from "@/components/CertificatesEvents";
import { Categories } from "@/components/Categories";

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
    </div>
  );
};

export default Index;