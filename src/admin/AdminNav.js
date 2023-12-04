
import React from "react";
import { useEffect } from "react";
import "./Admins.css";
import neba from "./neba.jpg";
import logo from "./logo.jpg";
import axios from "axios";
import { useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
import {v4 as uuidv4} from "uuid"
// import { useAuth } from '../auth'
// import { SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-react-navigations';

import { useCookies } from "react-cookie";

import { toast, ToastContainer } from "react-toastify";
// import { useAuth } from 'react-auth0';
// const id = req.cookies._id;
import mongoose from "mongoose";



function AdminNav() {
  // const auth = useAuth();
  const history = useHistory();
  // const logOut = () => {
  //   axios.get("http://localhost:5000/logout")
  //  .then((res=>{
  //   navigate('/login')
  //  }))
  // .catch((err)=>{
  //   console.log('error to delete data:'+err.message);
  // });
  //  }

  // const { user } = useAuth();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const cookie = require("cookie");

  const role = cookie.parse("role");

  const [inviteMembers, setInviteMembers] = React.useState([
		{
			name: "",
			email: "",
			id: uuidv4(),
		},
	])
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        history.push("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:5000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          history.push("/login");
        } else
          toast(`Hi ${data.user} 🦄`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, history, removeCookie]);

  // const [student, setStudent] = useState({})
  // const [student1, setStudent1] = useState([])

  // useEffect(() => {
      
  //   axios.get("http://localhost:5000/account/list-account")
  //       .then((res) => {
  //         setStudent1(res.data);
  //       })
  //       .catch((err) => {
  //         console.log("Data not found" + err.message);
  //       }, []);
  //     });



  // if(role === "students"){ 
  //   const value = role;
   
  //   inviteMembers(role => ({...role , value}))
  // }

  const logOut = () => {
    removeCookie("jwt");
    history.push("/login");
  };
  // const student = db.account.find( { role: "students" } )

  return (
<div>


        <div class="zeru">
 <input type="checkbox" id="check"/>
    <label for="check">
      <i class="fa fa-bars" id="btn"></i>
      <i class="fa fa-angle-double-left" id="cancel"></i>
    </label>

 
<nav class="sidebar">
 
<input type="checkbox" id="check" />
    <label for="check">

    </label>

    <div class="sticky">
            <a style={{ fontSize: `100%` }} href="">
              SAGE
            </a>
          </div>

          <ul class="list-unstyled menu-elements">
            <li style={{ marginRight: `51px` }} class="active">
              <Link to="/adminhome" class="scroll-link">
                <i class="fas fa-home"></i>&nbsp; Dashboard
              </Link>
            </li>
            
           {role === "students" && (
           
            <li  style={{ marginRight: `69px` }}>
              <Link to="/students" class="scroll-link">
                <i class="fas fa-users"></i> &nbsp;Students
              </Link>
            </li> 
            )}
            <li style={{ marginRight: `58px` }}>
              <Link to="/instructors" class="scroll-link">
                <i class="fas fa-user"></i> &nbsp;Instructors
              </Link>
            </li> 
      
            <li style={{ marginRight: `98px` }}>
              <Link to="/staffs" class="scroll-link">
                <i class="fas fa-user"></i> &nbsp;Staffs
              </Link>
            </li>
            
          
            <li style={{ marginRight: `80px` }}>
              <Link to="/course" class="scroll-link">
                <i class="fas fa-envelope"></i>&nbsp;&nbsp; Course
              </Link>
            </li>

            <li style={{ marginRight: `48px` }}>
              <Link to="/attend" class="scroll-link">
                <i class="fa fa-address-book"></i>&nbsp;&nbsp;Attendance
              </Link>
            </li>
            {/* <li>
  <a  data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
    Attendance
  </a>
   <ul  id="collapseExample" class="collapse" >
             <li>
                 <Link class="scroll-link" href="#section-3">Student</Link>
             </li>
             <li>
                 <Link class="scroll-link" href="#section-4">Instructors</Link>
             </li>
         </ul>
 </li> */}
            <li style={{ marginRight: `88px` }}>
              <Link to="/library" class="scroll-link">
                <i class="fa fa-book"></i>&nbsp;&nbsp;Library
              </Link>
            </li>
            <li style={{ marginRight: `84px` }}>
              <Link to="/setting" class="scroll-link">
                <i class="fa fa-cog"></i>&nbsp;&nbsp;Setting
              </Link>
            </li>
            <li style={{ marginRight: `49px` }}>
              <Link to="/documents" class="scroll-link">
                <i class="fa fa-file"></i>&nbsp;&nbsp;Documents
              </Link>
            </li>
            <li style={{ marginRight: `83px` }}>
              <Link
                to="/logout"
                class="scroll-link"
                onClick={() => {
                  window.confirm("Are you sure to logout") && logOut();
                }}>
                <i class="fa fa-sign-out"></i>&nbsp;&nbsp;Logout
              </Link>
            </li>
          </ul>

</nav>
      </div></div>
  );
              // })}
}

export default AdminNav;


