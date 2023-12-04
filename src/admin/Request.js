
import React,{useState,useEffect,useRef} from 'react';
import { Dropdown, DropdownButton , Form} from "react-bootstrap";
import axios from 'axios';
import {Button,FormLabel,Modal} from "react-bootstrap"
import {useParams,useNavigate} from 'react-router-dom'
import Sidebar from './Sidebar';
import './table.css';
import './table.js';
import { FiChevronDown, FiChevronRight, FiFilter, FiChevronLeft, FiChevronUp } from 'react-icons/fi';
import { CSVLink } from 'react-csv';
import './Tables.css'; // Import custom CSS for styling
import './PrintTable.css';
import Request1 from "./images/Request.png";
import Footeradmin from './Footeradmin';
import Navadmin from './Navadmin';
import ModalComponent from './request/RequestModal';
import EditRequest23 from './request/EditRequest';
import AddTender from './request/AddTender';
const Request = () => {

  const [showModal, setShowModal] = useState(false);
  const [tenderadd, setTenderAdd] = useState(false);
  const [editRequest, setEditRequest] = useState(false);
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // setShow(true);
    
  };
  const handleShowEditrequest = () => {
    setEditRequest(true);
  };

  const handleEditrequestClose = () => {
    setEditRequest(false);
    // setShow(true);
  };
  const handleTenderAdd11 = () =>{
    setTenderAdd(true);
    setShow(false);
  }
  const handleTendAddClose = () => {
    setTenderAdd(false);
    setShow(true);
  }

  const kk = ["Approve","DisApprove"];
  const [eid1,setEid1] = useState("")
  const [rid1,setRid1] = useState("")
  const [oid1,setOid1] = useState("")
  const[oname1,setOname1]=useState("")
  const[tendername1,setTendername1]=useState("")
  const [priority1,setPriority1] = useState("")
  const [start1,setStart1] = useState("")
  const [end1,setEnd1] = useState("")
  const [tenderno1,setTenderno1] = useState("")
  const [location1,setLocation1] = useState("")
  const [link1,setLink1] = useState("")
  const [file1,setFile1] = useState("")
  const [status1, setStatus1] = useState(false);
  const [hh,setHh] = useState("")
  const [approve, setApprove] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setShow(true)
    setHh(user._id)
    setRid1(user.rid)
    setEid1(user.eid)
    setOid1(user.oid)
    setOname1(user.oname)
    setTenderno1(user.tenderno)
    setTendername1(user.tendername)
    setPriority1(user.priority)
    setStart1(user.start)
    setEnd1(user.end)
    setLocation1(user.location)
    setLink1(user.link)
    setFile1(user.file)
    setStatus1(user.status)
  };

  const [galuak, setGaluak] = useState([])

  useEffect(()=>{
const user = JSON.parse(localStorage.getItem("userInformation"))
if(user){
setGaluak(user)   
}
  },[])

  const navigate = useNavigate()
    const deletePost = (id) => {
      console.log(id);
    
      axios.delete(`http://localhost:8005/api/delete/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    
   
    };
const handleAppClose = () => {
  setApprove(false);
  setShow(true);
}
const handleApprove = (hh) =>{
  setApprove(true);
  setShow(false);
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
useEffect(() => {
  if (galuak.employee === "inactive" ) {
    navigate("/request");
  }
}, [galuak]);
const toggleSidebar = () => {
  const sidebar = document.querySelector("nav");
  sidebar.classList.toggle("close");
  localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
}; 
const [data, setData] = useState([]);
const [sortField, setSortField] = useState('');
const [sortOrder, setSortOrder] = useState('');
const [searchQuery, setSearchQuery] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
const [expandedRow, setExpandedRow] = useState(null); // Track the expanded row
const [filteredData, setFilteredData] = useState([]);
const [columns, setColumns] = useState({
  eid: true, 
  rid: true, 
  oname: true,
  oid: true,
  tenderno: true,
  tendername: true,
  priority: true,
  startdate: true,
  status: true,
});

useEffect(() => {
  fetchData();
}, [sortField, sortOrder, searchQuery, currentPage,galuak.oid]);
const fetchData = async () => {
  try {
    if (galuak.role === 'Super') {
    const response = await axios.get(`http://localhost:8005/requests`, {
      params: {
        sortField,
        sortOrder,
        searchQuery,
        page: currentPage,
      },
    });

    setData(response.data.data);
    setTotalPages(response.data.totalPages);
  }
  else{
    const response = await axios.get(`http://localhost:8005/requests/${galuak.oid}`, {//
      params: {
        sortField,
        sortOrder,
        searchQuery,
        page: currentPage,
      },
    });

    setData(response.data.data);
    setTotalPages(response.data.totalPages);

  }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const handleSort = (field) => {
  setSortField(field);
  setSortOrder(sortField === field && sortOrder === 'asc' ? 'desc' : 'asc');
};
const handleSearch = (query) => {
  setSearchQuery(query);
  setCurrentPage(1); // Reset to the first page when performing a new search
   // Filter data based on searchQuery
  const filteredResults = data.filter(
    (item) =>
    (item.eid?.toLowerCase().includes(query.toLowerCase()) ||
    item.rid?.toLowerCase().includes(query.toLowerCase())||
    item.oid?.toLowerCase().includes(query.toLowerCase())||
    item.oname?.toLowerCase().includes(query.toLowerCase())||
    item.tenderno?.toLowerCase().includes(query.toLowerCase())||
    item.tendername?.toLowerCase().includes(query.toLowerCase())||
    item.priority?.toLowerCase().includes(query.toLowerCase())||
    item.location?.toLowerCase().includes(query.toLowerCase())||
    item.link?.toLowerCase().includes(query.toLowerCase())||
    item.status?.toLowerCase().includes(query.toLowerCase())||
    item.date?.toLowerCase().includes(query.toLowerCase()))
  );
  setFilteredData(filteredResults);
};
const handlePageChange = (page) => {
  setCurrentPage(page);
};

const handleRowToggle = (id) => {
  // Toggle the expanded row based on the selected column (id)
  setExpandedRow(expandedRow === id ? null : id);
};

const getRowToggleIcon = (id) => {
  return expandedRow === id ? <FiChevronDown /> : <FiChevronRight />;
};

const displayedData = searchQuery ? filteredData : data;
const getCSVData = () => {
  const csvData = data.map((item) => ({
    eid: item.eid,
    rid: item.rid,
    oid: item.oid,
    oname: item.oname,
    tenderno: item.tenderno,
    tendername: item.tendername,
    priority: item.priority,
    startdate: item.startdate,
    enddate: item.enddate,
    location: item.location,
    link: item.link,
    status: item.status,
    date: item.date,
  }));
  return csvData;
};

const handlePrint = () => {
  window.print();
};

// Function to toggle column visibility
const toggleColumnVisibility = (column) => {
  setColumns({
    ...columns,
    [column]: !columns[column],
  });
};
const handleNextPage = () => {
  setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
};

const handlePrevPage = () => {
  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};



const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const toggleDropdown = () => {
  console.log('Toggle dropdown clicked');
  setIsDropdownOpen(!isDropdownOpen);
};
const [scrolled, setScrolled] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const percentScrolled = (scrolled / (document.body.clientHeight - window.innerHeight)) * 100;

  const [progress2, setProgress2] = useState(0);

  const handleNext2 = () => {
    setProgress2(progress2 + 25);
  };

  const handlePrevious2 = () => {
    setProgress2(progress2 - 25);
  };

return (


    
 <div>

<Sidebar/>
<section class="dashboard">   

<div class="top" style={{top:`10px`,dispaly:`inline`}}>
<button class="uil uil-bars sidebar-toggle" onClick={toggleSidebar} style={{dispaly:`inline`}}></button>
<Navadmin/>

</div>
<div class="scroll-line" style={{ width: percentScrolled + '%', zIndex:'3'}} />
<div class="dash-content">

<div class="main-container">


<div class="xs-pd-20-10 pd-ltr-20">
<br/>
<img src={Request1} class="img8"alt="employee" style={{width:`30%`}}/>
<br/> <br/> 
<button variant="primary" class="button8" style={{float:`right`}} onClick={handleShowModal}>
  Add Request
</button>
<div>

      <ModalComponent showModal={showModal} handleCloseModal={handleCloseModal} />
    </div>
  

<div>
         <div className="data-table-container">
         <div className="row" >
      <div className="col-md-6">
        <div className="dt-buttons btn-group flex-wrap">

          <button style={{fontSize:`medium`}} className="btn btn-primary buttons-pdf buttons-html5" tabIndex="0" aria-controls="example1" type="button"><span>
          <CSVLink
         data={getCSVData()} 
         filename="table_data.csv"
       >
         Export to CSV
       </CSVLink>
            </span></button>
          <button className="btn btn-primary buttons-print" tabIndex="0" aria-controls="example1" type="button"><span>
          <button style={{color:`white`,fontSize:`medium`}} onClick={handlePrint}>
         Print Table
       </button>
            </span></button>
         
    
    <DropdownButton
  style={{
    title: {
      fontSize:`large`
    } , fontSize: 'medium'
  }}

  className="btn btn-primary buttons-collection buttons-colvis"
  title="Column visibility"
  id="dropdown-menu"
  onToggle={toggleDropdown}
>
  <span className="dt-down-arrow"></span>

<Dropdown.Menu>
  {Object.keys(columns).map((column) => (
    <Form.Check
  
      key={column}
      type="checkbox"
      label={column}
      checked={columns[column]}
      onChange={() => toggleColumnVisibility(column)}
    />
  ))}
</Dropdown.Menu>
</DropdownButton>
</div></div><div className="col-md-6">
       <input
             type="search" style={{float:`right`,width:`80%`,display:`inline` }}
             placeholder="Search..."
             value={searchQuery}
             onChange={(e) => handleSearch(e.target.value)}
           /></div></div>
             {/* <FiFilter /> */}
         
    
       <table className="data-table1">
         {/* Table header */}
         <thead>
           <tr>
           {columns.rid && (
               <th onClick={() => handleSort('rid')}>
                 RID
                 {sortField === 'rid' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'rid' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
             {columns.eid && (
               <th onClick={() => handleSort('eid')}>
                 EID
                 {sortField === 'eid' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'eid' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
             {columns.oid && (
               <th onClick={() => handleSort('oid')}>
                 Org-ID
                 {sortField === 'oid' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'oid' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
            
               {columns.status && (
               <th onClick={() => handleSort('status')}>
                 Status
                 {sortField === 'status' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'status' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
 
 {columns.tenderno && (
               <th onClick={() => handleSort('tenderno')}>
                 Tender-No
                 {sortField === 'tenderno' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'tenderno' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
            
               <th >
                 Action
               </th>
             
           </tr>
         </thead>
         {/* Table body */}
         <tbody>
         {displayedData && displayedData.map((item) => (
             <React.Fragment key={item._id}>
               {/* Main row */}
               <tr onClick={() => handleRowToggle(item._id)}>
               {columns.rid && <td>{getRowToggleIcon(item._id)}{item.rid}</td>}             
              {columns.eid && <td>{item.eid}</td>}
              {columns.oid && <td>{item.oid}</td>}     
              {columns.status && <td> {getStatusElement(item.status)}</td>}
                 {columns.tenderno && <td>{item.tenderno}</td>}
     

{   galuak.empid === item.eid ||  galuak.role === "Admin" ? (
  <td>
    <button
      className="btn0 btn0-white btn0-animate"
      onClick={() => handleShow(item)}
    >
      <i className="fa fa-plus"></i>
    </button>
  </td>
) : null}
               </tr>
               {/* Expanded row */}
               {expandedRow === item._id && (
                 <tr>
                   <td colSpan={Object.keys(columns).filter((column) => columns[column]).length - 1}>
                    <strong>Org-Name:</strong> &nbsp; &nbsp;&nbsp;{item.oname}<br></br>
                    <strong>Tender-Name:</strong> &nbsp; &nbsp;&nbsp; {item.tendername}<br></br>
                    <strong>Priority:</strong> &nbsp; &nbsp;&nbsp; {item.priority}<br></br>
                    <strong>Start-Date:</strong> &nbsp; &nbsp;&nbsp;{item.startdate}<br></br>
                    <strong>End-Date:</strong> &nbsp; &nbsp;&nbsp;{item.enddate}<br></br>
                    <strong>Location:</strong> &nbsp; &nbsp;&nbsp;{item.location}<br></br>
                    <strong>Link:</strong> &nbsp; &nbsp;&nbsp;{item.link}<br></br>
                    <strong>File:</strong> &nbsp; &nbsp;&nbsp;{item.file}<br></br>
                    <strong>Date:</strong> &nbsp; &nbsp;&nbsp;{item.date}<br></br>
              
                   </td>
                 </tr>
               )}
             </React.Fragment>
           ))}
         </tbody>
       </table>
     </div>
       {/* Pagination */}
       <div className="pagination" style={{float:`right`}}>
         <button onClick={handlePrevPage} disabled={currentPage === 1}>
           <FiChevronLeft /> Previous
         </button>
         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
           <button
             key={page}
             onClick={() => handlePageChange(page)}
             className={currentPage === page ? 'active' : ''}
           >
             {page}
           </button>
         ))}
         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
           Next <FiChevronRight />
         </button>
       </div>
      
     </div>
  <Modal
        show={show}
       onHide={handleClose}
        backdrop="static"
        keyboard={false}
          centered
      >
        <Modal.Header closeButton>
          <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>ACTION<span></span></h1>
        </div>
    </div>
</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="bounce-in-bck">
      
                    <button type="button" class="btn-flip" data-back="Request" data-front="Edit"   onClick={handleShowEditrequest}>
   <EditRequest23 editRequest={editRequest} hh={hh}
      location1={location1} link1={link1} end1={end1} oid1={oid1}
      start1={start1} priority1={priority1} tendername1={tendername1}
      tenderno1={tenderno1} oname1={oname1} eid1={eid1}
      handleEditrequestClose={handleEditrequestClose} />

  {/* <i className='fas fa-edit'></i> */}
</button>&nbsp;&nbsp;&nbsp;
<button class="btn-flip" data-back="Request" data-front="Delete" onClick={() => deletePost(hh)}>
   {/* <i className='fas fa-trash'></i> */}
   </button>
&nbsp;&nbsp;&nbsp;
{galuak.role==="Admin"&& <>
<button type="button" class="btn-flip" data-back="Request" data-front="Approve" onClick={()=> handleApprove(hh)}>
Approve
</button>
</>}
&nbsp;&nbsp;&nbsp;
{status1==="Approve"&& <>
<span type="button" class="btn-flip" data-back="Tender" data-front="Add"  onClick={handleTenderAdd11}>  </span>
<AddTender tenderadd={tenderadd} rid1={rid1}
      eid1={eid1} oid1={oid1} oname1={oname1} 
       handleTendAddClose={handleTendAddClose} />
                </>}
                {/* handleTenderAdd11={handleTenderAdd11} */}
                </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

<Modal
show={approve}
onHide={handleAppClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h2>Approve / Reject <span></span></h2>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>Request</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

  <form   onSubmit={handleSubmit}  >
            <div class="form-group">
    <label for="EID">Current Status for {hh}</label>
    <input type="text" defaultValue={status1} style={{backgroundColor:"teal" ,color:"white"}} readOnly  class="form-control" id="EID" placeholder="Active"/>
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
        <button type="submit" class="btn btn-success" >Approve</button>
      </div>
  </form>
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>

</div></div>
</div> 
<Footeradmin/>
</section></div>
  )
}

export default Request
function getStatusElement(status) {
  if (status === "Approve") {
    return <div class="ribbons-wrapper">
    <span class="ribbon">
   <span class="ribbon7">Approve</span>
 </span></div>
  } 
  else if (status === "Requesting") {
    return <div class="ribbons-wrapper">
    <span class="ribbon">
   <span class="ribbon6">Requesting</span>
 </span></div>
  } 
  else {
    return <div class="ribbons-wrapper">
    <span class="ribbon">
   <span class="ribbon5">Disapprove</span>
 </span></div>
  }
}