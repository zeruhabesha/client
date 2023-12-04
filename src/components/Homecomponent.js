/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React ,{useState, useEffect} from "react";
// import Navcompnent from './Navcompnent';
import './footer1.css';
import {Button,Modal} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Ehda from "../admin/images/EhdaLogo.png";
import FAMATEL from "../admin/images/FAMATEL.png";
import DAK from "../admin/images/DAK.png";
import visbo from "../admin/images/visbo.png";
import AUX2 from "../admin/images/AUX 2.png";
import FSL from "../admin/images/FSL.png";
import LEZARD from "../admin/images/LEZARD.png";
import MATEST from "../admin/images/MATEST.png";
import sandp from "../admin/images/sandp.png";
import LOGO from "../logo/logo.png";

function onScroll(event) {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > 50) {
    const header = document.querySelector('.header');

    if (header) {
      header.classList.add('scrolled');
      header.style.top = scrollPosition + 'px';
    }
  } else {
    const header = document.querySelector('.header');

    if (header) {
      header.classList.remove('scrolled');
      header.style.top = '0';
    }
  }
}
function Homecomponent() {

  const [logModal, setLogModal] = useState(false);
    const [labor, setLabor] = useState(false);
      const [pomp, setPomp] = useState(false);
        const [access, setAccess] = useState(false);
          const [help, setHelp] = useState(false);
  const handleLog = () =>{
    setLogModal(true)
  };
  const handleLogClose = () =>{
    setLogModal(false)
  };

  const handlabor = () =>{
    setLabor(true)
  };
  const handlaborClose = () =>{
    setLabor(false)
  };

  const handpomp = () =>{
    setPomp(true)
  };
  const handpompClose = () =>{
    setPomp(false)
  };

  const handaccess = () =>{
    setAccess(true)
  };
  const handaccessClose = () =>{
    setAccess(false)
  };

  const handhelp = () =>{
    setHelp(true)
  };
  const handhelpClose = () =>{
    setHelp(false)
  };

  const [password, setPassword] = useState("");
const[show,setShow] = useState("password") 
const [email, setEmail] = useState("")
const dispatch = useDispatch()

const PostData = () => {
    const user = { password, email }
    dispatch(loginUser(user))
};

const handleShow = ()=> {
    if(show === "password"){
        setShow("text")
    } else {
        setShow("password")
    }
}


 const loginUser = (user) => async dispatch => {
  dispatch({
      type: 'USER_LOGIN_REQUEST'
  })

  try {
      const res = await axios.post("http://localhost:8005/empLogin", user);
      console.log(res)
      dispatch({
          type: 'USER_LOGIN_SUCCESS',
          payload: res.data
      })
      localStorage.setItem("jwt", res.data.token);
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      window.location.href = "/adminhome";
  } catch (error) {
      dispatch({
          type: 'USER_LOGIN_FAILED',
          payload: error
      })
  }
}
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

// const props = {
//   deviceType: "desktop",
// };
  return (
    <div >
<header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s"
style={{border:`none`}}>
    <div class="container" >
      <div class="row">
        <div class="col-12">
          <nav class="main-nav" style={{display: `inline-block`,width: `100%`}}>
            <a href="index.html" class="logo" 
            style={{    
        height: `5%`,
        display: `flex`, 
        width:`10%`,
        flexWrap: `nowrap`,
        marginTop: `6vh`,
        marginLeft: `8vh`,
        alignItems: `stretch`}}>
              <img src={LOGO}  alt="Beta Plc"/>
            </a>
        
            <ul class="nav" style={{marginTop: `6vh`, marginRight: `2vh`}}>
              <li class="scroll-to-section"><a href="#top" class="active one">Home</a></li>
              <li class="scroll-to-section"><a href="#services" class="one">Services</a></li>
              <li class="scroll-to-section"><a href="#about"class="one">About</a></li>
              <li class="scroll-to-section"><a href="#client"class="one">Our Clients</a></li>
              {/* <li class="scroll-to-section"><a href="#pricing"class="one">Our Teams</a></li> */}
              <li class="scroll-to-section"><a href="#contact"class="one">Contact</a></li>
              <li class="scroll-to-section"><a href="#newsletter"class="one">Newsletter</a></li>
              <li class="scroll-to-section"><div class="gradient-button"><button  onClick={() => handleLog()} ><i class="fa fa-sign-in-alt"></i> Sign In Now</button></div></li> 
             {/* id="modal_trigger" href="#modal" */}
            </ul>        
            {/* <a class='menu-trigger'  >
                <span>Menu</span>
            </a> */}
          </nav>
        </div>
      </div>
    </div>
  </header>

<div id="myModal" class="modal">


<div class="modal-content">
<span class="close">&times;</span>
<p>Some text in the Modal..</p>
</div>

</div>
<Modal
  show={logModal}
  onHide={handleLogClose}
  backdrop="static"
  keyboard={false}
   style={{
  background: "transparent",
  color: "white",
  height : "70%"
     }}
    aria-labelledby="contained-modal-title-vcenter"
      centered
      size="sm"
>

<Modal.Body >

<div className="SecoSide"> 
<button onClick={handleLogClose} style={{color:`black`, float:`left`}}><strong>X</strong></button>
        <div class="Rescontainer">
          <div class="Res">
            <div class="Reslogin">Login</div>
            <div class="ResinputBox">
              <input type="text" required="required" className="Resin" />
              <span class="Resuser">Username</span>
            </div>

            <div class="ResinputBox">
              <input type="password" required="required" className="Resin" />
              <span>Password</span>
            </div>

            <button class="Resenter">Login</button>
          </div>
        </div>
      </div>
</Modal.Body>
</Modal>

<Modal
  show={labor}
  onHide={handlaborClose}
  backdrop="static"
  keyboard={false}
  aria-labelledby="contained-modal-title-vcenter"
  centered
  size="lg"
>
<Modal.Body >
<div> 
  <h2>Laboratory Equipment</h2>
 
An IT laboratory is a facility that provides controlled conditions in which IT professionals can test and develop new software, hardware, and networking technologies. IT laboratories typically contain a variety of equipment, including computers, servers, network devices, and testing tools.
IT laboratories are used for a variety of purposes, including:
<ul style={{listStyleType:`disc`}}>
<li><b>Software testing:</b> <i>IT laboratories are often used to test software for bugs and performance issues.
This can be done by running the software on different operating systems and hardware configurations.</i>
</li><li><b>Hardware testing:</b><i>IT laboratories can also be used to test hardware for compatibility and performance issues. 
This can be done by connecting different types of hardware to the laboratory's network and testing it with different software applications.
</i></li> <li><b>Networking: </b><i>IT laboratories can be used to test and troubleshoot networking problems. 
This can be done by creating different network topologies and testing the performance of the network under different load conditions.
</i></li><li><b>Security:</b><i> IT laboratories can also be used to test and evaluate security vulnerabilities. 
This can be done by simulating cyberattacks and testing the effectiveness of the organization's security controls.
</i></li></ul>
</div>
</Modal.Body>
<Modal.Footer>
  <Button onClick={handlaborClose}>Close</Button>
</Modal.Footer>
</Modal>


<Modal
  show={pomp}
  onHide={handpompClose}
  backdrop="static"
  keyboard={false}
  aria-labelledby="contained-modal-title-vcenter"
  centered
  size="lg"
>
<Modal.Body >
<div > 
<h2>Pomp, Power Generation & Distribution</h2>
<ul><li><b>Power plants: </b>Power plants are the facilities that generate electricity. They use a variety of fuels, such as coal, natural gas, nuclear, and renewable energy sources, to heat water and turn turbines, which generate electricity.
</li><li><b>Transmission lines:</b> Transmission lines are the high-voltage cables that carry electricity from power plants to substations.
</li><li><b>Substations:</b> Substations are the facilities that step down the voltage of the electricity from transmission lines to a level that can be used by homes and businesses.
</li><li><b>Distribution lines:</b> Distribution lines are the lower-voltage cables that carry electricity from substations to homes and businesses.
</li>The power generation and distribution system is a complex network of components that work together to deliver electricity to our homes and businesses. It is essential for our modern way of life, and it is constantly evolving to meet the demands of a growing population.
</ul>      </div>
</Modal.Body>
<Modal.Footer>
  <Button onClick={handpompClose}>Close</Button>
</Modal.Footer>
</Modal>

<Modal
  show={access}
  onHide={handaccessClose}
  backdrop="static"
  keyboard={false}
  aria-labelledby="contained-modal-title-vcenter"
  centered
  size="lg"
>
<Modal.Body >
<div > 
<h2>Access Control & Security System</h2>
<ul>
<li>Physical access control systems control who can enter or exit a physical location. These systems typically use electronic locks, card readers, or biometric scanners to identify authorized users.
</li>
<li>Logical access control systems control who can access computer systems or networks. These systems typically use passwords, user IDs, and access permissions to control access.
</li>
<li>Intrusion detection systems (IDSs) monitor a physical or computer environment for unauthorized activity. IDSs can be used to detect a variety of threats, such as unauthorized access, data breaches, and denial-of-service attacks.
</li>
<li>Video surveillance systems use cameras to monitor a physical environment. Video surveillance systems can be used to deter crime, identify suspects, and investigate incidents.
</li>
<li>Biometric systems use physical characteristics, such as fingerprints, facial features, or voice patterns, to identify individuals. Biometric systems are often used in physical access control systems and can also be used to authenticate users for computer systems or networks.
</li>
</ul>



      </div>
</Modal.Body>
<Modal.Footer>
  <Button onClick={handaccessClose}>Close</Button>
</Modal.Footer>
</Modal>

<Modal
  show={help}
  onHide={handhelpClose}
  backdrop="static"
  keyboard={false}
  aria-labelledby="contained-modal-title-vcenter"
  centered
  size="sm"
>
<Modal.Body >
<div className="SecoSide"> 

      </div>
</Modal.Body>
<Modal.Footer>
  <Button onClick={handhelpClose}>Close</Button>
</Modal.Footer>
</Modal>


<div class="main-banner wow fadeIn" style={{padding: `17% 5% 15% 13%` }}id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div style={{marginRight: `5vh`}} class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div style={{marginRight: `-4vh`, marginLeft: `-5vh`}} class="row">
                  <div style={{color:`white`}} class="col-lg-12">
                    <h2>Beta Research and Development Plc</h2>
                    <p >
                    Maziv Engineering PLC is an experienced engineering company in Ethiopia in the supply of electrical, electromechanical, ventilation, air conditioning, educational lab equipment, security cameras and one card system materials with full service, design and installation.
                    </p>
                    <i style={{color:`white`}}> You can get Our App</i>
                  </div>
                  <div class="col-lg-12">
                    <div class="white-button first-button scroll-to-section">
                      <a href="#contact">Free Quote <i class="fab fa-apple"></i></a>
                    </div>
                    <div class="white-button scroll-to-section">
                      <a href="#contact">Free Quote <i class="fab fa-google-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="assets/images/slider-dec.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="services" class="services section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            <h4>Amazing <em>Services &amp; Features</em> for you</h4>
            <img src="assets/images/heading-line-dec.png" alt=""/>
            <p>
            Our Production and Service Delivery Process is fine tuned to provide high quality products that consumers want to buy at competitive prices.
             {/* Through the effective use of Quality Engineering methods and tools during the product conception, development and implementation processes, We have ensured that the the voice of the customer is heard and integrated into the product design, that quality is designed and built into the product, and waste is identified and eliminated in the manufacturing processes. Properly implemented Quality Engineering tools and techniques have enabled us to properly manage  product cost and quality, thus giving our customer best value for money. */}
              </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="service-item first-service">
            <div class="icon"></div>
            <h4>Laboratory Equipment</h4>
            {/* <p>You are not allowed to redistribute this template ZIP file on any other website.</p> */}
            <div class="text-button">
              <a onClick={() => handlabor()}>Read More <i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="service-item second-service">
            <div class="icon"></div>
            <h4>Pomp, Power Generation & Distribution</h4>
            {/* <p>You are allowed to use the Beta App Dev HTML template. Feel free to modify or edit this layout.</p> */}
            <div class="text-button">
              <a onClick={() => handpomp()}>Read More <i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="service-item third-service">
            <div class="icon"></div>
            <h4>Access Control & Security System</h4>
            {/* <p>If this template is beneficial for your work, please support us <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank">a little via PayPal</a>. Thank you.</p> */}
            <div class="text-button">
              <a onClick={() => handaccess()}>Read More <i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="service-item fourth-service">
            <div class="icon"></div>
            <h4>24/7 Help &amp; Support</h4>
            {/* <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p> */}
            <div class="text-button">
              <a onClick={() => handhelp()}>Read More <i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="about" class="about-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="section-heading">
            <h4>About <em>What We Do</em> &amp; Who We Are</h4>
            <img src="assets/images/heading-line-dec.png" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="box-item">
                <h4><a href="#">Maintance Problems</a></h4>
                <p>Lorem Ipsum Text</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="box-item">
                <h4><a href="#">24/7 Support &amp; Help</a></h4>
                <p>Lorem Ipsum Text</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="box-item">
                <h4><a href="#">Fixing Issues About</a></h4>
                <p>Lorem Ipsum Text</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="box-item">
                <h4><a href="#">Co. Development</a></h4>
                <p>Lorem Ipsum Text</p>
              </div>
            </div>
            <div class="col-lg-12">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor idunte ut labore et dolore adipiscing  magna.</p>
              <div class="gradient-button">
                <a href="#contact">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="right-image">
            <img src="assets/images/about-right-dec.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>

<div id="client" class="client section">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 align-self-center">
          <div class="section-heading">
            <h4>Our <em>Clients</em> </h4>
            <img src="assets/images/heading-line-dec.png" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
          </div></div>
           <div class="col-lg-9">
<marquee>
  <img src={visbo} alt='visbo' class="icons1"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={AUX2} alt='AUX2' class="icons1"/>&nbsp;&nbsp;&nbsp;&nbsp;
<img src={FSL} alt='FSL' class="icons1"/>&nbsp;&nbsp;&nbsp;&nbsp;
 <img src={LEZARD} alt='LEZARD' class="icons1"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={MATEST} alt='MATEST' class="icons1"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={sandp} alt='sandp' class="icons1"/>&nbsp;&nbsp;&nbsp;&nbsp;
 <img src={Ehda} alt='Ehda' class="icons1"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src={FAMATEL} alt='FAMATEL' class="icons1"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <img src={DAK} alt='DAK' class="icons1"/></marquee>
</div></div></div></div>
<div id="pricing" class="pricing-tables">
    <div class="container">
      <div class="row">
      <div class="col-lg-8 offset-lg-2">
          <div class="section-heading">
            <h4> Our <em>Teams</em> </h4>
            <img src="assets/images/heading-line-dec.png" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
          </div>
        </div>
       <section id="team">
        <div class="container" data-aos="fade-up">
           
            <div class="row">

            <div class="col-lg-3 col-md-6">
                <div class="member" data-aos="fade-up" data-aos-delay="100">
                <img src="assets/img/team-1.jpg" class="img-fluid" alt=""/>
                <div class="member-info">
                    <div class="member-info-content">
                    <h4>Michael Yimer</h4>
                    <span>Chief Executive Officer</span>
                    <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="member" data-aos="fade-up" data-aos-delay="200">
                <img src="assets/img/team-2.jpg" class="img-fluid" alt=""/>
                <div class="member-info">
                    <div class="member-info-content">
                    <h4>Agostino siccardi</h4>
                    <span>Technical Dep`t Manager</span>
                    <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="member" data-aos="fade-up" data-aos-delay="300">
                <img src="assets/img/team-3.jpg" class="img-fluid" alt=""/>
                <div class="member-info">
                    <div class="member-info-content">
                    <h4>Semha Nassir</h4>
                    <span>Import&Export Dep`t Manager</span>
                    <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="member" data-aos="fade-up" data-aos-delay="400">
                <img src="assets/img/team-4.jpg" class="img-fluid" alt=""/>
                <div class="member-info">
                    <div class="member-info-content">
                    <h4>Meron Seleshi</h4>
                    <span>Finance&Adminstration Dep`t Manager</span>
                    <div class="social">
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            </div>

        </div>
        </section>
      
      </div>
    </div>
  </div>

  <div id="contact" class="contact-us section">
    <div class="container">
    <section class="ftco-section">
		<div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
          <div class="section-heading">
            <h4><em>Contact</em> Us</h4>
            <img src="assets/images/heading-line-dec.png" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
			<div class="row justify-content-center">
				<div class="col-md-12">
					<div class="wrapper">
						<div class="row no-gutters mb-5">
							<div class="col-md-7">
								<div class="contact-wrap w-100 p-md-5 p-4">
									
									<form id="contactForm" name="contactForm" class="contactForm">
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<label class="label" for="name">Full Name</label>
													<input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div class="col-md-6"> 
												<div class="form-group">
													<label class="label" for="email">Email Address</label>
													<input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="subject">Subject</label>
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="#">Message</label>
													<textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-md-12">
                      <div class="gradient-button">
													<input type="submit" value="Send Message" class="submitedr btn5 btn5-primary"/>
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-5 d-flex align-items-stretch">
								<div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1353.4792009078637!2d38.7520194842046!3d9.027905227265627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f18287ac61%3A0x6c03d3567560724c!2sM.k%20Business%20Center!5e0!3m2!1sen!2set!4v1688980322702!5m2!1sen!2set" width="180%" height="90%" style={{border:`0`}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			          </div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-3">
								<div class="dbox w-100 text-center">
			        		<div class="gradient-button icon d-flex align-items-center justify-content-center">
			        			<span class="fa fa-map-marker"></span>
			        		</div>
			        		<div class="text">
				            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
				          </div>
			          </div>
							</div>
							<div class="col-md-3">
								<div class="dbox w-100 text-center">
			        		<div class="icon d-flex align-items-center justify-content-center">
			        			<span class="fa fa-phone"></span>
			        		</div>
			        		<div class="text">
				            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
				          </div>
			          </div>
							</div>
							<div class="col-md-3">
								<div class="dbox w-100 text-center">
			        		<div class="icon d-flex align-items-center justify-content-center">
			        			<span class="fa fa-paper-plane"></span>
			        		</div>
			        		<div class="text">
				            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
				          </div>
			          </div>
							</div>
							<div class="col-md-3">
								<div class="dbox w-100 text-center">
			        		<div class="span3 icon d-flex align-items-center justify-content-center">
			        			<span class="fa fa-globe"></span>
			        		</div>
			        		<div class="text">
				            <p><span>Website</span> <a href="#">yoursite.com</a></p>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>		</div>
		</div>
	</section>
    </div>
  </div>
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
            <p>Copyright © 2023 Beta PLC Company. All Rights Reserved. 
          <br/>Design: <a href="#" target="_blank" title="css templates">Beta Software Engineering</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
        </div>
);
}



export default Homecomponent;
