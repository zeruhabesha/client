// ModalComponent.js
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import{useState,useEffect,useRef} from 'react';
import axios from 'axios';

// Defining the ModalComponent functional component that takes two props: 
// showModal and handleCloseModal. 
// These props control the visibility of the modal and handle its close event, respectively.
// Inside the component, there are multiple state variables defined using the useState hook. These variables hold the values of various form inputs and the progress of the form submission.
// The useEffect hook is used to fetch user information from local storage and populate the galuak state variable. This effect runs only once when the component is mounted

const ModalComponent = ({ showModal, handleCloseModal }) => {
  const [rid,setRid] = useState("")

  const [progress1, setProgress1] = useState(0);
  const [galuak, setGaluak] = useState([])
  const [tenderno,setTenderno] = useState("")
  const[tendername,setTendername]=useState("")
  const [priority,setPriority] = useState("")
  const [start,setStart] = useState("")
  const [location,setLocation] = useState("")
  const [link,setLink] = useState("")
  const fileInputRef = useRef(null);

  const [end,setEnd] = useState("")
  const handleNext = () => {
    setProgress1(progress1 + 50);
  };

  const handlePrevious = () => {
    setProgress1(progress1 - 50);
  };
  useEffect(()=>{
const user = JSON.parse(localStorage.getItem("userInformation"))
if(user){
setGaluak(user)   
}
  },[])

  // The addCv function is an event handler for submitting the form. It creates a FormData object, appends the form inputs to it, and makes a POST request to a specific URL using the axios library
  
  const addCv = async (e) => {
    e.preventDefault();
    try {
      // eid,rid,oid,oname,
      // tenderno,tendername,priority,
      //  start,end,location,link,file:fileInputRef.current.files[0],status
      const formData = new FormData();
      formData.set("eid",galuak.empid);
      formData.set("oid", galuak.oid);
      formData.set("oname", galuak.organizationNAme);
      formData.append("tenderno", tenderno);
      formData.append("tendername", tendername);
      formData.append("priority", priority);
      formData.append("start", start);
      formData.append("end", end);
      formData.append("location", location);
     
      formData.append("file", fileInputRef.current.files[0]);
      formData.append("link",link);
      const res = await axios.post(
        "http://localhost:8005/api/request",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Add<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>Request</p>
        </div>
    </div>
</div></Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>
      <div className="progress">
      {/* The progress bar is dynamically updated based on the progress1 state variable */}
        <div className="progress-bar" role="progressbar" style={{ width: `${progress1}%` }} aria-valuenow={progress1} aria-valuemin="0" aria-valuemax="100">{progress1}%</div>
      </div>
 
      <br/>

      {/* There are two buttons at the bottom of each section. The "Previous" button is used to navigate to the previous section, and the "Next" button is used to navigate to the next section. The button click events are handled by the handlePrevious and handleNext functions */}
        <form>
        {progress1 === 0 && (
 <div className="element">
  
  <div className="row1">
  <span>
  <input type="text" class="gate" id="RID"  
   style={{display:`inline`}}
   value={rid} onChange={(e)=>setRid(e.target.value)} readOnly
   name='username'
    placeholder="RID"/>
    <label for="RID">RID</label></span>
  </div>

  <div className="row1">
  <span>
  <input type="text" class="gate" id="EID"  
   style={{display:`inline`}}
   value={galuak.empid} readOnly
   name='username'
    placeholder="EID"/>
    <label for="EID">EID</label></span>
  </div>  
  
  <div className="row1">
  <span>
  <input type="text" class="gate" id="OrgID"  
   style={{display:`inline`}}
   value={galuak.oid} readOnly
   name='username'
    placeholder="OrgID"/>
    <label for="OrgID">Org ID</label></span>
  </div>

  <div className="row1">
  <span>
  <input type="text" class="gate" id="OrgName"  
   style={{display:`inline`}}
   value={galuak.organizationNAme} readOnly
   name='username'
    placeholder="OrgName"/>
    <label for="OrgName">Org Name</label></span>
  </div>
<br/>
        <button class="btn btn-secondary animation-on-hover" style={{float:`right`}} onClick={handleNext}>Next</button>
          <br/> </div> 
      )}
           {progress1 === 50 && (
   <div className="element">

<div className="row1">
  <span>
  <input type="text" class="gate" id="TenderNo"  
   style={{display:`inline`}}
   value={tenderno} onChange={(e)=>setTenderno(e.target.value)}
   name='username'
    placeholder="TenderNo"/>
    <label for="TenderNo">Tender No</label></span>
  </div>
<div className="row1">
  <span>
  <input type="text" class="gate" id="TenderName"  
   style={{display:`inline`}}
   value={tendername} onChange={(e)=>setTendername(e.target.value)}
   name='username'
    placeholder="Tender Name"/>
    <label for="TenderName">Tender Name</label></span>
  </div>
<div className="row1">
  <span>
  <input type="text" class="gate" id="Priority"  
   style={{display:`inline`}}
   value={priority} onChange={(e)=>setPriority(e.target.value)}
   name='username'
    placeholder="Enter Priority"/>
    <label for="Priority">Priority</label></span>
  </div>
<div className="row1">
  <span>
  <input type="date" class="gate" id="StartDate"  
   style={{display:`inline`}}
   value={start} onChange={(e)=>setStart(e.target.value)}
   name='username'
    placeholder="StartDate"/>
    <label for="StartDate">Start-Date</label></span>
  </div>
  <br/>
  <button class="btn btn-secondary animation-on-hover" onClick={handlePrevious}>Previous</button>
          <button class="btn btn-secondary animation-on-hover" style={{float:`right`}} onClick={handleNext}>Next</button>
          <br/> </div> 
      )}
  {progress1 === 100 && (
        <div className="element">

<div className="row1">
  <span>
  <input type="date" class="gate" id="EndDate"  
   style={{display:`inline`}}
   value={end} onChange={(e)=>setEnd(e.target.value)}
   name='username'
    placeholder="EndDate"/>
    <label for="EndDate">End-Date</label></span>
  </div>
<div className="row1">
  <span>
  <input type="date" class="gate" id="Location"  
   style={{display:`inline`}}
   value={location} onChange={(e)=>setLocation(e.target.value)}
   name='username'
    placeholder="Location"/>
    <label for="Location">Location</label></span>
  </div>

<div className="row1">
  <span>
  <input type="text" class="gate" id="Link"  
   style={{display:`inline`}}
   value={link} onChange={(e)=>setLink(e.target.value)}
   name='username'
    placeholder="Link"/>
    <label for="Link">Link</label></span>
  </div>

  <div class="form-group">
    <label for="Request">File</label>
    <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>

  </div>
  <button class="btn btn-secondary animation-on-hover" onClick={handlePrevious}>Previous</button>
  <button type="button" class="btn btn-success" style={{float:`right`}} onClick={addCv}>Add-Request</button>
  <br/> </div> 

      )}
</form></div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;