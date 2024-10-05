// src/components/Hero.js
import "../css/plans.css";

export default function Skills() {
  return (
    <section className="plans">
      <div className="pricing-plans">
        <div className="plan basic-plan">
          <h3>Frameworks & Libraries</h3>
          <p className="description">Frameworks waar ik ervaring mee heb.</p>
          <ul className="features">
            <li>
              <i className="bx bx-check"></i> React
            </li>
            <li>
              <i className="bx bx-check"></i> Laravel
            </li>
            <li>
              <i className="bx bx-check"></i> NextJs
            </li>
            <li>
              <i className="bx bx-check"></i> Svelte
            </li>
            <li>
              <i className="bx bx-check"></i> Electron
            </li>
          </ul>
        </div>

        <div className="plan business-plan">
          <h3>
            Talen & Tech
          </h3>
          <p className="description">Talen waar ik ervaring mee heb.</p>
          <ul className="features">
            <li>
              <i className="bx bx-check"></i> Javascript
            </li>
            <li>
              <i className="bx bx-check"></i> PHP
            </li>
            <li>
              <i className="bx bx-check"></i> HTML5
            </li>
            <li>
              <i className="bx bx-check"></i> CSS5
            </li>
            <li>
              <i className="bx bx-check"></i> SASS
            </li>
            <li>
              <i className="bx bx-check"></i> NodeJS
            </li>
          </ul>
        </div>

        <div className="plan enterprise-plan">
          <h3>Databases</h3>
          <p className="description">Databases waar ik ervaring mee heb</p>
          <ul className="features">
            <li>
              <i className="bx bx-check"></i> MySql
            </li>
            <li>
              <i className="bx bx-check"></i> Firebase
            </li>
            <li>
              <i className="bx bx-check"></i> MariaDB
            </li>
            <li>
              <i className="bx bx-check"></i> SQLite
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
