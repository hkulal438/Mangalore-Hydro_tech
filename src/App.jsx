
import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

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
   HANDLE HOMEPAGE SECTION LINKS
========================================================= */

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
      return;
    }

    const sectionId = decodeURIComponent(
      location.hash.substring(1)
    );

    // Wait for the homepage sections to render.
    const frameId = requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [location.pathname, location.hash]);

  return null;
}

/* =========================================================
   ROUTE-AWARE APP CONTENT
========================================================= */

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  // Refresh AOS when navigating between pages.
  useEffect(() => {
    AOS.refreshHard();
  }, [location.pathname]);

  // Make /#section links navigate correctly from the privacy page.
  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Ignore modified clicks and non-left mouse clicks.
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a[href]");

      if (!link || link.target === "_blank") {
        return;
      }

      const href = link.getAttribute("href");

      if (!href || !href.startsWith("/#")) {
        return;
      }

      // Homepage links already work normally on the homepage.
      if (location.pathname === "/") {
        return;
      }

      event.preventDefault();

      // Return to the homepage and scroll to the requested section.
      navigate(href.substring(1));
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener(
        "click",
        handleDocumentClick
      );
    };
  }, [location.pathname, navigate]);

  return (
    <div className="mht-app">
      <ScrollToHash />

      {/* Shared Header */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/privacy-policy"
          element={<Privacy />}
        />

        {/* Fallback for unknown URLs */}
        <Route
          path="*"
          element={<Home />}
        />
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
