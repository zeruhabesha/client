import React, {  useRef } from 'react';
import Privacy from "./Privacy";
import "./Footer.css";
import { useEffect } from "react";
// import Logo from "../sageLogo.ico";

function Footercomponent() {
  // constructor() {
  //   super();
  //   this.state = {
  //     show: false
  //   };
  //   this.showModal = this.showModal.bind(this);
  //   this.hideModal = this.hideModal.bind(this);
  // }

  // showModal = () => {
  //   this.setState({ show: true });
  // };

  // hideModal = () => {
  //   this.setState({ show: false });
  // };

  // render() {
  //   const whishlistBtnsRef = useRef(null);
  // useEffect(() => {
  //   whishlistBtnsRef.current = document.querySelectorAll("[data-whish-btn]");

  //   for (let i = 0; i < whishlistBtnsRef.current.length; i++) {
  //     whishlistBtnsRef.current[i].addEventListener("click", function () {
  //       toggleElem(this);
  //     });
  //   }

  //   // Cleanup function to remove event listeners when component unmounts
  //   return () => {
  //     for (let i = 0; i < whishlistBtnsRef.current.length; i++) {
  //       whishlistBtnsRef.current[i].removeEventListener("click", function () {
  //         toggleElem(this);
  //       });
  //     }
  //   };
  // }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  // Your toggleElem function
  // const toggleElem = (elem) => {
  //   // Your logic here
  // };
  return (

    <div>
      <footer id="newsletter">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-heading">
            <h4>Join our mailing list to receive the news &amp; latest trends</h4>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-3">
          <form id="search" action="#" method="GET">
            <div class="row">
              <div class="col-lg-6 col-sm-6">
                <fieldset>
                  <input type="address" name="address" class="email" placeholder="Email Address..." autocomplete="on" required/>
                </fieldset>
              </div>
              <div class="col-lg-6 col-sm-6">
                <fieldset>
                  <button type="submit" class="main-button">Subscribe Now <i class="fa fa-angle-right"></i></button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <div class="footer-widget">
            <h4>Contact Us</h4>
            <p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
            <p><a href="#">010-020-0340</a></p>
            <p><a href="#">info@company.co</a></p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="footer-widget">
            <h4>About Us</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="footer-widget">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Free Apps</a></li>
              <li><a href="#">App Engine</a></li>
              <li><a href="#">Programming</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">App News</a></li>
            </ul>
            <ul>
              <li><a href="#">App Dev Team</a></li>
              <li><a href="#">Digital Web</a></li>
              <li><a href="#">Normal Apps</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="footer-widget">
            <h4>About Our Company</h4>
            <div class="logo">
              <img src="assets/images/white-logo.png" alt=""/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="copyright-text">
            <p>Copyright © 2022 Chain App Dev Company. All Rights Reserved. 
          <br/>Design: <a href="https://templatemo.com/" target="_blank" title="css templates">TemplateMo</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>


    </div>
  );
}
// }

export default Footercomponent;
