import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import picture from "../../assets/profileImage.jpg";

import "./moreInfo.css";
import { Link } from "react-router-dom";

const MoreInfo = () => {
  const { scrollYProgress } = useScroll();
  const first = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const second = useTransform(scrollYProgress, [0, 1], [0, 400]);
  return (
    <section className="info">
      <div className="back__button">
        <Link to="/">
          <i class="uil uil-angle-left-b"></i>
        </Link>
      </div>
      <div className="info__container">
        <div className="info__me">
          <div className="info__more">
            <img className="info__picture" src={picture} alt="" />
            <span>
              I am a software engineer using a JavaScript tech stack, namely
              MERN stack (MongoDB, Express JS, React JS, and Node JS). I also
              have an interest in user interface and user experience, have some
              experience in design and illustration.
            </span>
          </div>
          <a href="#info__contact">
            Feel free to contact me <i class="uil uil-arrow-up-right"></i>
          </a>
          <div className="info__sosmed">
            <span>Also available on</span>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/6285775284112/?text=Hello%20"
            >
              WhatsApp <i class="uil uil-arrow-up-right"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://instagram.com/akbrrnh"
            >
              Instagram <i class="uil uil-arrow-up-right"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="www.linkedin.com/in/akbarrnh"
            >
              LinkedIn <i class="uil uil-arrow-up-right"></i>
            </a>
          </div>
        </div>
        <div className="info__achieve">
          <div className="info__item">
            <h1>Certificate</h1>
            <div className="info__detail">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1TJVLlAU3Ir4gZm3XwSVcGF4hBO4svS9G/view?usp=sharing"
              >
                Internship Certificate{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/17h0owJvXV-jpi106Fuc0JG9puU3ZOfQd/view?usp=sharing"
              >
                Tahfidz Graduate{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1-eeFefBWK2wfzR61sfFC20E-thnE1Bmy/view?usp=sharing"
              >
                MHQ Competition{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1K3gvDqbhcH-11ICPh00pADm33NIR0UY4/view?usp=sharing"
              >
                Learn Figma UI/UX{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1zepZfkJ-xfPv7wKI0PSar97q7lnohb17/view?usp=sharing"
              >
                Learn Front-End Development{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1J5oDpoGpk8wNKO7s9J3G8g93sEinHT1U/view?usp=sharing"
              >
                Learn Data Visualization for Data Analysis{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/18zVuwejdP5yTKpKw7IMc2GxjkZ1XUMIf/view?usp=sharing"
              >
                After College Program 2023{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1B1usJ8dMVrM0aH9GoWn9LdzLX-CcOrKX/view?usp=sharing"
              >
                Indonesian Islamic Competition{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1dTqGY1LklLnK-NAaJgzL2JSrz8aTXy3l/view?usp=sharing"
              >
                Genius Student Biology Competition{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </div>
          <div className="info__item">
            <h1>Charter</h1>
            <div className="info__detail">
            <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1B3fwIbRmbmOfQSvwTwYdvRKSLFTWzRj8/view?usp=sharing"
              >
                Genius Student Biology Competition{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
            <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1aSv3qQN3mLPEVBSwKMAM47x0Fy7D9M8k/view?usp=sharing"
              >
                Indonesian Islamic Competition{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
            </div>
            </div>
          <div className="info__item">
            <h1>Experience</h1>
            <div className="info__detail">
              <a> 
                Intern - IT Support - PT. Elnusa Land Sejahtera{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="info__typography">
        <div class="typo__filled">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{ x: 0, transition: { duration: 0.8 } }}
            style={{ x: first }}
            className="info__typo"
          >
            contact <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> -
          </motion.h1>
        </div>
        <div class="typo__filled">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{ x: 0, transition: { duration: 0.8 } }}
            style={{ x: second }}
            className="info__typo"
          >
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
