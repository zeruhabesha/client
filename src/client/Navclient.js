import React ,{useState, useEffect, useRef} from "react";

import {Button,Modal} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';
import './assets/css/slider.css';



import Logo from './assets/img/logo.png';
import AOS from 'aos';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import Swiper from 'swiper';

const Navclient = () => {


   


    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
    
        let navbarlinks = document.querySelectorAll('#navbar .scrollto');
        const navbarlinksActive = () => {
          let position = window.scrollY + 200;
          navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return;
            let section = document.querySelector(navbarlink.hash);
            if (!section) return;
            if (
              position >= section.offsetTop &&
              position <= section.offsetTop + section.offsetHeight
            ) {
              navbarlink.classList.add('active');
            } else {
              navbarlink.classList.remove('active');
            }
          });
        };
        window.addEventListener('load', navbarlinksActive);
        window.addEventListener('scroll', navbarlinksActive);
    
        const scrollto = (el) => {
          let header = document.querySelector('#header');
          let offset = header.offsetHeight;
          if (!header.classList.contains('header-scrolled')) {
            offset -= 16;
          }
          let elementPos = document.querySelector(el).offsetTop;
          window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
          });
        };
    
        let selectHeader = document.querySelector('#header');
        if (selectHeader) {
          let headerOffset = selectHeader.offsetTop;
          let nextElement = selectHeader.nextElementSibling;
//          const headerFixed = () => {
//   if (selectHeader && headerOffset - window.scrollY <= 0) {
//     selectHeader.classList.add('fixed-top');
//     nextElement.classList.add('scrolled-offset');
//   } else {
//     selectHeader?.classList.remove('fixed-top');
//     nextElement?.classList.remove('scrolled-offset');
//   }
// };

const headerFixed = () => {
    if (selectHeader && selectHeader.classList) {
      if (headerOffset - window.scrollY <= 0) {
        selectHeader.classList.add('fixed-top');
        nextElement.classList.add('scrolled-offset');
      } else {
        selectHeader.classList.remove('fixed-top');
        nextElement.classList.remove('scrolled-offset');
      }
    }
  };

          window.addEventListener('load', headerFixed);
          window.addEventListener('scroll', headerFixed);
        }
    
        let backtotop = document.querySelector('.back-to-top');
        if (backtotop) {
          const toggleBacktotop = () => {
            if (window.scrollY > 100) {
              backtotop.classList.add('active');
            } else {
              backtotop.classList.remove('active');
            }
          };
          window.addEventListener('load', toggleBacktotop);
          window.addEventListener('scroll', toggleBacktotop);
        }
    
        let mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        let navbar = document.querySelector('#navbar');
        if (mobileNavToggle) {
          mobileNavToggle.addEventListener('click', (e) => {
            navbar.classList.toggle('navbar-mobile');
            mobileNavToggle.classList.toggle('bi-list');
            mobileNavToggle.classList.toggle('bi-x');
          });
        }
    
        let dropdownToggle = document.querySelectorAll('.navbar .dropdown > a');
        if (dropdownToggle) {
          dropdownToggle.forEach((toggle) => {
            toggle.addEventListener('click', (e) => {
              if (navbar.classList.contains('navbar-mobile')) {
                e.preventDefault();
                toggle.nextElementSibling.classList.toggle('dropdown-active');
              }
            });
          });
        }
    
        let scrolltoLinks = document.querySelectorAll('.scrollto');
        if (scrolltoLinks) {
          scrolltoLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
              if (document.querySelector(link.hash)) {
                e.preventDefault();
                if (navbar.classList.contains('navbar-mobile')) {
                  navbar.classList.remove('navbar-mobile');
                  mobileNavToggle.classList.toggle('bi-list');
                  mobileNavToggle.classList.toggle('bi-x');
                }
                scrollto(link.hash);
              }
            });
          });
        }
    
        if (window.location.hash) {
          if (document.querySelector(window.location.hash)) {
            scrollto(window.location.hash);
          }
        }
    
        let preloader = document.querySelector('#preloader');
        if (preloader) {
          window.addEventListener('load', () => {
            preloader.remove();
          });
        }
    
        let portfolioContainer = document.querySelector('.portfolio-container');
        if (portfolioContainer) {
          let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item'
          });
    
          let portfolioFilters = document.querySelectorAll('#portfolio-flters li');
          portfolioFilters.forEach((portfolioFilter) => {
            portfolioFilter.addEventListener('click', (e) => {
              e.preventDefault();
    
              portfolioFilters.forEach((filter) => {
                filter.classList.remove('filter-active');
              });
    
              portfolioFilter.classList.add('filter-active');
    
              portfolioIsotope.arrange({
                filter: portfolioFilter.getAttribute('data-filter')
              });
    
              portfolioIsotope.on('arrangeComplete', () => {
                AOS.refresh();
              });
            });
          });
        }
    
        const portfolioLightbox = GLightbox({
          selector: '.portfolio-lightbox'
        });
    
        new Swiper('.portfolio-details-slider', {
          speed: 400,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        });
      }, []);

    return (
        <div className="webmain">
    
        <section id="topbar" class="d-flex align-items-center" >
          <div class="container d-flex justify-content-center justify-content-md-between">
            <div class="contact-info d-flex align-items-center" style={{background:`transparent`}}>
              <i class="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">betaresearchdevelopment@gmail.com</a>
              <i class="bi bi-phone-fill phone-icon"></i> +251 905 888 222
            </div>
            <div class="social-links d-none d-md-block">
              <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div> </div>
        </section>
        
        {/* // <!-- ======= Header ======= --> */}
       
        <header id="header" class="d-flex align-items-center" style={{background:`white`}}>
          <div class="container d-flex align-items-center justify-content-between"style={{background:`transparent`, color:`black`}}>
        
            <h1 class="logo"><a>
              <img src={Logo} alt="Logo"/>
              </a></h1>
            {/* <!-- Uncomment below if you prefer to use an image logo -->style={{color:`white`}} */}
            <nav id="navbar" class="navbar" style={{background:`transparent`}}>
              <ul >
                <li><a class="nav-link scrollto " href="#hero" >Home</a></li>
                <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down"></i></a>
                  <ul>
                    <li><a href="#">Company Profile</a></li>
                    <li><a href="#">Experiance</a></li>
                    <li><a href="#">Our Staffs</a></li>
                    </ul>
                </li>
                <li><a class="nav-link scrollto" href="#services">Services</a></li>
                <li class="dropdown"><a href="#"><span>Products</span> <i class="bi bi-chevron-down"></i></a>
                  <ul>
                    <li><a href="#">IT Equipments</a></li>
                    <li class="dropdown"><a href="#"><span>IT Services</span> <i class="bi bi-chevron-right"></i></a>
                      <ul>
                        <li><a href="#">Switches</a></li>
                        <li><a href="#">Routers</a></li>
                        <li><a href="#">Firewalls</a></li>
                        <li><a href="#">Modules & Cards</a></li>
                        <li><a href="#">UC Solution</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a class="nav-link scrollto" href="#">News</a></li>
                <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
        </div>
    )
}

export default Navclient
