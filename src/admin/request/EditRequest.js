// ModalComponent.js
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import{useState,useEffect,useRef} from 'react';
import axios from 'axios';


// It is a modal form that allows the user to edit a request. The form inputs are controlled by the useState hook, 
// and the form submission is handled by the handleSubmit function

const EditRequest23 = ({ 
editRequest, handleEditrequestClose ,hh,
location1,link1,end1,start1,priority1,
tendername1,tenderno1,oname1,eid1,oid1
}) => {

  const [formValues, setFormValues] = useState({})

  // define onChange to get form values
  // this is an event handler for updating the formValues state variable when the user types in the form inputs.
  // Each form input has an onChange event handler that calls the handleChange function to update the formValues state variable.

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setFormValues(values => ({...values, [name]: value}))
  }

  // this is an event handler for submitting the form. It makes a PUT request to a specific URL using the axios library, with the updated form values.
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(
      `http://localhost:8005/api/update/${hh}`, formValues)
      .then(res => {
        if(res.status ===200){
          alert('A record successfuly updated')
          // Push to /
          window.location.href = "/request";
        }else{
          Promise.reject()
        }
      })
      .catch(err => alert('Something went wrong! ' +err.message))
      // Push to /
      window.location.href = "/request";
  }


  return (
    <Modal show={editRequest} onHide={handleEditrequestClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Edit<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>Request</p>
        </div>
    </div>
</div>
</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {/* There are two buttons in the modal footer: "Close" and "Save changes". The "Close" button calls the handleShowEditrequest1 function to close the modal. 
        The "Save changes" button triggers the form submission by calling the handleSubmit function */}

      <form onSubmit={handleSubmit} method="POST">
           <div class="element">
            <div class="form-group">
    <label for="EID">RID</label>
    <input type="text" class="form-control" id="EID"  value="" onChange={handleChange} placeholder="RID"/>
  </div>
  <div class="form-group">
    <label for="FullName">EID</label>
    <input type="text" class="form-control"  name="eid"   defaultValue={eid1} id="FullName"  onChange={handleChange} placeholder="Enter EID"/>
  </div>
  <div class="form-group">
    <label for="text">Org-ID</label>
    <input type="text" class="form-control" id="Email" defaultValue={oid1} name='oid'  onChange={handleChange}  placeholder="Enter OID"/>
  </div>
  <div class="form-group">
    <label for="Gender">Org-Name</label>
    <input type="text" class="form-control" id="Gender" defaultValue={oname1} name='oname'  onChange={handleChange} placeholder="Enter Oname"/>
  </div>
  <div class="form-group">
    <label for="Phone">Tender-No</label>
    <input type="text" class="form-control" id="Phone"defaultValue={tenderno1} name='tenderno'  onChange={handleChange} placeholder="Enter Tender-No"/>
  </div>
  <div class="form-group">
    <label for="User">Tender-Name</label>
    <input type="text" class="form-control" id="User" defaultValue={tendername1} name="tendername" onChange={handleChange} placeholder="Enter Tender-Name"/>
  </div>
  <div class="form-group">
    <label for="Password">Priority</label>
    <input type="taxt" class="form-control" id="Password"  defaultValue={priority1} name='priority' onChange={handleChange}  placeholder="Priority"/>
  </div>
  <div class="form-group">
    <label for="Role">Start-Date</label>
    <input type="date" class="form-control" id="Role" defaultValue={start1} name='startdate'  onChange={handleChange} placeholder="Enter Start"/>
  </div>
  <div class="form-group">
    <label for="Photo">End-Date</label>
    <input type="date" class="form-control" id="Photo"  defaultValue={end1} name='enddate'onChange={handleChange}  placeholder="Enter End"/>
  </div>
  <div class="form-group">
    <label for="Password">Location</label>
    <input type="text" class="form-control" id="Password" defaultValue={location1} name='location' onChange={handleChange}  placeholder="Location"/>
  </div>
  <div class="form-group">
    <label for="Role">Link</label>
    <input type="text" class="form-control" id="Role" defaultValue={link1} name='link' onChange={handleChange} placeholder="Enter Link"/>
  </div>
  {/* <div class="form-group">
    <label for="Photo">File</label>
    <input type="file" class="form-control" id="Photo"  value="" onChange={handleChange} placeholder="Enter File"/>
  </div> */}
</div>

      <div class="modal-footer">
      <Button variant="danger" onClick={handleEditrequestClose}>
    Close
  </Button> 
          <button type="submit" class="btn btn-success">Save changes</button>
      </div> 
        </form>
      </Modal.Body>
     
    </Modal>
  );
};

export default EditRequest23;