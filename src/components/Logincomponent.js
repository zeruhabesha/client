 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../admin/action/employee_action";
import './style.css';
import Navcompnent from './Navcompnent';
import Footercomponent from './Footercomponent';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Logincomponent() {
 

const [password, setPassword] = useState("");
const[show,setShow] = useState("password") 
const [email, setEmail] = useState("")
const dispatch = useDispatch()

   const user = {password, email};

    const PostData = () => {
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      dispatch(loginUser(user))
    };
// const PostData = () => {
//     const user = { password, email }
//     sessionStorage.setItem("currentUser", JSON.stringify(user));
//     dispatch(loginUser(user))
// };

// const handleShow = ()=> {
//     if(show === "password"){
//         setShow("text")
//     } else {
//         setShow("password")
//     }
// }

return (
    <div >
       
       <div className='col-6' style={{margin:"auto"}}>
      <div className="card px-4 py-3" style={{margin:"13%"}}>
  
        <h4 style={{margin:"auto",marginBottom:"10px"}}>Beta Login</h4>
           
       
        <div className="row">
        <div className="col">
        <input
        type="text"
        placeholder="email"
        value={email}
       className='form-control st_input_class'
        onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
      
      </div>
      <br />
          <div className="row">
          <div className="col">
        <input
        type="password"
        placeholder="password"
        value={password} onChange={(e) => setPassword(e.target.value)}
        className='form-control st_input_class'
        />
        </div>
          </div>



          <br></br>
                <button className='btn btn-success mb-4 mt-2 st_input_class' onClick={() => PostData()}>Login</button>
                </div>
                <br />
           
        </div>
    </div>
   
);


    }

export default Logincomponent;