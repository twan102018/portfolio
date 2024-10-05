import React from 'react';
import '../css/random.css'; // Make sure the path is correct

export default function RandomPositionSection() {
  return (
    <section className="positioned-section">
      {/* Text Overlay */}
      <div className="overlay-text">
        <h1>Web Design</h1>
      </div>

      {/* Randomly Positioned Images */}
      <img 
        src="https://api.coevalstudio.com/uploads/1_2f0fc6eac2.jpg" 
        alt="Interior 1" 
        className="positioned-img img-a" 
      />
      <img 
        src="https://coevalstudio.com/img/works/item-1.jpg" 
        alt="Interior 2" 
        className="positioned-img img-b" 
      />
      <img 
        src="https://api.coevalstudio.com/uploads/Pressed_Roots_B_Card_31191ce6ef.png" 
        alt="Interior 3" 
        className="positioned-img img-c" 
      />
    </section>
  );
}
