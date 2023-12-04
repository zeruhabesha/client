  /* eslint-disable jsx-a11y/anchor-is-valid */
  /* eslint-disable no-unused-vars */
  import React,{useState,useEffect,useRef} from 'react';
  import { useDispatch,useSelector } from 'react-redux';
  import {registerOrg} from './action/employee_action';
  import {getEmployee} from './action/employee_action';
  import {registerTender,UploadTask} from './action/employee_action';
  import axios from 'axios';
  import {Button,Modal} from "react-bootstrap"
  import {useParams} from 'react-router-dom'
  import './table.css';
  import {  registerUser } from '../apis/auth'
  import Switch from 'react-switch';

  // import './table.js';
  import { BsEmojiLaughing, BsEmojiExpressionless } from "react-icons/bs"
import { toast } from 'react-toastify';
  import { Link,useNavigate} from 'react-router-dom';
  import Pagination from 'react-bootstrap/Pagination';
  import Sidebar from './Sidebar';
  // import { ThemeContext } from '@mui/system';
  import { FiChevronDown, FiChevronRight, FiFilter, FiChevronLeft, FiChevronUp } from 'react-icons/fi';
  import { CSVLink } from 'react-csv';
  import { FaUserEdit } from 'react-icons/fa';
  
  import { AiFillDelete } from 'react-icons/ai';
  // AiFillDelete,MdDelete
  import './Tables.css'; // Import custom CSS for styling   useState(defaultData)
  import './PrintTable.css';


  
  const Org = () => {
    


    const [eid,setEid] = useState("")
    const [oid,setOid] = useState("")
  const [employee,setEmployee]=useState("")
    const[oname,setOname]=useState("")
    const [tenderno,setTenderno] = useState("")
    const fileInputRef = useRef(null);
    const [priority,setPriority] = useState("")
    const {id} = useParams();
    const [applicants, setApplicants] = useState([]);
    const [applicants1, setApplicants1] = useState([]);


    const [end,setEnd] = useState("")
    const [location,setLocation] = useState("")
    const [link,setLink] = useState("")
    // const [file,setFile] = useState("")
    const [fullname,setFullname] = useState("")
    const [email1,setEmail1] = useState("")
    const [location1,setLocation1] = useState("")
    const [addres,setAddres] = useState("")
    const [username1,setUsername1] = useState("")
    const [password1,setPassword1] = useState("")
    const [role1,setRole1] = useState("")
    const [photo1,setPhoto1] = useState("")




    // start,end,location,link,status,address,city,country,assign,
    //           bind,documentfee,region,category,projectmanager,opendate,enddate,description


    const [show, setShow] = useState(false);
    const kk = [1,0];
    const [value,setValue] = useState("")
  
    const[technical,setTechnical] = useState("")
    const[service,setService] = useState("")
    const[blog,setBlog] = useState("")
    const[report,setReport] = useState("")
    const[setting,setSetting] = useState("")
    const[others,setOthers] = useState("")


    const [empid,setEmpid] = useState("")
    const [fname,setFname] = useState("")
    const [mname,setMname] = useState("")
    const [lname,setLname] = useState("")
    const [email,setEmail] = useState("")
    const[phone,setPhone]=useState("")
      const[password,setPasword]=useState("")

    const [role,setRole] = useState("")
    const[Estatus,setEstatus]=useState("")
    const [gender,setGender] = useState("")
    const [username,setUsername] = useState("")
    const [end1,setEnd1] = useState("")
    const [mobile,setMobile] = useState("")
    const [link1,setLink1] = useState("")
    const [sdate,setSdate] = useState("")
    const [edate,setEdate] = useState("")
    const [address,setAddress] = useState("")
    const [addemployee, setAddemployee] = useState(false);

    const [file1,setFile1] = useState("")
    const [hh,setHh] = useState("")
    const Role = ["Admin", "Employee"]
   

    const dispatch = useDispatch()
  //   useEffect(()=>{
  //     dispatch(userProfile())
  // },[])



  const [isLoading, setIsLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()
  const handleOnChange = (e) => {
    setFormData({ ...formData,oid: empid, [e.target.name]: e.target.value })
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (formData.email.includes("@") && formData.password.length > 6) {
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
  const [admin,setAdmin]=useState('')
  const [admin1,setAdmin1]=useState('')


  const handleAddEmp1 = (item) =>{
    setAdmin(true);
    setEmpid(empid)

    // setShow(false);
  }
  const handleviewadmin = (item) =>{
    setAdmin1(true);
    setEmpid(empid)

    // setShow(false);
  }
  const handleviewadmin1 = () =>{
    setAdmin1(false);
    // setShow(true);
  }
  const handleAddEmpClose1 = () =>{
    setAdmin(false);
    // setShow(true);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('userToken');

        const response = await axios.get(`http://localhost:8005/findxx/${empid}`);
        setApplicants1(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [empid]);


    const handleClose = () => setShow(false);
    const handleShow = (item) => {
      setShow(true)
      setHh(item._id)
      setEmpid(item.oid)
      setFname(item.fname)


      setEmail1(item.email)
    setPhone(item.mobile)

      setEstatus(item.status)
      setLocation1(item.addres)
    
    };
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
const[tewelve,Settewelve]=useState("");

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
    
    
    };
    
    const handleUpdateConfirm = async () => {
      try {
        await axios.put(`http://localhost:8005/api/org/${selectedUser._id}`, {
          role: selectedRole, status: selectedStatus, dashboard: one,employee:two,
          request: three,tender: four, documentation:five,
          quotation:six, organization:seven,blog:eight, report:nine, setting:ten,
          technical:eleven,
        });
    
        setUpdateModalShow(false);
    
      } catch (error) {
        console.error('Error updating user:', error);
      }
    };

    
    const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
    // console.log(currentUser);
    

    const [formData, setFormData] = useState({
 
      firstname: "",
      lastname: "",
      oid:"",
      email: "",
      password: "",
      mobile:"",
      gender:"",
      username:"",
      profilePic:"",
      role:"Admin"
    })
      
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [duration, setDuration] = useState('');
    const [deadline, setDeadline] = useState('');
    const [active, setActive] = useState('');
    const [daysLeft, setDaysLeft] = useState('');
  
    useEffect(() => {
      const now = new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
      const timeLeft = midnight.getTime() - now.getTime();
      setTimeout(() => {
        const daysLeft = getDaysLeft(deadline);
        setDaysLeft(daysLeft);
      }, timeLeft);
    }, [deadline]);
  
    const handleStartDateChange = (e) => {
      setStartDate(e.target.value);
    };
  
    const handleEndDateChange = (e) => {
      setEndDate(e.target.value);
    };
    const handleDeadline = (e) => {
      setDeadline(e.target.value);
    };
    const handleAddress = (e) => {
      setAddress(e.target.value);
    };
    const HandleEmail = (e) => {
      setEmail(e.target.value);
    };
    const handleMobile= (e) => {
      setMobile(e.target.value);
    };
    const handleFname= (e) => {
      setFname(e.target.value);
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:8005/sub', { startDate, endDate,mobile,fname,email,address ,deadline});
        const { startDate: resStartDate, endDate: resEndDate, durationInDays, daysLeft: resDaysLeft } = res.data;
        setDuration(durationInDays);
        const now = new Date();
        const deadlineDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + durationInDays, 0, 0, 0);
        setDeadline(deadlineDate);
        setDaysLeft(resDaysLeft);
        setActive(getDaysLeft(deadlineDate) > 0);
        setStartDate('');
        setEndDate('');
      } catch (err) {
        console.error(err);
      }
    };
  
    const getDaysLeft = (deadlineDate) => {
      const now = new Date();
      const timeLeft = deadlineDate.getTime() - now.getTime();
      return Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
    };




  const deletePost = (id) => {
    console.log(id);

    axios.delete(`http://localhost:8005/delete-org/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));


  };
  const handleRequest = ()=> {
    const obj = {
    
        hh,technical,service,blog,report,setting,others,
    
    }
  
  dispatch(UploadTask(obj))


  }

      

  


  const showDetail = (_id) =>
  {

  fetch(`http://localhost:8005/AllRequest/${_id}`)
  .then(resposne=> resposne.json())
  .then(res=>setApplicants(res))
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
      `http://localhost:8005/update-org/${hh}`, formValues)
      .then(res => {
        if(res.status ===200){
          alert('A record successfuly updated')
          // Push to /
          window.location.href = "/employee";
        }else{
          Promise.reject()
        }
      })
      .catch(err => alert('Something went wrong! ' +err.message))
      // Push to /
    
  }



  const toggleSidebar = () => {
      const sidebar = document.querySelector("nav");
      sidebar.classList.toggle("close");
      localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
    }; 



    const [searchTerm, setSearchTerm] = useState("");


    // useEffect(() => {
    //   axios
    //     .get("http://localhost:8005/findx")
    //     .then((res) => {
    //       setApplicants(res.data);
    //     })
    //     .catch((err) => {
    //       console.log("Data not found" + err.message);
    //     });
    // }, []);
    const [data, setData] = useState([]);
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [expandedRow, setExpandedRow] = useState(null); // Track the expanded row
    const [filteredData, setFilteredData] = useState([]);
    const [columns, setColumns] = useState({
      fname: true,
      email: true,
      startDate: true,
      endDate: true,
      username: true,
      address: true,
      mobile: true,
      status:true
    });

    useEffect(() => {
      fetchData();
    }, [sortField, sortOrder, searchQuery, currentPage]);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8005/findorg', {
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
    
    const handleAddEmp = () =>{
      setAddemployee(true);
      // setShow(false);
    }
    const handleAddEmpClose = () =>{
      setAddemployee(false);
      // setShow(true);
    }
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
        (item.fname?.toLowerCase().includes(query.toLowerCase()) ||
        item.startDate?.toLowerCase().includes(query.toLowerCase())||
        item.endDate?.toLowerCase().includes(query.toLowerCase())||

        item.email?.toLowerCase().includes(query.toLowerCase())||
        item.mobile?.toLowerCase().includes(query.toLowerCase())||
        item.address?.toLowerCase().includes(query.toLowerCase())||
        item.edate?.toLowerCase().includes(query.toLowerCase()))
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
        fname: item.fname,
        email: item.email,
        mobile: item.mobile,
        address: item.address,
        startDate: item.startDate,
        endDate: item.endDate,
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
      setIsDropdownOpen(!isDropdownOpen);
      // event.preventDefault();
    };

    return (
      <div>

          <Sidebar/>
          <section class="dashboard">
        <div class="top">
        <button class="uil uil-bars sidebar-toggle" onClick={toggleSidebar}>    
                  {/* <i ></i> */}
                  </button>
          <div class="search-box">
            
            
          <button type="button"style={{backgroundColor:"teal"}}  onClick={handleAddEmp}>
    Add Organization
  </button>
          </div>

        </div>


  

  <div>
          

          <div className="data-table-container">
  
          {/* <div className="column-visibility"> */}
        
          <div>
          <div className="row">
        <div className="col-sm-12 col-md-6">
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
          
      
      <div className="btn-group">
      <button
        style={{ fontSize: 'medium' }}
        className="btn btn-primary buttons-collection dropdown-toggle buttons-colvis"
        type="button"
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
        onClick={toggleDropdown}
      >
        <span>Column visibility</span>
        <span className="dt-down-arrow"></span>
      </button>
      {isDropdownOpen && (
        <div className="dt-button-collection" style={{ top: '76px', left: '6.5px' }}>
          <div className="dropdown-menu" role="menu">
            {Object.keys(columns).map((column) => (
              <a
                key={column}
                // className="dt-button dropdown-item buttons-columnVisibility active"
                tabIndex="0"
                aria-controls="example1"
                href="#"
                data-cv-idx={column}
              >
                <span>{column}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>

      </div></div>
        {/* <div className="col-sm-12 col-md-6">
          <div id="example1_filter" className="dataTables_filter">
            <label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="example1" /></label>
          </div>
        </div> */}
      </div>
    
    
      <select>
    {Object.keys(columns).map((column) => (
      <option key={column}>
        <input
          type="checkbox"
          checked={columns[column]}
          onChange={() => toggleColumnVisibility(column)}
        />
        {column}
      </option>
    ))}
  </select>
        </div>
        <input
              type="search"
              placeholder="Search by name or gender..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          {/* Export to CSV */}

        {/* Print Table */}
        
      
            <FiFilter />
          
            <button type="button"style={{backgroundColor:"teal"}}  onClick={handleAddEmp}>
    Add Organization
  </button>
        <div>
        
        </div>
        <table className="data-table1">
          {/* Table header */}
          <thead>
            <tr>
              {columns.fname && (
                <th onClick={() => handleSort('fname')}>
                  Name
                  {sortField === 'fname' && sortOrder === 'asc' && <FiChevronUp />}
                  {sortField === 'fname' && sortOrder === 'desc' && <FiChevronDown />}
                </th>
              )}
              {columns.email && (
                <th onClick={() => handleSort('email')}>
                  Email
                  {sortField === 'email' && sortOrder === 'asc' && <FiChevronUp />}
                  {sortField === 'email' && sortOrder === 'desc' && <FiChevronDown />}
                </th>
              )}
              {columns.address && (
                <th onClick={() => handleSort('address')}>
                  Address
                  {sortField === 'address' && sortOrder === 'asc' && <FiChevronUp />}
                  {sortField === 'address' && sortOrder === 'desc' && <FiChevronDown />}
                </th>
              )}
                {columns.startDate && (
                <th onClick={() => handleSort('startDate')}>
                  Start Date
                  {sortField === 'startDate' && sortOrder === 'asc' && <FiChevronUp />}
                  {sortField === 'startDate' && sortOrder === 'desc' && <FiChevronDown />}
                </th>
              )}
  
  {columns.endDate && (
                <th onClick={() => handleSort('endDate')}>
                End Date
                  {sortField === 'endDate' && sortOrder === 'asc' && <FiChevronUp />}
                  {sortField === 'endDate' && sortOrder === 'desc' && <FiChevronDown />}
                </th>
              )}

  {columns.mobile && (
                <th onClick={() => handleSort('mobile')}>
                  Phone no
                  {sortField === 'mobile' && sortOrder === 'asc' && <FiChevronUp />}
                  {sortField === 'mobile' && sortOrder === 'desc' && <FiChevronDown />}
                </th>
              )}
                {columns.status && (
                <th onClick={() => handleSort('status')}>
                  Status
                  {sortField === 'status' && sortOrder === 'asc' && <FiChevronUp />}
                  {sortField === 'status' && sortOrder === 'desc' && <FiChevronDown />}
                </th>
              )}
              <th>Action</th>
              <th>Action</th>

            </tr>
          </thead>
          {/* Table body */}
          <tbody>
          {displayedData && displayedData.map((item) => (
              <React.Fragment key={item._id}>
                {/* Main row */}
                <tr onClick={() => handleRowToggle(item._id)}>
              
                  {columns.fname && <td>
                  {getRowToggleIcon(item._id)} {item.fname}</td>}
                  {columns.email && <td>{item.email}</td>}
                  {columns.address && <td>{item.address}</td>}
                  {columns.startDate && <td>{item.startDate}</td>}
                  {columns.endDate &&<td>{new Date(item.endDate).toLocaleDateString()}</td>
}
                  {columns.mobile && <td>{item.mobile}</td>}
                  {columns.status && <td>{item.status}</td>}

                  {/* <button onClick={()=> handleShow(item)} style={{backgroundColor:"red"}}>Action</button> */}
                 <td>
  <button onClick={()=> handleShow(item)} style={{backgroundColor:"#4CAF50", border:"none",color:"white",padding:"15px 32px",textAlign:"center"
  ,textDecoration:"none",display:"inline-block",fontSize:"16px",margin:"4px 2px",cursor:"pointer",borderRadius:"10px"}}>Action</button>
  </td>
  <td>

<Button onClick={() => handleUpdate(item)}>Update</Button>
</td>
                </tr>
               

                {/* Expanded row */}
                {expandedRow === item._id && (
                  <tr>
                    <td colSpan={Object.keys(columns).filter((column) => columns[column]).length - 1}>
                      Name: {item.fname}<br></br>
                    
                      Email: {item.email}<br></br>
                      Mobile: {item.mobile}<br></br>
                      Address: {item.address}<br></br>
                      Start Date: {item.startDate}<br></br>
                      End Date: {item.endDate}<br></br>
                      Status: {item.status}<br></br>
                      oid: {item.oid}<br></br>


  
  
                    </td>

                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
        {/* Pagination */}
        <div className="pagination">
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
        show={admin}
       onHide={handleAddEmpClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add  Admin for {fname} {empid}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
        {/* <div className='absolute -top-7 left-0'>
          <h3 className=' text-[25px] font-bold tracking-wider text-[#fff]'>Register</h3>
          <p className='text-[#fff] text-[12px] tracking-wider font-medium'>Have Account ? <Link className='text-[rgba(0,195,154,1)] underline' to="/login">Sign in</Link></p>
        </div> */}
        <form className='flex flex-col gap-y-3 mt-[12%]' onSubmit={handleOnSubmit}>
          <div className='flex gap-x-2 w-[100%]'>
            <input onChange={handleOnChange} className='bg-[#F5F5F5] h-[50px] pl-3 text-[#000000] w-[49%] sm:w-[47%]' type="text" name="firstname" placeholder='First Name' value={formData.firstname} required />
            <input onChange={handleOnChange} className='bg-[#F5F5F5] h-[50px] pl-3 text-[#000000] w-[49%] sm:w-[47%]' type="text" name="lastname" placeholder='Last Name' value={formData.lastname} required />
          </div>
          {/* <div>
            <input onChange={handleOnChange} className='bg-[#F5F5F5] h-[50px] pl-3 text-[#000000] w-[100%] sm:w-[96.3%]' type="text" name="oid" placeholder="oid" value={formData.oid} required />
          </div> */}
          <div>
            <input onChange={handleOnChange} className='bg-[#F5F5F5] h-[50px] pl-3 text-[#000000] w-[100%] sm:w-[96.3%]' type="email" name="email" placeholder="Email" value={formData.email} required />
          </div>
          <div>
            <input onChange={handleOnChange} className='bg-[#F5F5F5] h-[50px] pl-3 text-[#000000] w-[100%] sm:w-[96.3%]' type="text" name="gender" placeholder="gender" value={formData.gender} required />
          </div>
          <div>
            <input onChange={handleOnChange} className='bg-[#F5F5F5] h-[50px] pl-3 text-[#000000] w-[100%] sm:w-[96.3%]' type="text" name="username" placeholder="username" value={formData.username} required />
          </div>
          <div>
            <input onChange={handleOnChange} className='bg-[#F5F5F5] h-[50px] pl-3 text-[#000000] w-[100%] sm:w-[96.3%]' type="text" name="mobile" placeholder="mobile" value={formData.mobile} required />
          </div>
          <div>
            <input onChange={handleOnChange} className='bg-[#F5F5F5] h-[50px] pl-3 text-[#000000] w-[100%] sm:w-[96.3%]' type="text" name="role" placeholder="role" value={formData.role} required />
          </div>
          <div className='relative flex flex-col gap-y-3'>
            <input onChange={handleOnChange} className='bg-[#F5F5F5] h-[50px] pl-3 text-[#000000] w-[100%] sm:w-[96.3%]' type={showPass ? "text" : "password"} name="password" placeholder="Password" value={formData.password} required />


            {/* <button onCli type="button">
              <BsEmojiExpressionless className='text-[#fff] absolute top-3 right-6 w-[30px] h-[25px]' />
            </button> */}
            {
              !showPass ? <button type='button'><BsEmojiLaughing onClick={() => setShowPass(!showPass)} className='text-[#fff] absolute top-3 right-4 sm:right-6 w-[30px] h-[25px]' /></button> : <button type='button'> <BsEmojiExpressionless onClick={() => setShowPass(!showPass)} className='text-[#fff] absolute top-3 right-4 sm:right-6 w-[30px] h-[25px]' /></button>
            }


          </div>
          <button style={{ background: "linear-gradient(90deg, rgba(0,195,154,1) 0%, rgba(224,205,115,1) 100%)" }} className='w-[100%]  sm:w-[96.3%] h-[50px] font-bold text-[#121418] tracking-wide text-[17px] relative' onClick={handleAddEmpClose} type='submit'>
            <div style={{ display: isLoading ? "" : "none" }} className='absolute -top-[53px] left-[29.5%] sm:-top-[53px] sm:left-[87px]'>

              <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_h9kds1my.json" background="transparent" speed="1" style={{ width: "200px", height: "160px" }} loop autoplay></lottie-player>
            </div>
            <p style={{ display: isLoading ? "none" : "block" }} className='test-[#FFFFFF]'>Regsiter</p>
          </button>
          <p className='text-[#fff] text-center sm:-ml-8'>/</p>
          {/* <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            render={(renderProps) => (
              <button style={{ borderImage: "linear-gradient(to right, rgba(0,195,154,1) 50%, rgba(224,205,115,1) 80%)", borderImageSlice: "1" }} onClick={renderProps.onClick} disabled={renderProps.disabled} aria-label="Continue with google" className="focus:ring-2 focus:ring-offset-1   py-3.5 px-4 border rounded-lg  flex items-center w-[100%]  sm:w-[96.3%]" disableElevation={true} disableFocusRipple={true}>
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google" />
                <p className="text-[base] font-medium ml-4 text-[#fff]">Continue with Google</p>
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={'single_host_origin'}
          /> */}
        </form>
   
</Modal.Body>

</Modal>

<Modal show={updateModalShow} onHide={() => setUpdateModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedStatus !== '' && (
            <div className="mb-3">
              <label>Status:</label>
              <Switch
                onChange={() => setSelectedStatus(selectedStatus === 'active' ? 'inactive' : 'active')}
                checked={selectedStatus === 'active'}
              />
            </div>
          )}
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
            {two !== '' && (
            <div className="mb-3">
              <label>Employee:</label>
              <Switch
                onChange={() => setTwo(two === 'active' ? 'inactive' : 'active')}
                checked={two === 'active'}
              />
            </div>
          )}
             {three !== '' && (
            <div className="mb-3">
              <label>Request:</label>
              <Switch
                onChange={() => seThree(three === 'active' ? 'inactive' : 'active')}
                checked={three === 'active'}
              />
            </div>
          )}
             {four !== '' && (
            <div className="mb-3">
              <label>Tender:</label>
              <Switch
                onChange={() => setFour(four === 'active' ? 'inactive' : 'active')}
                checked={four === 'active'}
              />
            </div>
          )}
             {five !== '' && (
            <div className="mb-3">
              <label>Documentation:</label>
              <Switch
                onChange={() => setFive(five === 'active' ? 'inactive' : 'active')}
                checked={five === 'active'}
              />
            </div>
          )}
             {six !== '' && (
            <div className="mb-3">
              <label>Quotation:</label>
              <Switch
                onChange={() => setsix(six === 'active' ? 'inactive' : 'active')}
                checked={six === 'active'}
              />
            </div>
          )}
             {eleven !== '' && (
            <div className="mb-3">
              <label>Technical:</label>
              <Switch
                onChange={() => setEleven(eleven === 'active' ? 'inactive' : 'active')}
                checked={eleven === 'active'}
              />
            </div>
          )}
             {seven !== '' && (
            <div className="mb-3">
              <label>Organization:</label>
              <Switch
                onChange={() => setSeven(seven === 'active' ? 'inactive' : 'active')}
                checked={seven === 'active'}
              />
            </div>
          )}
              {eight !== '' && (
            <div className="mb-3">
              <label>Report:</label>
              <Switch
                onChange={() => setEight(eight === 'active' ? 'inactive' : 'active')}
                checked={eight === 'active'}
              />
            </div>
          )}
               {nine !== '' && (
            <div className="mb-3">
              <label>Setting:</label>
              <Switch
                onChange={() => setNine(nine === 'active' ? 'inactive' : 'active')}
                checked={nine === 'active'}
              />
            </div>
          )}
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
<Modal
        show={admin1}
       onHide={handleviewadmin1}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>View  Admins for {fname} {empid}</Modal.Title>
        </Modal.Header>


   
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap"
							>
								<thead>
								<tr>
                    <th>EID</th>
                    <th>Full Name</th>
										<th>Email</th>
										<th>Role</th>
                   
									</tr>
								</thead>
								<tbody>
                {applicants1.map((user, i) =>(
        <tr key={user._id}>
             
									 <td>{user.empid}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
         
       
									
                    <td>
 <button class="btn btn-light"   onClick={() => handleShow(user)} ><i className="fa fa-plus"></i></button>
              </td>
</tr>  ))}
								</tbody>
							</table>
						</div>
				
        <Modal.Body>
       
   
</Modal.Body>

</Modal>

            <Modal
          show={addemployee}
        onHide={handleAddEmpClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Organization</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h5 class="modal-title" id="exampleModalLongTitle">{currentUser && currentUser[0] && currentUser[0].email}</h5>

          <form onSubmit={handleFormSubmit}>
      
    <div class="form-group">
      <label for="FullName">Full Name</label>
      <input type="text" class="form-control" id="FullName"  
    value={fname} onChange={handleFname} required

      placeholder="Enter Full Name"/>
    </div>
    <div class="form-group">
      <label for="Email">Email</label>
      <input type="email" class="form-control" id="Email"  
   value={email} onChange={HandleEmail} required
      placeholder="Enter Email"/>
    </div>
  
    <div class="form-group">
      <label for="Phone">Phone-Number</label>
      <input type="text" class="form-control" id="Phone" 
 value={mobile} onChange={handleMobile} required
      placeholder="Enter Phone-Number"/>
    </div>
    <div class="form-group">
      <label for="User">Address</label>
      <input type="text" class="form-control" id="User"  
   value={address} onChange={handleAddress} required
      placeholder="Enter Addres"/>
    </div>
    <div class="form-group">
      <label for="User">Start Date</label>
      <input type="date" class="form-control" id="User"  
  
  value={startDate} onChange={handleStartDateChange} required
      placeholder="Enter Start Dte"/>
    </div>
    <div class="form-group">
      <label for="User">End Date</label>
      <input type="date" class="form-control" id="User"  
  
  value={endDate} onChange={handleEndDateChange} required
      placeholder="Enter End ate"/>
    </div>
 
    

    <div class="modal-footer">
          <button type="button" onClick={handleAddEmpClose} class="btn btn-danger">Close</button>
          <button type="submit">Calculate duration</button>
    </div>
  </form><div>
  {duration && (
        <div>
          <p>Duration: {duration} days</p>
          <p>Deadline: {deadline.toLocaleDateString()}</p>
          <p>Active: {active.toString()}</p>
          <p>Days left: {daysLeft}</p>
        </div>
      )}
    </div>
  </Modal.Body>

  </Modal>


  <Modal
          show={show}
        onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Action For {fname} {empid} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h5 class="modal-title" id="exampleModalLongTitle">{currentUser && currentUser[0] && currentUser[0].email}</h5>
          <button onClick={()=> handleAddEmp1()}  style={{backgroundColor:"#4CAF50", border:"none",color:"white",padding:"15px 32px",textAlign:"center"
  ,textDecoration:"none",display:"inline-block",fontSize:"16px",margin:"4px 2px",cursor:"pointer",borderRadius:"10px"}}>Create Admin</button> 
   <button  onClick={()=> handleviewadmin()}  style={{backgroundColor:"#4CAF50", border:"none",color:"white",padding:"15px 32px",textAlign:"center"
  ,textDecoration:"none",display:"inline-block",fontSize:"16px",margin:"4px 2px",cursor:"pointer",borderRadius:"10px"}}>View Admin</button><br></br><button><FaUserEdit style={{ width: '50px',color:'blue', height: '50px' }}  /> </button>
  <button  > <AiFillDelete style={{ width: '50px',color:'red', height: '50px' }}  /></button>
<div class="modal-footer">

</div>

  </Modal.Body>
 
  </Modal>





    </section>

  {/* <Footer/> */}
  </div>
    )
  }

  export default Org