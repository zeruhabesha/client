/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useState} from 'react'

// - The component includes two dropdown menus for displaying notifications and messages. 
// - Each dropdown menu contains a list of items with relevant information. 
// - The dropdown menus are triggered by clicking on the respective icons. 
import { Dropdown, DropdownButton , Form} from "react-bootstrap";
import Imagess from "./images/sample.jpg";


// - This component represents the navigation bar for the admin section of the application. 
// - It includes buttons for toggling the sidebar, managing notifications, and entering fullscreen mode. 
// - The component also includes a search button that triggers a search feature. 
const Navadmin = () => {

  // - This function toggles the class of a navigation element between "close" and "open" states. 
  // - It also saves the current status of the sidebar in the local storage of the browser. 
    const toggleSidebar = () => {
        const sidebar = document.querySelector("nav");
        sidebar.classList.toggle("close");
        localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
      };
//    - This function is used to toggle between fullscreen and normal screen mode. 
     const handleClick = () => {
      const elem = document.documentElement; // Get the root element of the document
    
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        // If the screen is already in fullscreen mode, exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        // If the screen is not in fullscreen mode, enter fullscreen
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      }
    };

    //  - This function toggles the dropdown menu for notifications.
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClick1 = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div>
            <div class="top" style={{top:`10px`,dispaly:`inline`}}>
      <button class="uil uil-bars sidebar-toggle" onClick={toggleSidebar} style={{dispaly:`inline`}}></button>
     <ul className="ml-auto"  style={{marginBottom: `-1rem`, marginTop: `-1rem`, display: `inline`}}>
 <li className="nav-item dropdown d-none d-sm-inline-block">
<DropdownButton 
  variant="light"
  style={{ variant:{color:`#007bff` }}}
id="chats-dropdown" title={<i className="far fa-comments" style={{color: `rgb(0 110 221)`}}><span class="badge badge-danger navbar-badge">3</span></i>} onClick={handleClick1}>
  <Dropdown.Item href="#">
    <div className="media">
      <img src={Imagess} alt="User Avatar" className="img-size-50 mr-3 img-circle" />
      <div className="media-body">
        <h3 className="dropdown-item-title">
          Brad Diesel
          <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
        </h3>
        <p className="text-sm">Call me whenever you can...</p>
        <p className="text-sm text-muted"><i className="far fa-clock mr-1" style={{color: `rgb(0 110 221)`}}></i> 4 Hours Ago</p>
      </div>
    </div>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#">
    <div className="media">
      <img src={Imagess} alt="User Avatar" className="img-size-50 img-circle mr-3" />
      <div className="media-body">
        <h3 className="dropdown-item-title">
          John Pierce
          <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
        </h3>
        <p className="text-sm">I got your message bro</p>
        <p className="text-sm text-muted"><i className="far fa-clock mr-1" style={{color: `rgb(0 110 221)`}}></i> 4 Hours Ago</p>
      </div>
    </div>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#">
    <div className="media">
      <img src={Imagess} alt="User Avatar" className="img-size-50 img-circle mr-3" />
      <div className="media-body">
        <h3 className="dropdown-item-title">
          Nora Silvester
          <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
        </h3>
        <p className="text-sm">The subject goes here</p>
        <p className="text-sm text-muted"><i className="far fa-clock mr-1" style={{color: `rgb(0 110 221)`}}></i> 4 Hours Ago</p>
      </div>
    </div>
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item className="dropdown-footer" href="#">See All Messages</Dropdown.Item>
</DropdownButton></li>
&nbsp;&nbsp;&nbsp;
<li className="nav-item dropdown d-none d-sm-inline-block">
      <DropdownButton
        title={<i className="far fa-bell" style={{color: `rgb(0 110 221)`}}><span class="badge badge-warning navbar-badge">15</span></i>}
        id="notification-dropdown"
        menuRole="menu"
        className="nav-link"
        variant="light"
        style={{ variant:{color:`#007bff` }}}

      >
        <Dropdown.Header>15 Notifications</Dropdown.Header>
        <Dropdown.Divider />
        <Dropdown.Item href="#">
          <i className="fas fa-envelope mr-2" style={{color: `rgb(0 110 221)`}}></i> 4 new messages
          <span className="float-right text-muted text-sm">3 mins</span>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">
          <i className="fas fa-users mr-2" style={{color: `rgb(0 110 221)`}}></i> 8 friend requests
          <span className="float-right text-muted text-sm">12 hours</span>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">
          <i className="fas fa-file mr-2" style={{color: `rgb(0 110 221)`}}></i> 3 new reports
          <span className="float-right text-muted text-sm">2 days</span>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#" className="dropdown-footer">
          See All Notifications
        </Dropdown.Item>
      </DropdownButton>
    </li>
	<li className="nav-item dropdown d-none d-sm-inline-block">
          <a
            className="nav-link"
            data-widget="fullscreen"
            href="#"
            role="button"
            onClick={handleClick}
          >
            <i className="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
        
        <li class="nav-item d-sm-inline-block">
    <a class="nav-link" data-widget="navbar-search" href="#" role="button">
      <i class="fas fa-search"></i>
    </a>
    <div class="navbar-search-block">
  
    </div>
  </li>
  
    </ul>

      </div>
        </div>
    )
}

export default Navadmin
