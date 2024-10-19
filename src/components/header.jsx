import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../css/header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu(); // Close the menu if the screen is wider than 768px
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -200, opacity: 0 }} // Start above the viewport and invisible
      animate={{ y: 0, opacity: 1 }} // End at its normal position, fully visible
      transition={{ duration: 3 }} // Control the speed of the animation
    >
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isOpen ? 'line open' : 'line'}></div>
        <div className={isOpen ? 'line open' : 'line'}></div>
        <div className={isOpen ? 'line open' : 'line'}></div>
      </div>

      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li className="nav-li"><a href="#">Skills</a></li>
        <li className="nav-li"><a href="#">Tijdlijn</a></li>
        <li className="nav-li"><a href="#">Projecten</a></li>
        <li>
          <button className="header-button">Contact</button>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Header;
