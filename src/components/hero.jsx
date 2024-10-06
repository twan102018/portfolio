// src/components/Hero.js
import '../css/hero.css';
import { useCursor } from '../hooks/CursorContext';

function Hero() {
  const { textEnter, textLeave } = useCursor();

  return (
    <section className="hero">
      <div className="hero-content" onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <h2 className="hero-title"><span className='span-hero'>I'm an 18</span> year old software developer</h2>
        <h3 className="hero-subtitle">Hey, hallo mijn naam is Twan en ik werk met pixels</h3>
        <div className="button-group">
          <button className="btn">Projecten</button>
          <button className="btn btn-primary">Contact</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
