import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import Offer from "./Components/Offer/Offer";
import Equipment from "./Components/Equipment/Equipment";
import FAQ from "./Components/FAQ/FAQ";
import Testimonials from "./Components/Testimonials/Testimonials";
import ContactUs from "./Components/ContactUs/ContactUs";
import Find from "./Components/Find/Find";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="mht-app">
      <Header />
      <Hero />

      <About />
      <WhyChoose />
      <Offer />
      <Equipment />
        <FAQ />
      <Testimonials />
      <ContactUs />
      <Find />
      <Footer />
    </div>
  );
}

export default App;