
import React,{useState,useEffect,useRef} from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from './Sidebar'
import axios from 'axios';
import {Button,Modal} from "react-bootstrap"
import { FiChevronDown, FiChevronRight, FiFilter, FiChevronLeft, FiChevronUp } from 'react-icons/fi';
import { CSVLink } from 'react-csv';
import './Tables.css'; 
import './PrintTable.css';
import Quatation1 from "./images/Quatation.png";
import { Dropdown, DropdownButton , Form} from "react-bootstrap";
import Footeradmin from './Footeradmin';
import {useParams,useNavigate} from 'react-router-dom'
import Navadmin from './Navadmin';


const Quatation = () => {
  const navigate = useNavigate()
  const [itemno,setItemno] = useState("")
  const [itemname,setItemname] = useState("")
  const[modelno,setModelno]=useState("")
  const [brandname,setBrandname] = useState("")
  const[origion,setOrigion]=useState("")
  const [unit,setUnit] = useState("")
  const [tid,setTid] = useState("")
  const [item_no,setItem_no] = useState("")
  const [price,setPrice] = useState("")
  const [specification,setSpecification] = useState("")
  const [description,setDescription] = useState("")

  const [eid1,setEid1] = useState("")
  const [itemno1,setItemno1] = useState("")
  const [itemname1,setItemname1] = useState("")
  const[modelno1,setModelno1]=useState("")
  const [brandname1,setBrandname1] = useState("")
  const[origion1,setOrigion1]=useState("")
  const [unit1,setUnit1] = useState("")
  const [Id,setId] = useState("")
  const [itemno23,setItemno23] = useState("")
  const [price1,setPrice1] = useState("")
  const [specification1,setSpecification1] = useState("")
  const [description1,setDescription1] = useState("")
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [editq, setEditQ] = useState(false);
  const [addq, setAddQ] = useState(false);

  const [editModal, setEditModal] = useState(false);

  const fileInputRef = useRef(null);
  const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setShow(true)
    setId(user._id)
    setEid1(user.eid)
    setItemname1(user.itemname)
    setModelno1(user.modelno)
    setOrigion1(user.origion)
    setUnit1(user.unit)
  setPrice1(user.price)
    setSpecification1(user.specification)
    setDescription1(user.description)
    setBrandname1(user.brandname)
 
  };
  const handleShow1 = (user) => {
    setShow1(true)
    setId(user._id)
    setEid1(user.eid)
    setItemno23(user.itemno)

    setItemname1(user.itemname)
    setModelno1(user.modelno)
    setOrigion1(user.origion)
    setUnit1(user.unit)
  setPrice1(user.price)
    setSpecification1(user.specification)
    setDescription1(user.description)
    setBrandname1(user.brandname)
 
  };

 

  const handleShow1Close = () => {
    setShow1(false)
    setShow(true);

  };

  const handleEditRClose = () => {
    setEditQ(false)
    // setShow(true);

  };
  const handleQcsv = () => {
    // setEditQ(true)
    // setShow(false);

  };  
  const handleQ = () => {
    setAddQ(true)
    // setShow(false);
  };
  const handleQclose = () => {
    setAddQ(false)
    // setShow(false);
  };

  const handleEdit = (hh) =>{
    setEditModal(true)
    setShow(false);
  };
  const handleClose1 = (hh) =>{
    setEditModal(false)
    setShow(true);
  };
  const AddQotatin = async (e) => {
    e.preventDefault();
    try {
      
      //  eid, itemno, itemname, modelno, brandname, origion ,unit, price ,specification ,description
      const formData = new FormData();
      formData.set("eid",galuak.empid);
      formData.set("oid",galuak.oid);

      formData.append("itemno", itemno);
      formData.append("itemname", itemname);
      formData.append("modelno", modelno);
      formData.append("brandname", brandname);
      formData.append("origion", origion);
      formData.append("unit", unit);
      formData.append("price", price);
      formData.append("specification", specification);
      formData.append("file", fileInputRef.current.files[0]);
      formData.append("description",description);
      const res = await axios.post(
        "http://localhost:8005/addQotation",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };


  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([]);


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
    fetchOptions();
  }, []);

  useEffect(() => {
    if (selectedOption) {
      fetchData1();
    }
  }, [selectedOption]);

  const fetchOptions = async () => {
    try {
      const response = await axios.get('http://localhost:8005/api/getTender');
      setOptions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  const fetchData1 = async () => {
    try {
      const response = await axios.get(`http://localhost:8005/dd?option=${selectedOption}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

// const [checked, setChecked] = React.useState(false);
// useEffect(() => {
//   if (galuak.employee === "inactive" ) {
//     navigate("/adminhome");
//   }
// }, [galuak]);
const [remark,setRemark]=useState('');

  const AddQotatin24 = async (e) => {
    e.preventDefault();
    try {
      
      //  eid, itemno, itemname, modelno, brandname, origion ,unit, price ,specification ,description
      const formData = new FormData();
      formData.append("tid",selectedOption);
      formData.append("remark", remark);
      formData.append("item_no", item_no);
      formData.set("id", Id);

 
    
      const res = await axios.post(
        `http://localhost:8005/api/xx`,
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };


 


  const deletePost = (id) => {
    console.log(id);
  
    axios.delete(`http://localhost:8005/api/delete-quatation/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  
 
  };
  const [Qvalues, setQvalues] = useState({})

  // define onChange to get form values
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setQvalues(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(
      `http://localhost:8005/api/update-quatation/${Id}`, Qvalues)
      .then(res => {
        if(res.status ===200){
          alert('A record successfuly updated')
          // Push to /
          window.location.href = "/quatation";
        }else{
          Promise.reject()
        }
      })
      .catch(err => alert('Something went wrong! ' +err.message))
      // Push to /
      window.location.href = "/quatation";
  }
  


//


const [employee,setEmployee]=useState([]);
useEffect(() =>{
  // string formatting: template literals are enclosed in backticks
  axios.get(`http://localhost:8005/api/getTender`)
        .then((res) =>{
          setEmployee(res.data);
        })
        .catch((err) =>{
          console.log("Error:" + err.message)
        });
}, []);
 


  const toggleSidebar = () => {
    const sidebar = document.querySelector("nav");
    sidebar.classList.toggle("close");
    localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
  }; 
  
  
  
  const [searchTerm, setSearchTerm] = useState("");
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
    itemno: true, 
    itemname: true, 
    brandname: true,
    origion: true,
    unit: true,
    price: true,
    specification: true,
    description: true,
    file: true,
  });
  
  useEffect(() => {
    fetchData();
  }, [sortField, sortOrder, searchQuery, currentPage,galuak.oid]);
  
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8005/list-quotation23/${galuak.oid}`, {

  //       params: {
  //         sortField,
  //         sortOrder,
  //         searchQuery,
  //         page: currentPage,
  //       },
  //     });
  
  //     setData(response.data.data);
  //     setTotalPages(response.data.totalPages);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  const fetchData = async () => {
    try {
      if (galuak.role === 'Super') {
      const response = await axios.get(`http://localhost:8005/listAll-quotation23`, {
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
  
      const response = await axios.get(`http://localhost:8005/list-quotation23/${galuak.oid}`, {//
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
      item.itemno?.toLowerCase().includes(query.toLowerCase())||
      item.itemname?.toLowerCase().includes(query.toLowerCase())||
      item.brandname?.toLowerCase().includes(query.toLowerCase())||
      item.origion?.toLowerCase().includes(query.toLowerCase())||
      item.unit?.toLowerCase().includes(query.toLowerCase())||
      item.price?.toLowerCase().includes(query.toLowerCase())||
      item.specification?.toLowerCase().includes(query.toLowerCase())||
      item.description?.toLowerCase().includes(query.toLowerCase())||
      item.file?.toLowerCase().includes(query.toLowerCase()))
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
      eid: item.eid,
      itemno: item.itemno,
      itemname: item.itemname,
      brandname: item.brandname,
      origion: item.origion,
      unit: item.unit,
      price: item.price,
      specification: item.specification,
      description: item.description
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
    const downloadFile = async (id) => {
      try {
        const res = await axios.get(
          `http://localhost:8005/api/v1/items/download/${id}`,
          { responseType: "blob" }
        );
        const blob = new Blob([res.data], { type: res.data.type });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
     link.download = ("filename=")[0];
        // link.download = res.headers["content-disposition"].split("filename=")[1];
        link.click();
      } catch (error) {
        console.log(error);
      }
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
<img src={Quatation1} class="img8"alt="employee" style={{width:`30%`}}/>
<br/> <br/> 
{/* <button variant="primary" class="button8" style={{float:`right`}} onClick={handleRequest1}>
  Add Request
</button> */}
  {/* <div class="col-sm-9"> */}
        <button variant="primary" class="button8" style={{float:`right`}} onClick={handleQcsv}>
                  {/* <i class="fa fa-plus" style={{color:`white`}} aria-hidden="true"></i >  */}
               (CSV) </button>
                <button variant="primary" class="button8" style={{float:`right`}}  onClick={handleQ}>
                  <i class="fa fa-plus" style={{color:`white`}} aria-hidden="true"></i > 
                </button>
                
			 {/* </div> */}
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
    // style={{
    //   key: {
    //     fontSize: '14px', fontWeight: 'bold'
    //   },
    //   label: {
    //     color: 'blue', marginLeft: '10px'
    //   }
    // }}
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
           {columns.eid && (
               <th onClick={() => handleSort('eid')}>
                 EID
                 {sortField === 'eid' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'eid' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
             {columns.itemno && (
               <th onClick={() => handleSort('itemno')}>
                 Itemno
                 {sortField === 'itemno' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'itemno' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
              {columns.itemname && (
               <th onClick={() => handleSort('itemname')}>
                Item-Name
                 {sortField === 'itemname' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'itemname' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
             {columns.brandname && (
               <th onClick={() => handleSort('brandname')}>
                 Brand-Name
                 {sortField === 'brandname' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'brandname' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
            
               {columns.origion && (
               <th onClick={() => handleSort('origion')}>
                 Origion
                 {sortField === 'origion' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'origion' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
 
 {columns.unit && (
               <th onClick={() => handleSort('unit')}>
                 Unit
                 {sortField === 'unit' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'unit' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
            
              {columns.file && (
               <th onClick={() => handleSort('file')}>
                 File
                 {sortField === 'file' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'file' && sortOrder === 'desc' && <FiChevronDown />}
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
               {columns.eid && <td>{getRowToggleIcon(item._id)}{item.eid}</td>}             
              {columns.itemno && <td>{item.itemno}</td>}
              {columns.itemname && <td>{item.itemname}</td>}
              {columns.brandname && <td>{item.brandname}</td>}     
              {columns.origion && <td> {item.origion}</td>}
                 {columns.unit && <td>{item.unit}</td>}
                 {columns.file && <td>
                 <button type="button" class="btn" onClick={() => downloadFile(item._id)} >
                      <i class="fa fa-download"></i>
                    </button>
                 </td>}
                 <td><button class="btn0 btn0-white btn0-animate"   onClick={() => handleShow(item)} >
                  <i className="fa fa-plus"></i></button>&nbsp;&nbsp;&nbsp;
                  <button class="btn0 btn0-white btn0-animate" onClick={() => handleShow1(item)}><i className='fas fa-paper-plane'></i></button></td>
               </tr>
               {/* Expanded row */}
              {expandedRow === item._id && (
                 <tr>
                   <td colSpan={Object.keys(columns).filter((column) => columns[column]).length - 1}>
                    <strong>Price:</strong> &nbsp; &nbsp;&nbsp;{item.price}<br></br>
                    <strong>Specification:</strong> &nbsp; &nbsp;&nbsp; {item.specification}<br></br>
                    <strong>Description:</strong> &nbsp; &nbsp;&nbsp; {item.description}<br></br>
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
       {/* Search */}
      
   
       {/* Manage Column Visibility */}
      
     </div>
   



          <Modal
        show={show}
    
        backdrop="static"
        keyboard={false}
        onHide={handleClose}
        centered
      >
       
        <Modal.Header closeButton>
          <Modal.Title ><div class="container9">
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
      
                    <button class="btn-flip" data-back="Quatation" data-front="Delete" onClick={() => deletePost(Id)}> 
                    {/* <i className='fas fa-trash'></i> */}
                    </button>&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn-flip" data-back="Quatation" data-front="Edit"  onClick={() =>handleEdit(Id)}>
  {/* <i className='fas fa-edit'></i> */}
  </button>   
  </div>    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>



      </Modal>
      <Modal
        show={show1}
        backdrop="static"
        keyboard={false}
        onHide={handleShow1Close}
      >
        <Modal.Header closeButton>
          <Modal.Title ><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Send<span></span></h1>
        </div>
        {Id}
        <div class="role9">
            <div class="block9"></div>
            <p>Quatation</p>
        </div>
        
    </div>
</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="element">
      <form>
            <div class="form-group">
    <label for="EID">Select Tender-ID</label>
    <div class="form-group">
  
    <select     class="form-control" value={selectedOption} onChange={handleOptionChange}>
    
        {options.map(option => (
                  <option value={option.tid}>{option.tid}
               
          </option>
        ))}
      </select>
    </div>
  </div>
  <div class="form-group">
    <label for="FullName">Select Item Number</label>
    
    <select class="form-select form-select-lg mb-5" value={item_no} onChange={(e)=>setItem_no(e.target.value)}

  >
  <option selected> select item</option>

        {data.map(option => (
              <option value={option.item_no} key={option}>
              {" "}
              {option.item_no}{" "}
              
            </option>
        ))}
      </select>
      <div class="form-group">
    <input type="text" hidden   value={selectedOption}   onChange={(e)=>setTid(e.target.value)} class="form-control" id="Remark"  placeholder="Enter Remark"/>
  </div>
        
        </div>
  <div class="form-group">
    <label for="Remark">Remarkbbbbbbbbb</label>
    <input type="text" class="form-control" value={remark}   onChange={(e)=>setRemark(e.target.value)} id="Remark"  placeholder="Enter Remark"/>
  </div>
     
        </form>

  </div>
        </Modal.Body>
        <Modal.Footer>     
     <button class="send" style={{color:`#007bff`}} onClick={AddQotatin24}><i class="fa fa-paper-plane"></i></button>
          {/* <Button variant="secondary" onClick={handleShow1Close}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>




    





      <Modal
show={editModal}
onHide={handleClose1}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Edit<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>Quatation</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>
<div className="element">
<form onSubmit={handleSubmit} method="POST">
            <div class="form-group">
    <label for="EID">EID</label>
    <input type="text" class="form-control" 
   name="eid"   defaultValue={eid1} id="FullName"  onChange={handleChange} 
    placeholder="EID"/>
  </div>
  <div class="form-group">
    <label for="Item-No">Item-No</label>
    <input type="text" class="form-control"  
    name="itemno"   defaultValue={itemno1}   onChange={handleChange} 
     placeholder="Enter Item-No"/>
  </div>
  <div class="form-group">
    <label for="Item-Name">Item-Name</label>
    <input type="text" class="form-control"name="itemname"   defaultValue={itemname1} id="FullName"  onChange={handleChange} 
    placeholder="Enter Item-Name"/>
  </div>
  <div class="form-group">
    <label for="Model-No">Model-No</label>
    <input type="text" class="form-control" name="modelno"   defaultValue={modelno1} id="FullName"  onChange={handleChange} 
    placeholder="Enter Model-No"/>
  </div>
  <div class="form-group">
    <label for="Brand-Name">Brand-Name</label>
    <input type="text" class="form-control" name="brandname"   defaultValue={brandname1} id="FullName"  onChange={handleChange} 
    placeholder="Enter Brand-Name"/>
  </div>
  <div class="form-group">
    <label for="Origion">Origion</label>
    <input type="text" class="form-control" name="origin"   defaultValue={origion1} id="FullName"  onChange={handleChange} 
    placeholder="Enter Origion"/>
  </div>
  <div class="form-group">
    <label for="Unit">Unit</label>
    <input type="text" class="form-control"name="unit"   defaultValue={unit1} id="FullName"  onChange={handleChange} 
    placeholder="Unit"/>
  </div>
  <div class="form-group">
    <label for="Price">Price</label>
    <input type="text" class="form-control" name="price"   defaultValue={price1} id="FullName"  onChange={handleChange} 
    placeholder="Enter Price"/>
  </div>
  <div class="form-group">
    <label for="specification">Specification</label>
    <input type="text" class="form-control"name="specification"   defaultValue={specification1} id="FullName"  onChange={handleChange} 
    placeholder="Enter specification"/>
  </div>
  <div class="form-group">
    <label for="Description">Description</label>
    <input type="text" class="form-control" name="description"   defaultValue={description1} id="FullName"  onChange={handleChange} 
    placeholder="Enter Description"/>
  </div>
  <div class="form-group">
    <label for="Request">File</label>
    <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>

  </div>

      <div class="modal-footer">
      <Button variant="danger" onClick={handleClose1}>
            Close
          </Button>        
          <button type="submit" class="btn btn-success">Save changes</button>
      </div>
        </form>
        </div>
</Modal.Body>
<Modal.Footer>

 
</Modal.Footer>
</Modal>

<Modal
show={addq}
onHide={handleQclose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Add<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>Quatation</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>
<div className="element">
      <form>
            <div class="form-group">
    <label for="EID">EID</label>
    <input type="text" class="form-control" id="EID"  
     value={galuak.empid} 
    placeholder="EID"readOnly/>
  </div>
  <div class="form-group">
    <label for="EID">Oid</label>
    <input type="text" class="form-control" id="EID"  
     value={galuak.oid} 
    placeholder="EID"readOnly/>
  </div>
  <div class="form-group">
    <label for="Item-No">Item-No</label>
    <input type="text" class="form-control" id="Item-No" 
     value={itemno} onChange={(e)=>setItemno(e.target.value)}
     placeholder="Enter Item-No"/>
  </div>
  <div class="form-group">
    <label for="Item-Name">Item-Name</label>
    <input type="text" class="form-control" id="Item-Name"  
     value={itemname} onChange={(e)=>setItemname(e.target.value)}
    placeholder="Enter Item-Name"/>
  </div>
  <div class="form-group">
    <label for="Model-No">Model-No</label>
    <input type="text" class="form-control" id="Model-No"  
     value={modelno} onChange={(e)=>setModelno(e.target.value)}
    placeholder="Enter Model-No"/>
  </div>
  <div class="form-group">
    <label for="Brand-Name">Brand-Name</label>
    <input type="text" class="form-control" id="Brand-Name"  
     value={brandname} onChange={(e)=>setBrandname(e.target.value)}
    placeholder="Enter Brand-Name"/>
  </div>
  <div class="form-group">
    <label for="Origion">Origion</label>
    <input type="text" class="form-control" id="Origion" 
     value={origion} onChange={(e)=>setOrigion(e.target.value)}
    placeholder="Enter Origion"/>
  </div>
  <div class="form-group">
    <label for="Unit">Unit</label>
    <input type="text" class="form-control" id="Unit" 
     value={unit} onChange={(e)=>setUnit(e.target.value)}
    placeholder="Unit"/>
  </div>
  <div class="form-group">
    <label for="Price">Price</label>
    <input type="text" class="form-control" id="Price"  
         value={price} onChange={(e)=>setPrice(e.target.value)}
    placeholder="Enter Price"/>
  </div>
  <div class="form-group">
    <label for="specification">Specification</label>
    <input type="text" class="form-control" id="specification"  
             value={specification} onChange={(e)=>setSpecification(e.target.value)}
    placeholder="Enter specification"/>
  </div>
  <div class="form-group">
    <label for="Description">Description</label>
    <input type="text" class="form-control" id="Description" 
                 value={description} onChange={(e)=>setDescription(e.target.value)}
    placeholder="Enter Description"/>
  </div>
  <div class="form-group">
    <label for="Request">File</label>
    <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>

  </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-danger"  onClick={handleEditRClose}>Close</button>
        <button type="button" class="btn btn-success"   onClick={AddQotatin}>Save changes</button>
      </div>
        </form>
</div>
    </Modal.Body>
<Modal.Footer>

 
</Modal.Footer>
</Modal>



</div></div>
</div> 


<Footeradmin/>
    </section>
    </div> 
  )
}

export default Quatation


