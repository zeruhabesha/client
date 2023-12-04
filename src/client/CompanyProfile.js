import AOS from 'aos';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import Logo1 from './assets/img/logo1.png';
import Logo from './assets/img/logo.png';
import { Route,Link,useHistory } from 'react-router-dom';
import React ,{useState, useEffect} from "react";


const CompanyProfile = () => {


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
<section id="contact" class="contact cp" style={{overflow: `auto`, padding: `10vh 8vh`}}>
  <div class="container">
    <div class="section-title" style={{marginTop: `-12vh`, height: `35vh`, width: `140%`, marginLeft: `-30vh`}}>
      <span style={{marginTop: `12vh`}}>Company-Profile</span>
    </div>
    <br />
    <p>
      Beta Research and Development PLC is a leading provider of IT and
      electrical equipment materials in Ethiopia.
    </p>
    <p>
      Established in 2022, the company is committed to providing its customers
      with the highest quality products and services. With a strong reputation
      for quality and customer service, Beta Research and Development PLC is a
      trusted partner for businesses and individuals across Ethiopia.
    </p>
    <p>
      The company offers a wide range of products, including electrical,
      electromechanical, ventilation, air conditioning, educational lab
      equipment, security cameras, and one card system materials. Beta Research
      and Development PLC also provides full service, design, and installation
      for all of its products and services.
    </p>
    <p>
      The company is committed to the future of Ethiopia and is investing in
      new technologies to meet the changing needs of the market. With a
      talented team of engineers and technicians and a commitment to
      continuous learning and improvement, Beta Research and Development PLC is
      poised for continued growth and success.
    </p>
    <h4><b>Our History</b></h4>
    <p>
      Beta Research and Development PLC was founded in 2022 to meet the
      growing demand for IT and electrical equipment materials in Ethiopia.
      The company quickly gained a reputation for quality and customer service
      and has become a leading provider of these products and services in the
      country.
    </p>
    <h4><b>Our Vision</b></h4>
    <p>
      Beta Research and Development PLC's vision is to be the global leader in IT
      solutions, recognized for its unwavering commitment to excellence,
      customer satisfaction, and technological advancements that drive positive
      change.
    </p>
    <h4><b>Our Mission</b></h4>
    <p>
      Beta Research and Development PLC is committed to empowering businesses
      and individuals through innovative technology solutions, fostering a world of
      seamless connectivity, enhanced productivity, and boundless possibilities.
    </p>
    <div class="card">
  <div class="card-header">Products and Services</div>
  <ul class="card-list">
  <details>
    <summary>Electrical</summary>
    <ul class="nested-list">
      <li><i class="fas fa-hand-pointer"></i> Electrical panel</li>
      <li><i class="fas fa-hand-pointer"></i> Circuit breaker</li>
      <li><i class="fas fa-hand-pointer"></i> Switch</li>
      <li><i class="fas fa-hand-pointer"></i> Outlet</li>
      <li><i class="fas fa-hand-pointer"></i> Wire</li>
      <li><i class="fas fa-hand-pointer"></i> Light bulb</li>
    </ul>
  </details>

  <details>
    <summary> Electromechanical</summary>
    <ul class="nested-list">
      <li><i class="fas fa-hand-pointer"></i> Generator</li>
      <li><i class="fas fa-hand-pointer"></i> Motor</li>
      <li><i class="fas fa-hand-pointer"></i> Pump</li>
      <li><i class="fas fa-hand-pointer"></i> Fan</li>
      <li><i class="fas fa-hand-pointer"></i> Transducer</li>
      <li><i class="fas fa-hand-pointer"></i> Control system</li>
    </ul>
  </details>

  <details>
    <summary> Ventilation</summary>
    <ul class="nested-list">
      <li><i class="fas fa-hand-pointer"></i> Ductwork</li>
      <li><i class="fas fa-hand-pointer"></i> Damper</li>
      <li><i class="fas fa-hand-pointer"></i> Filter</li>
      <li><i class="fas fa-hand-pointer"></i> Heat exchanger</li>
      <li><i class="fas fa-hand-pointer"></i> Fan</li>
      <li><i class="fas fa-hand-pointer"></i> Control system</li>
    </ul>
  </details>

  <details>
    <summary>Air conditioning</summary>
    <ul class="nested-list">
      <li><i class="fas fa-hand-pointer"></i> Condenser</li>
      <li><i class="fas fa-hand-pointer"></i> Evaporator</li>
      <li><i class="fas fa-hand-pointer"></i> Compressor</li>
      <li><i class="fas fa-hand-pointer"></i> Fan</li>
      <li><i class="fas fa-hand-pointer"></i> Control system</li>
    </ul>
  </details>

  <details>
    <summary> Educational lab equipment</summary>
    <ul class="nested-list">
      <li><i class="fas fa-hand-pointer"></i> Microscope</li>
      <li><i class="fas fa-hand-pointer"></i> Telescope</li>
      <li><i class="fas fa-hand-pointer"></i> Balance</li>
      <li><i class="fas fa-hand-pointer"></i> Bunsen burner</li>
      <li><i class="fas fa-hand-pointer"></i> Graduated cylinder</li>
      <li><i class="fas fa-hand-pointer"></i> Beaker</li>
    </ul>
  </details>

  <details>
    <summary> Security cameras</summary>
    <ul class="nested-list">
      <li><i class="fas fa-hand-pointer"></i> Dome camera</li>
      <li><i class="fas fa-hand-pointer"></i> Bullet camera</li>
      <li><i class="fas fa-hand-pointer"></i> PTZ camera</li>
      <li><i class="fas fa-hand-pointer"></i> Network camera</li>
      <li><i class="fas fa-hand-pointer"></i> Wireless camera</li>
    </ul>
  </details>

  <details>
    <summary>One card system materials</summary>
    <ul class="nested-list">
      <li><i class="fas fa-hand-pointer"></i>Card reader</li>
      <li><i class="fas fa-hand-pointer"></i>Controller</li>
      <li><i class="fas fa-hand-pointer"></i>Credential</li>
      <li><i class="fas fa-hand-pointer"></i>Software</li>
    </ul>
  </details>
</ul>

{/* <img src={Logo1} style={{width:`40vh`}} alt="Logo"/> */}

</div>
    <h4><b>Our Work</b></h4>
    <p>
      Beta Research and Development PLC has worked on a variety of projects,
      including the design and installation of a new electrical systems, the
      installation of a new ventilation system, and the supply and installation
      of educational lab equipment for both governmental and private institutes.
    </p>
    <p>
      The company is committed to providing its customers with the highest
      quality of work and service.
    </p>
    <h4><b>Our Team</b></h4>
    <p>
      Our team is made up of experienced engineers and technicians who are
      dedicated to providing our customers with the best possible experience.
      We are committed to continuous learning and improvement, and we are
      always looking for new ways to improve our services.
    </p>
    <h4><b>Our Clients</b></h4>
    <p>
      Our clients include government agencies, businesses, and educational
      institutions. We are proud to have a long list of satisfied customers.
    </p>
    <h4><b>Our Commitment to Quality</b></h4>
    <p>
      We are committed to providing our customers with the highest
      quality of products and services. We use only the highest quality
      materials and components, and we have a strict quality control process in
      place. We are confident that you will be satisfied with our products and
      services.
    </p>
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
            <h4><b> <img src={Logo1} style={{width:`40vh`}} alt="Logo"/></b></h4>
            <p>
            2Qh3+CR6, Mahatma Gandhi St <br/>
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


export default CompanyProfile
