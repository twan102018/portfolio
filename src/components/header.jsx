import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../css/header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isOpen ? 'line open' : 'line'}></div>
        <div className={isOpen ? 'line open' : 'line'}></div>
        <div className={isOpen ? 'line open' : 'line'}></div>
      </div>

      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li className="nav-li"><a href="localhost:3000#about">About</a></li>
        <li className="nav-li"><a href="localhost:3000#skills">Skills</a></li>
        <li className="nav-li"><a href="http://localhost:3000/#timeline">Tijdlijn</a></li>
        <li className="nav-li"><a href="localhost:3000#projecten">Projecten</a></li>
        <li>
          <button className="header-button">Contact</button>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Header;
