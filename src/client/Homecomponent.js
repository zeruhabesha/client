/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { Navbar, Container, Nav } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';


import React ,{useState, useEffect} from "react";
// import Navcompnent from './Navcompnent';
// import './footer1.css';
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

import { Route,Link,useHistory } from 'react-router-dom';


import AOS from 'aos';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import Logo1 from './assets/img/logo1.png';
import Logo from './assets/img/logo.png';
import PC from './assets/img/products/813Dz+oGJgL.png';
import Phone from './assets/img/products/p20pro.png';
import SamsungPC from './assets/img/products/samsung-12q2bts-series3-15-main-lg.png';
import SamsungPCIe4 from './assets/img/products/Samsung-PCIe-4.png';
import Sdcardmodule from './assets/img/products/sdcardmodule.png';
import HDD from './assets/img/products/wd-green-6tb-14422-1_9747.png';
import SSD from './assets/img/products/SSD.png';
import Cisco from './assets/img/products/cisco_sg110d_05_na_sg110d_05_5_port_ethernet_switch_1220709.png';
import Router from './assets/img/products/81osE8vbLKL.png';
import Switch from './assets/img/products/669645-b1c2671e3b6ba16ab5942a4ac0dff3bd.png';
import Modem from './assets/img/products/81K4IHoxEHL.png';
import Cisco831 from './assets/img/products/cisco-cisco831-k9-improved.png';


import Switch1 from './assets/img/products/16490.png';
import PC1 from './assets/img/products/blk_400.png';
import Security from './assets/img/products/Group500-800-800.png';
import Iphone from './assets/img/products/Apple-iPhone-15-Pro-Max.png';
import Modem1 from './assets/img/products/purepng.com-routerelectronicsroutermodem-941524673013mnhwt.png';
// import Navclient from './Navclient';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Clock from './Clock';


import ImageSlider from './component/ImageSlider';
// import ImageSliderAuto from './component/ImageSliderAuto';
import { ImageData } from './json/JsonData';


const Product = () => {
  return (
   <div> <figure className="snip1418" style={{display:`inline-block`}}>
      <img style={{height: `50vh`, filter:`none`}} src={PC1} alt="sample85" />
      <div className="add-to-cart"> <i className="ion-android-add"></i><span>Desktop</span></div>
      <figcaption>
        <h3>Cyberpowerpc</h3>
        <p> 
Model: Syber M PRO 200 Gaming Desktop
Processor: Intel Core i7-6700K 4.0GHz
Memory: 16GB DDR4
 {/* Graphics: Nvidia GeForce GTX 1060 6gbddr5 */}
{/*Storage: 2TB 7200rpm HDD + 512GB SSD
Operating System: Windows 10 Home 64-bit
Case: Cyberpowerpc Syber M Smc100 Mid-Tower Gaming Case */}<br/>
<div className="">
            <span style={{color:`red`}}>Read-More</span>
          </div>
        </p>
      </figcaption><a href="#"></a>
    </figure>
        <figure className="snip1418" style={{display:`inline-block`}}>
        <img style={{height: `50vh`, filter:`none`}} src={Switch1} alt="sample85" />
        <div className="add-to-cart"> <i className="ion-android-add"></i><span>Switch</span></div>
        <figcaption>
        <h3>Switch</h3>
        <p> 
        A switch is a networking device that connects multiple devices on a network together.
         {/* Switches allow devices to send and receive data to each other. 
         They are commonly used in homes, */}
          {/* businesses, and schools to connect computers, printers, servers, and other devices. */}
          <br/>
<div className="">
            <span style={{color:`red`}}>Read-More</span>
          </div>
        </p>
      </figcaption><a href="#"></a>
    </figure>
       <figure className="snip1418" style={{display:`inline-block`}}>
        <img style={{height: `50vh`, filter:`none`}} src={Security} alt="sample85" />
        <div className="add-to-cart"> <i className="ion-android-add"></i><span>Security Camera</span></div>
        <figcaption>
        <h3>Polycom</h3>
        <p> 
        12x optical zoom camera: This allows you to zoom in on participants in the video conference.
Pan and tilt camera: 
{/* This allows you to move the camera around to capture the entire room. */}
{/* Built-in microphone: This allows you to participate in the video conference without having to use a separate microphone.
Remote control: This allows you to control the camera, speaker, and other features of the video conference system. */}
<br/>
<div className="">
            <span style={{color:`red`}}>Read-More</span>
          </div>
        </p>
      </figcaption><a href="#"></a>
    </figure>
      <figure className="snip1418" style={{display:`inline-block`}}>
      <img style={{height: `50vh`, filter:`none`}} src={Iphone} alt="sample85" />
        <div className="add-to-cart"> <i className="ion-android-add"></i><span>Iphone</span></div>
        <figcaption>
          <h3>iPhone 12 Pro Max</h3>
          <p>The iPhone 12 Pro Max has a 6.7-inch Super Retina XDR OLED display with a resolution of 2778 x
             1284 pixels. 
             {/* The display is also HDR10 and Dolby Vision certified, and it supports ProMotion, which means it can refresh at up to 120Hz.</p> */}
             <br/>
<div className="">
            <span style={{color:`red`}}>Read-More</span>
          </div>
        </p>
      </figcaption><a href="#"></a>
    </figure>
      <figure className="snip1418" style={{display:`inline-block`}}>
      <img style={{height: `50vh`, filter:`none`}} src={Modem} alt="sample85" />
        <div className="add-to-cart"> <i className="ion-android-add"></i><span>Modem</span></div>
        <figcaption>
          <h3>Modem</h3>
          <p>
          A modem is a device that modulates and demodulates signals. 
          Modulation is the process of converting a digital signal into 
          {/* an analog signal that can be transmitted over a physical medium,  */}
          {/* such as a telephone line or cable. Demodulation is the process of 
          converting an analog signal back into a digital signal. */}
          <br/>
<div className="">
            <span style={{color:`red`}}>Read-More</span>
          </div>
        </p>
      </figcaption><a href="#"></a>
    </figure>    
    
     <figure className="snip1418" style={{display:`inline-block`}}>
      <img style={{height: `50vh`, filter:`none`}} src={SSD} alt="sample85" />
        <div className="add-to-cart"> <i className="ion-android-add"></i><span>SSD Drive</span></div>
        <figcaption>
          <h3>Samsung 950 Pro M.2 512GB SSD</h3>
          <p>
          Sequential read speed: Up to 2500 MB/s
Sequential write speed: Up to 1500 MB/s
{/* Random read speed: Up to 300,000 IOPS */}
{/* Random write speed: Up to 280,000 IOPS
PCIe Gen 3 x4 interface
NVMe 1.2 support
Endurance: Up to 400 TBW
Warranty: 5 years */}
          <br/>
<div className="">
            <span style={{color:`red`}}>Read-More</span>
          </div>
        </p>
      </figcaption><a href="#"></a>
    </figure></div>
  );
}

const Homecomponent = () => {



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
               <li><Link class="navlink1" to="/login">Login</Link></li>
             </ul>
             <i class="bi bi-list mobile-nav-toggle"></i>
           </nav>
  </div>
</header>
{/* <Navclient/> */}
{/* <!-- ======= Hero Section ======= --> */}
<section id="hero" class="d-flex align-items-center">
  <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">
    <h1>Welcome <small>to Beta Research and Development PLC</small></h1>
    <h2>Modernize IT and transform business with Managed IT Service</h2>
    <a href="#about" class="btn-get-started scrollto">Contact</a>
  </div>
</section>

<main id="main">



  {/* <!-- ======= Why Us Section ======= --> */}
 




  {/* <!-- ======= Clients Section ======= --> */}
  
 
<section id="clients" class="clients" style={{ background: `aliceblue` }}>
  <div class="container" data-aos="zoom-in" style={{ background: `aliceblue` }}>
    <div class="row d-flex align-items-center" style={{ background: `aliceblue` }}>
      <div class="col-12">
        <div class="marquee5">
          <div class="col-lg-2 col-md-4 col-6">
            <img src={PC} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img src={Phone} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img src={SamsungPC} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img src={SamsungPCIe4} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img src={Sdcardmodule} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img src={HDD} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img src={SSD} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img src={Cisco} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img src={Router} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img src={Switch} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img src={Modem} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-2 col-md-4 col-6">
            <img src={Cisco831} class="img-fluid" alt="" />
          </div>
        </div>

        
        <div>
      <Product />
      {/* <Product className="hover" />
      <Product /> */}
    </div>




      </div>
    </div>
  </div>
</section>



<section>

<ImageSlider ImageData={ImageData} SlideInterValTime={2000}/>
          {/* <ImageSliderAuto ImageData={ImageData} SlideInterValTime={2000} /> */}

  </section>
  {/* <!-- ======= Cta Section ======= --> 
  style={{background:`linear-gradient( 180deg, hsla(0, 0%, 0%, 0) 0%,hsla(0, 0%, 0%, 0.8) 50%, hsl(0, 0%, 0%) 100%` )*/}
  <section id="cta" class="cta">
    <div class="container" data-aos="zoom-in">

      <div class="text-center">
        <h3>For More Information</h3>
        <p>Beta Research and Development Plc provide a wide range of services to businesses and consumers</p>
        <a class="cta-btn" href="#">About-Us</a>
      </div>

    </div>
  </section>

  {/* <!-- ======= Portfolio Section ======= --> */}
  


  {/* <!-- ======= Services Section ======= --> */}
  <section id="services" class="services">
    <div class="container">

      <div class="section-title" >
        <span>Services</span>
        {/* <h2 style={{marginLeft: `0vh`,marginTop: `4vh`, display:`inline`, padding: `10vh 3vh 0vh 0vh`,float: `left`}}>Service</h2> */}
        {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
        

      </div>



      <div class="row" style={{borderLeft: `1vh solid rgb(0, 150, 255)`}}>
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
          <div class="icon-box">
            <div class="icon"><i class="bx bxl-dribbble"></i></div>
            <h4><a href="">Software development:</a></h4>
            <p>Beta Research and Development Plc develop and sell software applications for a variety of purposes, such as productivity, security, and entertainment</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="150">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-file"></i></div>
            <h4><a href="">IT infrastructure management</a></h4>
            <p>Beta Research and Development Plc help businesses manage their IT infrastructure, including hardware, software, and networks</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-tachometer"></i></div>
            <h4><a href="">Networking and telecommunications</a></h4>
            <p>Beta Research and Development Plc provide businesses with networking and telecommunications services, such as internet access, voice over IP (VoIP) phone service, and video conferencing.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="450">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-world"></i></div>
            <h4><a href="">Data storage and management</a></h4>
            <p>Beta Research and Development Plc help businesses store and manage their data, including cloud storage, data backup, and disaster recover</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="600">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-slideshow"></i></div>
            <h4><a href="">Security</a></h4>
            <p>Beta Research and Development Plc provide businesses with security solutions to protect their data and systems from cyber threats.</p>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="750">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-arch"></i></div>
            <h4><a href="">Training and support</a></h4>
            <p>Beta Research and Development Plc provide businesses with training and support on their products and services.</p>
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



export default Homecomponent;
