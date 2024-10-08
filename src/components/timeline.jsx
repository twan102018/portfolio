import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css/timeline.css';

const timelineData = [
  { id: 1, title: 'Begonnen Software Development', description: 'Na mijn vmbo-tl diploma gehaald te hebben ben ik de opleiding software development gaan volgen aan het Grafisch Lyceum Rotterdam', year: '2022' },
  { id: 2, title: '1e jaar software development', description: 'Ik heb dit jaar veel nieuwe dingen geleerd, hierbij heb ik de een introductie gekregen tot de talen Javascript, PHP en C#, verder heb ik ook kennis gemaakt met allerlij soorten werkprocessen.', year: '2023' },
  { id: 3, title: '2e jaar software development', description: 'Dit jaar ', year: '2023' },
  { id: 4, title: 'Developed a Personal Project', description: 'Curabitur lobortis sagittis.', year: '2024' },
  { id: 5, title: 'Started First Internship At Triple Interactive B.V.', description: 'In mijn laatste jaar van school ben ik van start gegaan bij mijn 1e stageplek.', year: '2024' },
];

const Timeline = () => {
  const timelineRef = useRef(null);
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeItems, setActiveItems] = useState([]);

  // Function to track progress based on scroll
  const handleScroll = () => {
    const timeline = timelineRef.current;
    const timelineRect = timeline.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const distanceScrolled = Math.max(0, viewportHeight - timelineRect.top);
    // Adjusted to make scroll tracking faster
    const totalScrollableDistance = (viewportHeight + timelineRect.height) * 0.4; // Reduce the factor to make progress faster

    const progress = Math.min(1, distanceScrolled / totalScrollableDistance);
    setProgressHeight(progress * 110);

    // Determine which items should be active based on scroll progress
    const newActiveItems = timelineData.map((item, index) => {
      const itemProgress = (index + 1) / timelineData.length;
      return progress >= itemProgress ? item.id : null;
    }).filter(Boolean);
    
    setActiveItems(newActiveItems);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline-progress-bar">
        <motion.div
          className="timeline-progress-indicator"
          style={{ height: `${progressHeight}%` }}
        />
      </div>
      {timelineData.map((item, index) => (
        <motion.div
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${activeItems.includes(item.id) ? 'in-view' : ''}`}
          key={item.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={activeItems.includes(item.id) ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="timeline-content">
            <h2>{item.year}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
