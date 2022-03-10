import React from 'react';
import './portfolio.css';

import AIRBNB from '../../assets/Airbnb_2.PNG';
import NETFLIX from '../../assets/Netflix_Clone_1.PNG';
import MOVIES from '../../assets/Screenshot 2022-03-06 223115.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={NETFLIX} alt="" />
          </div>
          <h3>Netflix Landing page clone</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Jyoti28490/Netflix-Clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jyoti28490.github.io/Netflix-Clone/"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={AIRBNB} alt="" />
          </div>
          <h3>Airbnb landing first page</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Jyoti28490/Airbnb-clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jyoti28490.github.io/Airbnb-clone/"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={MOVIES} alt="" />
          </div>
          <h3>Movie App </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Jyoti28490/Movies"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jyoti28490.github.io/watchlist/"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
