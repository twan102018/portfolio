import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import '../css/horizontal.css'; // Ensure you have this CSS file for styling

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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="section-container">
      <div className="sticky-container">
        <motion.div style={{ x }} className="scroll-container">
          {/* Manually added divs instead of cards */}
          <div className="card">
            <div
              className="background-image"
              style={{ backgroundImage: `url(/imgs/abstract/1.jpg)` }}
            ></div>
            <div className="content">
              <p className="title">Title 1</p>
            </div>
          </div>
          <div className="card">
            <div
              className="background-image"
              style={{ backgroundImage: `url(/imgs/abstract/2.jpg)` }}
            ></div>
            <div className="content">
              <p className="title">Title 2</p>
            </div>
          </div>
          <div className="card">
            <div
              className="background-image"
              style={{ backgroundImage: `url(/imgs/abstract/3.jpg)` }}
            ></div>
            <div className="content">
              <p className="title">Title 3</p>
            </div>
          </div>
          {/* Add more divs as needed */}
        </motion.div>
      </div>
    </section>
  );
};

export default Horizontal;
