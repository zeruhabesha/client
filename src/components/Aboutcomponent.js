import React from "react";
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/dist/styles.css';
import team from "./img/team1.jpg";
import client from "./img/clients/client-1.png";
// import goal from './img/goal.jpg';
import "./About.css";
import "./AboutVisionAndMissionCss.css";
import vision from "./img/our_vision.jpg";
import mission from "./img/our_mission.jpg";
import Navcompnent from "./Navcompnent";
import Footercomponent from "./Footercomponent";
// import Logo from '../sageLogo.ico';

function Aboutcomponent() {
  return (
    <div>
      <Navcompnent></Navcompnent> 
      <h1
        style={{
          marginTop: `120px`,
          textAlign: `center`,
          color: `brown`,
          marginBottom: `20px`,
        }}
      >
        Our Vision and Mission
      </h1>
      <div class="vision" id="one">
        <p id="Vispar">Vision</p>
      </div>
      <div class="vision" id="two">
        <p id="Vispar"> Mission</p>
      </div>
      <div class="vision " id="three">
        <p id="Vispar">Goal</p>
      </div>

      {/* why come study with us  */}
      <br />
      <br />
      <br />
      <div class="container mb-xl-5">
        <h1
          class="main-header display-5 text-center mt-4"
          style={{ color: `brown` }}
        >
          Why come study with Us?
        </h1>
        <div class="row mt-3">
          <div class="col-lg my-2 mx-4 why-come">
            <h4 class="display-5 sub-header my-2">Practical Based Teaching</h4>
            <p class="body-text">
              Various lessons thought are proven with enough physically intent
              real-world situations. We mean, with our lessons, less lecturing
              and more practicals to boost students' understanding for a better
              field in the world of reality.
            </p>
          </div>
          <div class="col-lg my-2 mx-4 why-come">
            <h4 class="display-5 sub-header my-2">Lesson focused delivery</h4>
            <p class=" body-text">
              Lesons are thought in accordance with understanding level of a
              student. Lecturings are not too raised away from the student's
              level of thinking. All lesson are thought like making things known
              and clear to all students acadamic level.
            </p>
          </div>
          <div class="col-lg my-2 mx-4 why-come">
            <h4 class="display-5 sub-header my-2">
              Questions & Answers & Motivations
            </h4>
            <p class="body-text">
              Students freely ask facilitators questions relating to lecturing.
              Otherwise, students can personal visit Councilling Department for
              advice on self related issues and more. Students are also
              motivated on tasks and decencies to improve good personal profile.
            </p>
          </div>
        </div>
      </div>

      <section id="team">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>Sage Members</h2>
            <p>
              Your one-stop career platform to find Jobs, Internships,
              Professional Trainings, Projects, and Volunteering Opportunities.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="member" data-aos="fade-up" data-aos-delay="100">
                <img src={team} class="img-fluid" alt="" />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Zerihun Kibret</h4>
                    <span>Chief Executive Officer</span>
                    <div class="social">
                      <a href="">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-instagram"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="member" data-aos="fade-up" data-aos-delay="200">
                <img src={team} class="img-fluid" alt="" />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Zerihun Kibret</h4>
                    <span>Product Manager</span>
                    <div class="social">
                      <a href="">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-instagram"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="member" data-aos="fade-up" data-aos-delay="300">
                <img src={team} class="img-fluid" alt="" />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Zerihun Kibret</h4>
                    <span>CTO</span>
                    <div class="social">
                      <a href="">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-instagram"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="member" data-aos="fade-up" data-aos-delay="400">
                <img src={team} class="img-fluid" alt="" />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Neba Demelash</h4>
                    <span>Accountant</span>
                    <div class="social">
                      <a href="">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-instagram"></i>
                      </a>
                      <a href="">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footercomponent/>
    </div>
  );
}

export default Aboutcomponent;
