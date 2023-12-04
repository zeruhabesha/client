import React ,{useState, useEffect} from "react";
import AOS from 'aos';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import Logo1 from './assets/img/logo1.png';
import Logo from './assets/img/logo.png';
import './assets/css/blog.css';
import Aboutbg from './assets/img/hero-bg-Copy.jpg';
import Aboutb from './assets/img/about.jpg';
import Tenders from './assets/img/tenders.jpg';
import Admins from './assets/img/admin.jpg';

import { Switch,Route,Link,useHistory } from 'react-router-dom';

const Blog = () => {



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
        <span style={{marginTop: `12vh`}}>Blog</span>
        {/* <h2>Contact</h2> */}
        {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
      </div>
            <div class="row35">
  <div class="leftcolumn">
    <div class="card">
      <h2>Beta Tender System</h2>
      <h5> Dec 7, 2023</h5>
      <img src={Admins} class="fakeimg" />
      {/* <div class="fakeimg" style={{height:`200px`}}>Image</div> */}
      <p>This the 1st Tender System in Ethiopia</p>
      <p>Tender System software offers numerous benefits for both buyers and bidders</p>
      <p><h4><b>For Buyers:</b></h4><br/>
      <b>Increased Efficiency:</b> Tender software automates many tedious tasks associated with the tender process, such as document and communication management. This frees up valuable time and resources for buyers to focus on more strategic activities.
      <br/><b>Improved Transparency and Fairness:</b> The software ensures a consistent and transparent process for all bidders. This reduces the risk of errors and bias and helps buyers achieve the best value for their money.
      <br/><b>Wider Pool of Suppliers:</b> By using online platforms, buyers can reach a wider pool of potential suppliers, including those located outside their immediate geographic area. This can lead to increased competition and better pricing.
      <br/><b>Reduced Costs:</b> The software can help to reduce administrative costs associated with the tender process, such as printing and postage.
      <br/><b>Improved Collaboration:</b> The software facilitates communication and collaboration between buyers and bidders. This can help to ensure that all parties are clear on the requirements and expectations.
      <br/><b>Automated Evaluation:</b> Some tender software programs include features that automate the evaluation of bids. This can help to save time and ensure a more consistent and objective evaluation process.
      <br/><b>Enhanced Reporting and Analytics:</b> The software provides valuable insights into the tender process, which can help buyers to improve their procurement practices.
      </p>
      <p><h4><b>For Bidders:</b></h4>
      <br/><b>Simplified Bid Submission:</b> Bidders can easily submit bids online, eliminating the need for paper-based submissions.
      <br/><b>Reduced Costs:</b> The software can help bidders to reduce the cost of preparing and submitting bids.
      <br/><b>Increased Response Rates:</b> Bidders can receive notifications of new tender opportunities and submit bids quickly and easily.
      <br/><b>Improved Communication:</b> Bidders can easily communicate with buyers through the software.
      <br/><b>Fairer Evaluation Process:</b> The software ensures that all bids are evaluated in a fair and consistent manner.
      <br/><b>Improved Tracking:</b> Bidders can track the progress of their bids through the software.
      <br/><b>Enhanced Collaboration:</b> Bidders can collaborate with other bidders on joint ventures or partnerships.
      </p>
      <p>
      Overall, Tender System software offers a wide range of benefits for both buyers and bidders. By streamlining the tender process, the software can help to save time, reduce costs, and improve efficiency.

In addition to the benefits listed above, here are some additional advantages that specific Tender System software programs might offer:
<br/>
<b>Security:</b> The software ensures that all data is stored securely and that access is restricted to authorized users.
<br/><b>Scalability:</b> The software can be scaled to meet the needs of organizations of all sizes.
<br/><b>Integrations:</b> The software can be integrated with other business systems, such as ERP and CRM systems.
<br/><b>Mobile Apps</b>: Some software programs offer mobile apps that allow users to access and manage tenders on the go.
When choosing a Tender System software program, it is important to consider the specific needs of your organization. Consider factors such as the size and complexity of your tender process, the number of users, and your budget.
      </p>
    </div>
    {/* <div class="card">
      <h2>Beta Researching and Development PLC</h2>
      <h5> Sep 2, 2023</h5>
      <div class="fakeimg" style={{height:`200px`}}>Image</div>
      <p>Started</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div> */}
  </div>
  <div class="rightcolumn">
    <div class="card">
      <h2>About Me</h2>
      <img src={Tenders} class="fakeimg" />
      {/* <div >Image</div> */}
      <p>Subscribe Beta Tender System</p>
    </div>
    <div class="card">
      <h3>Popular Post</h3>
      <img src={Aboutbg} class="fakeimg"/><br/>
      <img src={Aboutb} class="fakeimg"/><br/>
      {/* <div class="fakeimg">Image</div> */}
      {/* <div class="fakeimg">Image</div>
      <div class="fakeimg">Image</div> */}
    </div>
    <div class="card">
      <h3>Contact us</h3>
      <p>betareserching@gmail.com</p>
      <p>+251 905 888 222</p>
    </div>
  </div>
</div> </div>
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

export default Blog
