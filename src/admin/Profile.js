/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState,useEffect,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import axios from 'axios';
import {Button,Modal} from "react-bootstrap"
import {useParams} from 'react-router-dom'
// import SidebarAdmin from './components/SidebarAdmin';
// import Navcomponent from './components/Navcomponent';
// import HomeAdmin from './components/HomeAdmin';
import './table.css';
import './table.js';
import Sidebar from './Sidebar';


const Profile = () => {

  const [student, setStudent] = useState({})
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setStudent(values => ({...values, [name]: value}))
  }
  const handleExpandRow = (row) => {
    row.expanded = !row.expanded;
  };


const [employee,setEmployee]=useState("")

  const fileInputRef = useRef(null);
  const {id} = useParams();
  const [Profilelicants, setProfilelicants] = useState([]);
  const [session, setSession] = useState([]);
  const [start,setStart] = useState("")

  // const [file,setFile] = useState("")


  const[test,setTest]=useState("")
  const [show, setShow] = useState(false);
  const[selectedOption,setSelectedOption] = useState("")
  const [status, setStatus] = useState("Inactive");
  const kk = ["Active", "Inactive"];
  const [value,setValue] = useState("")
 
  const[technical,setTechnical] = useState("")
  const[service,setService] = useState("")
  const[blog,setBlog] = useState("")
  const[report,setReport] = useState("")
  const[setting,setSetting] = useState("")
  const[others,setOthers] = useState("")


  const [sid,setSid] = useState("")
  const [first_name,setFirstName] = useState("")
  const [middle_name,setMiddleName] = useState("")
  const [last_name,setLastName] = useState("")
  const [email,setEmail] = useState("")
    const[password,setPassword]=useState("")

  const [role,setRole] = useState("instrucrors");
  const[class_assigned,setClassAssigned]=useState("")
  const [gender,setGender] = useState("")
  const [username,setUserName] = useState("")
  const [end_date,setEndDate] = useState("")
  const [start_date,setStartDate] = useState("")
   const [dob,setDob] = useState("")
  const [phone,setPhone] = useState("")
 
  const [address,setAddress] = useState("")
  const [department, setDepartment] = useState(false);
  const [hh,setHh] = useState("")
  const [Profilerove, setProfilerove] = useState(false);
  const [Instructors, setInstructors] = useState("instrucrors");
  // const Role = ["Instructors"]
  const [tender, setTender] = useState(false);
  const [privilage, setPrivilage] = useState(false);

  const registerUser = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/addacc", user).then(res => {
            if(res.status ===200){
              alert('The data is add successfully')
              // Push to /
              window.location.href = "/Instructors";
            }else{
              Promise.reject()
            }
          })
        console.log(res);
        dispatch({
            type: 'USER_REGISTER_SUCCESS'

        })
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAILED',
            payload: error
        })
    }
}


  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setShow(true);
    setHh(user._id);
    setFirstName(user.first_name); 
    setMiddleName(user.middle_name); 
    setLastName(user.last_name); 
    setUserName(user.username);
    setEmail(user.email); 
    setPhone(user.phone);  
    setGender(user.gender); 
    setClassAssigned(user.class_assigned);
    setStartDate(user.start_date);
    setPassword(user.password);
    setRole(user.role); 
    setDepartment(user.department);
    setAddress(user.address);
    setEndDate (user.end_date);
  };

  const handleRequest1 = ()=>{
    const user = {
       
      first_name,middle_name,last_name,username,
      email,  password,
      phone, address, dob,
      department,
     class_assigned,
      role, start_date, end_date,status,
      gender:selectedOption
       
    }
     
   dispatch(registerUser(user))

   setFirstName(""); setMiddleName(""); setLastName(""); setUserName("");
   setEmail(""); setPhone("");  setGender("");  setClassAssigned("");
   setStartDate("");
   setPassword("");
   setRole(""); setDepartment("");
    setAddress("")
   setEndDate ("");setStatus("Inactive")
  
}


  
//   const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
  // console.log(currentUser);
  const AddStudent = async (e) => {
    e.preventDefault();
    try {
      // eid,rid,oid,oname,
      // tenderno,tendername,priority,
      //  start,end,location,link,file:fileInputRef.current.files[0],status
      const formData = new FormData();
      formData.Profileend("first_name",first_name);
      formData.Profileend("middle_name",middle_name);
      formData.Profileend("last_name",last_name);
      formData.Profileend("username",username);
      formData.Profileend("email", email); 
      formData.Profileend("password", password);
      formData.Profileend("gender", selectedOption);
      formData.Profileend("address", address);
            formData.Profileend("dob", dob);
            formData.Profileend("phone", phone);
            formData.Profileend("department", department);
 
      formData.Profileend("class_assigned", class_assigned);
      formData.Profileend("role", role);
            formData.Profileend("start_date", start_date);
      formData.Profileend("end_date", end_date);
           formData.Profileend("status", status);
      formData.Profileend("photo", fileInputRef.current.files[0]);
    
   
      const res = await axios.post(
        "http://localhost:5000/addacc",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

    





const handleRequest = ()=> {
  const obj = {
  
      hh,technical,service,blog,report,setting,others,
  
  }
 
//  dispatch(UploadTask(obj))


}

    

const [user1, setUser] = useState(null);

useEffect(() => {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("currentUser"));

  setUser(dataFromLocalStorage);
}, []);

const showDetail = (_id) =>
{

fetch(`http://localhost:5000/profile/${_id}`)
.then(resposne=> resposne.json())
.then(res=>setProfilelicants(res))
}
const [editModal, setEditModal] = useState(false);
const [more, setMore] = useState(false);
const [request, setRequest] = useState(false);
const [organization, setOrganization] = useState(false);
const [edittOrg, setEditOrg] = useState(false);
const [tenderadd, setTenderAdd] = useState(false);
const [tendermore, setTenderMore] = useState(false);
const [statuss, setStatuss] = useState(false);
const [tenderedit, setTendEdit] = useState(false);
const [addstud, setAddStud] = useState(false);


const handleReqClose = () => {
  setEditModal(false);
  setShow(true);
}

const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));


const handleAddStud = () =>{
  setAddStud(true);
  setMore(false);
}
const handleStudClose = () =>{
  setAddStud(false);
  setMore(true);
}
const [formValues, setFormValues] = useState({})

// define onChange to get form values
const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
 
  setFormValues(values => ({...values, [name]: value}))
}
const handleSubmit = (event) => {
  event.preventDefault();
  axios.put(
    `http://localhost:5000/editaccount/${hh}`, formValues)
    .then(res => {
      if(res.status ===200){
        alert('A record successfuly updated')
        // Push to /
        window.location.href = "/Instructors";
      }else{
        Promise.reject()
      }
    })
    .catch(err => alert('Something went wrong! ' +err.message))
    // Push to /
  
}



const toggleSidebar = () => {
  const sidebar = document.querySelector("nav");
  sidebar.classList.toggle("close");
  localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
}; 
  return (
    <div>
    <Sidebar/>
  
       <section class="dashboard">
       <div class="top">
       <button class="uil uil-bars sidebar-toggle" onClick={toggleSidebar}>
                  
                  </button>
         <div class="search-box">
           <i class="uil uil-search"></i>
           <input type="text" placeholder="Search here..." />
         </div>
 
       </div>
 gfhgdh
       {/*<div class="dash-content">
	
						<div class="pb-20">
            <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Profile</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">User Profile</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
            {currentUser && (	<div>
		<p>Full Name: {currentUser.user.first_name} {" "} {currentUser.user.middle_name}</p>
		<p>Role: {currentUser.user.role}</p>
		<p>Email: {currentUser.user.email}</p>
	   </div>
           )}
					
    <section class="content">
       <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">

            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  <img class="profile-user-img img-fluid img-circle"
                       src="../../dist/img/user4-128x128.jpg"
                       alt="User profile picture"/>
                </div>

                <h3 class="profile-username text-center">Nina Mcintire</h3>

                <p class="text-muted text-center">Software Engineer</p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>Followers</b> <a class="float-right">1,322</a>
                  </li>
                  <li class="list-group-item">
                    <b>Following</b> <a class="float-right">543</a>
                  </li>
                  <li class="list-group-item">
                    <b>Friends</b> <a class="float-right">13,287</a>
                  </li>
                </ul>

                <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
              </div>
            </div>

            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">About Me</h3>
              </div>
              <div class="card-body">
                <strong><i class="fas fa-book mr-1"></i> Education</strong>

                <p class="text-muted">
                  B.S. in Computer Science from the University of Tennessee at Knoxville
                </p>

                <hr></hr>

                <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

                <p class="text-muted">Malibu, California</p>

                <hr></hr>

                <strong><i class="fas fa-pencil-alt mr-1"></i> Skills</strong>

                <p class="text-muted">
                  <span class="tag tag-danger">UI Design</span>
                  <span class="tag tag-success">Coding</span>
                  <span class="tag tag-info">Javascript</span>
                  <span class="tag tag-warning">PHP</span>
                  <span class="tag tag-primary">Node.js</span>
                </p>

                <hr></hr>

                <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
              </div>
            </div>
          </div>
       
          <div class="col-md-9">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                  <li class="nav-item"><a class="nav-link active" href="#activity" data-toggle="tab">Activity</a></li>
                  <li class="nav-item"><a class="nav-link" href="#timeline" data-toggle="tab">Timeline</a></li>
                  <li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Settings</a></li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="active tab-pane" id="activity">
                    <div class="post">
                      <div class="user-block">
                        <img class="img-circle img-bordered-sm" src="../../dist/img/user1-128x128.jpg" alt="user image"/>
                        <span class="username">
                          <a href="#">Jonathan Burke Jr.</a>
                          <a href="#" class="float-right btn-tool"><i class="fas fa-times"></i></a>
                        </span>
                        <span class="description">Shared publicly - 7:30 PM today</span>
                      </div>
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore the hate as they create awesome
                        tools to help create filler text for everyone from bacon lovers
                        to Charlie Sheen fans.
                      </p>

                      <p>
                        <a href="#" class="link-black text-sm mr-2"><i class="fas fa-share mr-1"></i> Share</a>
                        <a href="#" class="link-black text-sm"><i class="far fa-thumbs-up mr-1"></i> Like</a>
                        <span class="float-right">
                          <a href="#" class="link-black text-sm">
                            <i class="far fa-comments mr-1"></i> Comments (5)
                          </a>
                        </span>
                      </p>

                      <input class="form-control form-control-sm" type="text" placeholder="Type a comment"/>
                    </div>
         
                    <div class="post clearfix">
                      <div class="user-block">
                        <img class="img-circle img-bordered-sm" src="../../dist/img/user7-128x128.jpg" alt="User Image"/>
                        <span class="username">
                          <a href="#">Sarah Ross</a>
                          <a href="#" class="float-right btn-tool"><i class="fas fa-times"></i></a>
                        </span>
                        <span class="description">Sent you a message - 3 days ago</span>
                      </div>
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore the hate as they create awesome
                        tools to help create filler text for everyone from bacon lovers
                        to Charlie Sheen fans.
                      </p>

                      <form class="form-horizontal">
                        <div class="input-group input-group-sm mb-0">
                          <input class="form-control form-control-sm" placeholder="Response"/>
                          <div class="input-group-append">
                            <button type="submit" class="btn btn-danger">Send</button>
                          </div>
                        </div>
                      </form>
                    </div>
   
                    <div class="post">
                      <div class="user-block">
                        <img class="img-circle img-bordered-sm" src="../../dist/img/user6-128x128.jpg" alt="User Image"/>
                        <span class="username">
                          <a href="#">Adam Jones</a>
                          <a href="#" class="float-right btn-tool"><i class="fas fa-times"></i></a>
                        </span>
                        <span class="description">Posted 5 photos - 5 days ago</span>
                      </div>
                      <div class="row mb-3">
                        <div class="col-sm-6">
                          <img class="img-fluid" src="../../dist/img/photo1.png" alt="Photo"/>
                        </div>
                        <div class="col-sm-6">
                          <div class="row">
                            <div class="col-sm-6">
                              <img class="img-fluid mb-3" src="../../dist/img/photo2.png" alt="Photo"/>
                              <img class="img-fluid" src="../../dist/img/photo3.jpg" alt="Photo"/>
                            </div>
                            <div class="col-sm-6">
                              <img class="img-fluid mb-3" src="../../dist/img/photo4.jpg" alt="Photo"/>
                              <img class="img-fluid" src="../../dist/img/photo1.png" alt="Photo"/>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p>
                        <a href="#" class="link-black text-sm mr-2"><i class="fas fa-share mr-1"></i> Share</a>
                        <a href="#" class="link-black text-sm"><i class="far fa-thumbs-up mr-1"></i> Like</a>
                        <span class="float-right">
                          <a href="#" class="link-black text-sm">
                            <i class="far fa-comments mr-1"></i> Comments (5)
                          </a>
                        </span>
                      </p>

                      <input class="form-control form-control-sm" type="text" placeholder="Type a comment"/>
                    </div>
                  </div>
                  <div class="tab-pane" id="timeline">
                    <div class="timeline timeline-inverse">
                      <div class="time-label">
                        <span class="bg-danger">
                          10 Feb. 2014
                        </span>
                      </div>
                    
                      <div>
                        <i class="fas fa-envelope bg-primary"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="far fa-clock"></i> 12:05</span>

                          <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                          <div class="timeline-body">
                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                            quora plaxo ideeli hulu weebly balihoo...
                          </div>
                          <div class="timeline-footer">
                            <a href="#" class="btn btn-primary btn-sm">Read more</a>
                            <a href="#" class="btn btn-danger btn-sm">Delete</a>
                          </div>
                        </div>
                      </div>
                  
                      <div>
                        <i class="fas fa-user bg-info"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="far fa-clock"></i> 5 mins ago</span>

                          <h3 class="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                          </h3>
                        </div>
                      </div>
                     
                      <div>
                        <i class="fas fa-comments bg-warning"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="far fa-clock"></i> 27 mins ago</span>

                          <h3 class="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                          <div class="timeline-body">
                            Take me to your leader!
                            Switzerland is small and neutral!
                            We are more like Germany, ambitious and misunderstood!
                          </div>
                          <div class="timeline-footer">
                            <a href="#" class="btn btn-warning btn-flat btn-sm">View comment</a>
                          </div>
                        </div>
                      </div>
                     
                      <div class="time-label">
                        <span class="bg-success">
                          3 Jan. 2014
                        </span>
                      </div>
                   
                      <div>
                        <i class="fas fa-camera bg-purple"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="far fa-clock"></i> 2 days ago</span>

                          <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                          <div class="timeline-body">
                            <img src="https://placehold.it/150x100" alt="..."/>
                            <img src="https://placehold.it/150x100" alt="..."/>
                            <img src="https://placehold.it/150x100" alt="..."/>
                            <img src="https://placehold.it/150x100" alt="..."/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <i class="far fa-clock bg-gray"></i>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane" id="settings">
                    <form class="form-horizontal">
                      <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                          <input type="email" class="form-control" id="inputName" placeholder="Name"/>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                          <input type="email" class="form-control" id="inputEmail" placeholder="Email"/>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputName2" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputName2" placeholder="Name"/>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputExperience" class="col-sm-2 col-form-label">Experience</label>
                        <div class="col-sm-10">
                          <textarea class="form-control" id="inputExperience" placeholder="Experience"></textarea>
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputSkills" class="col-sm-2 col-form-label">Skills</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" id="inputSkills" placeholder="Skills"/>
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10">
                          <div class="checkbox">
                            <label>
                              <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10">
                          <button type="submit" class="btn btn-danger">Submit</button>
                        </div>
                      </div>
                    </form>
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

            </div>*/}


			




          


	





  <Modal
        show={show}
       onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>More For {hh} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table class="table table-striped table-sm">
                <tr>
                <th>Gender</th>
                                <td>{gender}</td></tr>
                           <tr>
                                <th>Phone-Number</th>
                                <td>{phone}</td>
                            </tr>
                            <tr>
                            <th>Email</th>
                            <td>{email}</td>
                            </tr>
                            <tr>
                            <th>Department</th>
                            <td>{department}</td>
                            </tr>
                            <tr>
                            <th>Address</th>
                            <td>{address}</td>
                            </tr>
                            <tr>
                            <th>Date of Birth</th>
                            <td>{dob}</td>
                            </tr>
                         
                            <tr>
                            <th>Class-Assigned</th>
                            <td>{class_assigned}</td>
                            </tr>
                            <tr>
                            <th>Start-Date</th>
                            <td>{start_date}</td>
                            </tr>
                             <tr>
                            <th>End-Date</th>
                            <td>{end_date}</td>
                            </tr>
                    </table>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      

<Modal
show={editModal}
onHide={handleReqClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Edit Profile {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

           
<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
     <form onSubmit={handleSubmit}>
            <div class="form-group">
    <label for="SID">SID</label>
    <input type="text" class="form-control" id="SID" defaultValue={sid} name="sid" onChange={handleChange} placeholder="SID"/>
  </div>
  <div class="form-group">
    <label for="FirstName">First Name</label>
    <input type="text" class="form-control" id="FirstName" defaultValue={first_name} name="first_name" onChange={handleChange} placeholder="Enter First Name"/>
  </div>
    <div class="form-group">
    <label for="MiddleName">Middle Name</label>
    <input type="text" class="form-control" id="MiddleName" defaultValue={middle_name}  name="middle_name" onChange={handleChange}  placeholder="Enter Middle Name"/>
  </div>
  <div class="form-group">
    <label for="LastName">Last Name</label>
    <input type="text" class="form-control" id="LastName"  defaultValue={last_name} name="last_name" onChange={handleChange} placeholder="Enter Last Name"/>
  </div>
    <div class="form-group">
    <label for="UserName">User Name</label>
    <input type="text" class="form-control" id="UserName"  defaultValue={username} name="username" onChange={handleChange} placeholder="Enter User Name"/>
  </div>
  <div class="form-group">
    <label for="Email">Email</label>
    <input type="email" class="form-control" id="Email" defaultValue={email} name="email" onChange={handleChange} placeholder="Enter Email"/>
  </div>
    <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="Password" defaultValue={password} name="password"  onChange={handleChange} placeholder="Enter Password"/>
  </div>
  <div class="form-group">
    <label for="Gender">Gender</label>
    <div className="col" style={{ display:"flex" }}>
           <div className="radio" >
          <label>
            <input type="radio" value="Male" checked={selectedOption === "Male"}  name="gender" onChange={handleChange}/>
            Male
          </label>
        </div>
        <div className="radio" style={{ marginLeft:"15px" }}>
          <label>
            <input type="radio" value="Female" checked={selectedOption === "Female"} name="gender" onChange={handleChange}/>
            Female
          </label>
        </div>
           </div>  
             </div>
  <div class="form-group">
    <label for="Phone">Phone-Number</label>
    <input type="text" class="form-control" id="Phone"  defaultValue={phone} name="phone" onChange={handleChange} placeholder="Enter Phone-Number"/>
  </div>
  <div class="form-group">
    <label for="Department">Department</label>
    <input type="text" class="form-control" id="Department"  defaultValue={department} name="department" onChange={handleChange} placeholder="Enter Department"/>
  </div>
    <div class="form-group">
    <label for="Address">Address</label>
    <input type="text" class="form-control" id="Address"  defaultValue={address} name="address" onChange={handleChange} placeholder="Enter Address"/>
  </div>

  <div class="form-group">
    <label for="class_assigned">Class-Schedule</label>
    <input type="text" class="form-control" id="class_assigned" defaultValue={class_assigned} name="class_assigned" onChange={handleChange} placeholder="Enter Class Schedule"/>
  </div>
  <div class="form-group">
    <label for="Start">Start-Date</label>
    <input type="date" class="form-control" id="Start" defaultValue={start_date} name="start_date" onChange={handleChange} placeholder="Enter Start Date"/>
  </div>
  <div class="form-group">
    <label for="End">End-Date</label>
    <input type="date" class="form-control" id="End"  defaultValue={end_date} name="end_date" onChange={handleChange} placeholder="Enter End Date"/>
  </div>
  {/* <div class="form-group">
    <label for="Role">Role</label>
    <select value={role} id="selectId"  class="form-control" onChange={e => setRole(e.target.value)}>
                  <option value={Instructors}>  Instructors  </option>
      </select>  
      </div> */}
                 <div class="form-group">
            <label for="recipient-file" class="col-form-label">Photo:</label>
            <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>
          </div>
         

      <div class="modal-footer">
        <Button variant="secondary" onClick={handleReqClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-primary" >Save changes</button>
      </div>
        </form> </div> </div>
</Modal.Body>
<Modal.Footer>
</Modal.Footer>
</Modal>


</section>

 </div>

  )
}

export default Profile


{/* 
import React, { useState, useEffect } from "react";

const Profile = () => {
	const currentUser = JSON.parse(localStorage.getItem('currentUser'));

	return (
	  <div>
		<p>First Name: {currentUser.user.first_name}</p>
		<p>Role: {currentUser.user.role}</p>
		<p>Email: {currentUser.user.email}</p>
		{/* add more properties as needed */}
	//   </div>
	{/* );} */}
{/* export default Profile;  */}