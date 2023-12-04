import react , { useEffect, useState } from "react";
import { Navlink } from 'react-router-dom';
import "./Admins.css";
import neba from "./neba.jpg";
// import logo from "./logo.jpg";
import './adminstyle.css';
import axios from "axios";
// import { useHistory } from 'react-router';
import { useNavigate  } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    // const logout = async () => {
    //     try{
    //         const res = await fetch('./logout', {
    //             method : "GET",
    //             headers : {
    //                 Accept : "application/json",
    //                 "Content-Type" : "application/json"
    //             },
    //             credentials : "include"
    //         });
    //         if(res.status === 401 || !res){
    //             window.alert("Please logout later");
    //         } else{ 
    //             history.push('/');
    //             window.location.reload()
    //         }
    //     } catch (error) {
    //            console.log(error)
    //     }
       
    // } 
    const logout = async () => {
     axios.get("http://localhost:5000/logout")
    .then((res=>{
     navigate('/login')
    }))
   .catch((err)=>{
     console.log('error to delete data:'+err.message);
   });
    }
    useEffect(() => {
            logout();
        }, []);
  return (
    <div>
      

      
    </div>
  );
}

export default Logout;
