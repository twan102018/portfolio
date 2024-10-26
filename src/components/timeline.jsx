import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css/timeline.css';

const timelineData = [
  { id: 1, title: 'Begonnen Software Development', description: 'Na mijn vmbo-tl diploma gehaald te hebben ben ik de opleiding software development gaan volgen aan het Grafisch Lyceum Rotterdam', year: '2022' },
  { id: 2, title: '1e jaar software development', description: 'Ik heb dit jaar veel nieuwe dingen geleerd, hierbij heb ik de een introductie gekregen tot de talen Javascript, PHP en C#, verder heb ik ook kennis gemaakt met allerlij soorten werkprocessen.', year: '2023' },
  { id: 3, title: '2e jaar software development', description: 'Dit jaar heb ik vele nieuwe dingen geleerd waaronder kennisgemaakt met react, nextjs en firebase. Dit jaar ben ik ook aan de slag gegaan met veel CRUD applicaties.', year: '2023' },
  { id: 4, title: '3e software development/Stage Triple Interactive B.V.', description: 'Dit jaar begon met mijn stage, het is namelijk de bedoeling dat je in je 3e jaar het hele jaar stage gaat lopen, dit betekent dus 40 uur in de week werken. Hier heb ik voornamelijk veel communicatieve skills weten te ontwikkelen en heb ik leren werken met Wordpress', year: '2024' },
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
    <div className="timeline-container" ref={timelineRef} id='timeline'>
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
