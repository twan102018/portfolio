import React from 'react';
import '../css/reviews.css'; // Create a corresponding CSS filei
import photo2 from '../imgs/IMG_0019.jpg';

export default function PortfolioSection() {
  return (
    <section className="portfolio-section">
    <div className="text-overlay">
      <h1>About Me</h1>
      <p>
        Hallo mijn naam is Twan van Vliet, momenteel 18 jaar oud en een student aan het Grafisch Lyceum Rotterdam. <br />
        Naast coderen vindt ik lezen, gamen en series kijken ook erg leuk. Hierbij doe ook altijd veel nieuwe inspiraties op.
      </p>
    </div>
    <div className="image-grid">
      <img src={photo2} alt="My work 1" className="image-left" />
      <img src={photo2} alt="My work 2" className="image-center" />
      <img src={photo2} alt="My work 3" className="image-right" />
    </div>
  </section>
  );
}
