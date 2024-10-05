import "../css/carousel.css";
import "boxicons/css/boxicons.min.css";
import { useRef } from 'react';
import { motion } from 'framer-motion';

function Carousel() {
    const scrollRef = useRef(null);

    return (
        <div className="carousel-wrapper">
            {/* Add drag functionality to the card container */}
            <motion.div className="card-container"
                ref={scrollRef}
                drag="x"
                dragConstraints={{ right: 0, left: 0 }} // Adjust as needed based on number of cards
            >
                {/* Secure card */}
                <motion.div className="cards"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <i className='bx bx-lock-alt'></i>
                    <h3>Secure</h3>
                    <p className="text">Top-notch security features to protect your data.</p>
                </motion.div>

                {/* Fast card */}
                <motion.div className="cards"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <i className='bx bx-tachometer'></i>
                    <h3>Fast</h3>
                    <p className="text">Blazing fast loading speeds with optimized servers.</p>
                </motion.div>

                {/* Uptime card */}
                <motion.div className="cards"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <i className='bx bx-time'></i>
                    <h3>99.9% Uptime</h3>
                    <p className="text">We guarantee 99.9% uptime so your site is always live.</p>
                </motion.div>

                {/* Support card */}
                <motion.div className="cards"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <i className='bx bx-support'></i>
                    <h3>24/7 Support</h3>
                    <p className="text">Dedicated support team available anytime you need.</p>
                </motion.div>

                {/* Scalable card */}
                <motion.div className="cards"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <i className='bx bx-trending-up'></i>
                    <h3>Scalable</h3>
                    <p className="text">Easily scale your hosting plan as your business grows.</p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Carousel;
