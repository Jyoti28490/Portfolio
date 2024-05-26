import React from 'react';
import './about.css';
import BG from '../../assets/bg2.jpg';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={BG} alt="ME" />
          </div>
        </div>

        <div className="container about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2.5+ Years Frontend Experience</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>40+ completed</small>
            </article>
          </div>
          <p>
            Love creating responsive web applications and passionate about an
            intuitive user experience. Comfortable to work independently and
            colaborate with different teams to build and ship a successful
            product. I am proud of my capability to effectively communicate with
            key stakeholders on assigned projects.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
