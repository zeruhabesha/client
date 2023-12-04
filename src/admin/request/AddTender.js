// ModalComponent.js
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import{useState,useEffect,useRef} from 'react';
import axios from 'axios';

const AddTender = ({ 
  tenderadd ,rid1,handleTendAddClose,
oid1,eid1,oname1,
}) => {


  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [formData1, setFormData1] = useState({
    eid: eid1,rid:rid1,oname:oname1,oid: oid1,tenderno:'',tendername:'',priority:''
    ,start:'',end:'',address:'',city:'',country:'',assign:selectedOption,assign1:selectedOption1,
   bind:'',documentfee:'',region:'',category:'',projectmanager:'',description:'',
  });
  const [data24, setData24] = useState([]);
  const [data25, setData25] = useState([]);
  

  const [employee, setEmployee] = useState([]);
  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange1 = event => {
    setSelectedOption1(event.target.value);
  };

  const handleChange = (event) => {
    setFormData1({ ...formData1,assign1:selectedOption,assign:selectedOption, [event.target.name]: event.target.value });
  };
  const handleSubmit= async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8005/tenAdd', formData1);

      if (response.status === 200) {
        console.log('Registration successful!');
        // Reset the form after successful registration
        setFormData1({
          bind:'',documentfee:'',region:'',category:'',projectmanager:'',description:'',
        });
      } else {
        console.log('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const [progress2, setProgress2] = useState(0);


  const handleSubmit1 = async (e) => {
    e.preventDefault();
  
    // Create a new FormData object
    const formData = new FormData();
  
    // Append the file and other fields to the FormData object
    formData.append('eid', formData1.eid);
    formData.append('rid', formData1.rid);
    formData.append('oname', formData1.oname);
    formData.append('oid', formData1.oid);
    formData.append('tenderno', formData1.tenderno);
    formData.append('tendername', formData1.tendername);
    formData.append('priority', formData1.priority);
    formData.append('start', formData1.start);
    formData.append('end', formData1.end);
    formData.append('address', formData1.address);
    formData.append('city', formData1.city);
    formData.append('country', formData1.country);
    formData.append('assign', formData1.assign);
    formData.append('assign1', formData1.assign1);
    formData.append('bind', formData1.bind);
    formData.append('documentfee', formData1.documentfee);
    formData.append('region', formData1.region);
    formData.append('country', formData1.country);
    formData.append('projectmanager', formData1.projectmanager);
    formData.append('description', formData1.description);  


    const response = await axios.post('http://localhost:8005/tenAdd', formData1);
    console.log(response.data);
    console.log(formData)

  };

  const fetchData1 = async () => {
    try {
      const response = await axios.get(`http://localhost:8005/jemal?option=${selectedOption}`);
      setData24(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  const fetchData2 = async () => {
    try {
      const response = await axios.get(`http://localhost:8005/jemal?option=${selectedOption1}`);
      setData25(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (selectedOption) {
      fetchData1();
    }
  }, [selectedOption]);
  useEffect(() => {
    if (selectedOption1) {
      fetchData2();
    }
  }, [selectedOption1]);


  const handleNext2 = () => {
    setProgress2(progress2 + 25);
  };

  const handlePrevious2 = () => {
    setProgress2(progress2 - 25);
  };


  
  const [options, setOptions] = useState([]);
  
  const [galuak, setGaluak] = useState([])

  useEffect(()=>{
const user = JSON.parse(localStorage.getItem("userInformation"))
if(user){
setGaluak(user)   
}
  },[])
  useEffect(() =>{
    // string formatting: template literals are enclosed in backticks
    axios.get(`http://localhost:8005/findxx/${galuak.oid}`)
          .then((res) =>{
            setEmployee(res.data);
          })
          .catch((err) =>{
            console.log("Error:" + err.message)
          });
  }, [galuak.oid]);
  useEffect(() =>{
    // string formatting: template literals are enclosed in backticks
    axios.get(`http://localhost:8005/findxx/${galuak.oid}`)
          .then((res) =>{
            setOptions(res.data);
          })
          .catch((err) =>{
            console.log("Error:" + err.message)
          });
  }, [galuak.oid]);



  

  return (
    <Modal show={tenderadd} onHide={handleTendAddClose}>
      <Modal.Header closeButton>
        <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Add<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>Tender</p>
        </div>
    </div>
</div></Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: `${progress2}%` }} aria-valuenow={progress2} aria-valuemin="0" aria-valuemax="100">{progress2}%</div>
      </div>
<br/>
<form onSubmit={handleSubmit}>
        {progress2 === 0 && (
          <div>
 <div class="form-group">
    <label for="TID">TID</label>
    <input type="text" class="form-control" id="TID"  placeholder="TID"/>
  </div>
  <div class="form-group">
    <label for="FullName">RID</label>
    <input type="text"  name="rid" value={formData1.rid}
 class="form-control" id="FullName"  placeholder="Enter RID"/>
  </div>
  <div class="form-group">
    <label for="Email">Tender-No</label>
    <input type="text" name="tenderno" value={formData1.tenderno}  onChange={handleChange} class="form-control" id="Email"  placeholder="Enter Tender-No"/>
  </div>
  <div class="form-group">
    <label for="Gender">Org-ID</label>
   
    <input type="text" class="form-control"name="oid" value={formData1.oid}   onChange={handleChange} id="Gender"  placeholder="Enter Org-ID"/>
  </div>

 <br/>
 {/* <button class="btn btn-secondary animation-on-hover" onClick={handlePrevious2}>Previous</button>  */}
        <button class="btn btn-secondary animation-on-hover" style={{float:`right`}} onClick={handleNext2}>Next</button>
        <br/> </div>
    )}

{progress2 === 25 && (
      <div> 
        
  <div class="form-group">
    <label for="Phone">Org-Name</label>
    <input type="text" class="form-control"name="oname" value={formData1.oname}  onChange={handleChange} id="Phone"  placeholder="Enter Org-Name"/>
  </div>


  <div class="form-group">
    <label for="User">Address</label>
    <input type="text" class="form-control" id="User"name="address" value={formData1.address}  onChange={handleChange} placeholder="Enter Address"/>
  </div>
  <div class="form-group">
    <label for="Password">City</label>
    <input type="text" class="form-control" name="city" value={formData1.city}  onChange={handleChange} id="Password" placeholder="City"/>
  </div>
  <div class="form-group">
    <label for="Role">Country</label>
    <input type="text" class="form-control" name="country" value={formData1.country}  onChange={handleChange} id="Role"  placeholder="Enter Country"/>
  </div>
  <br/>
<button class="btn btn-secondary animation-on-hover" onClick={handlePrevious2}>Previous</button> 
          <button class="btn btn-secondary animation-on-hover" style={{float:`right`}} onClick={handleNext2}>Next</button>
          <br/> </div>
      )}

{progress2 === 50 && (
        <div>
 <div class="form-group">
  <label for="Photo">Assign-1</label>
  
    <select     class="form-control" value={selectedOption} onChange={handleOptionChange}>
    
        {employee.map(option => (
                  <option value={option.name}>{option.name}
               
          </option>
        ))}
      </select>
                 
                   </div>
                   
                   <div class="form-group"style={{marginLeft:"30px"}}>
    

                   {data24.map(option => (
                 <><h1>Email:{option.email}</h1>
                                   <h1>Empid: {option.empid}</h1>
                                   <h1>Address: {option.address}</h1>

                                  <h1>Username: {option.username}</h1>
                                  <h1>Phonno: {option.mobile}</h1>
                                  <h1>OrgId {option.oid}</h1>


                 <h1>{option.address}</h1></>
            
        ))}
  </div>
  <div class="form-group">
  <label for="Photo">Assign-2</label>
 
    <select     class="form-control" value={selectedOption1} onChange={handleOptionChange1}>
    
        {options.map(option => (
                  <option value={option.name}>{option.name}
               
          </option>
        ))}
      </select>
                 
                   </div>
                   
                   <div class="form-group"style={{marginLeft:"30px"}}>
    
                   {data25.map(option => (
                 <><h1>Email:{option.email}</h1>
                                   <h1>Empid: {option.empid}</h1>
                                   <h1>Address: {option.address}</h1>

                                  <h1>Username: {option.username}</h1>
                                  <h1>Phonno: {option.mobile}</h1>
                                  <h1>OrgId {option.oid}</h1>

                 <h1>{option.address}</h1></>
        ))}
  </div>

  <div class="form-group">
    <label for="Photo">Bid-Bind</label>
    <input type="text" class="form-control"  name="bind" value={formData1.bind}  onChange={handleChange} placeholder="Enter Bid-Bind"/>
  </div>
  <div class="form-group">
    <label for="Photo">Document-Fee</label>
    <input type="text" class="form-control" name="documentfee" value={formData1.documentfee}  onChange={handleChange}  placeholder="Enter Document-Fee"/>
  </div>
  <div class="form-group">
    <label for="Photo">Region</label>
    <input type="text" class="form-control"name="region" value={formData1.region}   onChange={handleChange} placeholder="Enter Region"/>
  </div>

  <br/>
 <button class="btn btn-secondary animation-on-hover" onClick={handlePrevious2}>Previous</button> 
          <button class="btn btn-secondary animation-on-hover" style={{float:`right`}} onClick={handleNext2}>Next</button>
          <br/> </div>
      )}

{progress2 === 75 && (
        <div>
  <div class="form-group">
    <label for="Photo">Category</label>
    <input type="text" class="form-control"name="country"  onChange={handleChange} value={formData1.country}  placeholder="Enter Category"/>
  </div>
  <div class="form-group">
    <label for="Photo">Project-Manager</label>
    <input type="text" class="form-control" name="projectmanager"  onChange={handleChange} value={formData1.projectmanager} placeholder="Enter Project-Manager"/>
  </div>

  
  <div class="form-group">
    <label for="Photo">Open-Date</label>
    <input type="date" class="form-control"name="start" value={formData1.start}  onChange={handleChange}  placeholder="Enter Open-Date"/>
  </div>

  <br/>
 <button class="btn btn-secondary animation-on-hover" onClick={handlePrevious2}>Previous</button> 
          <button class="btn btn-secondary animation-on-hover" style={{float:`right`}} onClick={handleNext2}>Next</button>
          <br/> </div>
      )}

{progress2 === 100 && (
        <div>
  <div class="form-group">
    <label for="Photo">Close-Date</label>
    <input type="date" class="form-control"name="end"  onChange={handleChange} value={formData1.end} placeholder="Enter Close-Date"/>
  </div>
  <div class="form-group">
    <label for="Photo">Description</label>
    <textarea type="text" class="form-control" name="description" value={formData1.description}  onChange={handleChange} id="Photo"  placeholder="Enter Description"/>
  </div> 
 <br/>
          <button class="btn btn-secondary animation-on-hover" onClick={handlePrevious2}>Previous</button>
          <button style={{float:`right`}} class="btn btn-success animation-on-hover" type="submit">Add Tender</button>
          <br/> 
   </div>    )}
     
</form>
</div> 
      </Modal.Body>
     
    </Modal>
  );
};

export default AddTender;