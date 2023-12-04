
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import{useState,useEffect,useRef} from 'react';
import axios from 'axios';
import {useParams,useNavigate} from 'react-router-dom'//import { useNavigate } from 'react-router-dom';
import { googleAuth, registerUser } from '../../apis/auth'
import { toast } from 'react-toastify';
import { BsEmojiLaughing, BsEmojiExpressionless } from "react-icons/bs"


const AddEmployee = ({ addemployee, handleAddEmpClose }) => {
   


    
    const [galuak, setGaluak] = useState([])
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("userInformation"))
        if(user){
        setGaluak(user)   
        }
          },[])
    // useEffect(() => {
    //   const user = JSON.parse(localStorage.getItem("userInformation"))
    //   if (user) {
    //     setGaluak(user)
    //   } else {
    //     console.log("error")
    //   }
    // }, [])
    
    // console.log(galuak)
    // console.log(galuak.oid)
    
    const [selectedOption, setSelectedOption] = useState("")

    const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      oid: "",
      email: "",
      password: "",
      mobile: "",
      username: "",
      profilePic: "",
      role: "employee"
    })

    const [isLoading, setIsLoading] = useState(false)
const [showPass, setShowPass] = useState(false)
const navigate = useNavigate()

const handleOnChange = (e) => {
  setFormData({ ...formData, oid: galuak.oid, gender: selectedOption, [e.target.name]: e.target.value })
}

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (formData.email.includes("@") && formData.password.length > 6 ) {
          const { data } = await registerUser(formData) || {};
          if (data) {
         
            toast.success("Succesfully Registered😍")
            setIsLoading(false)
            navigate("/employee")
            // window.location.href = "/chats"
      
      
          }
          else {
            setIsLoading(false)
            toast.error("user Already Available!")
          }
        }
        else {
          setIsLoading(false)
          toast.warning("Provide passworrd >6!")
          setFormData({ ...formData, password: "" })
        }
      
      }

      const fileInputRef = useRef(null);

      const [progress1, setProgress1] = useState(0);

      const handleNext = () => {
        setProgress1(progress1 + 100);
      };
    
      const handlePrevious = () => {
        setProgress1(progress1 - 100);
      };
    return (
        <div>
           <Modal
        show={addemployee}
       onHide={handleAddEmpClose}
        backdrop="static"
        keyboard={false}
        className="modal"
       
        style={{display: `flex`,justifyContent: `center`, alignItems: `center`}}
      >
<Modal.Header closeButton className="custom-modal-header">
  <Modal.Title>
    <div className="container9">
      <div className="box9">
        <div className="title9">
          <span className="block9"></span>
          <h1>Add<span></span></h1>
        </div>
        <div className="role9">
          <div className="block9"></div>
          <p>Employee</p>
        </div>
      </div>
    </div>
  </Modal.Title>
</Modal.Header>
        <Modal.Body>
          <br/>
        <div>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: `${progress1}%` }} aria-valuenow={progress1} aria-valuemin="0" aria-valuemax="100">{progress1}%</div>
      </div>
<br/>
       
         <form onSubmit={handleOnSubmit}>
     
         {progress1 === 0 && (
  <div className="element">
  
    <div className="row1">   {/* <label for="EID">EID</label> */}
      <span> <input
        type="text"
        className="gate"
        id="firstname"
        style={{ display: "inline" }}
        onChange={handleOnChange}  name="firstname" placeholder='First Name'
        value={formData.firstname}
       required /><label for="firstname">First-Name</label></span>
</div>
      {/* <div id="anim" style={{ display: "inline-block" }}>
        <span className="tooltip4" data-tooltip="username must consist of 29 symbols.">
          ?
        </span>
      </div> */}
    

    <div className="row1">
            {/* <label for="FullName">Full Name</label> */}
      <span> <input
        type="text"
        className="gate"
        id="lastname"
        name="lastname"
        onChange={handleOnChange}  
        style={{ display: "inline" }}
        value={formData.lastname}
        placeholder="Enter Last Name"
      /><label for="lastname">Last-Name</label></span>
    </div>

    <div className="row1">
          <span>  <input
        type="email"
        className="gate"
        id="Email"
        name="email"
        onChange={handleOnChange}  
        value={formData.email}
        placeholder="Enter Email"
        style={{ display: "inline" }}
      /><label for="Email">Email</label></span>

    </div>
 
  <span class="form-group">
    <label for="Gender">Gender</label>
    <span className="col" style={{ display:"flex" }}>
           <span className="radio" >
          <label>
            <input
              type="radio"
              value="Male"
              name='gender'
              checked={selectedOption === "Male"}
              onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Male
          </label>
        </span>
        <span className="radio" style={{ marginLeft:"15px" }}>
          <label>
            <input
              type="radio"
              value="Female"
              name='gender'
              checked={selectedOption === "Female"}
              onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Female
          </label>
        </span>
           </span>  
             </span>
             <div className="row1">
                  {/* <label for="Phone">Phone-Number</label> */}
    <span> <input type="text" class="gate" id="Phone" 
 style={{display:`inline`}}
 name='mobile'
 onChange={handleOnChange}  
        value={formData.mobile}
     placeholder="Enter Phone-Number"/>
        <label for="Phone">Phone</label></span>
         {/* <div id="anim" style={{display:`inline-block`}}>
    <span class="tooltip4" data-tooltip="username must consist of 29 symbols.">?</span>
    </div> */}

  </div><br/>
  {/* <button class="btn btn-secondary animation-on-hover" onClick={handlePrevious}>Previous</button> */}
          <button class="btn btn-secondary animation-on-hover" style={{float:`right`}} onClick={handleNext}>Next</button>
          <br/> 
          </div>
         
      )}

{progress1 === 100 && (
       <div className="element">

<div className="row1">
          <span>
    <input type="text" class="gate" id="User"  
   style={{display:`inline`}}
   onChange={handleOnChange}  
   value={formData.username}
   name='username'
    placeholder="Enter User-Name"/>
    <label for="User">User-Name</label></span>
  </div>
  <div className="row1">
  <div className='relative flex flex-col gap-y-3'>
  <span>  <input onChange={handleOnChange} className='gate bg-[#F5F5F5] h-[50px] pl-8 text-[#000000] w-[100%] sm:w-[96.3%]' type={showPass ? "text" : "password"} name="password" placeholder="Password" value={formData.password} required />
  <label for="User">Password</label></span>
            {/* <button onCli type="button">
              <BsEmojiExpressionless className='text-[#fff] absolute top-3 right-6 w-[30px] h-[25px]' />
            </button> */}
            {
              !showPass ? <button type='button'><BsEmojiLaughing onClick={() => setShowPass(!showPass)} className='text-[#000000] absolute top-3 right-4 sm:right-6 w-[30px] h-[25px]' /></button> : <button type='button'> <BsEmojiExpressionless onClick={() => setShowPass(!showPass)} className='text-[#fff] absolute top-3 right-4 sm:right-6 w-[30px] h-[25px]' /></button>
            }
          </div>
    </div>



          <div className="row1">
          <span>
    <input type="text" class="gate" id="role" 
   style={{display:`inline`}}
   onChange={handleOnChange}  
   name='role'
        value={formData.role}
    placeholder="Role"/>
           <label for="role">User-Name</label></span>
               </div>

                 <div class="form-group">
            <label for="recipient-file" class="col-form-label">Photo:</label>
            <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>
          </div>
 <br/>
          <button class="btn btn-secondary animation-on-hover" onClick={handlePrevious}>Previous</button>
          <button style={{float:`right`}} className='btn btn-success' onClick={handleAddEmpClose} type='submit'>
            <div style={{ display: isLoading ? "" : "none" }} className='absolute -top-[53px] left-[29.5%] sm:-top-[53px] sm:left-[87px]'>

              <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_h9kds1my.json" background="transparent" speed="1" style={{ width: "200px", height: "160px" }} loop autoplay></lottie-player>
            </div>
            <p style={{ display: isLoading ? "none" : "block", marginBottom: `0rem`, color:`white` }}>Regsiter</p>
          </button>
          <button type="button" onClick={handleAddEmpClose} class="btn btn-danger">Close</button>

          <br/> </div>
      )}
  {/* <div class="modal-footer">
        <button type="button" onClick={handleAddEmpClose} class="btn btn-danger">Close</button>
   </div> */}
   
</form></div>
</Modal.Body>

</Modal> 
        </div>
    )
}

export default AddEmployee


