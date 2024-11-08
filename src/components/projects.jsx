import React, { useState } from 'react';
import projectimg1 from '../imgs/1.jpg';
import projectimg2 from '../imgs/image.png';
import arrow from '../imgs/arrow.png';
import '../css/projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0 });
  const [isHoveringAllowed, setIsHoveringAllowed] = useState(true);

  // Assuming these are internal routes in your React application
  const menuItems = [
    { id: '/netflix', title: 'Netflix', icon: arrow, img: projectimg1 },
    { id: '/spotify', title: 'Spotify', icon: arrow, img: projectimg2 },
    { id: '/talk2y', title: 'Talk2Y', icon: arrow, img: projectimg1 }
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
          <div key={item.id} className="menu-item" data-aos="fade-up">
            <Link
              to={item.id}
              className="menu-link"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{item.title}</span>
              <img src={item.icon} alt={`Icon ${index + 1}`} />
            </Link>

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
