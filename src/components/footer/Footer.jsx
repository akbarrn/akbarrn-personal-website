import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import picture from "../../assets/profileImage.jpg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__title">
            <img src={picture} alt="Akbar Nur Habibi" />
            <h1>Let's work together!</h1>
          </div>
          <div className="footer__button">
            <Link to="/me">Get in touch</Link>
          </div>
          <div className="footer__contact">
            <a href="mailto:officialakbar94@gmail.com">
              officialakbar94@gmail.com
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/6285775284112/?text=Hello%20"
            >
              +62 857 7528 4112
            </a>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://instagram.com/akbrrnh"
            >
              Instagram
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://youtube.com/@akbrrn"
            >
              YouTube
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/akbarrn"
            >
              GitHub
            </a>
          </div>
          <div className="footer__section">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://linkedin.com/in/akbarrnh/"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.tiktok.com/@bboyy_."
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
