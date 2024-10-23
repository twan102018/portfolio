import React from 'react';
import '../css/aboutme.css'; // Make sure the path is correct
import photo2 from '../imgs/IMG_0019.jpg';

export default function Socials() {
  return (
    <section className="positioned-section">
      {/* Text Overlay */}
      <div className="overlay-text">
      <h1>About Me</h1>
      <p>
        Hallo mijn naam is Twan van Vliet, momenteel 18 jaar oud en een student aan het Grafisch Lyceum Rotterdam. <br />
        Naast coderen vindt ik lezen, gamen en series kijken ook erg leuk. Hierbij doe ook altijd veel nieuwe inspiraties op.
      </p>
      </div>

      <img 
        src={photo2}
        alt="Interior 1" 
        className="positioned-img img-a" 
      />
      <img 
        src={photo2}
        alt="Interior 2" 
        className="positioned-img img-b" 
      />
      <img 
        src={photo2}
        alt="Interior 3" 
        className="positioned-img img-c" 
      />
    </section>
  );
}
