import React from 'react';
import './footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <a href="#" className="footer__logo">
        Jyotirmayi Swain
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/jyotirmayi-swain-a670b8134/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Jyoti28490" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; {`Jyoti@${year}`}</small>
      </div>
    </footer>
  );
};

export default Footer;
