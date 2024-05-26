import React from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3t96hem',
        'template_1v0em19',
        e.target,
        'BzoAG8IW3DruZscUa'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jyotirmayi.swain@gmail.com</h5>
            <a href="mailto:jyotirmayi.swain@gmail.com">Send a mail</a>
          </article>

          {/* <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+918296614666"
              target="_blank"
            >
              Send a message
            </a>
          </article> */}
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name Please..."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email ID Please..."
            required
          />
          <textarea
            rows="7"
            name="message"
            placeholder="Your message.."
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
