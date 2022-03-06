import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
