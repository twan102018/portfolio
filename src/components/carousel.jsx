import "../css/carousel.css";
import "boxicons/css/boxicons.min.css";
import { useRef } from "react";
import { motion } from "framer-motion";

function Carousel() {
  const scrollRef = useRef(null);

  return (
    <div className="carousel-wrapper">
      {/* Add drag functionality to the card container */}
      <motion.div
        className="card-container"
        ref={scrollRef}
        drag="x"
        dragConstraints={{ right: 0, left: 0 }} // Adjust as needed based on number of cards
      >
        {/* Secure card */}
        <motion.div
          className="cards"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <i class="devicon-linkedin-plain"></i>
          <h3>Linkedin</h3>
          <p className="text">Let's connect</p>
        </motion.div>

        {/* Fast card */}
        <motion.div
          className="cards"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <i class="devicon-github-original"></i>
          <h3>Github</h3>
          <p className="text">Github to view my Projects</p>
        </motion.div>

        {/* Uptime card */}
        <motion.div
          className="cards"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <i class='bx bxl-discord-alt' ></i>
          <h3>Discord</h3>
          <p className="text">To contact me</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Carousel;
