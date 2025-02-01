import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";
import eImage from "./e.jpg";

gsap.registerPlugin(ScrollTrigger);

const Project1 = () => {
  useEffect(() => {
    const contentHolderHeight = document.querySelector(
      ".project1-content-holder"
    ).offsetHeight;
    const imgHolderHeight = window.innerHeight;

    const totalBodyHeight = contentHolderHeight + imgHolderHeight + 100;
    document.querySelector(
      ".project1-root"
    ).style.height = `${totalBodyHeight}px`;

    const websiteScrollTrigger = ScrollTrigger.create({
      trigger: ".project1-website-content",
      start: "top top",
      end: `+=${totalBodyHeight}`,
      scrub: 1,
      pin: true,
    });

    gsap.to(".project1-header .project1-letters:first-child", {
      x: () => -window.innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 1,
      },
    });

    gsap.to(".project1-header .project1-letters:last-child", {
      x: () => window.innerWidth * 3,
      scale: 10,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 1,
      },
    });

    gsap.to(".project1-img-holder", {
      rotation: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 1,
      },
    });

    gsap.to(".project1-img-holder img", {
      scale: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 1,
      },
    });

    return () => {
      websiteScrollTrigger.kill();
    };
  }, []);

  return (
    <div className="project1-root">
      <div id="project1-logo"></div>
      <div className="project1-header">
        <div className="project1-letters">
          <div>n</div>
          <div>e</div>
          <div>t</div>
          <div>f</div>
        </div>
        <div className="project1-letters">
          <div>l</div>
          <div>i</div>
          <div>x</div>
          <div>+</div>
        </div>
      </div>

      <div className="project1-website-content">
        <div className="project1-img-holder">
          <img src={eImage} alt="Display" />
        </div>
        <div className="project1-content-holder">
          <div className="project1-row">
            <h1>Introductie</h1>
            <p>
              Voor dit project heb ik een Netflix-applicatie gebouwd met een
              login- en registratie-systeem, gerealiseerd met behulp van
              Firebase. Verder heb ik filmgegevens opgehaald uit een
              film-database API. Het project is gebouwd met het React-framework
              en maakt gebruik van de programmeertalen JavaScript en CSS.
            </p>
          </div>

          <div className="project1-row">
            <h1>Functionaliteiten</h1>
              <ul>
                <li>Login/Register</li>
                <li>Categorien</li>
                <li>Trending carousel</li>
                <li>Modal menu w/recommendations</li>
                <li>Modal menu w/episode listing</li>

              </ul>
          </div>
          <div className="project1-row">
            <h1>Zelf bekijken?</h1>
              <a href="https://netflix-roan-theta.vercel.app/">Klik Hier</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project1;
