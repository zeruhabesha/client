// - The component fetches data based on the user's role and permissions to determine which menu items to display. 
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState,useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Switch,Route,Link,useHistory } from 'react-router-dom';
import "./sidebar.css";
import Logos from './images/logo.png';
import { toast } from 'react-toastify'

// import { logoutUser } from '../action/employee_action'

// - This component represents the sidebar navigation menu for the application. 
// - It includes menu items for different sections of the application based on the user's role and permissions. 
// - The component also includes a logout button and a dark mode toggle. 
const Sidebar = () => {
   


  const [data, setData] = useState([]);
  const [galuak,setGaluak]=useState([])


  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('userInformation'));
    if(user){
      setGaluak(user)   

  }else{
      console.log("error")
    }
  },[])


  const logoutUser = () => {
    toast.success("Logout Successfull!")
    localStorage.removeItem("userToken")
    localStorage.removeItem("userInformation")
    localStorage.removeItem("jwt")


    window.location.href = "/login"
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (galuak && galuak.role === 'Admin') {
          const response = await fetch(`http://localhost:8005/find-org/${galuak.oid}`);
          const data = await response.json();
          setData(data);
        } else if (galuak && galuak.role === 'employee') {
          const sessionData = JSON.parse(localStorage.getItem('userInformation'));
          setData(sessionData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [galuak]);

  // Simulating login with different roles
  // - The component includes a dark mode toggle button that allows the user to switch between light and dark modes. 
  // - The current mode is stored in the local storage and applied to the body element.
  const toggleMode = () => {
    const mode = localStorage.getItem("mode");
    if (mode === "light") {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  };
   

  
  const mode = localStorage.getItem("mode");
  if (mode === "dark") {
    const body = document.querySelector("body");
    body.classList.add("dark");
  }
     
      // const folder = document.querySelector('.fa-folder');
      // folder.addEventListener('click', () => {
      //   folder.classList.toggle('fa-folder-open');
      // });
    

      const dispatch = useDispatch();
      // eslint-disable-next-line no-unused-vars
      const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      const handleLogout = () => {
        window.confirm('Are you sure to Logout?') && dispatch(logoutUser());
      };
    return (

              <nav class="nav1">       
        {/* <div class="menu-items">      */}

      <div class="logo-name">
        <div class="logo-image">
          <img src={Logos} alt="" />
        </div>

        {/* <div class="logo_name1">Beta</div> */}
      </div>

      
     {/* - The component includes menu items for different sections of the application, such as dashboard, employee, chat, organization, request, tender, 
     technical, documentation, quotation, service, report, blog, setting, and others. 
   - The visibility of each menu item is determined based on the user's role and permissions.  */}
          <div class="menu-items">
          <ul className="nav-links">

{data.dashboard==="active"  &&<>
<li>  <a href="#" class="side3"> <Link to="/adminhome"><i class="fa fa-home" style={{color: `#10b3ff`}}></i></Link><span class="link-name"><Link to="/adminhome"> Dashbord</Link></span></a></li>
</>}

{galuak.role==="Super"  &&<>
<li>  <a href="#" class="side3"> <Link to="/adminhome"><i class="fa fa-home" style={{color: `#10b3ff`}} ></i></Link><span class="link-name"><Link to="/adminhome"> Dashbord</Link></span></a></li>
</>}

{galuak.role==="Super" &&<>
<li>  <a href="#" class="side3"> <Link to={`/employee`}><i class="fa fa-user-circle" style={{color: `#00fd42`}} ></i></Link><span class="link-name"><Link to="/employee"> Employee</Link></span></a></li>
 </>}

{data.employee==="active"  &&<>
<li>  <a href="#" class="side3"> <Link to={`/employee`}><i class="fa fa-user-circle" style={{color: `#00fd42`}} ></i></Link><span class="link-name"><Link to="/employee"> Employee</Link></span></a></li>
</>}

{galuak.role==="Super" &&<>
<li>  <a href="#"> <Link to={`/chats`}><i class="fa fa-comment-alt" style={{color: `#ffd500`}}></i></Link><span class="link-name"><Link to="/chats"> Chat</Link></span></a></li>
</>}

{galuak.role==="Super" &&<>
<li>  <a href="#" class="side3"> <Link to={`/organization`}><i class="fa fa-user-circle" style={{color: `#10b3ff`}} ></i></Link><span class="link-name"><Link to="/organization"> Organization</Link></span></a></li>
</>}

{data.chat==="active"  &&<>
<li>  <a href="#" class="side3"> <Link to={`/chats`}><i class="fa fa-comment-alt" style={{color: `#ffd500`}}></i></Link><span class="link-name"><Link to="/chats"> Chat</Link></span></a></li>
</>}

 {galuak.role==="Super" &&<>
 <li>  <a href="#" class="side3"> <Link to={`/request`}><i class="fa fa-magnet" style={{color: `#10b3ff`}} ></i></Link><span class="link-name"><Link to="/request"> Request</Link></span></a></li>
</>}
                  
{galuak.role==="Super" &&<>
<li>  <a href="#" class="side3"> <Link to={`/organization`}><i class="fa fa-magnet" style={{color: `#10b3ff`}} ></i></Link><span class="link-name"><Link to="/request"> Organization</Link></span></a></li>
</>}
{data.request==="active"  &&<>
<li>  <a href="#" class="side3"> <Link to={`/request`}><i class="fa fa-magnet"style={{color:"red"}}></i></Link><span class="link-name"><Link to="/request"> Request</Link></span></a></li>
</>}

{data.tender==="active" &&<>
<li>  <a href="#" class="side3"> <Link to="/tender"><i class="fa fa-solid fa-scroll fa-flip" style={{color: `#fd8300`}} ></i></Link><span class="link-name"><Link to={`/Tender`}> Tender</Link></span></a></li>
</>}

{galuak.role==="Super" &&<>
<li>  <a href="#" class="side3"> <Link to="/tender"><i class="fa fa-solid fa-scroll fa-flip" style={{color: `#fd8300`}} ></i></Link><span class="link-name"><Link to={`/Tender`}> Tender</Link></span></a></li>
</>}

{data.technical==="active" &&<>

<li>  <a href="#" class="side3"> <Link to={`/technical`}><i class="fa fa-angle-double-right" style={{color: `#ff3170`}} ></i></Link><span class="link-name"><Link to="/technical"> Technical</Link></span></a></li>
</>}
{galuak.role==="Super" &&<>

<li>  <a href="#" class="side3"> <Link to={`/technical`}><i class="fa fa-angle-double-right" style={{color: `#ff3170`}} ></i></Link><span class="link-name"><Link to="/technical"> Technical</Link></span></a></li>
</>}

{data.documentation==="active" &&<>

<li>  <a href="#" class="side3"> <Link to={`/document`}><i class="fa fa-folder" style={{color: `#7156ff`}} ></i></Link><span class="link-name"><Link to="/document"> Documentation</Link></span></a></li>
</>}

{galuak.role==="Super" &&<>

<li>  <a href="#" class="side3"> <Link to={`/document`}><i class="fa fa-folder" style={{color: `#7156ff`}} ></i></Link><span class="link-name"><Link to="/document"> Documentation</Link></span></a></li>
</>}

{data.quotation==="active" &&<>
<li>  <a href="#" class="side3"> <Link to="/quatation"><i class="fa fa-rocket" style={{color: `#62f2ca`}} ></i></Link><span class="link-name"><Link to="/quatation"> Quatation</Link></span></a></li>
</>}

{galuak.role==="Super" &&<>
<li>  <a href="#" class="side3"> <Link to="/quatation"><i class="fa fa-rocket" style={{color: `#62f2ca`}} ></i></Link><span class="link-name"><Link to="/quatation"> Quatation</Link></span></a></li>
</>}
{galuak.role==="Super" &&<>
<li>  <a href="#" class="side3"> <Link to="/service"><i class="fa fa-solid fa-compact-disc fa-flip fa-spin" style={{color: `#10b3ff`}} ></i></Link><span class="link-name"><Link to="/service"> Service</Link></span></a></li>
</>}
{data.report==="active" &&<>

<li>  <a href="#" class="side3"> <Link to="/report"><i class="fa fa-solid fa-chart-pie fa-spin" style={{color: `#ff7676`}} ></i></Link><span class="link-name"><Link to="/report"> Report</Link></span></a></li>
</>}
{galuak.role==="Super" &&<>

<li>  <a href="#" class="side3"> <Link to="/blog"><i class="fa fa-blog fa-shake" style={{color: `#10b3ff`}} ></i></Link><span class="link-name"><Link to="/blog"> Blog</Link></span></a></li>


<li>  <a href="#" class="side3"> <Link to="/setting"><i class="fa fa-solid fa-cog fa-spin fa-spin-reverse" style={{color: `#10b3ff`}} ></i></Link><span class="link-name"><Link to="/setting"> Setting</Link></span></a></li>

<li>  <a href="#" class="side3"> <Link to="/others"><i class="fa fa-wrench faa-wrench animated fa-beat" style={{color: `#10b3ff`}} ></i></Link><span class="link-name"><Link to="/others"> Others</Link></span></a></li>
</>}
           </ul>
           {/* <div onClick={logoutUser} className='flex items-center justify-center mt-5 cursor-pointer shadow-2xl'>
          <IoMdLogOut className='text-[#e44d4d] w-[27px] h-[23px]' />
          <h6 className='text-[17px] text-[#e44d4d] font-semibold'>Logout</h6>
        </div> */}


         <ul class="logout-mode">   
         
    {/*  - The component includes a logout button that triggers the  logoutUser  function when clicked. */} 
             <li>  <a href="#" class="side3"> <Link onClick={logoutUser}><i class="fa fa-power-off" style={{color: `#10b3ff`}} ></i></Link><span class="link-name"><Link onClick={handleLogout}> Logout </Link></span></a></li>
   {/*- The component includes a dark mode toggle button that triggers the  toggleMode  function when clicked. 
   - The button updates the mode in the local storage and toggles the dark mode class on the body element.*/}
             <li class="mode">
      <a href="#">
        <i class="fa fa-moon animated" style={{color: `white`}} ></i>
         </a>
         <span class="link-name mode-toggle">
              <span class="switch" onClick={toggleMode}></span>
            </span>

    </li></ul>  
</div>



       
      {/* </div> */}
    </nav>
    
        
    )
}

export default Sidebar



// - The component includes a  logoutUser  function that removes user information from the local storage and redirects the user to the login page. 
// - The function is triggered when the user clicks on the logout button. 
export const logoutUser = () => {
  sessionStorage.removeItem('currentUser');
  window.location.href = '/login';
};