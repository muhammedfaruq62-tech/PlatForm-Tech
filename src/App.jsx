import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trustbar from "./components/Trustbar";
import Categories from "./components/Categories";
import About from "./components/About";
import RepairServices from "./components/RepairServices";
import FeaturedProducts from "./components/FeaturedProducts";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <div className="reveal">
        <Hero />
      </div>

      <div className="reveal reveal-zoom-out">
        <Trustbar />
      </div>

      <div className="reveal">
        <Categories />
      </div>

      <div className="reveal reveal-zoom-out">
        <About />
      </div>

      <div className="reveal reveal-zoom-out">
        <RepairServices />
      </div>

      <div className="reveal">
        <FeaturedProducts />
      </div>

      <div className="reveal reveal-zoom-out">
        <ContactBanner />
      </div>

      <Footer />
    </>
  );
}

export default App;