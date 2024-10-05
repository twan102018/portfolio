import React from 'react';
import '../css/reviews.css'; // Create a corresponding CSS file

export default function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="text-overlay">
        <h1>Hosting, for your needs</h1>
      </div>
      <div className="image-grid">
        <img src="https://api.coevalstudio.com/uploads/dsc_61fc45895c.jpg" alt="Interior 1" className="image-left" />
        <img src="https://api.coevalstudio.com/uploads/Pressed_Roots_1_cb35285ebe.png" alt="Interior 2" className="image-center" />
        <img src="https://api.coevalstudio.com/uploads/Resident_12_7e40e9ccc7.jpg" alt="Interior 3" className="image-right" />
      </div>
    </section>
  );
}
