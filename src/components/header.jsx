import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

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
        <li className="nav-li"><Link to="/about" className="link">About</Link></li>
        <li className="nav-li"><Link to="/skills" className="link">Skills</Link></li>
        <li className="nav-li"><Link to="/timeline" className="link">Tijdlijn</Link></li>
        <li className="nav-li"><Link to="/projects" className="link">Projecten</Link></li>
        <li>
          <button className="header-button">Contact</button>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Header;
