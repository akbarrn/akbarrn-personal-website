import React from "react";
import olshop from "../../assets/olshop.jpg";
import "./work.css";

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="work__title">
        <div className="work__typography">
          <h2>work</h2>
          <h2>work</h2>
          <h2>work</h2>
        </div>
        <span>Featured Projects</span>
      </div>
      <div className="work__container">
        <div className="work__menu">
          <div className="work__item">
            <img
              className="work__image"
              src={olshop}
              alt="outfit online shop"
            />
            <div className="work__button">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://bstoree.netlify.app/"
              >
                <i class="uil uil-arrow-up-left"></i>
                <span>Online Preview</span>
              </a>
            </div>
          </div>
          <div className="work__text">
            <span className="title__link">01.</span>
            <div className="work__subtitle">
              <span className="title__link">Outfit Online Shop</span>
              <p>Web Application</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
