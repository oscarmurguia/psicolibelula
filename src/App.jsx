import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AudienceCards from "./components/AudienceCards";
import BrandStory from "./components/BrandStory";
import Psychologist from "./components/Psychologist";
import Services from "./components/Services";
import FreeSession from "./components/FreeSession";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AudienceCards />
        <BrandStory />
        <Psychologist />
        <Services />
        <FreeSession />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
