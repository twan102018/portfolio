import '../css/header.css';
import { useState, useEffect } from 'react';

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
    <nav>
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
    </nav>
  );
}

export default Header;
