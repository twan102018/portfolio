// src/components/Hero.js
import '../css/hero.css';
import { useCursor } from '../hooks/CursorContext';

function Hero() {
  const { textEnter, textLeave } = useCursor();

  return (
    <section className="hero">
      <div className="hero-content" onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <h2 className="hero-title">I'm a 18 year old software developer</h2>
        <h3 className="hero-subtitle">Hey hallo, mijn naam is Twan, momenteel 18 jaar oud en student software development.</h3>
        <div className="button-group">
          <button className="btn">Mijn Projecten</button>
          <button className="btn btn-primary">Neem contact op</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
