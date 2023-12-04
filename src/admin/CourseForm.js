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

function CourseForm (){

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


  // const [file,setFile] = useState("")


  const[test,setTest]=useState("")
  const [show, setShow] = useState(false);
  const[selectedOption,setSelectedOption] = useState("")
  const [status, setStatus] = useState("Inactive");
  const kk = ["Active", "Inactive"];
  const [value,setValue] = useState("")
 


  const [end_date,setEndDate] = useState("")
  const [start_date,setStartDate] = useState("")
  const [course_code,setCourseCode] = useState("")
  const [course_name,setCourseName  ] = useState("")
  const [hh,setHh] = useState("")
  const [approve, setApprove] = useState("")
  const [schedule, setSchedule] = useState("")

  const registerUser = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/addcorse", user).then(res => {
            if(res.status ===200){
              alert('The data is add successfully')
              // Push to /
              window.location.href = "/course";
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

  };

  const handleRequest1 = ()=>{
    const user = {
      course_code,course_name,start_date, end_date,status,
      schedule
    }
     
   dispatch(registerUser(user))

   setCourseCode(""); setCourseName(""); setSchedule(""); setStatus("");
   setStartDate("");
   setEndDate ("");
  
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
      formData.append("course_code",course_code);
      formData.append("course_name",course_name);
      formData.append("schedule",schedule);
      formData.append("start_date", start_date);
      formData.append("end_date", end_date);
      formData.append("status", status);
    
   
      const res = await axios.post(
        "http://localhost:5000/addcorse",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

 

  const deletePost = (id) => {
    console.log(id);
  
    axios.delete(`http://localhost:5000/deletecorse/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  
  
  };


    

 

useEffect(() => {
  axios
    .get("http://localhost:5000/viewcorse")
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

fetch(`http://localhost:5000/viewcorse/${_id}`)
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

const handleEdit = (user) =>{
  setEditModal(true)
  setShow(false);
  setHh(user._id);
  setCourseCode(user.course_code); 
  setCourseName(user.course_name); 
  setStartDate(user.start_date);
  setEndDate (user.end_date);
  setSchedule(user.schedule);
  setStatus(user.status); 

};

const handleStatus = (hh) =>{
  setStatuss(true)
  setShow(false);
}
const handleAppClose = () => {
  setApprove(false);
  setShow(true);
}

const handleReqClose = () => {
  setEditModal(false);
  setShow(true);
}


const handleApprove = (hh) =>{
  setApprove(true);
  setShow(false);
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
    `http://localhost:5000/editcorse/${hh}`, formValues)
    .then(res => {
      if(res.status ===200){
        alert('A record successfuly updated')
       
        window.location.href = "/course";
      }else{
        Promise.reject()
      }
    })
    .catch(err => alert('Something went wrong! ' +err.message))
   
  
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
							<h4 class="text-blue h4"> Course</h4>
						</div> 
            <button type="button" class="btn btn-primary" onClick={() => handleAddStud()} >
              Add Course
            </button>
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap">
								<thead>
								<tr>
										<th class="table-plus datatable-nosort">Course-Code</th>
                    <th>Course-Name</th>
                    <th>Start-date</th>
										<th>End-date</th>
										<th>Schedule</th>
                    <th>Status</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
                {applicants.map((user, i) =>(
        <tr key={user._id}>
					<td>{user.course_code}</td>
          <td>{user.course_name}</td>
          <td>{user.start_date}</td>
          <td>{user.end_date}</td>
          <td>{user.schedule}</td>
          <td>{user.status}</td>
                    <td>
                    <button type="button" class="btn btn-primary"  onClick={() =>handleEdit(user)}>
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;
<button className='btn btn-danger' onClick={()=>{ window.confirm('Are you sure to delete this data', ) 
                                   && deletePost(hh)} } > <i className='fas fa-trash'></i></button>
&nbsp;&nbsp;&nbsp;
<button type="button" class="btn btn-secondary" onClick={()=> handleApprove(hh)}>
Activity
</button>&nbsp;&nbsp;&nbsp;              </td>
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
          <Modal.Title>Add Course </Modal.Title>
        </Modal.Header>
        <Modal.Body>

			<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
        <form>
            <div class="form-group">
    <label for="Course-Code">Course-Code</label>
    <input type="text" class="form-control" id="Course-Code"  onChange={(e)=>setCourseCode(e.target.value)} placeholder="Course-Code"/>
  </div>
  <div class="form-group">
    <label for="Course-Name">Course-Name</label>
    <input type="text" class="form-control" id="Course-Name" onChange={(e)=>setCourseName(e.target.value)} placeholder="Enter Course-Name"/>
  </div>
    
  <div class="form-group">
    <label for="Start">Start-Date</label>
    <input type="date" class="form-control" id="Start" onChange={(e)=>setStartDate(e.target.value)} placeholder="Enter Start Date"/>
  </div>
  <div class="form-group">
    <label for="End">End-Date</label>
    <input type="date" class="form-control" id="End"  onChange={(e)=>setEndDate(e.target.value)} placeholder="Enter End Date"/>
  </div>
  <div class="form-group">
    <label for="Schedule">Schedule</label>
    <input type="date" class="form-control" id="Schedule"  onChange={(e)=>setSchedule(e.target.value)} placeholder="Enter Schedule"/>
  </div>
      <input type="hidden" class="form-control" id="status" value={status} name="status"/>


  <div class="modal-footer">
  <Button variant="danger" onClick={handleStudClose}>
            Close
          </Button>        
          <button type="button" onClick={() => handleRequest1()} class="btn btn-success">Add Course</button>

   </div>
</form>
						</div>
					</div>
              
          </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>

  

<Modal
show={editModal}
onHide={handleReqClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Edit Course {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

           
<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
     <form onSubmit={handleSubmit}>
            <div class="form-group">
    <label for="Course-Code">Course-Code</label>
    <input type="text" class="form-control" id="Course-Code" defaultValue={course_code} name="course_code" onChange={handleChange} placeholder="Course-Code"/>
  </div>
  <div class="form-group">
    <label for="CourseName">Course-Name</label>
    <input type="text" class="form-control" id="CourseName" defaultValue={course_name} name="course_name" onChange={handleChange} placeholder="Enter Course-Name"/>
  </div>
    
  <div class="form-group">
    <label for="Start">Start-Date</label>
    <input type="date" class="form-control" id="Start" defaultValue={start_date} name="start_date" onChange={handleChange} placeholder="Enter Start Date"/>
  </div>
  <div class="form-group">
    <label for="End">End-Date</label>
    <input type="date" class="form-control" id="End"  defaultValue={end_date} name="end_date" onChange={handleChange} placeholder="Enter End Date"/>
  </div>
  <div class="form-group">
    <label for="Schedule">Schedule</label>
    <input type="date" class="form-control" id="Schedule"  defaultValue={schedule} name="schedule" onChange={handleChange} placeholder="Enter Schedule"/>
  </div>

      <div class="modal-footer">
        <Button variant="danger" onClick={handleReqClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-success" >Save changes</button>
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
  <Modal.Title>(Active / Inactive)  Course {hh} </Modal.Title>
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




</section>

</div>


  )
}

export default CourseForm