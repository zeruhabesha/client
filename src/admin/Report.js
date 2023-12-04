/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect,useRef} from 'react';
import { useDispatch } from 'react-redux';
// import Footer from './components/Footer'
import Sidebar from './Sidebar'
import axios from 'axios';
import {Button,Modal} from "react-bootstrap"
import Pagination from 'react-bootstrap/Pagination';
// import { ThemeContext } from '@mui/system';
import { FiChevronDown, FiChevronRight, FiFilter, FiChevronLeft, FiChevronUp } from 'react-icons/fi';
import { CSVLink } from 'react-csv';
import {useParams,Link} from 'react-router-dom'
import './Tables.css'; // Import custom CSS for styling
import './PrintTable.css';
import Imagess from "./images/sample.jpg";
import Report1 from "./images/Report.png";
import Footeradmin from './Footeradmin';
import Navadmin from './Navadmin';
// import ShareThis from "react-sharethis";


const Report = () => {

  const [eid,setEid] = useState("")
  const [itemno,setItemno] = useState("")
  const [itemname,setItemname] = useState("")
  const[modelno,setModelno]=useState("")
  const [brandname,setBrandname] = useState("")
  const[origion,setOrigion]=useState("")
  const [unit,setUnit] = useState("")
  const [tid,setTid] = useState("")
  const [item_no,setItem_no] = useState("")
  const [quotation, setQuotation] = useState([]);
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
  const [quotation1, setQuotation1] = useState([]);
  const [price1,setPrice1] = useState("")
  const [specification1,setSpecification1] = useState("")
  const [description1,setDescription1] = useState("")
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [qq, setQq] = useState(false);
  const [editq, setEditQ] = useState(false);
  const [addq, setAddQ] = useState(false);
  // const [editq, setEditQ] = useState(false);
  const [editq2, setEditQ2] = useState(false);

  const [editModal, setEditModal] = useState(false);
  const [file, setFile] = useState(false);

  const [catalogfile,setCatalogfile] = useState("")
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
    setFile(user.file)
 
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
    setFile(user.file)
 
  };

  const handleShow34 = (user) => {
    setQq(true)
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
    setFile(user.file)
 
  };


  const handleShow1Close = () => {
    setShow1(false)
    setShow(true);

  };
  const handleShow35 = () => {
    setQq(false)
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
      formData.append("eid",eid);
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
        "http://localhost:8005/api/addQotation",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };


  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([]);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://api.example.com/data');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  useEffect(() => {
    fetchOptions();
  }, []);

  useEffect(() => {
    if (selectedOption) {
      fetchData();
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

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8005/dd?option=${selectedOption}`);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
const jj="T-0008"
const kk="2323"
// const [checked, setChecked] = React.useState(false);
const AddQotatin23 = async (e) => {
  // setChecked(!checked);
  // setTimeout(() => {
    //   setActive(false);
    // }, 3000);
    
    e.preventDefault();
    try {
      
      //  eid, itemno, itemname, modelno, brandname, origion ,unit, price ,specification ,description
      const formData = new FormData();
      formData.append("tid",selectedOption);
      formData.append("item_no", item_no);
 
    
      const res = await axios.post(
        "http://localhost:8005/api/addQotation",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
const [remark,setRemark]=useState('');
const [obid,setObid]=useState('');

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


  const AddQotatin241 = async () => {
    const formData = new FormData();
    // formData.append("tid",selectedOption);
      formData.append("remark", remark);
      // formData.append("item_no", item_no);
      formData.append("id", obid);

    try {
      // Send the formData to the server
      await fetch('http://localhost:8005/api/updateQ', {
        method: 'POST',
        body: formData
      });
      console.log('  succes congra!');
    } catch (error) {
      console.error('Error:', error);
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
  
  useEffect(() => {
    axios.get("http://localhost:8005/list-quotation23")
      .then((res) => {
        setQuotation(res.data);
      })
      .catch((err) => {
        console.log("Data not found" + err.message);
        // console.log(currentUser);
      }, []);
    //console.log(applicants);
  });

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
  // const downloadFile = async (id, path, mimetype) => {
  //   try {
  //     const result = await axios.get(`${API_URL}/download/${id}`, {
  //       responseType: 'blob'
  //     });
  //     const split = path.split('/');
  //     const filename = split[split.length - 1];
  //     setErrorMsg('');
  //     return download(result.data, filename, mimetype);
  //   } catch (error) {
  //     if (error.response && error.response.status === 400) {
  //       setErrorMsg('Error while downloading file. Try again later');
  //     }
  //   }
  // };



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
  }, [sortField, sortOrder, searchQuery, currentPage]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8005/list-quotation23', {
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
<img src={Report1} class="img8"alt="employee" style={{width:`30%`}}/>
<br/>


{/* <ShareThis
      options={shareThisOptions}
      networks={["print", "facebook", "whatsapp", "pinterest", "reddit", "mailru"]}
    /> */}



<div class="dash-content">
      <article class="train">
        <div class="temporary_text">Employee Report</div>
        <div class="train_content">
          <span class="train_title">Employee Report Here..</span>
          <span class="train_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <label
            className="trainan"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
              <i class="fas fa-user"></i> &nbsp;More
          </label>
        </div>
      </article>
      <article class="train">
        <div class="temporary_text">Request Report</div>
        <div class="train_content">
          <span class="train_title">
            View Request Report Here..
          </span>
          <span class="train_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <a
            href="#"
            className="trainan"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
<i class="fas fa-user"></i> &nbsp;More          </a>
        </div>
      </article>
      <article class="train">
        <div class="temporary_text">Tender Report</div>
        <div class="train_content">
          <span class="train_title">Tender Report Here..</span>
          <span class="train_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <label
            className="trainan"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            <i class="fas fa-user"></i> &nbsp;More  
                       
          </label>
        </div>
      </article>
      <article class="train">
        <div class="temporary_text">Employee Status </div>
        <div class="train_content">
          <span class="train_title">Employee Status Report Here..</span>
          <span class="train_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <label
            className="trainan"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            <i class="fas fa-user"></i> &nbsp;More  
                       
          </label>
        </div>
      </article>
      
      

</div></div></div>
</div> 

<Footeradmin/>
    </section>
    </div> 
  )
}

export default Report


