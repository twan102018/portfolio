// src/components/Hero.js
import "../css/skills.css";
import { useCursor } from "../hooks/CursorContext";
export default function Skills() {
  const { textEnter, textLeave } = useCursor();
  return (
    <section className="plans">
      <div className="pricing-plans">
        <div className="plan" onMouseEnter={textEnter} onMouseLeave={textLeave} data-aos="fade-up"           data-aos-delay="300">
          <h3>Frameworks & Libraries</h3>
          <p className="description">Frameworks waar ik ervaring mee heb.</p>
          <ul className="features">
            <li>
              <i className="devicon-react-original colored"></i> React
            </li>
            <li>
              <i className="devicon-laravel-plain colored"></i> Laravel
            </li>
            <li>
              <i className="devicon-nextjs-original-wordmark"></i>
              NextJs
            </li>
            <li>
              <i className="devicon-svelte-plain colored"></i> Svelte
            </li>
            <li>
              <i className="devicon-electron-original colored"></i> Electron
            </li>
            <li>
              <i className="devicon-framermotion-original"></i>Framer-Motion
            </li>
          </ul>
        </div>

        <div
          className="plan main-skills"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          data-aos="fade-up"
        >
          <h3>Talen & Tech</h3>
          <p className="description">Talen & Tech waar ik ervaring mee heb.</p>
          <ul className="features">
            <li>
              <i className="devicon-javascript-plain colored"></i> Javascript
            </li>
            <li>
              <i className="devicon-php-plain colored"></i> PHP
            </li>
            <li>
              <i className="devicon-html5-plain colored"></i> HTML5
            </li>
            <li>
              <i className="devicon-css3-plain colored"></i> CSS3
            </li>
            <li>
              <i className="devicon-sass-original colored"></i> SASS
            </li>
            <li>
              <i className="devicon-nodejs-plain colored"></i> NodeJS
            </li>
          </ul>
        </div>

        <div className="plan" onMouseEnter={textEnter} onMouseLeave={textLeave} data-aos="fade-up"           data-aos-delay="300">
          <h3>Databases</h3>
          <p className="description">Databases waar ik ervaring mee heb.</p>
          <ul className="features">
            <li>
              <i className="devicon-mysql-plain colored"></i> MySql
            </li>
            <li>
              <i className="devicon-firebase-plain colored"></i> Firebase
            </li>
            <li>
              <i className="devicon-mariadb-plain colored"></i> MariaDB
            </li>
            <li>
              <i className="devicon-sqlite-plain colored"></i> SQLite
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
