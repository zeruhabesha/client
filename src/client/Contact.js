import React ,{useState, useEffect} from "react";
import AOS from 'aos';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import Logo1 from './assets/img/logo1.png';
import Logo from './assets/img/logo.png';
import { Switch,Route,Link,useHistory } from 'react-router-dom';


const Contact = () => {



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
        <div className="webmain">
    
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
                   <li><Link class="navlink1" to="/itequipments">IT Equipments</Link></li>
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

<main>

<section id="contact" class="contact">
    <div class="container">
      <div class="section-title" style={{marginTop: `-12vh`, height: `35vh`, width: `140%`, marginLeft: `-30vh`}}>
        <span style={{marginTop: `12vh`}}>Contact</span>
        {/* <h2>Contact</h2> */}
        {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
      </div>
<br/>
      <div class="row" data-aos="fade-up">
        <div class="col-lg-6">
          <div class="info-box mb-4">
            <i class="bx bx-map"></i>
            <h3>Our Address</h3>
            <p>2QH2+CR6, Mahatma Gandhi St, Addis Ababa, Ethiopia</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="info-box  mb-4">
            <i class="bx bx-envelope"></i>
            <h3>Email Us</h3>
            <p>betareserching@gmail.com</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="info-box  mb-4">
            <i class="bx bx-phone-call"></i>
            <h3>Call Us</h3>
            <p>+251 905 888 222</p>
          </div>
        </div>

      </div>

      <div class="row" data-aos="fade-up">

        <div class="col-lg-6 ">
          {/* <iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{border:`0`, width: `100%`, height: `384px`}} allowfullscreen></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396.9889780889463!2d38.75175720897299!3d9.02830877253901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f18287ac61%3A0x6c03d3567560724c!2zTS5rIEJ1c2luZXNzIENlbnRlciB8IFBpYXp6YSB8IOGKpOGIneGKrCDhi6jhjIjhiaDhi6sg4Yib4Yql4Yqo4YiNIHwg4Y2S4Yur4Yiz!5e1!3m2!1sen!2snl!4v1698846589368!5m2!1sen!2snl" frameborder="0" style={{border:`0`, width: `100%`, height: `384px`}} allowfullscreen></iframe>
          </div>
        <div class="col-lg-6">
          <form action="#" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="col-md-6 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
            </div>
            <div class="form-group mt-3">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
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
    )
}

export default Contact
