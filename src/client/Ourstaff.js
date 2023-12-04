import AOS from 'aos';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import Logo1 from './assets/img/logo1.png';
import Logo from './assets/img/logo.png';
import { Route,Link,useHistory } from 'react-router-dom';
import React ,{useState, useEffect} from "react";


import team1 from './assets/img/team/team-1.jpg';
import team2 from './assets/img/team/team-2.jpg';
import team3 from './assets/img/team/team-3.jpg';
import team4 from './assets/img/team/team-4.jpg';
import team5 from './assets/img/team/team-5.jpg';
import One from './img/One.jpg';
import Two from './img/Two.jpg';
import Three from './img/Three.jpg';


const Ourstaff = () => {

   
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
      const headerFixed = () => {
        if (headerOffset - window.scrollY <= 0) {
          selectHeader.classList.add('fixed-top');
          nextElement.classList.add('scrolled-offset');
        } else {
          selectHeader.classList.remove('fixed-top');
          nextElement.classList.remove('scrolled-offset');
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
        <div className="webmain os">
    
        <section id="topbar" class="d-flex align-items-center" >
         <div class="container d-flex justify-content-center justify-content-md-between">
           <div class="contact-info d-flex align-items-center" style={{background:`transparent`}}>
             <i class="bi bi-envelope-fill"></i><a href="">betaresearchdevelopment@gmail.com</a>
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
                      <li><Link class="navlink1" to="/">Home</Link></li>
                      <li class="dropdown"><a><span>About</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><Link class="navlink1" to="/compro">Company Profile</Link></li>
                          <li><Link class="navlink1" to="/experianced">Experiance</Link></li>
                          <li><Link class="navlink1" to="/staffs">Our Staffs</Link></li>
                          </ul>
                      </li>
                      <li><Link to="/service" class="navlink1" >Services</Link></li>
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
                      <li><Link class="navlink1" to="/blog">News</Link></li>
                      <li><Link class="navlink1" to="/contact">Contact</Link></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                  </nav>
         </div>
       </header>
       {/* <Navclient/> */}
       {/* <!-- ======= Hero Section ======= --> */}
       
       
       <main id="main">
{/* <section class="companypro" > */}
<section id="contact" class="contact" style={{overflow: `auto`,padding: `10vh 8vh`}}>
<div class="container">
      <div class="section-title" style={{marginTop: `-12vh`, height: `35vh`, width: `140%`, marginLeft: `-30vh`}}>
        <span style={{marginTop: `12vh`}}>Our-Staffs</span>
      </div>
<br/>
    <p class="text-blk section-subhead-text">
      
    </p>
    
    <h2>Beta Reseach and development Plc </h2>
<p>Team</p>
<br/>
<div class="row">
<div class="column">
    <div class="card">
      <img src={One} alt="John" style={{width:`100%`}}/>
      <div class="container">
        <h2>Etsehiwot Tadese</h2>
        <p class="title">Manager</p>
        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>



  <div class="column">
    <div class="card">
    <img src={Three} alt="John" style={{width:`100%`}}/>
      <div class="container">
        <h2>Bereket </h2>
        <p class="title">Electrical </p>
        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={Two} alt="John" style={{width:`100%`}}/>
      <div class="container">
        <h2>Zerihun Kibret</h2>
        <p class="title">Software Developer</p>
        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src={One} alt="John" style={{width:`100%`}}/>
      <div class="container">
        <h2>Yared Wubie</h2>
        <p class="title">Software Developer</p>
        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  </div>



  </div>

           
</section>
</main>

{/* <!-- ======= Footer ======= --> */}
<footer id="footer">
  <div class="footer-top">
    <div class="container">
      <div class="row">

        <div class="col-lg-4 col-md-6">
          <div class="footer-info">
            <h3> <img src={Logo1} style={{width:`40vh`}} alt="Logo"/></h3>
            <p>
            2QH2+CR6, Mahatma Gandhi St <br/>
              Addis Ababa, Et <br/><br/>
              <strong>Phone:</strong> +251 905 888 222<br/>
              <strong>Email:</strong> betareserching@gmail.com<br/>
            </p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i class="bx bx-chevron-right"></i> <a href="#">Software development</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#">IT infrastructure management</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#">Networking and telecommunications</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#">Data storage and management</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#">Security</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="#">Training and support</a></li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-6 footer-newsletter">
          <h4>About-Us</h4>
          <p>Beta is a technology company dedicated to providing innovative solutions 
            to clients with a team of highly skilled professionals committed to personalized 
            approaches to every project.</p>
        </div>

      </div>
    </div>
  </div>

  <div class="container">
    <div class="copyright">
      &copy; Copyright <strong><span>Beta Plc</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      Designed by <a href="betaplc.com">Beta Software Plc</a>
    </div>
  </div>
</footer>

    </div>
    
    
);
}

export default Ourstaff
