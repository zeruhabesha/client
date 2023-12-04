import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import {Button,Modal} from "react-bootstrap"
import {Link ,useHistory} from 'react-router-dom'
//import {makeStuAttendance,getStudentByClass,uploadStuMark} from "../Attendance/actions/tender_action"
import { UploadTask,uploadStuMark } from '../../actions/tender_action';
const Task = ({students,sClass,mark}) => {

    const[currentDate,setCurrentDate]=useState("")
    //const[userItem,setUserItem]=useState("mahen")
    const[uName,setuName]=useState("")
    const [show, setShow] = useState(false);
   const[ll,setLL] = useState("");
    const[name,setName] = useState("")
    const[file,setFile] = useState("")
    const[cv,setCv] = useState("")
    const[exprience,setExprience] = useState("")
    const[audit,setAudit] = useState("")
    const[license,setLicence] = useState("")
    const[bank,setBank] = useState("")
    const[catalog,setCatalog] = useState("")
    const[complince,setComplience] = useState("")
    const[authorization,setAuthorization] = useState("")
    const[company,setCompany] = useState("")
    const[cad,setCad] = useState("")
    const[methodology,setMethodology] = useState("")
    const[financial,setFinancial] = useState("")
    const[traling,setTraling] = useState("")
    const[qotation,setQotation] = useState("")
    const[documentation,setDocumention] = useState("")

    const {id} = useParams();

  

    const dispatch=useDispatch()
 
    console.log(id)


const handleRequest = ()=> {
    const obj = {
        id,authorization,bank,audit,complince,company,catalog,exprience,license,cv,qotation,documentation,methodology,cad,financial,traling
    }
    var another = {
        clsName: sClass
    }
   dispatch(UploadTask(obj))
 

}


 


    return (
        <div>
        
        <>
        <div class="custom-control custom-checkbox">
  <input type="checkbox"
   class="custom-control-input"
   value={1}
   checked={cv}
   onChange={(e)=>setCv(e.target.value)}
    id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2" >Add Cv </label>

</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
    value={1}
    checked={authorization}
    onChange={(e)=>setAuthorization(e.target.value)}
   class="custom-control-input" id="defaultChecked2" />
 <label class="custom-control-label" for="defaultChecked2">Add Authorization</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
    value={1}
    checked={cad}
    onChange={(e)=>setCad(e.target.value)}
   class="custom-control-input" id="defaultChecked2" />
 <label class="custom-control-label" for="defaultChecked2">Add Cad</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
    value={1}
    checked={exprience}
    onChange={(e)=>setExprience(e.target.value)}
   class="custom-control-input" id="defaultChecked2" />
 <label class="custom-control-label" for="defaultChecked2">Add Exprience</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
    value={1}
    checked={traling}
    onChange={(e)=>setTraling(e.target.value)} class="custom-control-input" id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2">Add Traling</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
    value={1}
    checked={methodology}
    onChange={(e)=>setMethodology(e.target.value)} class="custom-control-input" id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2">Add Methodology</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
    value={1}
    checked={qotation}
    onChange={(e)=>setQotation(e.target.value)} class="custom-control-input" id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2">Add Quotation</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
    value={1}
    checked={financial}
    onChange={(e)=>setFinancial(e.target.value)} class="custom-control-input" id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2">Add Financial</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
    value={1}
    checked={documentation}
    onChange={(e)=>setDocumention(e.target.value)} class="custom-control-input" id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2">Add Documentation</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
    value={1}
    checked={company}
 
    
    onChange={(e)=>setCompany(e.target.value)}
  class="custom-control-input" id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2">Company Profile</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
    value={1}
    checked={license}
    onChange={(e)=>setLicence(e.target.value)}
  class="custom-control-input" id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2">Add Licence</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
    value={1}
    checked={catalog}
    onChange={(e)=>setCatalog(e.target.value)}
  class="custom-control-input" id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2">Add Catalog</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
    value={1}
 
    checked={complince}
    onChange={(e)=>setComplience(e.target.value)}
  class="custom-control-input" id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2">Complince Sheet</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
     value={1}
    
     checked={audit}
     onChange={(e)=>setAudit(e.target.value)}
  class="custom-control-input" id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2">Add AUdit</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox"
     value={1}
  checked={bank}
  
     onChange={(e)=>setBank(e.target.value)}
  class="custom-control-input" id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2">Add Bank Statment</label>
</div>
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="defaultChecked2" />
  <label class="custom-control-label" for="defaultChecked2">Default checked</label>
</div>
        {/* <div className="row">
            <div className="col">
            <input
            type="text"
            placeholder="Semester"
            value={name}
           className='form-control mod_input_class'
            onChange={(e)=>setName(e.target.value)}
            />
            </div>
          
          </div>
          <br />
          <div className="row">
            <div className="col">
            <input
            type="file"
            placeholder="course Name"
            value={file}
           className='form-control mod_input_class'
            onChange={(e)=>setFile(e.target.value)}
            />
            </div>
          
          </div> */}
          <br />
          

          <button className='btn btn-success mb-4 mt-2' onClick={() => handleRequest()}>Add TAsk</button>
      
        </>
        </div>
    );
};

export default Task;