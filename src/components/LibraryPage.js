import React from 'react'
import Footercomponent from './Footercomponent'
import Navcompnent from './Navcompnent';
import './LibraryCss.css'
import axios from "axios";
import { useState, useEffect } from "react";
import {Link}  from "react-router-dom";
import {useParams, useNavigate} from 'react-router-dom'
import { func } from "prop-types";
import { any } from "prop-types";
import FileBase64 from 'react-file-base64';

    function LibraryPage(){
        const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/account/list-library")
      .then((res) => {
        setApplicants(res.data);
      })
      .catch((err) => {
        console.log("Data not found" + err.message);
      }, []);
    //console.log(applicants);
  });


const [pdfs, setPdfs] = useState([]);
 const downloadPDF = (pdf) => {
                const linkSource = `data:application/pdf;base64,${pdf}`;
                const downloadLink = document.createElement("a");
                const fileName = "file.pdf";
            
                downloadLink.href = linkSource;
                downloadLink.download = fileName;
                downloadLink.click();
            }




let n=1;
  return (
    <div>
        <Navcompnent/>
        <div className="table-wraper">
      <h2>List of Applicants</h2>

      <table className="fl-table">
        <thead>
          <tr>
            <th>#</th>
            {/* <th>Num</th> */}
            <th>Name</th>
            <th>Department</th>
            <th>PDF</th><th>Title</th><th>Description</th>
            <th>Updated Date</th>
           
           
      
          </tr>
        </thead>

        
        <tbody>
          {/* here will display data in a table row */}
          {applicants.map((data, i) => (
            <tr key={data._id}>
              {/* <td>{data._id}</td> */}
              <td>{++i}</td>
              <td>{data.name}</td>
              <td>{data.department}</td>
              {/* <td>{data.pdf}</td> */}
              <td><button 
            //   src={`data:application/pdf,${FileBase64}`} 
            
                onClick={()=>{downloadPDF(data.pdf)}}
              >Download</button></td>
              <td>{data.title}</td>
              <td>{data.description}</td>
              <td>{data.date_updated}</td>
           
             </tr>
          ))}
           </tbody>
      </table>
    </div>
 
        <Footercomponent/>
    </div>
  )
}

export default LibraryPage;