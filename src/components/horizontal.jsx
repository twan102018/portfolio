import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import '../css/horizontal.css'; // Ensure you have this CSS file for styling
import Skills from "./skills";
import PortfolioSection from "./reviews";
import RandomPositionSection from "./random";


const Horizontal = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <section ref={targetRef} className="section-container">
      <div className="sticky-container">
        <motion.div style={{ x }} className="scroll-container">
          {/* Manually added divs instead of cards */}
          <div className="card">
            <Skills />
          </div>
          <div className="card">
            <PortfolioSection />
          </div>
          <div className="card">
            <RandomPositionSection/>
          </div>
          {/* Add more divs as needed */}
        </motion.div>
      </div>
    </section>
  );
};

export default Horizontal;
