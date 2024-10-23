import React, { useState } from 'react';
import projectimg1 from '../imgs/1.jpg';
import projectimg2 from '../imgs/image.png';
import arrow from '../imgs/arrow.png';
import '../css/projects.css';

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0 });
  const [isHoveringAllowed, setIsHoveringAllowed] = useState(true);

  const menuItems = [
    { id: 'http://localhost:3000/', title: 'Netflix', icon: arrow, img: projectimg1 },
    { id: 'http://localhost:3001/', title: 'Spotify', icon: arrow, img: projectimg2 },
    { id: 'http://localhost:3002/', title: 'Talk2Y', icon: arrow, img: projectimg1 }
  ];

  const handleMouseMove = (e, index) => {
    if (!isHoveringAllowed) return;

    setHoverIndex(index);
    setHoverPos({ x: e.clientX });

    setIsHoveringAllowed(false);
    setTimeout(() => {
      setIsHoveringAllowed(true);
    }, 300);
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
            <a
              href={item.id}
              target="_blank"
              rel="noopener noreferrer" // For security reasons
              className="menu-link"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{item.title}</span>
              <img src={item.icon} alt={`Icon ${index + 1}`} />
            </a>

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
