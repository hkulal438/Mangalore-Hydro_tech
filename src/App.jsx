
import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// SEO Component
import SEO from "./Components/SEO/SEO";

// Website Components
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Partnership from "./Components/Partnership/Partnership";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import Offer from "./Components/Offer/Offer";
import Equipment from "./Components/Equipment/Equipment";
import FAQ from "./Components/FAQ/FAQ";
import Testimonials from "./Components/Testimonials/Testimonials";
import ContactUs from "./Components/ContactUs/ContactUs";
import Find from "./Components/Find/Find";
import Footer from "./Components/Footer/Footer";
import Privacy from "./Components/Privacy/Privacy";

/* =========================================================
   HOMEPAGE
========================================================= */

function Home() {
  return (
    <>
      <SEO
        title="CNG Cylinder Hydro Testing in Mangaluru | Mangalore Hydro Tech"
        description="Mangalore Hydro Tech provides CNG cylinder hydro testing, inspection, cleaning and maintenance services in Mangaluru, Karnataka."
        canonical="https://mangalorehydrotech.com/"
      />

      <Hero />
      <About />
      <Partnership />
      <WhyChoose />
      <Offer />
      <Equipment />
      <FAQ />
      <Testimonials />
      <ContactUs />
      <Find />
    </>
  );
}

/* =========================================================
   SCROLL HANDLER
   - Privacy page opens at the top
   - Homepage hash links scroll to their sections
========================================================= */

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      return;
    }

    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      return;
    }

    const sectionId = decodeURIComponent(hash.slice(1));

    const frameId = requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      }
    });

    return () => cancelAnimationFrame(frameId);
  }, [pathname, hash]);

  return null;
}

/* =========================================================
   APP CONTENT
========================================================= */

function AppContent() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return (
    <div className="mht-app">
      <ScrollManager />

      {/* Shared Header */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

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
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
