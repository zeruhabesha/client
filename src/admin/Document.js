/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Sidebar from './Sidebar'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Button} from "react-bootstrap"
import{useRef} from 'react';
import { FiChevronDown, FiChevronRight, FiFilter, FiChevronLeft, FiChevronUp } from 'react-icons/fi';
import { Dropdown, DropdownButton , Form} from "react-bootstrap";
import Documents1 from "./images/Documents.png";
import { CSVLink } from 'react-csv';
import Imagess from "./images/sample.jpg";
// import { CSSTransition } from 'react-transition-group';
// import 'animate.css/animate.min.css';
import {useParams,useNavigate} from 'react-router-dom'//import { useNavigate } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import Footeradmin from './Footeradmin';
import Navadmin from './Navadmin';
const Document = () => {



	const [document1,setDocument1] = useState([])
	const [tid1,setTid1] = useState("")
	const [view,setView]=useState([]) 
	const [hh,setHh] = useState("")
	const [show, setShow] = useState(false);
	const [viewdocument,setViewDocument] = useState("")

  const navigate = useNavigate()


	
	const handleShow = (user) => {
		setViewDocument(true);
		setShow(false);

		setHh(user._id)

		setTid1(user.tid)
		
		
	  };
	
	useEffect(() => {
	
		axios
		  .get("http://localhost:8005/api/getTender")
		  .then((res) => {
			setDocument1(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  },);
		//console.log(applicants);
	  },[]);



	  useEffect(() => {
		axios
		  .get(`http://localhost:8005/list-applicants/${tid1}`)	 
  
		  .then((res) => {
			setView(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
			// console.log(currentUser);
		  }, );
	  },[tid1]);   


		const handleviewdocuments1 = () => {
			setViewDocument(false);
		
			}
     
       
			const handleButtonClick = async (id) => {
				try {
				  const res = await axios.get(
					`http://localhost:8005/api/download-technicals/${id}`,
					{ responseType: "blob" }
				  );
				  const blob = new Blob([res.data], { type: res.data.type });
				  const link = document.createElement("a");
				  link.href = window.URL.createObjectURL(blob);
			   link.download = ("filename=")[0];
				  // link.download = res.headers["content-disposition"].split("filename=")[1];
				  link.click();
          setIsLoading(true);
    
          setTimeout(() => {
            setIsLoading(false);
          }, 4100);
				} catch (error) {
				  console.log(error);
				}
      }


			  const [data, setData] = useState([]);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [expandedRow, setExpandedRow] = useState(null); // Track the expanded row
  const [filteredData, setFilteredData] = useState([]);
  const [columns, setColumns] = useState({
    tid: true, 
    oid: true, 
    start: true,
    end: true,
	profilePic:true,
  });
  const [galuak, setGaluak] = useState([])

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInformation"))
   
    if(user){
  setGaluak(user)   
  
  
  }else{
      console.log("error")
    }
  },[])
  useEffect(() => {
    fetchData();
  }, [sortField, sortOrder, searchQuery, currentPage,galuak.oid]);
  // useEffect(() => {
  //   if (galuak.documentation === "inactive" ) {
  //     navigate("/adminhome");
  //   }
  // }, [galuak]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8005/org/getTender/${galuak.oid}`, {
        params: {
          sortField,
          sortOrder,
          searchQuery,
          page: currentPage,
        },
      });

      setData(response.data.data);
      setTotalPages(response.data.totalPages);
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
      (item.tid?.toLowerCase().includes(query.toLowerCase()) ||
      item.oid?.toLowerCase().includes(query.toLowerCase())||
      item.start?.toLowerCase().includes(query.toLowerCase())||
      item.end?.toLowerCase().includes(query.toLowerCase())||
      item.profilePic?.toLowerCase().includes(query.toLowerCase()))
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

  // Use filteredData for rendering the table rows
  const displayedData = searchQuery ? filteredData : data;

  // Create a function to extract CSV data from the table data
  const getCSVData = () => {
    const csvData = data.map((item) => ({
      tid: item.tid,
      oid: item.oid,
      start: item.start,
      end: item.end,
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

  // Function to get the visible columns
  const getVisibleColumns = () => {
    return Object.keys(columns).filter((column) => columns[column]);
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


  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
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


    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const [isCollapsed1, setIsCollapsed1] = React.useState(false);   
    const [isCollapsed2, setIsCollapsed2] = React.useState(false);
    const [isCollapsed3, setIsCollapsed3] = React.useState(false);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
    const toggleCollapse1 = () => {
      setIsCollapsed1(!isCollapsed1);
    };
    const toggleCollapse2 = () => {
      setIsCollapsed2(!isCollapsed2);
    };
    const toggleCollapse3 = () => {
      setIsCollapsed3(!isCollapsed3);
    };
    const handleClick = () => {
      const elem = document.documentElement; // Get the root element of the document
    
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        // If the screen is already in fullscreen mode, exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        // If the screen is not in fullscreen mode, enter fullscreen
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      }
    };
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick1 = () => {
      setShowDropdown(!showDropdown);
    };

    const [showPopup, setShowPopup] = useState(false);

    const handleTogglePopup = () => {
      setShowPopup(!showPopup);
    };
    const [selectedDate, setSelectedDate] = useState(null);
    const [open, setOpen] = React.useState(false); 
 
    const handleClick5 = () => { 
      setOpen(!open); 
    }; 


    const handleClick44 = () => {
      setOpen(!open);
    };

	const toggleSidebar = () => {
    const sidebar = document.querySelector("nav");
    sidebar.classList.toggle("close");
    localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
  }; 



  const [isLoading, setIsLoading] = useState(false);
  
  
  

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
  <img class="img8" src={Documents1} alt="employee" style={{width:`30%`}}/>
  <br/> <br/> 

<div>
         

         <div className="data-table-container">
 
         {/* <div className="column-visibility"> */}
       
        
         <div className="row" >
      <div className="col-md-6">
        <div className="dt-buttons btn-group flex-wrap">

          <button style={{fontSize:`medium`}} className="btn btn-primary buttons-pdf buttons-html5" tabIndex="0" aria-controls="example1" type="button"><span>
          <CSVLink
         data={getCSVData()} // Provide CSV data to the CSVLink component
         filename="table_data.csv"
        //  className="export-button"
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
    </div>
    </div>

      <div className="col-md-6">
       <input
             type="search" style={{float:`right`,width:`100%`,display:`inline` }}
             placeholder="Search..."
             value={searchQuery}
             onChange={(e) => handleSearch(e.target.value)}
           /></div></div>
             {/* <FiFilter /> */}
         
    
       <table className="data-table1">
         {/* Table header */}
         <thead>
           <tr>
           {columns.tid && (
               <th onClick={() => handleSort('tid')}>
                 Tid
                 {sortField === 'tid' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'tid' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )} 
			 {columns.profilePic && (
               <th onClick={() => handleSort('profilePic')}>
                 Pic
                 {sortField === 'profilePic' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'profilePic' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
             {columns.oid && (
               <th onClick={() => handleSort('oid')}>
                 Org-Id
                 {sortField === 'oid' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'oid' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
             {columns.start && (
               <th onClick={() => handleSort('start')}>
                 Start-Date
                 {sortField === 'start' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'start' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
            
               {columns.end && (
               <th onClick={() => handleSort('end')}>
                 End-Date
                 {sortField === 'end' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'end' && sortOrder === 'desc' && <FiChevronDown />}
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
               {columns.tid && <td>{getRowToggleIcon(item._id)}{item.tid}</td>}
               {columns.profilePic && <td>
               <div class="multi-button">
                <img src={Imagess} class="imgemp" style={{width:`50px`, height:`50px`, borderRadius:`50%`}}/>  
        </div>
    </td>}{columns.oid && <td>{item.oid}</td>}
                       {columns.start && <td>{item.start}</td>}
                       {columns.end && <td>{item.end}</td>}
              
                 <td><button class="btn0 btn0-white btn0-animate"   onClick={() => handleShow(item)} >
                  <i className="fa fa-plus"></i></button></td>
 
               </tr>
               {/* Expanded row */}
               {expandedRow === item._id && (
                 <tr>
                   <td colSpan={Object.keys(columns).filter((column) => columns[column]).length - 1}>
                    <strong>Email:</strong> &nbsp; &nbsp;&nbsp;{item.email}<br></br>
                    <strong>Mobile:</strong> &nbsp; &nbsp;&nbsp; {item.mobile}<br></br>
                    <strong>username:</strong> &nbsp; &nbsp;&nbsp; {item.username}<br></br>
                    <strong>gender:</strong> &nbsp; &nbsp;&nbsp;{item.gender}<br></br>
              
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
       {/* Search */}
      
   
       {/* Manage Column Visibility */}
      
     </div>
					</div>
</div></div>

<Modal
show={viewdocument}
onHide={handleviewdocuments1}
backdrop="static"
keyboard={true}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Documents<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>For {tid1}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<table style={{width:`100%`}}>
<thead>
<th>Tid</th>
<th>Name</th>


<th>Files</th>

</thead>
<tbody>

   
{view.map((tec, i) => (

<tr key={tec._id}>
            	<td>{tec.tenderid}</td>
                <td>{tec.type}</td>
			
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                   
                    */}
					<td>
                    {/* <button type="button" class="btn btn-success" onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fas fa-download"></i>
                    </button> */}
                    <button className={`btn8${isLoading ? ' btn8-progress' : ''}${isLoading ? ' btn8-fill' : ''}${isLoading ? ' btn8-complete' : ''}`} onClick={() => handleButtonClick(tec._id)}>
      Download
    </button>
                    </td> 
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="danger" onClick={handleviewdocuments1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>




<Modal
// show={viewdocument}
onHide={handleviewdocuments1}
backdrop="static"
keyboard={false}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>View Documents For {tid1} </Modal.Title>
</Modal.Header>
<Modal.Body>

          <div class="form-group">
		
			<div class="col-md-12">
            <div class="border-bottom custom-control custom-checkbox mb-3">
            <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class="" for="Authorization">Authorization</label>	
            &nbsp;&nbsp; <button type="button" class="float-right btn btn-light" id="Authorization">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class="" for="Company-Profile">Company-Profile</label>
                    &nbsp;&nbsp;  <button type="button" class="float-right btn btn-light" id="Company-Profile">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class="" for="Quality-Certificate">Quality-Certificate</label>
                    &nbsp;&nbsp; <button type="button" class="float-right btn btn-light" id="Quality-Certificate">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class="" for="Audit-Report">Audit-Report</label>
                    &nbsp;&nbsp;  <button type="button" class="float-right btn btn-light" id="Audit-Report">Download</button>
				</div>
        	<div class="border-bottom custom-control custom-checkbox mb-3">
            <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Bank-Statement">Bank-Statement</label>
                    &nbsp;&nbsp;<button type="button" class="float-right btn btn-light" id="Bank-Statement">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Experiance">Experiance</label>
                    &nbsp;&nbsp;<button type="button" class="float-right btn btn-light" id="Experiance">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="CV">CV</label>
                    &nbsp;&nbsp; <button type="button" class="float-right btn btn-light" id="CV">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="License">License</label>
                    &nbsp;&nbsp; <button type="button" class="float-right btn btn-light" id="License">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Company-Profile">Company-Profile</label>
                    &nbsp;&nbsp; <button type="button" class="float-right btn btn-light" id="Company-Profile">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Methodology">Methodology</label>
                    &nbsp;&nbsp;<button type="button" class="float-right btn btn-light" id="Methodology">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Trailing">Trailing</label>
                    &nbsp;&nbsp;<button type="button" class="float-right btn btn-light" id="Trailing">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Cad-Design">Cad-Design</label>
                    &nbsp;&nbsp; <button type="button" class="float-right btn btn-light" id="Cad-Design">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
                <i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Financial">Financial</label>
                    &nbsp;&nbsp;<button type="button" class="float-right btn btn-light" id="Financial">Download</button>
				</div>
				<div class="border-bottom custom-control custom-checkbox mb-3">
					<i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;<label class=" " for="Tender-Participation">Tender-Participation</label>
                    &nbsp;&nbsp;<button type="button" class="float-right btn btn-light" id="Tender-Participation">Download</button>
				</div>
			</div>
			<button class="welcome-modal-btn">
			<i class="fa fa-download"></i> Comment
		</button>
		
       <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>

	  <div class="welcome-modal">
			<button class="welcome-modal-close">
				<i class="bi bi-x-lg"></i>
			</button>
		
			<div class="text-center mt-5">
				<h3 class="h5 weight-500 text-center mb-5">
					Comment Here
				</h3>
				<div class="pb-2">
				<form>
				<div class="form-group">
    <textarea type="text" class="form-control" id="Comment"  placeholder="Enter Comment"/>
  </div>

      <div class="modal-footer">
        <button type="button" class="btn fa fa-send"></button>
      </div>
        </form>

				</div>
			</div>
			
		</div>

		</div>

		</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewdocuments1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>



<Footeradmin/>
    </section>
    </div>
    
  )
}

export default Document