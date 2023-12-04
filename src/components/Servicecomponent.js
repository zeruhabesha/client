import React from "react";

import client from "./img/clients/client-1.png";
// import goal from './img/goal.jpg';
import "./About.css";
import "./ServiceCss.css";
import "./AboutVisionAndMissionCss.css";
import team from "./img/team1.jpg";
import neba from "./img/neba.jpg";

// import Logo from '../sageLogo.ico';

function Servicecomponent() {
  // render() {
  return (
    <div>
      <h3
        style={{
          textAlign: `center`,
          color: `brown`,
          marginTop: `120px`,
          marginBottom: `20px`,
        }}
      >
        Our Services
      </h3>
      <div class="service-card">
        <div class="service-card-inner">
          <div class="service-card-front">
            <p class="title">Consultancy Services</p>
          </div>
          <div class="service-card-back">
            <p class="title">The Services are:</p>
            <p>Feasibility study</p>
            <p>market assessment</p>
            <p>digital markting and so on</p>
          </div>
        </div>
      </div>
      <div class="service-card">
        <div class="service-card-inner">
          <div class="service-card-front">
            <p class="title">Internship Program</p>
          </div>
          <div class="service-card-back">
            <p class="title"></p>
            <p>
              We provide Different Internship Opportunities <br /> in local and
              outside a country in a remotely
            </p>
          </div>
        </div>
      </div>
      <div class="service-card">
        <div class="service-card-inner">
          <div class="service-card-front">
            <p class="title">Training Program</p>
          </div>
          <div class="service-card-back">
            <p class="title"></p>
            <p>We are give the Training for institution</p>
          </div>
        </div>
      </div>
      <div class="service-card">
        <div class="service-card-inner">
          <div class="service-card-front">
            <p class="title">Scholarship Program</p>
          </div>
          <div class="service-card-back">
            <p class="title"></p>
            <p>We provide Different Scholarship Opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicecomponent;
