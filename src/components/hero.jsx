// src/components/Hero.js
import "../css/hero.css";
import { useCursor } from "../hooks/CursorContext";
import { motion } from "framer-motion";
import image from "../imgs/image.png";

function Hero() {
  const { textEnter, textLeave } = useCursor();

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 2}}
      >
        <h2 className="hero-title">
          <span className="span-hero">
            I'm an 18 year old software developer{" "}
          </span>
        </h2>
        <h3 className="hero-subtitle">
          Hey, hallo mijn naam is Twan
        </h3>

        <div className="button-group">
          <button className="btn">Projecten</button>
          <button className="btn btn-primary">Contact</button>
        </div>
      </motion.div>
      {/* <img src={image} alt="" id='mask-image'/> */}
    </section>
  );
}

export default Hero;
