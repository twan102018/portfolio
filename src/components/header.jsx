// src/components/Header.js
import '../css/header.css';
import { useCursor } from '../hooks/CursorContext'; // Import the context

function Header() {
  const { cursorVariant, variants, textEnter, textLeave } = useCursor(); // Use the context

  return (
    <nav>
      <ul onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <li className="nav-li"><a href="#">Over Mij</a></li>
        <li className="nav-li"><a href="#">Tijdlijn</a></li>
        <li className="nav-li"><a href="#">Projecten</a></li>
        <li className="nav-li"><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;
