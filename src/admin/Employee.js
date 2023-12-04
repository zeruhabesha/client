
import React,{useState,useEffect,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { googleAuth, registerUser } from '../apis/auth'

import axios from 'axios';

// - The component includes multiple modal components for adding, editing, and deleting employees. 
// - The modals have form inputs for entering employee details and buttons for performing actions. 
import {Button,Modal,Fade } from "react-bootstrap"
import {useParams,useNavigate} from 'react-router-dom'//import { useNavigate } from 'react-router-dom';

import './table.css';
import Switch from 'react-switch';

import { toast } from 'react-toastify';
import { BsEmojiLaughing, BsEmojiExpressionless } from "react-icons/bs"

import Sidebar from './Sidebar';
import { FiChevronDown, FiChevronRight, FiFilter, FiChevronLeft, FiChevronUp } from 'react-icons/fi';
import { CSVLink } from 'react-csv';
import './Tables.css'; // Import custom CSS for styling
import './PrintTable.css';
import './Documentscss.css';
import Imagess from "./images/sample.jpg";
import Employee1 from "./images/employee.png";
import { Dropdown, DropdownButton , Form} from "react-bootstrap";
import Footeradmin from './Footeradmin';
import Navadmin from './Navadmin';

const Employee = ({text, onClick, disabled }) => {
  


  const fileInputRef = useRef(null);


  // const [file,setFile] = useState("")

  
  const [show, setShow] = useState(false);
  const[selectedOption,setSelectedOption] = useState("")
  const kk = [1,0];
 



  const [empid,setEmpid] = useState("")
  const [fname,setFname] = useState("")
 
  const[phone,setPhone]=useState("")

  const [role,setRole] = useState("")
  const [gender,setGender] = useState("")
  const [username,setUsername] = useState("")
 
  const [status1, setStatus1] = useState(false);
  const [hh,setHh] = useState("")
  const [approve, setApprove] = useState(false);
  const [tender, setTender] = useState(false);

  const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(userProfile())
// },[])
  const handleClose = () => setShow(false);

  const handleShow = (user) => {
    setShow(true)
    setEditModal(false)
    setHh(user._id)
    setEmpid(user.empid)
    setFname(user.name)
    setUsername(user.username)
  setPhone(user.mobile)
    setRole(user.role)
    setGender(user.gender)
    setStatus1(user.status)
  };


const [formData, setFormData] = useState({
 
  firstname: "",
  lastname: "",
  oid:"",
  email: "",
  password: "",
  mobile:"",

  username:"",
  profilePic:"",
  role:"employee"
})
const [galuak, setGaluak] = useState([])

useEffect(()=>{
  const user = JSON.parse(localStorage.getItem("userInformation"))
 
  if(user){
setGaluak(user)   


}else{
    console.log("error")
  }
},[])
console.log(galuak)
console.log(galuak.oid)


const [isLoading, setIsLoading] = useState(false)
const [showPass, setShowPass] = useState(false)
const navigate = useNavigate()
const handleOnChange = (e) => {
  setFormData({ ...formData,oid: galuak.oid,gender:selectedOption, [e.target.name]: e.target.value })
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




const [selectedUser, setSelectedUser] = useState(null);
const [selectedRole, setSelectedRole] = useState('');
const [selectedStatus, setSelectedStatus] = useState('');
const [updateModalShow, setUpdateModalShow] = useState(false);
const[one,setOne]=useState("");
const[two,setTwo]=useState("");
const[three,seThree]=useState("");
const[four,setFour]=useState("");
const[five,setFive]=useState("");
const[six,setsix]=useState("");
const[seven,setSeven]=useState("");
const[eight,setEight]=useState("");
const[nine,setNine]=useState("");
const[ten,setTen]=useState("");
const[eleven,setEleven]=useState("");
const[tewelve,setTewelve]=useState("");

const [data1, setData1] = useState([]);


const [dataItems, setDataItems] = useState([]);
const [selectedItemId, setSelectedItemId] = useState('');
const handleToggleStatus = async (itemId) => {
  try {
    const newDataItems = dataItems.map((item) => {
      if (item._id === itemId) {
        const newStatus = item.status === 'active' ? 'inactive' : 'active';
        return { ...item, status: newStatus };
      }
      return item;
    });

    setData(newDataItems);

    await axios.put(`http://localhost:8005/api/data/${itemId}`, {
      status: displayedData.find((item) => item._id === itemId).status,
    });
  } catch (error) {
    console.error('Error updating item:', error);
  }
};


const handleUpdate = (item) => {
  setSelectedUser(item);
  setSelectedRole(item.role);
  setSelectedStatus(item.status);
  setUpdateModalShow(true);
  setOne(item.dashboard)
  setTwo(item.employee)
  seThree(item.request)
  setFour(item.tender)
  setFive(item.documentation)
  setsix(item.quotation)
  setSeven(item.organization)
  setEight(item.blog)
  setNine(item.report)
  setTen(item.setting)
  setEleven(item.technical)
  setTewelve(item.chat)



};

const handleUpdateConfirm = async () => {
  try {
    await axios.put(`http://localhost:8005/api/users/${selectedUser._id}`, {
      role: selectedRole, status: selectedStatus, dashboard: one,employee:two,
      request: three,tender: four, documentation:five,
      quotation:six, organization:seven,blog:eight, report:nine, setting:ten,
      technical:eleven,chat:tewelve,

    });

    setUpdateModalShow(false);

  } catch (error) {
    console.error('Error updating user:', error);
  }
};




const deletePost = (id) => {
  console.log(id);

  axios.delete(`http://localhost:8005/delete/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


};


const [editModal, setEditModal] = useState(false);
const [addemployee, setAddemployee] = useState(false);


const handleEdit = (hh) =>{
  setEditModal(true)
  setShow(false);

};


const handleAppClose = () => {
  setApprove(false);
  setShow(true);
}

const handleReqClose = () => {
  setEditModal(false);
  setShow(true);
}








const handleApprove = (hh) =>{
  setApprove(true);
  setShow(false);
}
const handleAddEmp = () =>{
  setAddemployee(true);
  // setShow(false);
}
const handleAddEmpClose = () =>{
  setAddemployee(false);
  // setShow(true);
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
    `http://localhost:8005/update-employee/${hh}`, formValues)
    .then(res => {
      if(res.status ===200){
        alert('A record successfuly updated')
        // Push to /
        // window.location.href = "/employee";
        handleShow();
      }else{
        Promise.reject()
      }
    })
    .catch(err => alert('Something went wrong! ' +err.message))
    // Push to /
  
}

const addEmployee = () => {

}

const toggleSidebar = () => {
    const sidebar = document.querySelector("nav");
    sidebar.classList.toggle("close");
    localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
  }; 





  useEffect(() => {
    const fetchData = async () => {
      try {
        if (galuak && galuak.role === 'Admin') {
          const response = await fetch(`http://localhost:8005/find-org/${galuak.oid}`);
          const data = await response.json();
          setData1(data);
        } else if (galuak && galuak.role === 'employee23') {
          const sessionData = JSON.parse(localStorage.getItem('userInformation'));
          setData1(sessionData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [galuak]);
  console.log(data1)
  // useEffect(() => {
  //   if (galuak.employee === "inactive" ) {
  //     navigate("/adminhome");
  //   }
  // }, [galuak]);
 


  // useEffect(() =>{
  //   // string formatting: template literals are enclosed in backticks
  //   axios.get(`http://localhost:8005/find-org/${galuak.oid}`)
  //         .then((res) =>{
  //           setData1(res.data);
  //         })
  //         .catch((err) =>{
  //           console.log("Error:" + err.message)
  //         });
  // }, [galuak.oid]);



console.log(data1)
  
  const [data, setData] = useState([]);
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [expandedRow, setExpandedRow] = useState(null); // Track the expanded row
  const [filteredData, setFilteredData] = useState([]);

  //   - The component includes a dropdown menu for managing the visibility of table columns. 
  //  - The dropdown menu allows the user to select which columns to show or hide. 
  const [columns, setColumns] = useState({
    empid: true, 
    pic: true, 
    name: true,
    email: false,
    gender: false,
    username: false,
    role: true,
    mobile: false,
    status: true,
  });

  useEffect(() => {
    fetchData();
  }, [sortField, sortOrder, searchQuery, currentPage,galuak.oid]);

  const fetchData = async () => {
    try {
      if (galuak.role === 'Super') {
      const response = await axios.get(`http://localhost:8005/findx`, {
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
  
      const response = await axios.get(`http://localhost:8005/findx/${galuak.oid}`, {//
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
      (item.name?.toLowerCase().includes(query.toLowerCase()) ||
      item.gender?.toLowerCase().includes(query.toLowerCase())||
      item.empid?.toLowerCase().includes(query.toLowerCase())||

      item.email?.toLowerCase().includes(query.toLowerCase())||
      item.mobile?.toLowerCase().includes(query.toLowerCase())||
      item.username?.toLowerCase().includes(query.toLowerCase())||
      item.role?.toLowerCase().includes(query.toLowerCase()))
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
  // console.log(displayedData)
  // Create a function to extract CSV data from the table data
  const getCSVData = () => {
    const csvData = data.map((item) => ({
      name: item.name,
      email: item.email,
      mobile: item.mobile,
      role: item.role,
      gender: item.gender,
      username: item.username,
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
  // console.log(data1.oid)

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


    const [progress1, setProgress1] = useState(0);

    const handleNext = () => {
      setProgress1(progress1 + 100);
    };
  
    const handlePrevious = () => {
      setProgress1(progress1 - 100);
    };

  return (
    <div>

        <Sidebar/>
        <section class="dashboard">   

      <div class="top" style={{top:`10px`,dispaly:`inline`}}>
      <button class="uil uil-bars sidebar-toggle" onClick={toggleSidebar} style={{dispaly:`inline`}}></button>
{/*    
   - This component represents the navigation bar for the admin section of the application. 
   - It includes buttons for toggling the sidebar, managing notifications, and entering fullscreen mode. 
   - The component also includes a search button that triggers a search feature.  */}
     
      <Navadmin/>
      

      </div>
      <div class="scroll-line" style={{ width: percentScrolled + '%', zIndex:'3'}} />
      <div class="dash-content">

<div class="main-container">


<div class="xs-pd-20-10 pd-ltr-20">
  <br/>
  <img class="img8" src={Employee1} alt="employee" style={{width:`30%`}}/>
  <br/> <br/> 


  <button variant="primary" class="button8" style={{float:`right`}}  onClick={handleAddEmp}>
  Add Employee
</button>

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
</div></div>

    

  <div className="col-md-6">
  
  
  {/* - The component includes a search input field for filtering the table data based on a search query */}

       <input
             type="search" style={{float:`right`,width:`80%`,display:`inline` }}
             placeholder="Search..."
             value={searchQuery}
             onChange={(e) => handleSearch(e.target.value)}
           /></div>
     
           </div>
             {/* <FiFilter /> */}
         
    {/* - The component includes a table for displaying employee data. 
   - The table has sortable columns and pagination functionality. 
   - It also includes buttons for exporting the table data to CSV and printing the table.   */}  
       <table className="data-table1">
         {/* Table header */}
         <thead>
           <tr>
           {columns.empid && (
               <th onClick={() => handleSort('empid')}>
                 empid
                 {sortField === 'empid' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'empid' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
             {columns.pic && (
               <th onClick={() => handleSort('pic')}>
                 pic
                 {sortField === 'pic' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'pic' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
             {columns.name && (
               <th onClick={() => handleSort('name')}>
                 Full-Name
                 {sortField === 'name' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'name' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
            
               {columns.status && (
               <th onClick={() => handleSort('status')}>
                 Status
                 {sortField === 'status' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'status' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
 
 {columns.role && (
               <th onClick={() => handleSort('role')}>
                 Role
                 {sortField === 'role' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'role' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )} 
             
             {columns.email && (
               <th onClick={() => handleSort('email')}>
                 Email
                 {sortField === 'email' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'email' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )} 
             {columns.gender && (
               <th onClick={() => handleSort('gender')}>
                 Gender
                 {sortField === 'gender' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'gender' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )} 
             {columns.username && (
               <th onClick={() => handleSort('username')}>
                 Username
                 {sortField === 'username' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'username' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
              {columns.mobile && (
               <th onClick={() => handleSort('mobile')}>
                 Mobile
                 {sortField === 'mobile' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'mobile' && sortOrder === 'desc' && <FiChevronDown />}
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
               {columns.empid && <td>{getRowToggleIcon(item._id)}{item.empid}</td>}
               {columns.pic && <td>
               <div class="multi-button">
                <img src={Imagess} class="imgemp" style={{width:`50px`, height:`50px`, borderRadius:`50%`}}/>  
        {/* <button class="editimg fas fa-edit"></button> */}
        </div>
    </td>}{columns.name && <td>{item.name}</td>}
    {columns.status && <td> {getStatusElement(item.status)}</td>}   
                       {columns.role && <td>{item.role}</td>}
                       {columns.email && <td>{item.email}</td>}
                       {columns.gender && <td>{item.gender}</td>}
                       {columns.username && <td>{item.username}</td>}
                       {columns.mobile && <td>{item.mobile}</td>}
                       {   galuak.empid === item.empid ||  galuak.role === "Admin" ? (
  <td>
    <button
      className="btn0 btn0-white btn0-animate"
      onClick={() => handleShow(item)}
    >
      <i className="fa fa-plus"></i>
    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    {galuak.role==="Admin"&&<>
    <button class="btn sm btn-primary btn-animate"   onClick={() => handleUpdate(item)}> 
    Privilage{/* <i className="fa fa-plus"></i> */}
    </button>
    </>}
  </td>
) : null}
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

       {/*   - The component includes pagination buttons for navigating through the table pages.  */}
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



<Modal show={updateModalShow} onHide={() => setUpdateModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Set Priority To User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="bounce-in-bck">
        <div>
      {/* Conditionally render the following section only when data1.dashboard is "active" */}
      
          {selectedStatus !== '' && (
            <div className="mb-3">
              <label>Status:</label>
              <Switch
                onChange={() => setSelectedStatus(selectedStatus === 'active' ? 'inactive' : 'active')}
                checked={selectedStatus === 'active'}
              />
            </div>
          )
      }
    </div>
  

          {selectedRole !== '' && (
            <div className="mb-3">
              <label>Role:</label>
              <Switch
                onChange={() => setSelectedRole(selectedRole === 'admin' ? 'employee' : 'admin')}
                checked={selectedRole === 'admin'}
              />
            </div>
          )}
      
             {one !== '' && (
            <div className="mb-3">
              <label>dashboard:</label>
              <Switch
                onChange={() => setOne(one === 'active' ? 'inactive' : 'active')}
                checked={one === 'active'}
              />
            </div>
             )}
               {data1.employee === "active" && 
        <>
            {two !== '' && (
            <div className="mb-3">
              <label>Employee:</label>
              <Switch
                onChange={() => setTwo(two === 'active' ? 'inactive' : 'active')}
                checked={two === 'active'}
              />
            </div>
          )}</>}
                 {data1.request === "active" && 
        <>
             {three !== '' && (
            <div className="mb-3">
              <label>Request:</label>
              <Switch
                onChange={() => seThree(three === 'active' ? 'inactive' : 'active')}
                checked={three === 'active'}
              />
            </div>
          )}</>}
                  {data1.tender === "active" && 
        <>
             {four !== '' && (
            <div className="mb-3">
              <label>Tender:</label>
              <Switch
                onChange={() => setFour(four === 'active' ? 'inactive' : 'active')}
                checked={four === 'active'}
              />
            </div>
          )}</>}
                    {data1.document === "active" && 
        <>
             {five !== '' && (
            <div className="mb-3">
              <label>Documentation:</label>
              <Switch
                onChange={() => setFive(five === 'active' ? 'inactive' : 'active')}
                checked={five === 'active'}
              />
            </div>
          )}</>}
                     {data1.quotation === "active" && 
        <>
             {six !== '' && (
            <div className="mb-3">
              <label>Quotation:</label>
              <Switch
                onChange={() => setsix(six === 'active' ? 'inactive' : 'active')}
                checked={six === 'active'}
              />
            </div>
          )}</>}
                               {data1.technical === "active" && <>

             {eleven !== '' && (
            <div className="mb-3">
              <label>Technical:</label>
              <Switch
                onChange={() => setEleven(eleven === 'active' ? 'inactive' : 'active')}
                checked={eleven === 'active'}
              />
            </div>
          )}</>}




{data1.chat === "active" && <>

{tewelve !== '' && (
<div className="mb-3">
 <label>Chat:</label>
 <Switch
   onChange={() => setTewelve(tewelve === 'active' ? 'inactive' : 'active')}
   checked={tewelve === 'active'}
 />
</div>
)}</>}
                                         {data1.organization === "active" && <>

             {seven !== '' && (
            <div className="mb-3">
              <label>Organization:</label>
              <Switch
                onChange={() => setSeven(seven === 'active' ? 'inactive' : 'active')}
                checked={seven === 'active'}
              />
            </div>
          )}</>}
                                                   {data1.report === "active" && <>

              {eight !== '' && (
            <div className="mb-3">
              <label>Report:</label>
              <Switch
                onChange={() => setEight(eight === 'active' ? 'inactive' : 'active')}
                checked={eight === 'active'}
              />
            </div>
          )}</>}
                                                             {data1.setting === "active" && <>

               {nine !== '' && (
            <div className="mb-3">
              <label>Setting:</label>
              <Switch
                onChange={() => setNine(nine === 'active' ? 'inactive' : 'active')}
                checked={nine === 'active'}
              />
            </div>
          )}</>}
          
</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setUpdateModalShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateConfirm}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>


{/* <Transition in={show} timeout={300} mountOnEnter unmountOnExit>
  {(state) => ( */}
    <Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
  aria-labelledby="contained-modal-title-vcenter"
  centered
  // className="tilt-in-right-1"
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
        {/* <button type="button" class="btn-flip" data-back="Back" data-front="" onClick={() => handleEdit(hh)}> */}
        <button type="button" class="btn-flip" data-back="Employee" data-front="Edit" onClick={() => handleEdit(hh)}>
  {/* <i className='fas fa-edit'></i> */}
</button>&nbsp;&nbsp;&nbsp;
<button type="button" class="btn-flip" data-back="Employee" data-front="Delete" onClick={() => deletePost(hh)}>
   {/* <i className='fas fa-trash'></i> */}
   </button>
&nbsp;&nbsp;&nbsp;
<button type="button" class="btn-flip" data-back="Employee" data-front="Active" onClick={()=> handleApprove(hh)}>
</button>&nbsp;&nbsp;&nbsp;

</div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
 {/* )}
 </Transition> */}



<Modal
show={editModal}
onHide={handleReqClose}
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
            <p>Employee</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>
<form onSubmit={handleSubmit}>
            <div class="form-group">
    <label for="EID">EID</label>
    <input type="text" class="form-control" id="EID"name="empid" onChange={handleChange} defaultValue={empid}readOnly placeholder="EID"/>
  </div>
  <div class="form-group">
    <label for="FullName">Full Name</label>
    <input type="text" class="form-control" id="FullName" name='name'   onChange={handleChange} defaultValue={fname} placeholder="Enter Full Name"/>
  </div>

  <div class="form-group">
    <label for="Gender">Gender</label>
    <input type="text" class="form-control"name="gender" id="Gender"onChange={handleChange} defaultValue={gender} placeholder="Enter Gender"/>
  </div>
  <div class="form-group">
    <label for="Phone">Phone-Number</label>
    <input type="text" class="form-control"name="mobile" id="Phone"onChange={handleChange} defaultValue={phone} placeholder="Enter Phone-Number"/>
  </div>
  <div class="form-group">
    <label for="User">User-Name</label>
    <input type="text" class="form-control"name='username' id="User"  onChange={handleChange} defaultValue={username} placeholder="Enter User-Name"/>
  </div>
 
  <div class="form-group">
    <label for="Role">Role</label>
    <input type="text" class="form-control"name="role" id="Role" onChange={handleChange} defaultValue={role}readOnly placeholder="Enter Role"/>
  </div>


      <div class="modal-footer">
        <Button variant="danger" onClick={handleReqClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-success animation-on-hover" >Save changes</button>
      </div>
        </form>
  
</Modal.Body>
<Modal.Footer>
 
 
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
            <h2>Active / Inactive<span></span></h2>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>Account</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

  <form   onSubmit={handleSubmit}  >
            <div class="form-group">
    <label for="EID">Current Status</label>
    <input type="text" defaultValue={status1} readOnly hidden class="form-control" id="EID" />
    <span style={{marginLeft:`center`}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getStatusElement2(status1)}</span>
  </div> 
  <label for="EID">Action</label>

  <select  id="selectId"  class="form-control"   name='status'  onChange={handleChange}>
                 
                 {kk.map((item) => (
                 <option value={item} key={item}>
                   {" "}
                   {getStatusElement1(item)}{" "}
                 </option>
               ))}
                </select> 
  <div class="modal-footer">
  <Button variant="danger" onClick={handleAppClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-success animation-on-hover" >Approve</button>
      </div>
  </form>
  {/* onClick={() => handleActivity()} */}
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>


</div>
</div>
    </div> 



    <Footeradmin/>
    </section>
    </div> 
  )
}

export default Employee


function getStatusElement(status) {
  if (status === "active") {
    return <div class="ribbons-wrapper">
     <span class="ribbon">
    <span class="ribbon4">Active</span>
  </span></div>
  } else {
    return     <div class="ribbons-wrapper">
     <span class="ribbon">
    <span class="ribbon3">Inactive</span>
  </span></div>
  }
}
function getStatusElement1(item) {
  if (item === 1) {
    return <span className="btn btn-success">Active</span>;
  } else {
    return <span className="btn btn-danger">Inactive</span>;
  }
}
function getStatusElement2(status1) {
  if (status1 === 1) {
    return <span className="btn btn-success">Active</span>;
  } else {
    return <span className="btn btn-danger">Inactive</span>;
  }
}