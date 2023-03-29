import React from "react";
import "./About.css";
import programmerImg from "./images/programmer.png";

function About() {
  return (
    <div className="about">
      <div className="about__flex">
        <div className="about__flexLeft">
          <h1>About Me!</h1>
          <div className="about_flexLeftText">
            <h4>
              Hey👋, I am <span>Harsh Sharma</span> from Amritsar, India.
            </h4>
            <p>
              I'm a freelancing Web Developer I am currently pursuing BCA
              (Bachelor's in Computer Application) from Seva Devi SD College. I
              love to explore new technologies, I'm passionate about making
              websites with great UX/UI. Even though I'm a Web Developer I've
              also done certification in digital marketing speacilized in SEO.
            </p>
          </div>
        </div>
        <div className="about__flexRight">
          <img src={programmerImg} alt="" />
        </div>
        <div className="about__skills">
          {/* <h1>Skills</h1> */}

          {/* <div className="about__skillsContainer">
            <div className="skill__bar">HTML5</div>
            <div className="skill__bar">CSS3</div>
            <div className="skill__bar">JAVASCRIPT</div>
            <div className="skill__bar">REACTJS</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
