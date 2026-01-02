import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css"
import ChefsRecommendations from "./components/ChefsRecommendations";
import About from "./components/About";
import MenuSection from "./components/Menu";
import PopularDishes from "./components/Dish";
import StatsCounter from "./components/count";
import Service from "./components/Service";
import TestimonialSection from "./components/Reviews";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <PopularDishes />
      <StatsCounter />
      <Service />
       <ChefsRecommendations />
       <TestimonialSection />
       <ContactSection />
       <Footer />
     </>
  );
}

export default App;
