import React,{useState,useEffect,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import {registerTender,UploadTask} from './action/employee_action';
import axios from 'axios';
import {Button,Modal} from "react-bootstrap"
import {useParams} from 'react-router-dom'
// import SidebarAdmin from './components/SidebarAdmin';
// import HomeAdmin from './components/HomeAdmin';
import './table.css';
import './table.js';
import { Link} from 'react-router-dom';
// import Footer from './components/Footer';
// import TenderCreate from './Request/TenderCreate';
// import Pagination from 'react-bootstrap/Pagination';
// import Navcomponent from './components/Navcomponent';
import Sidebar from './Sidebar';
// import Search from 'react-bootstrap/Search';

const InstructorsForm = () => {

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
  const [applicants, setApplicants] = useState([]);
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
  const [approve, setApprove] = useState(false);
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


  
  const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
  // console.log(currentUser);
  const AddStudent = async (e) => {
    e.preventDefault();
    try {
      // eid,rid,oid,oname,
      // tenderno,tendername,priority,
      //  start,end,location,link,file:fileInputRef.current.files[0],status
      const formData = new FormData();
      formData.append("first_name",first_name);
      formData.append("middle_name",middle_name);
      formData.append("last_name",last_name);
      formData.append("username",username);
      formData.append("email", email); 
      formData.append("password", password);
      formData.append("gender", selectedOption);
      formData.append("address", address);
            formData.append("dob", dob);
            formData.append("phone", phone);
            formData.append("department", department);
 
      formData.append("class_assigned", class_assigned);
      formData.append("role", role);
            formData.append("start_date", start_date);
      formData.append("end_date", end_date);
           formData.append("status", status);
      formData.append("photo", fileInputRef.current.files[0]);
    
   
      const res = await axios.post(
        "http://localhost:5000/addacc",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

    
  useEffect(() =>{
    // string formatting: template literals are enclosed in backticks
    axios.get(`http://localhost:5000/viewstud1`)
          .then((res) =>{
            setEmployee(res.data);
          })
          .catch((err) =>{
            console.log("Error:" + err.message)
          });
  }, []);




const deletePost = (id) => {
  console.log(id);

  axios.delete(`http://localhost:5000/deleteaccount/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


};
const handleRequest = ()=> {
  const obj = {
  
      hh,technical,service,blog,report,setting,others,
  
  }
 
 dispatch(UploadTask(obj))


}

    

 

useEffect(() => {
  axios
    .get("http://localhost:5000/viewinst")
    .then((res) => {
      setApplicants(res.data);
    })
    .catch((err) => {
      console.log("Data not found" + err.message);
      // console.log(currentUser);
    }, []);
  //console.log(applicants);
});



const showDetail = (_id) =>
{

fetch(`http://localhost:5000/viewinst/${_id}`)
.then(resposne=> resposne.json())
.then(res=>setApplicants(res))
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

const handleEdit = (hh) =>{
  setEditModal(true)
  setShow(false);

};

const handleStatus = (hh) =>{
  setStatuss(true)
  setShow(false);
}
const handleAppClose = () => {
  setApprove(false);
  setShow(true);
}
const handleAppClose1 = () => {
  setPrivilage(false);
  setShow(true);
}
const handleReqClose = () => {
  setEditModal(false);
  setShow(true);
}

const handleMoreClose = () => {
  setMore(false);
  setShow(true);
}
const handleTendClose = () => {
  setTender(false);
  setShow(true);
}
const handleTendAddClose = () => {
  setTenderAdd(false);
  setTender(true);
}
const handleOrgClose = () => {
  setOrganization(false);
  setTender(true);
}
const handleTendMoreClose = () => {
  setTenderMore(false);
  setTender(true);
}
const handleEditOrgClose = () => {
  setEditOrg(false);
  setOrganization(true);
}
const handleOrganization = () => {
  setOrganization(true);
  setTender(false);
}
const handleEditOrg = () => {
  setEditOrg(true);
  setOrganization(false);
}
const handleApprove = (hh) =>{
  setApprove(true);
  setShow(false);
}


const handleTenderEdit = () =>{
  setTendEdit(true);
  setTender(false);
}


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
                  {/* <i ></i> */}
                  </button>
         <div class="search-box">
           <i class="uil uil-search"></i>
           <input type="text" placeholder="Search here..." />
         </div>
 
       </div>
 
       <div class="dash-content">
						<div class="pd-20">
							<h4 class="text-blue h4">Instructors</h4>
            
						</div> 
            <button type="button" class="btn btn-primary" onClick={() => handleAddStud()} >
  Add Instructors
</button>
{/* <h1>Hello, {user.username}</h1>
          <h2>Your email is {user.email}</h2> */}
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap"
							>
								<thead>
								<tr>
										<th class="table-plus datatable-nosort">Photo</th>
                    <th>SID</th>
                    <th>Full Name</th>
										<th>Email</th>
										<th>User Name</th>
										<th>Role</th>
                    <th>Status</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
                {applicants.map((user, i) =>(
        <tr key={user._id}>
             <td class="table-plus">
          <img src="vendors/images/photo4.jpg" class="border-radius-100 shadow" width="40" height="40" alt=""/>
            </td>
					<td>{user.Id_no}</td>
          <td>{user.first_name}{user.middle_name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>{user.status}</td>
									
                    <td>
 <button class="btn btn-primary"   onClick={() => handleShow(user)} ><i className="fa fa-plus"></i></button>
              </td>
</tr>  ))}
								</tbody>
							</table>
						</div>
					</div>


          <Modal
        show={addstud}
       onHide={handleStudClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Instructors </Modal.Title>
        </Modal.Header>
        <Modal.Body>

			<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
        <form>
            <div class="form-group">
    <label for="SID">SID</label>
    <input type="text" class="form-control" id="SID" onChange={(e)=>setSid(e.target.value)} placeholder="SID"/>
  </div>
  <div class="form-group">
    <label for="FirstName">First Name</label>
    <input type="text" class="form-control" id="FirstName" onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter First Name"/>
  </div>
    <div class="form-group">
    <label for="MiddleName">Middle Name</label>
    <input type="text" class="form-control" id="MiddleName" onChange={(e)=>setMiddleName(e.target.value)} placeholder="Enter Middle Name"/>
  </div>
  <div class="form-group">
    <label for="LastName">Last Name</label>
    <input type="text" class="form-control" id="LastName" onChange={(e)=>setLastName(e.target.value)} placeholder="Enter Last Name"/>
  </div>
    <div class="form-group">
    <label for="UserName">User Name</label>
    <input type="text" class="form-control" id="UserName" onChange={(e)=>setUserName(e.target.value)} placeholder="Enter User Name"/>
  </div>
  <div class="form-group">
    <label for="Email">Email</label>
    <input type="email" class="form-control" id="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
  </div>
    <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="Password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
  </div>
  <div class="form-group">
    <label for="Gender">Gender</label>
    <div className="col" style={{ display:"flex" }}>
           <div className="radio" >
          <label>
            <input type="radio" value="Male" checked={selectedOption === "Male"}  onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Male
          </label>
        </div>
        <div className="radio" style={{ marginLeft:"15px" }}>
          <label>
            <input type="radio" value="Female" checked={selectedOption === "Female"} onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Female
          </label>
        </div>
           </div>  
             </div>
  <div class="form-group">
    <label for="Phone">Phone-Number</label>
    <input type="text" class="form-control" id="Phone" onChange={e => setPhone(e.target.value)} placeholder="Enter Phone-Number"/>
  </div>
  <div class="form-group">
    <label for="Department">Department</label>
    <input type="text" class="form-control" id="Department" onChange={(e)=>setDepartment(e.target.value)} placeholder="Enter Department"/>
  </div>
    <div class="form-group">
    <label for="Address">Address</label>
    <input type="text" class="form-control" id="Address" onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Address"/>
  </div>

  <div class="form-group">
    <label for="CSchedule">Class-Assigned</label>
    <input type="text" class="form-control" id="CSchedule" onChange={(e)=>setClassAssigned(e.target.value)} placeholder="Enter Class Schedule"/>
  </div> 
  <div class="form-group">
    <label for="Start">Start-Date</label>
    <input type="date" class="form-control" id="Start" onChange={(e)=>setStartDate(e.target.value)} placeholder="Enter Start Date"/>
  </div>
  <div class="form-group">
    <label for="End">End-Date</label>
    <input type="date" class="form-control" id="End" onChange={(e)=>setEndDate(e.target.value)} placeholder="Enter End Date"/>
  </div>
  <div class="form-group">
    <label for="Role">Role</label>
    <select value={role} id="selectId"  class="form-control">
                  <option>  Instructors  </option>
      </select>  
      </div>
      <input type="hidden" class="form-control" id="status" value={status} name="status"/>

                 <div class="form-group">
            <label for="recipient-file" class="col-form-label">Photo:</label>
            <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>
          </div>
  

  <div class="modal-footer">
  <Button variant="danger" onClick={handleStudClose}>
            Close
          </Button>        
          <button type="button" onClick={() => handleRequest1()} class="btn btn-success">Add Student</button>

   </div>
</form>
						</div>
					</div>
              
          </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>


	





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
                    <button type="button" class="btn btn-primary"  onClick={() =>handleEdit(hh)}>
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;
<button className='btn btn-danger' onClick={()=>{ window.confirm('Are you sure to delete this data', ) 
                                   && deletePost(hh)} } > <i className='fas fa-trash'></i></button>
&nbsp;&nbsp;&nbsp;
<button type="button" class="btn btn-secondary" onClick={()=> handleApprove(hh)}>
Activity
</button>&nbsp;&nbsp;&nbsp;

<button type="button" class="btn btn-success" onClick={() =>handleStatus(hh)}>Status</button>


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
  <Modal.Title>Edit Instructor {hh} </Modal.Title>
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



<Modal
show={approve}
onHide={handleAppClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>(Active / Inactive) Instructors {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

  <form   onSubmit={handleSubmit}  >
            <div class="form-group">
    <label for="EID">Current Status</label>
    {/* <input type="text" defaultValue={status1} style={{backgroundColor:"teal" ,color:"white"}} readOnly  class="form-control" id="EID" placeholder="Active"/> */}
  </div> 
  <label for="EID">Action</label>

  <select  id="selectId"  class="form-control"   name='status'  onChange={handleChange}>
                 
                 {kk.map((item) => (
                 <option value={item} key={item}>
                   {" "}
                   {item}{" "}
                 </option>
               ))}
                </select> 
  <div class="modal-footer">
  <Button variant="danger" onClick={handleAppClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-success" >Change</button>
      </div>
  </form>
  {/* onClick={() => handleActivity()} */}
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>

<Modal
        show={tendermore}
       onHide={handleTendMoreClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>More For Tender</Modal.Title>
        </Modal.Header>
        <Modal.Body>

      PLC-β enzymatically cleaves the membrane phospholipid phosphoatidylinositol-4,5-bisphopshate (PIP2) into diacylglycerol (DAG) and inositol trisphosphate (IP3). 
      Both DAG and IP3 act as important second messengers. 
      DAG remains in the membrane where it recruits and activates protein kinase C.
      <br/><br/>
      <button type="button" class="btn btn-primary"  onClick={() =>handleTenderEdit()}>
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;
<button className='btn btn-danger' > <i className='fas fa-trash'></i></button>
&nbsp;&nbsp;&nbsp;
{/* onClick={() => deleteMore()} */}
      </Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleTendMoreClose}>
    Close
  </Button> 
 
</Modal.Footer>
</Modal>	



</section>

</div>

  )
}

export default InstructorsForm