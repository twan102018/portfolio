import React from 'react';
import '../css/random.css'; // Make sure the path is correct
import photo2 from '../imgs/IMG_0019.jpg';

export default function Socials() {
  return (
    <section className="positioned-section">
      {/* Text Overlay */}
      <div className="overlay-text">
        <h1>Socials</h1>
      </div>

      {/* Randomly Positioned Images */}
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
