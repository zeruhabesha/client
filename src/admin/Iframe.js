import React, { useEffect, useRef } from 'react';
import Sidebar from './Sidebar';

const Iframe = () => {
  const iframeCloseRef = useRef(null);
  const iframeScrollLeftRef = useRef(null);
  const iframeScrollRightRef = useRef(null);
  const iframeFullscreenRef = useRef(null);

  useEffect(() => {
    const handleIframeClose = (event) => {
      // Handle the close action here
      console.log('Close action triggered');
    };

    const handleIframeScrollLeft = (event) => {
      // Handle the scroll left action here
      console.log('Scroll left action triggered');
    };

    const handleIframeScrollRight = (event) => {
      // Handle the scroll right action here
      console.log('Scroll right action triggered');
    };

    const handleIframeFullscreen = (event) => {
      // Handle the fullscreen action here
      console.log('Fullscreen action triggered');
    };

    // Add event listeners to the iframe buttons
    iframeCloseRef.current?.addEventListener('click', handleIframeClose);
    iframeScrollLeftRef.current?.addEventListener('click', handleIframeScrollLeft);
    iframeScrollRightRef.current?.addEventListener('click', handleIframeScrollRight);
    iframeFullscreenRef.current?.addEventListener('click', handleIframeFullscreen);

    // Clean up the event listeners when the component is unmounted
    return () => {
      iframeCloseRef.current?.removeEventListener('click', handleIframeClose);
      iframeScrollLeftRef.current?.removeEventListener('click', handleIframeScrollLeft);
      iframeScrollRightRef.current?.removeEventListener('click', handleIframeScrollRight);
      iframeFullscreenRef.current?.removeEventListener('click', handleIframeFullscreen);
    };
  }, []);
  const toggleSidebar = () => {
    const sidebar = document.querySelector("nav");
    sidebar.classList.toggle("close");
    localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
  };
  return (
    <div>
         <Sidebar/> 
         <div class="top" ><button class="uil uil-bars sidebar-toggle" onClick={toggleSidebar} style={{dispaly:`inline`}}>
                 {/* <i ></i> */}
                 </button></div>
                 <div className="content-wrapper iframe-mode" data-widget="iframe" data-loading-screen="750">
        <div className="nav navbar navbar-expand navbar-white navbar-light border-bottom p-0">
          <div className="nav-item dropdown">
            <a className="nav-link bg-danger dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Close</a>
            <div className="dropdown-menu mt-0">
              <a className="dropdown-item" href="#" data-widget="iframe-close" data-type="all">Close All</a>
              <a className="dropdown-item" href="#" data-widget="iframe-close" data-type="all-other">Close All Other</a>
            </div>
          </div>
          <a className="nav-link bg-light" href="#" data-widget="iframe-scrollleft"><i className="fas fa-angle-double-left"></i></a>
          <ul className="navbar-nav overflow-hidden" role="tablist"></ul>
          <a className="nav-link bg-light" href="#" data-widget="iframe-scrollright"><i className="fas fa-angle-double-right"></i></a>
          <a className="nav-link bg-light" href="#" data-widget="iframe-fullscreen"><i className="fas fa-expand"></i></a>
        </div>
        <div className="tab-content">
          <div className="tab-empty">
            <h2 className="display-4">No tab selected!</h2>
          </div>
          <div className="tab-loading">
            <div>
              <h2 className="display-4">Tab is loading <i className="fa fa-sync fa-spin"></i></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Iframe



