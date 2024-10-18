import React, { useState } from 'react';
import projectimg1 from './img/1.jpg';
import projectimg2 from './img/2.jpg'; // Importing the second image
import '../css/projects.css'; // Import the CSS file for styles

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0 });
  const [isHoveringAllowed, setIsHoveringAllowed] = useState(true); // Nieuwe state voor cooldown

  const menuItems = [
    { id: 'link1', title: 'Link 1', icon: "", img: projectimg1 },
    { id: 'link2', title: 'Link 2', icon: "", img: projectimg2 },
    { id: 'link3', title: 'Link 3', icon: "", img: projectimg1 }
  ];

  const handleMouseMove = (e, index) => {
    if (!isHoveringAllowed) return; // Als hover niet is toegestaan, doe niets

    setHoverIndex(index);
    setHoverPos({ x: e.clientX });

    // Cooldown instellen
    setIsHoveringAllowed(false);
    setTimeout(() => {
      setIsHoveringAllowed(true);
    }, 300); // 1 seconde cooldown
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div id="menu-container">
      <h1>PROJECTS</h1>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div key={item.id} className="menu-item">
            <div
              className="menu-link"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{item.title}</span>
              <img src={item.icon} alt={`Icon ${index + 1}`} />
            </div>

            <div
              className="hover-reveal"
              style={{
                opacity: hoverIndex === index ? 1 : 0,
                left: hoverPos.x,
                transform: hoverIndex === index
                  ? `translate(-100%, -50%) rotate(5deg)`
                  : `translate(-50%, -50%) rotate(-5deg)`
              }}
            >
              <img
                src={item.img}
                className="hidden-img"
                alt={`Image ${index + 1}`}
                style={{
                  transform: hoverIndex === index ? 'scale(1, 1)' : 'scale(0.8, 0.8)'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
