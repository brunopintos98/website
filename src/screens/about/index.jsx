import React from "react";

import Header from "components/Header";

import "./styles.css";
import {
  Bruno,
  BrunoDoron,
  BrunoOffice,
  BrunoVice,
  SocialEmail,
  SocialGithub,
  SocialLinkedIn,
} from "assets";
import { Typography } from "theme";

const About = () => (
  <div className="about-main-container">
    <Header selected="" />
    <h1 className="about-title">ABOUT ME</h1>
    <div className="about-container">
      <div className="about-images-container">
        <img src={BrunoVice} alt="profile" />
        <img src={BrunoDoron} alt="profile" />
        <img src={BrunoOffice} alt="profile" />
        <img src={Bruno} alt="profile" />
      </div>
      <div className="about-text-container">
        <h1
          className="about-paragraph-title"
          style={Typography.styles.modalParagraph}
        >
          Bruno Pintos
        </h1>
        <p
          className="about-paragraph-subtitle"
          style={{ ...Typography.styles.modalParagraph, fontSize: 14 }}
        >
          SOFTWARE ENGINEER & MBA CANDIDATE
        </p>
        <p className="about-paragraph" style={Typography.styles.modalParagraph}>
          Hey! I am a Senior Developer and Tech Lead based in{" "}
          <a
            href="https://goo.gl/maps/atxUPxPFbGdjpzmK6"
            target="_blank"
            rel="noreferrer"
          >
            Montevideo, Uruguay
          </a>
          .
        </p>
        <p className="about-paragraph" style={Typography.styles.modalParagraph}>
          I specialize in React Native and React.js development, having worked
          on a wide range of projects from small-scale applications to
          large-scale enterprise solutions. My extensive experience includes
          managing development teams, training junior developers, and
          collaborating with cross-functional teams to deliver high-quality
          software solutions.
        </p>
        <p className="about-paragraph" style={Typography.styles.modalParagraph}>
          In addition to my professional experience, I hold a Bachelor's degree
          in Software Engineering from{" "}
          <a href="https://www.ort.edu.uy/" target="_blank" rel="noreferrer">
            Universidad ORT
          </a>
          , Uruguay, and I am currently pursuing an MBA at{" "}
          <a href="https://ucema.edu.ar/" target="_blank" rel="noreferrer">
            Universidad del CEMA
          </a>{" "}
          in Buenos Aires, Argentina.
        </p>
        <p className="about-paragraph" style={Typography.styles.modalParagraph}>
          In my free time, I enjoy playing sports such as soccer, basketball,
          and tennis. I am always on the lookout for new challenges and
          opportunities to learn and grow.
        </p>
        <div className="about-social">
          <a
            href="mailto:brunopintos98@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={SocialEmail} alt="email" />
          </a>
          <a
            href="https://www.linkedin.com/in/brunopintos98/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={SocialLinkedIn} alt="linkedin" />
          </a>
          <a
            href="https://github.com/brunopintos"
            target="_blank"
            rel="noreferrer"
          >
            <img src={SocialGithub} alt="github" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
