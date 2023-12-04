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

function LibraryForm (){

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
 


  const [name,setName] = useState("")
  const [department,setDepartment] = useState("")
  const [title,setTitle] = useState("")
  const [description1,setDescription1  ] = useState("")
    const [description,setDescription  ] = useState("")
  const [hh,setHh] = useState("")


  const registerUser = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/addlib", user).then(res => {
            if(res.status ===200){
              alert('The data is add successfully')
              // Push to /
              window.location.href = "/library";
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
      name,department,title,description
        
    }
     
   dispatch(registerUser(user))

  
}


  
  const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
  // console.log(currentUser);
  const addLib = async (e) => {
    e.preventDefault();
    try {

      const formData = new FormData();
 
      formData.append("name", name);
      formData.append("department", department);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("file", fileInputRef.current.files[0]);

      const res = await axios.post(
        "http://localhost:5000/addlib",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

 

  const deletePost = (id) => {
    console.log(id);
  
    axios.delete(`http://localhost:5000/deletelib/${hh}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  
  
  };

    

 

useEffect(() => {
  axios
    .get("http://localhost:5000/viewlib")
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

fetch(`http://localhost:5000/viewlib/${_id}`)
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
  setName(user.name); 
  setDepartment(user.department); 
  setDescription (user.description );
  setStatus(user.status); 

};

const handleStatus = (hh) =>{
  setStatuss(true)
  setShow(false);
}
const handleAppClose = () => {
  setDescription1(false);
  setShow(true);
}

const handleReqClose = () => {
  setEditModal(false);
  setShow(true);
}


const handledescription = (hh) =>{
  setDescription1(true);
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
    `http://localhost:5000/editlib/${hh}`, formValues)
    .then(res => {
      if(res.status ===200){
        alert('A record successfuly updated')
       
        window.location.href = "/library";
      }else{
        Promise.reject()
      }
    })
    .catch(err => alert('Something went wrong! ' +err.message))
   
  
}

const downloadFile = async (id) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/download/${id}`,
      { responseType: "blob" }
    );
    const blob = new Blob([res.data], { type: res.data.type });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
 link.download = ("filename=")[0];
    // link.download = res.headers["content-disposition"].split("filename=")[1];
    link.click();
  } catch (error) {
    console.log(error);
  }
};

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
							<h4 class="text-blue h4"> Library</h4>
						</div> 
            <button type="button" class="btn btn-primary" onClick={() => handleAddStud()} >
              Add Library
            </button>
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap">
								<thead>
								<tr>
										<th class="table-plus datatable-nosort">Name</th>
                    <th>Department</th>
                    <th>Title</th>
										<th>Description</th>
										<th>File</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
                {applicants.map((user, i) =>(
        <tr key={user._id}>
					<td>{user.name}</td>
          <td>{user.department}</td>
          <td>{user.title}</td>
          <td>{user.description}</td>
          <td>
          <button type="button" class="btn" onClick={() => downloadFile(user._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-download"></i>
                    </button>
            </td>
                    <td>
                    <button type="button" class="btn btn-primary"  onClick={() =>handleEdit(user)}>
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;
<button className='btn btn-danger' onClick={()=>{ window.confirm('Are you sure to delete this data', ) 
                                   && deletePost(user)} }  > <i className='fas fa-trash'></i></button>
&nbsp;&nbsp;&nbsp;
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
          <Modal.Title>Add Library </Modal.Title>
        </Modal.Header>
        <Modal.Body>

			<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
        <form>
            <div class="form-group">
    <label for="Name">Name</label>
    <input type="text" class="form-control" id="Name"  onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
  </div>
  <div class="form-group">
    <label for="Department">Department</label>
    <input type="text" class="form-control" id="Department" onChange={(e)=>setDepartment(e.target.value)} placeholder="Enter Department"/>
  </div>
    
  <div class="form-group">
    <label for="Title">Title</label>
    <input type="text" class="form-control" id="Title" onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Title"/>
  </div>
  <div class="form-group">
    <label for="Description">Description</label>
    <input type="text" class="form-control" id="Description"  onChange={(e)=>setDescription(e.target.value)} placeholder="Enter Description"/>
  </div>
  <div class="form-group">
    <label for="Request">File</label>
    <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>

  </div>


  <div class="modal-footer">
  <Button variant="danger" onClick={handleStudClose}>
            Close
          </Button>        
          <button type="button" onClick={addLib} class="btn btn-success">Add Library</button>
{/* () => handleRequest1() */}
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
  <Modal.Title>Edit Library {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

           
<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
     <form onSubmit={handleSubmit}>
            <div class="form-group">
    <label for="Library-Code">Name</label>
    <input type="text" class="form-control" id="Library-Code" defaultValue={name} name="name" onChange={handleChange} placeholder="Library-Code"/>
  </div>
  <div class="form-group">
    <label for="LibraryName">Title</label>
    <input type="text" class="form-control" id="LibraryName" defaultValue={title} name="title" onChange={handleChange} placeholder="Enter title"/>
  </div>
    
  <div class="form-group">
    <label for="description">Description</label>
    <input type="text" class="form-control" id="description" defaultValue={description} name="description" onChange={handleChange} placeholder="Enter Description"/>
  </div>
  <div class="form-group">
    <label for="department">Department</label>
    <input type="text" class="form-control" id="department"  defaultValue={department } name="department" onChange={handleChange} placeholder="Enter Department"/>
  </div>
  {/* <div class="form-group">
    <label for="file">  </label>
    <input type="file" class="form-control" id="file"  defaultValue={ file } name="file" onChange={handleChange}/>
  </div> */}

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
show={description1}
onHide={handleAppClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>(Active / Inactive)  Library {hh} </Modal.Title>
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

export default LibraryForm