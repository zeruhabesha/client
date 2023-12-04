/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from 'react';
import{useRef} from 'react';
import { FiChevronDown, FiChevronRight, FiFilter, FiChevronLeft, FiChevronUp } from 'react-icons/fi';
import { CSVLink } from 'react-csv';
import { Switch,Route, useHistory} from 'react-router-dom';
import {getEmployee} from './action/employee_action';
import {UploadTask1} from './action/employee_action';
import {AddFinancial,AddTUC,AddUp,FinancialCsv} from './action/employee_action';
import { Dropdown, DropdownButton , Form} from "react-bootstrap";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import {Button} from "react-bootstrap"
import {useParams} from 'react-router-dom'
import Sidebar from './Sidebar';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import './table.css';
import './tender.css';
import Tender1 from "./images/tender.png";



// import './table.js';
import { Link} from 'react-router-dom';
import { UploadTask,uploadStuMark } from './action/tender_action';
import {registerUpload} from './action/employee_action';
import{userProfile}from './action/employee_action';
import Footeradmin from './Footeradmin';
import Navadmin from './Navadmin';
const Tender = ({yared,abay}) => {

	const [tid,setTid] = useState("")
	const [tid1,setTid1] = useState("")
	const [csvData, setCSVData] = useState(null);
	const fileInputRef = useRef(null);

	const header = ['tid', 'item_no','item_name','unit','qty','description','cdate'];
	const [tenderuser,setTenderuser] = useState("")
	const[tenderid,setTenderid] = useState("")
	const[type,setType] = useState("Audit")

	const[viewaudit,setViewaudit] = useState("")
	const type1="Authorization",type2="Bank",
	type3="Company",type4="Exprience",type5="Quality",
	type6="Methodology",type7="Cv",type8="license",
	type9="Trailing",type10="Cad-Design",type12="Tenderparticipation"

////



const dispatch=useDispatch()




const [errorMsg, setErrorMsg] = useState('');

const[cv,setCv] = useState("")
const[cv1,setCv1] = useState("")
const[cv44,setCv44] = useState("")
const[experiance,setExperiance] = useState("")
const[experiance1,setExperiance1] = useState("")
const[experiance44,setExperiance44] = useState("")

const[audit,setAudit] = useState("")
const[audit44,setAudit44] = useState("")
const[document23,setDocument23] = useState([])
const [viewdocument,setViewdocument] = useState("")
const[license,setLicense] = useState("")
const[license1,setLicense1] = useState("")
const[license44,setLicense44] = useState("")
const[bank,setBank] = useState("")
const[bank1,setBank1] = useState("")
const[bank44,setBank44] = useState("")

const[catalog,setCatalog] = useState("")
const[catalog44,setCatalog44] = useState("")

const[compliance,setCompliance] = useState("")
const[authorization,setAuthorization] = useState("")
const[authorization44,setAuthorization44] = useState("")

const[companyprofile,setCompanyprofile] = useState("")
const[companyprofile44,setCompanyprofile44] = useState("")

const[cad,setCad] = useState("")
const[cad44,setCad44] = useState("")

const[cad1,setCad1] = useState("")
const[audit1,setAudit1] = useState("")
const[methodology,setMethodology] = useState("")
const[methodology1,setMethodology1] = useState("")
const[methodology44,setMethodology44] = useState("")

const[financial,setFinancial] = useState("")
const[traling,setTrailing] = useState("")
const[traling44,setTrailing44] = useState("")

const[traling1,setTrailing1] = useState("")
const[qoatation,setQoatation] = useState("")
const[documentation,setDocumention] = useState("")

const[tendpart,setTendpart] = useState("")
const[tendpart44,setTendpart44] = useState("")

const [technicals,setTechnicals] = useState([])
const [applicants,setApplicants] = useState([])
const [applicants1,setApplicants1] = useState([])
const [address,setAddress] = useState("")
const [city,setCity] = useState("")
const[totalcheck,setTotalcheck]=useState("")

const[country,setCountry]=useState("")
const [assignproject,setAssignproject] = useState("")
const[binbind,setBinbind]=useState("")
const [docfee,setDocfee] = useState("")
const [catagory,setCatagory] = useState("")
const [region,setRegion] = useState("")
const [closedate,setClosedate] = useState("")
const [opendate,setOpendate] = useState("")
const [description,setDescription] = useState("")
const [progress, setProgress] = useState("");
const [projectmanager, setProjectmanager] = useState("");
const [rid,setRid] = useState("")
const [oid, setOid] = useState("");
const [tenderno, setTenderno] = useState("");
const [oname, setOname] = useState("");
const [itemno, setItemno1] = useState("");
const [itemname, setItemname1] = useState("");
const [quality1,setQuality1] = useState("")
const [highquality,setHighquality] = useState("")
const [highquality44,setHighquality44] = useState("")

const [company,setCompany] = useState("")
const [company1,setCompany1] = useState("")
const [tectype,setTectype] = useState("")
const [tecstatus,setTecstatus] = useState("")
const [tecfile,setTecfile] = useState("")
const [auditest,setAuditest] = useState("")
const [tecid,setTecid] = useState("")

//   const[trailing,setTrailing] = useState("")
const[quality,setQuality] = useState("")
const[auth1,setAuth1] = useState("")






///





const [editTender, setEditTender] = useState(false);
const [check, setCheck] = useState(false);
const [show, setShow] = useState(false);
const [addupload, setAddupload] = useState(false);
const [addcatagory, setAddcatagory] = useState(false);
const [viewcatagory, setViewcatagory] = useState(false);
const [more, setMore] = useState(false);
// const [edittender, setEditTend] = useState(false);
const [upload, setUpload] = useState(false);
const [adduploadcsv, setAdduploadcsv] = useState(false);
const [viewupload, setViewUpload] = useState(false);

// const [qty, setQuality] = useState(false);
const [item_no, setItemno] = useState(false);
const [item_name, setItemname] = useState(false);
const [unit, setUnit] = useState(false);
const[hh,setHh] = useState("")
const[tenderpart1,setTenderpart1] = useState("")
/////





//for tec defoult value

// const[type1,setType1] = useState("Authorization")

// const[type5,setType5] = useState("Quality")
// const[type6,setType6] = useState("Methodology")

// const[type9,setType9] = useState("Trailing")
// const[type10,setType10] = useState("Cad-Design")
// const[type11,setType11] = useState("Financial")
// const[type12,setType12] = useState("Tenderparticipation")


const[viewquality,setViewquality] = useState("");
const[viewexprience,setViewexprience] = useState("")
const[viewcv,setViewcv] = useState("")
const[viewlicense,setViewlicense] = useState("")
const[viewfinanciial,setViewfinancieal] = useState("")
const[viewfinanciialcsv,setViewfinanciealcsv] = useState("")

const[finopration,setFinopration] = useState("")
const[viewbank,setViewbank] = useState("")
const[viewcompany,setViewcompany] = useState("")

const[viewauthorization,setViewAuthorization] = useState("")
const[viewtrailing,setViewtrailing] = useState("")
const[viewcad,setViewcad] = useState("")
const[viewtenderpart,setViewtenderpart] = useState("")
const[viewmethodology,setViewmethodology] = useState("")
const [selectedFile, setSelectedFile] = useState(null);
const [fieldMappings, setFieldMappings] = useState({}); // Store the field mappings as state
const [csvHeaders, setCsvHeaders] = useState([]);




///////////////////////////

//financial forms 
const [showForm1, setShowForm1] = useState(false);
const [showForm2, setShowForm2] = useState(false);
const [showForm3, setShowForm3] = useState(false);
const [showForm4, setShowForm4] = useState(false);
const [showForm5, setShowForm5] = useState(false);

const [showFormall, setShowFormall] = useState(false);




// session Keeper
const [galuak, setGaluak] = useState([])

// const history = useHistory()
// useEffect(()=>{
// 	 if(localStorage.getItem("currentUser")){
//              const userId = JSON.parse(localStorage.getItem("currentUser")).user._id ;
// 		 dispatch(userProfile(userId))
// 	 }

//    // dispatch(userProfile())
// },[])
///Checked Valu to Show Forms
const handleCheckboxChange1 = (e) => {
    setShowForm1(e.target.checked);
  };

  const handleCheckboxChange2 = (e) => {
    setShowForm2(e.target.checked);

  };
  const handleCheckboxChange3 = (e) => {
    setShowForm3(e.target.checked);

  };
  const handleCheckboxChange4 = (e) => {
    setShowForm4(e.target.checked);

  };

  const handleCheckboxChange5 = (e) => {
    setShowForm5(e.target.checked);

  };
  const handleCheckboxChangeAll = (e) => {
    setShowFormall(e.target.checked);




  };

  ///State For Session Management

useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInformation"))
   
    if(user){
setGaluak(user)   
// console.log(user)
// console.log("xxxxxxxxxxxxxxxxxxxxxxxxx")


}else{
      console.log("error")
    }
  },[])





const [data1, setData1] = useState([]);





	const handleTenderuser = (hh) => {
	  setTenderuser(true);
	  setMore(false);
	}
	const handleTenderuserClose = () => {
	  setTenderuser(false);
	  setMore(true);
	}
	const handleAudit = () => {
	  setAudit(true);
	  setShow(true);
	}



	const handleViewDocument = () => {
		setViewdocument(true);
		setShow(true);
	  }

	  const handleViewDocument1 = () => {
		setViewdocument(false);
		setShow(true);
	  }
	const handleAuditClose = () => {
	  setAudit(false);
	  setShow(true);
	}
	const handleauth = () => {
		setAuth1(true);
		setShow(true);
	  }
	  const handleauthClose = () => {
		setAuth1(false);
		setShow(true);
	  }
	
	const handleCompliance = () => {
	  setCompliance(true);
	  setShow(true);
	}
	const handleComClose = () => {
	  setCompliance(false);
	  setShow(true);
	}
  
	const handleQuality = () => {
	  setQuality1(true);
	  setShow(true);
	}
	const handleQualClose = () => {
	  setQuality1(false);
	  setShow(true);
	}
  
	const handleExperiance= () => {
	setExperiance1(true);
	setShow(true);
	}
	const handleExpClose = () => {
		setExperiance1(false);
	  setShow(true);
	}
  
	const handleLicense= () => {
	  setLicense1(true);
	  setShow(true);
	  }
	  const handleLicClose = () => {
		setLicense1(false);
		setShow(true);
	  }
  
	  const handleCompany= () => {
		setCompany1(true);
		setShow(true);
		}
		const handleCompClose = () => {
			setCompany1(false);
		  setShow(true);
		}
  
		const handleMethodology= () => {
		  setMethodology1(true);
		
		  }
		  const handleMethodClose = () => {
			setMethodology1(false);
			setShow(true);
		  }
  
	  const handleTrailing= () => {
		setTrailing1(true);
		setShow(true);
		}
		const handleTrailClose = () => {
		  setTrailing1(false);
		  setShow(true);
		}
  
	const handleCad= () => {
	  setCad1(true);
	  setShow(true);
	  }
	  const handleCadClose = () => {
		setCad1(false);
		setShow(true);
	  }
  
	  const handleFinancial= () => {
		setFinancial(true);
		setShow(true);
		}
		const handleFinanClose = () => {
		  setFinancial(false);
		  setShow(true);
		}
  
		const handleCv= () => {
		  setCv1(true);
		  setShow(true);
		  }
		  const handleViewAudit = () => {
			setViewaudit(true);
			setShow(true);
			}
			const handleViewAudit1 = () => {
				setViewaudit(false);
				setShow(true);
				}

				const handleViewlicense = () => {
					setViewlicense(true);
					setShow(true);
					}
					const handleViewlicense1 = () => {
						setViewlicense(false);
						setShow(true);
						}


		  const handleCvClose = () => {
			setCv1(false);
			setShow(true);
		  }
  
		  const handleBank= () => {
			setBank1(true);
			setShow(true);
			}
			const handleBankClose = () => {
			  setBank1(false);
			  setShow(true);
			}
  
		const handleTendpart= () => {
		  setTenderpart1(true);
		  setShow(true);
		  }
		  const handleTendClose = () => {
			setTenderpart1(false);
			setShow(true);
		  }

	const handleOptionChange = (event) => {
	  const { name, value } = event.target;
	  header[name] = value;
	};
  
	const handleSubmit = ()=>{
	  const csvObj = {data:{
		"item_no" :[],
		"item_name" : [],
		"unit" :[],
		"description" : [],
		"qty" : [],
		"cdate": []

	  }};
	  const csvCopyData = [...csvData]
	  

	  // console.log(csvCopyData);
		for (let i = 1; i < csvData.length-1; i++) {
		  csvCopyData[i] = csvData[i].split(",");
		
		   for (let j = 1; j < header.length; j++) 
			  csvObj.data[header[j]].push(csvCopyData[i][j]);
	   }
      
	   csvObj['tid'] =  csvData[1].split(",")[0];
	
	 
	//  console.log(csvObj);
	   postData(csvObj);  
	   

	}


	const handleFileSelect = (event) => {
		setSelectedFile(event.target.files[0]);
	
		// Extract the headers from the selected CSV file
		const reader = new FileReader();
		reader.onload = (e) => {
		  const contents = e.target.result;
		  const lines = contents.split(/\r\n|\n/);
		  if (lines.length > 0) {
			const headers = lines[0].split(',');
			setCsvHeaders(headers);
		  }
		};
		reader.readAsText(event.target.files[0]);
	  };
	
	  const handleFieldMapping = (header, field) => {
		setFieldMappings((prevMappings) => ({
		  ...prevMappings,
		  [header]: field
		}));
	  };
	
	  const handleFileUpload1 = async () => {
		const formData = new FormData();
		formData.append('file', selectedFile);
		formData.append('fieldMappings', JSON.stringify(fieldMappings)); // Send field mappings to the server
	
		try {
		  // Send the formData to the server
		  await axios.post('http://localhost:8005/yared',formData )
		
		  .then(res => {
			if(res.status ===200){
			  alert('Csv Record successfuly Inserted')
			  // Push to /
		window.location.href = "/tender";
		
			}else{
			alert("error")
			}
		  })
		  console.log('File uploaded successfully!');
		} catch (error) {
		  console.error('Error uploading file:', error);
		}
	  };



    const handleFileUpload2 = async () => {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('fieldMappings', JSON.stringify(fieldMappings)); // Send field mappings to the server
    
      try {
        // Send the formData to the server
        await axios.post('http://localhost:8005/sample',formData )
      
        .then(res => {
        if(res.status ===200){
          alert('Csv Record successfuly Inserted')
          // Push to /
      window.location.href = "/tender";
      
        }else{
        alert("error")
        }
        })
        console.log('File uploaded successfully!');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
      };




	  const handleviewfinancial = () => {
		setViewfinancieal(true);
		setTenderuser(false);

		
	  }
    const handleviewfinancialcsv = () => {
      setViewfinanciealcsv(true);
      setViewfinancieal(false);
  
      
      }
      const handleviewfinancialcsv1 = () => {
        setViewfinanciealcsv(false);
        setViewfinancieal(true);
    
        setShow(true);
        }
	  const handleviewfinancial1 = () => {
		setViewfinancieal(false);
		// setTenderuser(true);

		// setShow(true);
		}
const [finitemno,setFineitemno]=useState("")
const [finqty,setFineqty]=useState("")
const [findesc,setFinedesc]=useState("")
		const handlefinopration = (tecb) => {
			setFinopration(true);
			setViewfinancieal(false);
			 setFineitemno(tecb.item_no)
			 setFineqty(tecb.qty)
			 setFinedesc(tecb.description)
			
		  }
	
		  const handlefinopration1 = () => {
			setFinopration(false);
			setViewfinancieal(true);
			}
			const[tucform,setTucform]=useState("");
			const handlefinoprationtuc = (tecb) => {
				setTucform(true);
				setViewfinancieal(false);
				 setFineitemno(tecb.item_no)
				 setFineqty(tecb.qty)
				 setFinedesc(tecb.description)
				
			  }


        const[upform,setUpform]=useState("");
			const handleUNitPrice = (tecb) => {
				setUpform(true);
				setViewfinancieal(false);
				 setFineitemno(tecb.item_no)
				 setFineqty(tecb.qty)
				 setFinedesc(tecb.description)
				
			  }
		
			  const handlefinoprationtuc1 = () => {
        setUpform(false);
				setViewfinancieal(true);
				}
        const handleUNitPrice1 = () => {
          setUpform(false);
          setViewfinancieal(true);
          }
  

	const handleviewquality = () => {
		setViewquality(true);
	
		
	  }

	  const handleviewquality1 = () => {
		setViewquality(false);
		setShow(true);
		}
	  const handleviewexprience = () => {
		setViewexprience(true);
		
		  
		}
		const handleviewexprience1 = () => {
			setViewexprience(false);
			setShow(true);
			}
			// console.log("")
		const handleviewcv = () => {
			setViewcv(true);
		
			
		  }
		  const handleviewcv1 = () => {
			setViewcv(false);
			setShow(true);
			}

		  const handleviewbank = () => {
			setViewbank(true);
		
			  
			}
			const handleviewbank1 = () => {
				setViewbank(false);
				setShow(true);
				}
				const handleviewcompany = () => {
					setViewcompany(true);
			  
					
				  }
				  const handleviewcompany1 = () => {
					setViewcompany(false);
					  setShow(true);
					  }
				
					  const handleviewauthorization = () => {
						setViewAuthorization(true);
					
						  
						}
						const handleviewauthorization1 = () => {
							setViewAuthorization(false);
							setShow(true);
							}
							const handleViewtrailing = () => {
								setViewtrailing(true);
							
								  
								}
								const handleViewtrailing1 = () => {
									setViewtrailing(false);
									setShow(true);
									}
									const handleviewcad = () => {
										setViewcad(true);
									
										  
										}
										const handleviewcad1 = () => {
											setViewcad(false);
											setShow(true);
											}
		
											const handleviewtenderpart = () => {
												setViewtenderpart(true);
											
												  
												}
												const handleviewtenderpart1 = () => {
													setViewtenderpart(false);
													setShow(true);
													}

													
											const handleviewmethodology = (tid)=> { 
												setViewmethodology(true);
											
												  
												}
												const handleviewmethodology1 = () => {
													setViewmethodology(false);
													setShow(true);
													}

	const addItem = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  // console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };
	  const gggggg = async (k) => {
	
	
		try {
		 
		  const res = await axios.post(
			"http://localhost:8005/yared",
		
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };

	  //STate For Financial

	  const[inlandcost,setInlandcost]=useState("")
	  const[fright,setfrght]=useState("")
	  const[insurance,setInsurance]=useState("")
	  const[cif,setCif]=useState("")
	  const[fob,setFob]=useState("")
	  const[exw,setExw]=useState("")
	  const[rate,setRate]=useState("")
	  const[percent,setPercent]=useState("")
	  const[black,setBlack]=useState("")



	  const handleRequestfinancial = ()=>{
        const request = {
			tid:tid, inlandcost:parseInt(inlandcost),fright:parseInt(fright),
			qty:finqty,description:findesc,item_no:finitemno,
			insurance:parseInt(insurance),exw:parseInt(exw),fob:parseInt(fob),
			cif:parseInt(cif),percent:parseInt(percent),rate:parseInt(rate),
			black:parseInt(black),
        
           
        }
         
       dispatch(AddFinancial(request))
       setInlandcost("")
     
       setfrght("")
       setInsurance("")
       setCif("")
       setFob("")
       setExw("")
       setRate("")
       setPercent("")
	   setBlack("")
    
    
    }

	//state for TUC
	const[inland1,setInland1]=useState("")
	const[installation1,setInstallation1]=useState("")
	const[training,setTraining]=useState("")
    const sum = parseInt(training) + parseInt(installation1)+parseInt(inland1)
	const qq=parseInt(finqty)
// console.log(sum)
// console.log("xxxxxxxxxxxxxxxxx")

	const handleRequesttuc = ()=>{
        const request = {
			inland1:parseInt(inland1),installation1:parseInt(installation1),
			training:parseInt(training),item_no:finitemno,total:sum,qty:qq,
      tid:tid
		
           
        }
         
       dispatch(AddTUC(request))
       setInland1("")
     
       setInstallation1("")
     
       setTraining("")
     

    
    }
    const [profit,setProfit]=useState("")
    const handleRequestUp = ()=>{
      const request = {
    profit:parseInt(profit),
   item_no:finitemno,qty:qq,
   tid:tid
  
         
      }
       
     dispatch(AddUp(request))
     setProfit("")
   

  
  }

	  

	  const AdQuality = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type5);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };


    const FcsvCalculation = ()=>{
      const request = {

  
   tid:tid
  
         
      }
       
     dispatch(FinancialCsv(request))
    
   

  
  }
    // const FcsvCalculation = async (k) => {
	
	
    //   try {
    //     const formData = new FormData();
    //     formData.set("tid", tid);
     
    //     const res = await axios.post(
    //     "http://localhost:8005/add-tester",
    //     formData
    //     );
    //     console.log(res);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   };

	  const adMethodology = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type6);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };

	  const adTrailing = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type9);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  }

	  const adCad = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type10);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  }


	  const adTenderpart = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type12);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  }
  	const AdBank = async (k) => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.set("total", totalcheck);

		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type2);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };


	  const adAuthorization = async (k) => {
	
	
		try {
			const formData = new FormData();
			formData.set("tenderid", tid);
			formData.append("file", fileInputRef.current.files[0]);
			formData.append("type",type1);
			const res = await axios.post(
			  "http://localhost:8005/api/tecAdd",
			  formData
			);
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };

	  const addCv = async () => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.set("total", totalcheck);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type7);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };
	  const adCompany = async () => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.set("total", totalcheck);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type3);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };
	  const adExprience = async () => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type4);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };
  
	  const addLicense = async () => {
	
	
		try {
		  const formData = new FormData();
		  formData.set("tenderid", tid);
		  formData.append("file", fileInputRef.current.files[0]);
		  formData.append("type",type8);
		  const res = await axios.post(
			"http://localhost:8005/api/tecAdd",
			formData
		  );
		  console.log(res);
		} catch (error) {
		  console.log(error);
		}
	  };

	const handleFileUpload = event => {
	  const file = event.target.files[0];
	  const reader = new FileReader();
  
	  reader.onload = event => {
		const contents = event.target.result;
		const rows = contents.split('\n');
	  
		setCSVData(rows);
	  };
  
	  reader.readAsText(file);
	};


	// const [hh2,setHh2] = useState("")

	const handleEdit1 = (hh) =>{
		setEditTender(true);
		setMore(false);
	  };
	  const  handleTendAddClose = (hh) =>{ 
		setEditTender(false)
		setMore(true);
	}
	const handleCheck = (hh) =>{
		// setHh (hh._id)
		setCheck(true)
		setUpload(false);
	  }
	  const handleCheckClose = () => {
		setCheck(false);
		setUpload(true);
	  }

	  const handleAddUpload = (hh) =>{
		setAddupload(true)
		setUpload(false);
		// setTid(hh.tid)
		// setItemno(hh.itemno)
		// setItemname(hh.itemname)
		// setUnit(hh.unit)
		// setQuality(hh.quality)
		// setDescription(hh.description)
		// setHh (hh._id)
	  }
	  const handleAddupClose = () => {
		setAddupload(false);
		setUpload(true);
	  }
	  const handleAUditTestView = () => {
		setAuditest(false);
	
		
	  }
	  const handleAUditTestView1 = () => {
	
		setAuditest(false);
		

	  }
	  const handleAddUploadCsv = () =>{
		setAdduploadcsv(true)
		setUpload(false);
	  }
	  const handleAddcsvClose = () => {
		setAdduploadcsv(false);
		setUpload(true);
	  }


	  const handleAddCatagory = () =>{
		setAddcatagory(true)
		setShow(false);
	  }
	  const handleAddcataClose = () => {
		setAddcatagory(false);
		setShow(true);
	  }
const[editupload,setEditupload]=useState('');
const[item_nos,setItem_nos]=useState('');

const[item_names,setItem_names]=useState('');

const[units,setUnits]=useState('')

const[qtys,setQtys]=useState('');
const[csvid,setCsvId]=useState('');

const[descriptions,setDescriptions]=useState('')
const[cdates,setCdates]=useState('')



const handleeditupload = (user) =>{
	setEditupload(true)
	handleUpload(false);
	setItem_nos(user.item_no)
	setQtys(user.qty)
	setItem_names(user.item_name)
	setUnits(user.unit)
	setDescriptions(user.description)
	setCdates(user.cdate)
	setCsvId(user._id)

  }
  const handleeditupload1 = () => {
	setEditupload(false);
	handleUpload(true);
  }


	  

	    const handleViewCatagory = () =>{
		setViewcatagory(true)
		
		setAddcatagory(false);
	  }
	  const handleViewcataClose = () => {
		setViewcatagory(false);
		setAddcatagory(true);
	  }
	  const handleMore = () => {
		// setMore(true);
		// setShow(false);
	  }
	  const handleMoreClose = () => {
		setMore(false);
		setShow(true);
	  }
	//   const handleEditTender = () => {
	// 	setEditTend(true);
	// 	setMore(false);
	//   }
	//   const handleEditTendClose = () => {
	// 	setEditTend(false);
	// 	setMore(true);
	//   }

	  const handleUpload = (hh) => {
		setUpload(true);
		setMore(false);
		// setTid(hh.tid)
		// setItemno(hh.itemno)
		// setItemname(hh.itemname)
		// setUnit(hh.unit)
		// setQuality(hh.quality)
		// setDescription(hh.description)
		// setHh (hh._id)
	  }
	  const handleUploadClose = () => {
		setUpload(false);
		setMore(true);
	  }

	  const handleViewUpload = () => {
		setViewUpload(true);
		setAdduploadcsv(false);
	  }
	  const handleViewUploadClose = () => {
		setViewUpload(false);
		setAdduploadcsv(true);
	  }

	//   const {id} = useParams();
	

	  const handleRequest3 = (hh)=> {
		const obj = {
			hh,authorization,bank,audit,compliance,company,catalog,experiance,license,cv,qoatation,documentation,methodology,cad,financial,traling,tendpart
		}
	
	   dispatch(UploadTask1(obj))
	 
	
	}
	const [
		formValues1, setFormValues1] = useState({})
	const handleChange1 = (event) => {

		const name = event.target.name;
		const value = event.target.value;
	   
		setFormValues1(values => ({...values, [name]: value}))
	  }
	  const [formValues3, setFormValues3] = useState({})
	  const handleChange3 = (event) => {
		  const name = event.target.name;
		  const value = event.target.value;
		 
		  setFormValues3(values => ({...values, [name]: value}))
		}


		const [formValues4, setFormValues4] = useState({})
		const handleChange4 = (event) => {
			const name = event.target.name;
			const value = event.target.value;
	
			 setFormValues4(values => ({...values, [name]: value}))
		  }

	  const [formValues2, setFormValues2] = useState({})
	  const handleChange2 = (event) => {
		  const name = event.target.name;
		  const value = event.target.value;
		 
		  setFormValues2(values => ({...values, [name]: value}))
		}

		const handleRequest1 = ()=>{
			const user = {
			  tid,
			  itemno,
			  itemname,
			  unit,
			  quality,
			  description 
			}
			 
		   dispatch(registerUpload(user))
		
		   setTid("");
		   setItemno1("")
		   setItemname1("")
		   setUnit("")
		   setQuality1("")
		   setDescription("")
		  
		}
		
		const handleShow1 = (tec) => {
			setAuditest(true);
			setShow(false);
			setTecid(tec._id)
		
			
			setTectype(tec.type)
			setTecstatus(tec.status)
			setTecfile(tec.file)
		  };


	const handleShow = (user) => {
		setMore(true);
		setShow(false);
		setHh(user._id)
		setTid(user.tid)
		setTid1(user.tid)
		setRid(user.rid)
		setRegion(user.region)
		setOid(user.oid)
		setHighquality(user.qualitycertificate)
		setHighquality44(user.qualitycertificate1)

		setOname(user.oname)
		setAddress(user.address)
		setCity(user.city)
		setCountry(user.country)
		setAssignproject(user.assignproject)
		setBinbind(user.binbind)
		setDocfee(user.docfee)
		setTenderno(user.tenderno)
		setCatagory(user.catagory)
		setProjectmanager(user.projectmanager)
		setOpendate(user.opendate)
		setClosedate(user.closedate)
		setDescription(user.description)
		setProgress(user.progress)
		setCv(user.cv)
		setCv44(user.cv1)
		setExperiance(user.experiance)
		setExperiance44(user.experiance1)
		setAudit1(user.auditreport)
		setAudit44(user.auditreport1)
		setLicense(user.license)
		setLicense44(user.license1)
		setBank(user.bankstatement)
		setBank44(user.bankstatement1)

		setCatalog(user.cv)
		setCatalog44(user.catalog1)

		setCompliance(user.compliance)
		setAuthorization(user.authorization)
		setAuthorization44(user.authorization1)

		setCompanyprofile(user.companyprofile)
		setCompanyprofile44(user.companyprofile1)

		setCompany(user.companyprofile)
		setCad(user.caddesign)
		setCad44(user.caddesign1)

		setFinancial(user.financial)
		setTrailing(user.trailing)
		setTrailing44(user.trailing1)
		setMethodology(user.methodology)
		setMethodology44(user.methodology1)
		setTendpart(user.tenderparticipation)
		setTendpart44(user.tenderparticipation1)
		setTotalcheck(user.total)
		
	  };
	



	const [tecmethodology,setTecmethodology]=useState([]) 
	useEffect(() => {
	  axios
		.get(`http://localhost:8005/list-applicants/${tid1}`)	 

		.then((res) => {
		  setTecmethodology(res.data);
		})
		.catch((err) => {
		  console.log("Data not found" + err.message);
		  // console.log(currentUser);
		}, );
	},[tid1]);   


	useEffect(() => {
		axios
		  .get(`http://localhost:8005/list-applicants/${tid1}`)	 
  
		  .then((res) => {
			setDocument23(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
			// console.log(currentUser);
		  }, );
	  },[tid1]); 

const[viewcomplience,setViewcomplience]=useState([])
const[viewunitcost,setViewunitcost]=useState([])

	  useEffect(() => {
		axios
		  .get(`http://localhost:8005/list-complience/${tid1}`)	 
  
		  .then((res) => {
			setViewcomplience(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
			// console.log(currentUser);
		  }, );
	  },[tid1]); 
    useEffect(() => {
      axios
        .get(`http://localhost:8005/list-unitcost/${tid1}`)	 
    
        .then((res) => {
          setViewunitcost(res.data);
        })
        .catch((err) => {
        console.log("Data not found" + err.message);
        // console.log(currentUser);
        }, );
      },[tid1]); 

	  const addUpload = async (e) => {
		e.preventDefault();
		try {
		  const formData = new FormData();
		  formData.append("tid",tid);
		  formData.append("itemno", itemno);
		  formData.append("itemname", itemname);
		  formData.append("unit", unit);
		  formData.append("quality", quality);
		  formData.append("description", description);
		  const res = await axios.post(
			"http://localhost:8005/api/addupload",
			formData
		  );
			alert('The data is add successfully')
			window.location.href = "/tender";
		  } catch (error) {
		  alert('Error')
		  }
	  };

	   const [isLoading, setIsLoading] = useState(false);

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



	  const deletePost = (id) => {
		console.log(id);
	  
		axios.delete(`http://localhost:8005/api/delete-technicals/${id}`)
		  .then((res) => console.log(res))
		  .catch((err) => console.log(err));
	  
		window.location.reload();
	  };
	  const deletePost1 = (id) => {
		console.log(id);
	  
		axios.delete(`http://localhost:8005/api/delete-tender/${hh}`)
		  .then((res) => console.log(res))
		  .catch((err) => console.log(err));
	  
		window.location.reload();
	  };
	  const handleSubmit1 = (event) => {
		event.preventDefault();
		axios.put(
		  `http://localhost:8005/api/update-tender/${hh}`,formValues1)
		  .then(res => {
			if(res.status ===200){
			  alert('A record successfuly updated')
			  // Push to /
		window.location.href = "/tender";
		
			}else{
			alert("error")
			}
		  })
		  .catch(err => alert('Something went wrong! ' +err.message))
		  // Push to /
		  window.location.href = "/tender";
	  }


	  
	  const handleSubmit3 = (event) => {
		event.preventDefault();
		axios.put(
		  `http://localhost:8005/api/update-technicals/${tecid}`, formValues3)
		  .then(res => {
			if(res.status ===200){
			  alert('A record successfuly updated')
			  // Push to /
			  window.location.href = "/tender";
		
			}else{
			alert("error")
			}
		  })
		  .catch(err => alert('Something went wrong! ' +err.message))
		  // Push to /
		  window.location.href = "/tender";
	  }


	  const handleSubmit44 = (event) => {
		event.preventDefault();
		axios.put(
		  `http://localhost:8005/api/update-technicals/${tecid}`, formValues4)
		  .then(res => {
			if(res.status ===200){
			  alert('A record successfuly updated')
			  // Push to /
			  window.location.href = "/tender";
		
			}else{
			alert("error")
			}
		  })
		  .catch(err => alert('Something went wrong! ' +err.message))
		  // Push to /
		  window.location.href = "/tender";
	  }
	


	  	  const handleSubmit2 = (event) => {
		event.preventDefault();
		axios.post(
		  `http://localhost:8005/upload-tender`, formValues2)
		  .then(res => {
			if(res.status ===200){
			  alert('A record successfuly')
			  // Push to /
			  window.location.href = "/tender";
			}else{
			alert("error")
			}
		  })
		  .catch(err => alert('Something went wrong! ' +err.message))
		  // Push to /
		  window.location.href = "/tender";
	  }

	  const [csvvalue, setCsvvalue] = useState({})
	  const changeCsv = (event) => {
		  const name = event.target.name;
		  const value = event.target.value;
		 
		  setCsvvalue(values => ({...values, [name]: value}))
		}




	  const handlecsvUpdate = (event) => {
		event.preventDefault();
		axios.put(
		  `http://localhost:8005/api/update-csv/${csvid}`, csvvalue)
		  .then(res => {
			if(res.status ===200){
			  alert('A record successfuly')
			  // Push to /
			  window.location.href = "/tender";
			}else{
			alert("error")
			}
		  })
		  .catch(err => alert('Something went wrong! ' +err.message))
		  // Push to /
		//   window.location.href = "/tender";
	  }
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/authorization")
		  .then((res) => {
	setTechnicals(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );

	
	  },[abay]);

	  const [tecbank,setTecbank]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/bank")
		  .then((res) => {
			setTecbank(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );
	  },[abay]);
	  const [tecquality,setTecquality]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/quality")
		  .then((res) => {
			setTecquality(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );
	  },[abay]);

	  const [tecexprience,setTecexprience]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/exprience")
		  .then((res) => {
			setTecexprience(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );
	  },[abay]);
	  const [teccompany,setTeccompany]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/company")
		  .then((res) => {
			setTeccompany(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );
	  },[abay]);
	  


	  const [teccv,setTeccv]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/cv")
		  .then((res) => {
			setTeccv(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );
	  },[abay]);





//axios.get(`http://localhost:8005/list-applicants/${currentUser[0].role}`)	 
// const[tid3,setTid3]=useState(galuak._id)
// console.log(galuak._id)
	//   useEffect(() => {
	
	// 	axios
	// 	  .get(`http://localhost:8005/api/getTender`)//${galuak._id}api/getTender/:id
	// 	  .then((res) => {
	// 		setApplicants(res.data);
	// 	  })
	// 	  .catch((err) => {
	// 		console.log("Data not found" + err.message);
	// 	  },);
	//   },[galuak._id]);
	  const[tecaudit,setTecaudit]=useState([])
	
	  useEffect(() => {
	
		axios
		  .get("http://localhost:8005/technicals/audit")
		  .then((res) => {
			setTecaudit(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  },);
	  },[yared]);

	
	
	



	

	  const [teclicense,setTeclicense]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/license")
		  .then((res) => {
			setTeclicense(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );
	  },[abay]);

	  const [teccad,seTeccad]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/cad")
		  .then((res) => {
			seTeccad(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );
	
	  },[abay]);
	  
	  const [tectrailing,setTectrailin]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/trailing")
		  .then((res) => {
			setTectrailin(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );

	  },[abay]);

	  	  
	  const [tectenderpart,setTectenderpart]=useState([])
	  useEffect(() => {
		axios
		  .get("http://localhost:8005/technicals/tenderpart")
		  .then((res) => {
			setTectenderpart(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, );

	  },[abay]);
	
	
	  useEffect(() => {
		axios
		  .get(`http://localhost:8005/AllUpload/${tid}`)
		  .then((res) => {
			setApplicants1(res.data);
		  })
		  .catch((err) => {
			console.log("Data not found" + err.message);
		  }, []);

	  });

	  
	  
const [searchTerm, setSearchTerm] = useState("");
// const [data, setData] = useState([]);

const [totalPages, setTotalPages] = useState(1);
const [expandedRow, setExpandedRow] = useState(null); // Track the expanded row
const [filteredData, setFilteredData] = useState([]);
const [columns, setColumns] = useState({
  tid: true, 
  oid: true,
  progress: true,
  
daysLeft:true,
  end: true,
  start: true,
  address: false,
  city: false,
  country: false,
  region: false,
  category: false,
  documentfee: false,
  description: false,


});
const [sortField, setSortField] = useState('');
const [sortOrder, setSortOrder] = useState('');
const [searchQuery, setSearchQuery] = useState('');
const [currentPage, setCurrentPage] = useState(1);

useEffect(() => {
  fetchData();
}, [sortField, sortOrder, searchQuery, currentPage,galuak.empid,galuak.oid]);

const fetchData = async () => {
  try {
    if (galuak.role === 'employee') {
    const response = await axios.get(`http://localhost:8005/emp1/getTender/${galuak.empid}`, {
      params: {
        sortField,
        sortOrder,
        searchQuery,
        page: currentPage,
      },
    });

    setData1(response.data.data);
    setTotalPages(response.data.totalPages);
  }
  else if (galuak.role === 'Admin') {
    const response = await axios.get(`http://localhost:8005/org/getTender/${galuak.oid}`, {
      params: {
        sortField,
        sortOrder,
        searchQuery,
        page: currentPage,
      },
    });

    setData1(response.data.data);
    setTotalPages(response.data.totalPages);


  }
  else{

    const response = await axios.get(`http://localhost:8005/allTender`, {
      params: {
        sortField,
        sortOrder,
        searchQuery,
        page: currentPage,
      },
    });

    setData1(response.data.data);
    setTotalPages(response.data.totalPages);


  


  }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  // if (galuak.tender === "inactive" ) {
  //   navigate("/adminhome");
  // }
}, [galuak]);
// const fetchData = async ( sortField, sortOrder, searchQuery, currentPage) => {
//   try {
//     let url;
//     let params = {
//       sortField,
//       sortOrder,
//       searchQuery,
//       page: currentPage,
//     };

//     if (galuak.role === 'Admin') {
//       url = `http://localhost:8005/org/getTender/${galuak.oid}`;
//     } else if (galuak.role === 'employee') {
//       url = `http://localhost:8005/emp/getTender/${galuak.empid}`;
//     }

//     const response = await axios.get(url, { params });

//     setData1(response.data.data);
//     setTotalPages(response.data.totalPages);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };
// console.log(data1)

// useEffect(() => {
//   fetchData(galuak.role, galuak.oid, galuak.empid, sortField, sortOrder, searchQuery, currentPage);
// }, [galuak.role, galuak.oid, galuak.empid, sortField, sortOrder, searchQuery, currentPage]);





const handleSort = (field) => {
  setSortField(field);
  setSortOrder(sortField === field && sortOrder === 'asc' ? 'desc' : 'asc');
};



const handleSearch = (query) => {
  setSearchQuery(query);
  setCurrentPage(1); // Reset to the first page when performing a new search
   // Filter data based on searchQuery
  const filteredResults = data1.filter(
    (item) =>
    (
	item.rid?.toLowerCase().includes(query.toLowerCase()) ||
    item.tid?.toLowerCase().includes(query.toLowerCase())||
    // item.daysLeft?.toLowerCase().includes(query.toLowerCase())||

    item.oid?.toLowerCase().includes(query.toLowerCase())||
    item.progress?.toLowerCase().includes(query.toLowerCase())||
    item.end?.toLowerCase().includes(query.toLowerCase())||
    item.start?.toLowerCase().includes(query.toLowerCase())||
    item.address?.toLowerCase().includes(query.toLowerCase())||
    item.city?.toLowerCase().includes(query.toLowerCase())||
    item.country?.toLowerCase().includes(query.toLowerCase())||
    item.category?.toLowerCase().includes(query.toLowerCase())||
    item.region?.toLowerCase().includes(query.toLowerCase())||
    item.documentfee?.toLowerCase().includes(query.toLowerCase())||
    item.description?.toLowerCase().includes(query.toLowerCase()))
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
const displayedData = searchQuery ? filteredData : data1;
// console.log(displayedData)
// Create a function to extract CSV data from the table data
const getCSVData = () => {
  const csvData = data1.map((item) => ({
    tid: item.tid,
    oid: item.oid,
    progress: item.progress,
    end: item.end,
    start: item.start,
    address: item.address,
    city: item.city,
    country: item.country,
    region: item.region,
    category: item.category,
    documentfee: item.documentfee,

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
  const toggleSidebar = () => {
	const sidebar = document.querySelector("nav");
	sidebar.classList.toggle("close");
	localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
  }; 
  
 

//   Modal.setAppElement('#root');


  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };


return (

   
     
 <div>

 <Sidebar/>
 <section class="dashboard">   
 
 <div class="top" style={{top:`10px`,dispaly:`inline`}}>
 <button class="uil uil-bars sidebar-toggle" onClick={toggleSidebar} style={{dispaly:`inline`}}></button>
 <Navadmin/>
 {/* <div class="search-box">
   <i class="uil uil-search"></i>
   <input type="text" placeholder="Search here..." />
 </div> */}
 
 </div>
 <div class="scroll-line" style={{ width: percentScrolled + '%', zIndex:'3'}} />
 <div class="dash-content">
 
 <div class="main-container">
 
 
 <div class="xs-pd-20-10 pd-ltr-20">
 <br/>
 <img src={Tender1} class="img8"alt="employee" style={{width:`30%`}}/>
 <br/> <br/> 



 <div>
         <div className="data-table-container">
         <div className="row" >
      <div className="col-md-6">
        <div className="dt-buttons btn-group flex-wrap">

          <button style={{fontSize:`medium`}} className="btn btn-primary buttons-pdf buttons-html5" tabIndex="0" aria-controls="example1" type="button"><span>
          {/* <CSVLink
         data={getCSVData()} 
         filename="table_data.csv"
       >
         Export to CSV
       </CSVLink> */}
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
       <table className="data-table1">
         {/* Table header */}
         <thead>
           <tr>
           {columns.tid && (
               <th onClick={() => handleSort('tid')}>
                 TID
                 {sortField === 'tid' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'tid' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
            
			{columns.rid && (
               <th onClick={() => handleSort('rid')}>
                 Rid
                 {sortField === 'rid' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'rid' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}

             {columns.oid && (
               <th onClick={() => handleSort('oid')}>
                 Org-ID
                 {sortField === 'oid' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'oid' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
            
               {columns.progress && (
               <th onClick={() => handleSort('progress')}>
                 Progress
                 {sortField === 'progress' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'progress' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
                {columns.address && (
               <th onClick={() => handleSort('address')}>
                 Address
                 {sortField === 'address' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'address' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
			                {columns.city && (
               <th onClick={() => handleSort('city')}>
                 City
                 {sortField === 'city' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'city' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
			                {columns.country && (
               <th onClick={() => handleSort('country')}>
                 Country
                 {sortField === 'country' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'country' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
			                {columns.region && (
               <th onClick={() => handleSort('region')}>
                 Region
                 {sortField === 'region' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'region' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
			                {columns.category && (
               <th onClick={() => handleSort('category')}>
                 Category
                 {sortField === 'category' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'category' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
			                {columns.documentfee && (
               <th onClick={() => handleSort('documentfee')}>
                 Document-Fee
                 {sortField === 'documentfee' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'documentfee' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
			                {columns.description && (
               <th onClick={() => handleSort('description')}>
                 Description
                 {sortField === 'description' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'description' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
			          
 {columns.end && (
               <th onClick={() => handleSort('end')}>
                 Open-Date
                 {sortField === 'end' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'end' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
             {columns.start && (
               <th onClick={() => handleSort('start')}>
                 Close-Date
                 {sortField === 'start' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'start' && sortOrder === 'desc' && <FiChevronDown />}
               </th>
             )}
             {columns.daysLeft && (
               <th onClick={() => handleSort('daysLeft')}>
Day-Left                 {sortField === 'daysLeft' && sortOrder === 'asc' && <FiChevronUp />}
                 {sortField === 'daysLeft' && sortOrder === 'desc' && <FiChevronDown />}
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
               {columns.tid && <td>{getRowToggleIcon(item._id)}{item.rid}</td>}             
               {columns.rid && <td>{item.rid}</td>}             
              {columns.oid && <td>{item.oid}</td>}   
              {columns.progress && <td> {getStatusElement(item.progress)}</td>}
                 {columns.start &&<td>{new Date(item.start).toLocaleDateString()}</td>}

                 {columns.end &&<td>{new Date(item.end).toLocaleDateString()}</td>}

                 
                 {columns.daysLeft && <td>{item.daysLeft}
                 &nbsp;&nbsp;&nbsp;
                 <span class='fas fa-flag' style={{color:`green`}}></span>
                 </td>}

                 <td><button class="btn0 btn0-white btn0-animate"   onClick={() => handleShow(item)} >
                  <i className="fa fa-plus"></i></button></td>
               </tr>
               {/* Expanded row */}
               {expandedRow === item._id && (
                 <tr>
                   <td colSpan={Object.keys(columns).filter((column) => columns[column]).length - 1}>
                    <strong>Org-Name:</strong> &nbsp; &nbsp;&nbsp;{item.oname}<br></br>
                    <strong>Tender-Name:</strong> &nbsp; &nbsp;&nbsp; {item.tenderno}<br></br>
                    <strong>Address:</strong> &nbsp; &nbsp;&nbsp; {item.address}<br></br>
                    <strong>Country:</strong> &nbsp; &nbsp;&nbsp;{item.country}<br></br>
                    <strong>City:</strong> &nbsp; &nbsp;&nbsp;{item.city}<br></br>
                    <strong>Region:</strong> &nbsp; &nbsp;&nbsp;{item.region}<br></br>
                    <strong>Doc-Fee:</strong> &nbsp; &nbsp;&nbsp;{item.documentfee}<br></br>
                    <strong>Category:</strong> &nbsp; &nbsp;&nbsp;{item.category}<br></br>
                    <strong>Info-Suorce:</strong> &nbsp; &nbsp;&nbsp;{item.description}<br></br>
              
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
	


					<button type="button" class="btn btn-primary"  onClick={() =>handleAddCatagory()}>
						Add Tender Catagory
						</button>
					{/*	<div></div>
						 data-table table nowrap 
					<table class="">
						<thead>
							<tr>
								<th class="table-plus">Assign-Project</th>
								<th>TID</th>
								<th>Tender-No</th>
								<th>Progress</th>
								<th>Close-Date</th>
								<th>Opern-Date</th>
								<th class="datatable-nosort">Actions</th>
							</tr>
						</thead>
						<tbody>
						{applicants.map((user, i) =>(
        <tr key={user._id}>
								<td class="table-plus">
									<div class="name-avatar d-flex align-items-center">
										<div class="avatar mr-2 flex-shrink-0">
											<img 
												src="vendors/images/photo4.jpg"
												class="border-radius-100 shadow table-plus"
												width="40"
												height="40"
												alt=""
											/>
										</div>
										<div class="txt">
											<div class="weight-600">Jennifer O. Oster</div>
										</div>
									</div>
								</td>
								<td>{user.tid}</td>
								<td>{user.oid}</td> 

								<td>
								{user.progress ==="0" &&  <>
								<div class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
                                 <div class="progress-bar bg-warning progress-bar-striped  " 
                                 role="progressbar" style={{width: "100%"}} 
								 aria-valuenow="25" aria-valuemin="0" 
								 aria-valuemax="100">Pending</div>
</div>				
			</>}
							
								{user.progress < 25 && user.progress >= 1 && <>
								<div class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
                                 <div class="progress-bar bg-info progress-bar-striped  " 
                                 role="progressbar" style={{width: "25%"}} 
								 aria-valuenow="25" aria-valuemin="0" 
								 aria-valuemax="100">25%</div>
</div>				
			</>}
								{user.progress < 50 && user.progress >= 25 && <>
								<div class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
                                 <div class="progress-bar bg-info progress-bar-striped  " 
                                 role="progressbar" style={{width: "50%"}} 
								 aria-valuenow="25" aria-valuemin="0" 
								 aria-valuemax="100">50%</div>
</div>				
				</>}
								{user.progress < 99 && user.progress >= 50 && <>
								<div class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
                                 <div class="progress-bar bg-info progress-bar-striped  " 
                                 role="progressbar" style={{width: "75%"}} 
								 aria-valuenow="25" aria-valuemin="0" 
								 aria-valuemax="100">75%</div>
</div>		
				</>}

								{user.progress ==="100" &&  <>
								<div class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
                                 <div class="progress-bar bg-success progress-bar-striped  " 
                                 role="progressbar" style={{width: "100%"}} 
								 aria-valuenow="25" aria-valuemin="0" 
								 aria-valuemax="100">100%completed</div>
</div>				
								</>}
								</td>
								<td>{user.end}</td>
								<td>{user.start}</td>
								<td>
									<div class="table-actions">
									<button type="button" class="btn" data-color="#265ed7" onClick={() =>handleShow(user)}>
                                       <i class="fa fa-plus"></i>
                                    </button>
									</div>
									
								</td>
							
</tr>  ))}
							
						</tbody>
					</table>
			*/}





	
<Modal
show={addcatagory}
onHide={handleAddcataClose}
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
            <p>Tender-Category</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>
<form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
     
      <div class="modal-footer">
	  <button type="button" class="btn btn-primary" onClick={() =>handleViewCatagory()}>View</button>
        <button type="button" class="btn btn-danger" onClick={() =>handleAddcataClose()}>Close</button>
        <button type="button" class="btn btn-success">Save changes</button>
      </div></form>
  
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>

<Modal
show={viewcatagory}
onHide={handleViewcataClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>View<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>Tender-Category</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>
 

						
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap"
							>
								<thead>
									<tr>
										<th class="table-plus datatable-nosort">Name</th>
										<th>Age</th>
										<th>Office</th>
										<th>Address</th>
										<th>Start Date</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="table-plus">Gloria F. Mead</td>
										<td>25</td>
										<td>Sagittarius</td>
										<td>2829 Trainer Avenue Peoria, IL 61602</td>
										<td>29-03-2018</td>
                    <td>
                      <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalLong">
                      <i class="icon-copy fi-plus"></i>
</button>
</td>
									</tr>
									
								</tbody>
							</table>
						</div>
						</Modal.Body>
<Modal.Footer>
</Modal.Footer>
</Modal>


<Modal
show={tenderuser}
onHide={handleTenderuserClose}
backdrop="static"
keyboard={false}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>TENDER<span></span></h1>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>
<div class="row" style={{width:`100%`}}>
<span class="col-sm-6">
<div class="card card-row card-secondary">
          <div class="card-header card1">
            {/* <h3 class="card-title"> */}
			<div className="waviy">
      <span style={{ '--i': 1 }}>S</span>
      <span style={{ '--i': 2 }}>T</span>
      <span style={{ '--i': 3 }}>A</span>
      <span style={{ '--i': 4 }}>R</span>
      <span style={{ '--i': 5 }}>T</span>
      <span style={{ '--i': 6 }}>E</span>
      <span style={{ '--i': 7 }}>D</span>
    </div>
            {/* </h3> */}
          </div>
          <div class="card-body6">
	
<ul class="started d-inline">
{authorization==="1"  && <> <li class="box2">Authorization
{/* btns fa fa-send    fa fa-eye*/}
<a class="fa fa-eye"onClick={() => handleviewauthorization()}></a>
<a class="fas fa-plus" onClick={() => handleauth()}   ></a>
</li></>}
{audit1==="1"  && <> <li class="box2">Audit-Report

<a class="fa fa-eye"onClick={() => handleViewAudit()}></a> 
<a class="fas fa-plus" onClick={() => handleAudit()}></a>
</li></>}
{bank==="1"  && <> <li class="box2">Bank-Statement

<a class="fa fa-eye" onClick={() => handleviewbank()}></a>
<a class="fas fa-plus" onClick={() => handleBank()}></a>
</li></>}
{company==="1"  && <> <li class="box2">Company-profile

<a class="fa fa-eye"onClick={() => handleviewcompany()}></a>
<a class="fas fa-plus" onClick={() => handleCompany()}></a>
</li></>}
{compliance==="1"  && <> <li class="box2">Compliance-Sheet

<a class="fa fa-eye"></a> 
<a class="fas fa-plus" onClick={() => handleCompliance()}></a>
</li></>}
{experiance==="1"  && <> <li class="box2">Exprience

<a class="fa fa-eye"onClick={() => handleviewexprience()}></a> 
<a class="fas fa-plus" onClick={() => handleExperiance()}></a>
</li></>}
{highquality==="1"  && <> <li class="box2">Quality-Certificate

<a class="fa fa-eye"onClick={() => handleviewquality()}></a>
<a class="fas fa-plus" onClick={() => handleQuality()}></a>
</li></>}
{methodology==="1"  && <> <li class="box2">Methodology

<a class="fa fa-eye"onClick={() => handleviewmethodology()}></a> 
<a class="fas fa-plus" onClick={() => handleMethodology()}></a>
</li></>}
{cv==="1"  && <> <li class="box2">Cv

<a class="fa fa-eye"onClick={() => handleviewcv()}></a> 
<a class="fas fa-plus" onClick={() => handleCv()}></a>
</li></>}
{license==="1"  && <> <li class="box2">License

<a class="fa fa-eye"onClick={() => handleViewlicense()}></a> 
<a class="fas fa-plus" onClick={() => handleLicense()}></a>
</li></>}
{traling==="1"  && <> <li class="box2">Trailing-Participation

<a class="fa fa-eye"onClick={() => handleViewtrailing()}></a> 
<a class="fas fa-plus" onClick={() => handleTrailing()}></a>
</li></>}
{cad==="1"  && <> <li class="box2">Cad-Design

<a class="fa fa-eye" onClick={() => handleviewcad()}></a> 
<a class="fas fa-plus" onClick={() => handleCad()}></a>
</li></>}
{financial==="1"  && <> <li class="box2">Financial

<a class="fa fa-eye"></a> 
<a class="fas fa-plus" onClick={() => handleviewfinancial()}></a>
</li></>}
{tendpart==="1"  && <> <li class="box2">Tender-participation

<a class="fa fa-eye"onClick={() => handleviewtenderpart()}></a> 
<a class="fas fa-plus" onClick={() => handleTendpart()}></a>
</li></>}
	
    {/* 
   

    
    <li>Tender-Participation
    <a class="btns fa fa-send"></a> 
     <a class="btns fa fa-edit" onClick={() => handleTendpart()}></a>
    </li> */}
  </ul></div></div>
</span>

<span class="col-sm-6">
<div class=" card card-row card-primary">
          <div class="card-header card2">
		  <div className="waviy">
      <span style={{ '--i': 1 }}>D</span>
      <span style={{ '--i': 2 }}>O</span>
      <span style={{ '--i': 3 }}>N</span>
      <span style={{ '--i': 4 }}>E</span>
    </div>
          </div>

	



<div class="card-body7">
<ul class="done d-inline">
	
{bank44==="1"  && <>


<li class="box2">Bank-Statement
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}

{audit44==="1"  && <>


<li class="box2">Audit Report
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{authorization44==="1"  && <>


<li class="box2">Authorization
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}

{cv44==="1"  && <>


<li class="box2">Cv
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{experiance44==="1"  && <>


<li class="box2">Exprience
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{license44==="1"  && <>


<li class="box2">License
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{cad44==="1"  && <>


<li class="box2">Cad Design
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}

{highquality44==="1"  && <>


<li class="box2">Quality
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{methodology44==="1"  && <>


<li class="box2">Methodology
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}

{traling44==="1"  && <>


<li class="box2">Trailing
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{catalog44==="1"  && <>


<li class="box2">catalog
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>
	
</>}
{tendpart44==="1"  && <>


<li class="box2">Tenderparticipation
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
{companyprofile44==="1"  && <>


<li class="box2">Company Profile
     <a class="fas fa-arrow-left"></a> 
     <a class="fas fa-edit"></a>
      <a class="fas fa-check"></a>

    </li>

</>}
    </ul> 

</div>





         </div> 
</span>
</div>






	  </Modal.Body>
<Modal.Footer>
</Modal.Footer>
</Modal>
<Modal
show={audit}
onHide={handleAuditClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Audit-Report<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={addItem}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>
<Modal
show={bank1}
onHide={handleBankClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Bank-Statement<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={AdBank}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>
<Modal
show={methodology1}
onHide={handleMethodClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Methodology<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adMethodology}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>



<Modal

show={tenderpart1}
onHide={handleTendClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h2>Tender-Participation<span></span></h2>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adTenderpart}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>


<Modal

show={cad1}
onHide={handleCadClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Cad-Design<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adCad}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>

<Modal

show={auth1}
onHide={handleauthClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Authorization<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adAuthorization}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>
<Modal

show={traling1}
onHide={handleTrailClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Trailing<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adTrailing}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>

<Modal

show={quality1}
onHide={handleQualClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h2>Quality-Certificate<span></span></h2>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={AdQuality}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>

<Modal
show={auditest}
onHide={handleAUditTestView1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title>update {tecid} </Modal.Title>
</Modal.Header>
<Modal.Body>

<form onSubmit={handleSubmit3}>
  <div class="row">
  <div class="form-group">
    <label for="TID">TID</label>
    <input type="text" class="form-control"defaultValue={tid}  name='tid' id="FullName" readOnly onChange={handleChange1}   placeholder="TID"/>
  </div>
  <div class="form-group">
    <label for="TID">status</label>
    <input type="text" class="form-control"defaultValue={tecstatus}  name='status' id="FullName"  onChange={handleChange3}   placeholder="Status"/>
  </div>
	<div class="col">
      <input type="text"  onChange={handleChange3} defaultValue={tectype} name='type' class="form-control"  placeholder="type"/>
    </div><br></br>
    <div class="col">
		{tecfile}
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="submit"  class="btn btn-success">Save changes</button>
      </div>
	  </form> 
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleAUditTestView1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>





<Modal

show={viewaudit}
onHide={handleViewAudit1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Audit-Report<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div> </Modal.Title>
</Modal.Header>
<Modal.Body>

<table>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>
</thead>
<tbody>
{tecaudit.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
			
				<td>



				{tec.status==="1"  && <> <li>started




</li></>}


{tec.status==="2"  && <> <li>Finished




</li></>}



				</td>
              <td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
					</td> 
					  {/* 
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleAuditClose}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>
<Modal

show={viewbank}
onHide={handleviewbank1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Bank-Statement<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<table style={{width:`100%`}}>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{tecbank.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
	<button className={`btn8${isLoading ? ' btn8-progress' : ''}${isLoading ? ' btn8-fill' : ''}${isLoading ? ' btn8-complete' : ''}`} onClick={() => handleButtonClick(tec._id)}>
      Download
    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewquality1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>

<Modal

show={viewlicense}
onHide={handleViewlicense1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Licanse<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<table style={{width:`100%`}}>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{teclicense.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
	<button className={`btn8${isLoading ? ' btn8-progress' : ''}${isLoading ? ' btn8-fill' : ''}${isLoading ? ' btn8-complete' : ''}`} onClick={() => handleButtonClick(tec._id)}>
      Download
    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleViewlicense1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>



<Modal

show={viewtrailing}
onHide={handleViewtrailing1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Trailing<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<table style={{width:`100%`}}>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{tectrailing.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
	<button className={`btn8${isLoading ? ' btn8-progress' : ''}${isLoading ? ' btn8-fill' : ''}${isLoading ? ' btn8-complete' : ''}`} onClick={() => handleButtonClick(tec._id)}>
      Download
    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleViewtrailing1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>

<Modal

show={viewcad}
onHide={handleviewcad1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Cad-Design<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<table style={{width:`100%`}}>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{teccad.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
	<button className={`btn8${isLoading ? ' btn8-progress' : ''}${isLoading ? ' btn8-fill' : ''}${isLoading ? ' btn8-complete' : ''}`} onClick={() => handleButtonClick(tec._id)}>
      Download
    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewcad1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>


<Modal

show={viewcv}
onHide={handleviewcv1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>CV<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<table style={{width:`100%`}}>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{teccv.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
	<button className={`btn8${isLoading ? ' btn8-progress' : ''}${isLoading ? ' btn8-fill' : ''}${isLoading ? ' btn8-complete' : ''}`} onClick={() => handleButtonClick(tec._id)}>
      Download
    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewquality1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>

<Modal
show={viewmethodology}
onHide={handleviewmethodology1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Methodology<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<table style={{width:`100%`}}>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>ActionW</th>

</thead>
<tbody>

   
{tecmethodology.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
	<button className={`btn8${isLoading ? ' btn8-progress' : ''}${isLoading ? ' btn8-fill' : ''}${isLoading ? ' btn8-complete' : ''}`} onClick={() => handleButtonClick(tec._id)}>
      Download
    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewmethodology1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>



<Modal
show={viewdocument}
onHide={handleViewDocument1}
backdrop="static"
keyboard={true}
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
            <p>for{tid}</p>
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

   
{document23.map((tec, i) => (

              <tr key={tec._id}>
            
              
				<td>{tec.tenderid}</td>
				<td>{tec.type}</td>
			

			<td>
	<button className={`btn8${isLoading ? ' btn8-progress' : ''}${isLoading ? ' btn8-fill' : ''}${isLoading ? ' btn8-complete' : ''}`} onClick={() => handleButtonClick(tec._id)}>
      Download
    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn btn-success" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
<div class="form-group">
    <label for="Photo">Comment</label>
    <textarea type="text" class="form-control"   placeholder="Enter Description"/><button type="button" class="btn btn-success"data-toggle="modal" data-target="#exampleModalLong">
                      Submit
                    </button>
  </div>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewmethodology1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>

<Modal

show={viewtenderpart}
onHide={handleviewtenderpart1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h2>Tender-Participation<span></span></h2>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<table style={{width:`100%`}}>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{tectenderpart.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>

				<td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
					<button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
					{/* <button type="button" class="btn"onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button> */}
	<button className={`btn8${isLoading ? ' btn8-progress' : ''}${isLoading ? ' btn8-fill' : ''}${isLoading ? ' btn8-complete' : ''}`} onClick={() => handleButtonClick(tec._id)}>
      Download
    </button>
					</td> 
                {/* <td> <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn"onClick={() => downloadFile(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button>

                    </td> */}
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewtenderpart1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>




<Modal

show={viewexprience}
onHide={handleviewexprience1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Experiance<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<table style={{width:`100%`}}>
<thead>

<th>Title</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{tecexprience.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>
                <td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
                    {/* <button type="button" class="btn"onClick={() => downloadFile(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
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
  <Button variant="secondary" onClick={handleviewexprience1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>



<Modal


show={viewquality}
onHide={handleviewquality1}
backdrop="static"
keyboard={true}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h2>Quality-Certificate<span></span></h2>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<table style={{width:`100%`}}>
<thead>

<th>Title</th>
<th>Tid</th>
<th>Action</th>

</thead>
<tbody>
{tecquality.map((tecb, i) => (

              <tr key={tecb._id}>
            
                <td>{tecb.type}</td>
				<td>{tecb.tenderid}</td>
				{/* <td>{tecb.status}</td> */}
                {/*  <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    */}
					<td>
                    {/* <button type="button" class="btn"onClick={() => downloadFile(tecb._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-download"></i>
                    </button> */}
	<button className={`btn8${isLoading ? ' btn8-progress' : ''}${isLoading ? ' btn8-fill' : ''}${isLoading ? ' btn8-complete' : ''}`} onClick={() => handleButtonClick(tecb._id)}>
      Download
    </button>
                    </td> 
		
                </tr>
))}
</tbody>
</table>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewquality1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>




<Modal


show={upform}
onHide={handlefinoprationtuc1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Unit-Price<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid} item_no{finitemno}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>
<div class="row1">
<span>
    <input class="gate" id="Profit" type="number" placeholder="Profit" 
    value={profit}
      onChange={(e)=>setProfit(e.target.value)}/><label for="Profit">Profit</label>
  </span>
  </div>
 
  

</Modal.Body>
<Modal.Footer>

<div class="modal-footer">
        <button type="button" onClick={handleRequestUp} class="btn btn-primary">Save changes</button>
 <Button variant="danger" onClick={handleUNitPrice1}>
    Close
  </Button>
   </div>

 
 
</Modal.Footer>
</Modal>

<Modal


show={tucform}
onHide={handlefinoprationtuc1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>TUC<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid} item_no{finitemno}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>
<div class="row1">
  <span>
    <input class="gate" id="Inland" type="number" placeholder="Enter Inland"  
   onChange={(e)=>setInland1(e.target.value)}
   value={inland1} /><label for="Inland">Inland</label>
  </span> 
	 </div>
   
   <div class="row1">
  <span>
    <input class="gate" id="Installation" type="number" placeholder="Enter Installation"  
   onChange={(e)=>setInstallation1(e.target.value)}
   value={installation1} /><label for="Installation">Installation</label>
  </span> 
	 </div>  

   <div class="row1">
  <span>
    <input class="gate" id="Training" type="number" placeholder="Enter Training"  
   onChange={(e)=>setTraining(e.target.value)}
   value={training} /><label for="Training">Training</label>
  </span> 
	 </div>

</Modal.Body>
<Modal.Footer>

<div class="modal-footer">
        <button type="button" onClick={handleRequesttuc} class="btn btn-primary">Save changes</button>
  <Button variant="danger" onClick={handlefinoprationtuc1}>
    Close
  </Button>
   </div>


 
</Modal.Footer>
</Modal>

<Modal


show={finopration}
onHide={handlefinopration1}
backdrop="static"
keyboard={false}

>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Add Unit-Cost<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>For {tid} {finqty} {finitemno}</p>
        </div>
    </div>
</div></Modal.Title>
 </Modal.Header> 

<Modal.Body>
<div class="checkboxes">
<label class="flipBox" aria-label="EXW">
<input type="checkbox"name='male' id='one' style={{display:`inline`}} onChange={handleCheckboxChangeAll}/>
    <span>EXW</span>
    <div class="flipBox_boxOuter">
      <div class="flipBox_box">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div class="flipBox_shadow"></div>
  </label>
 {/* EXW<input type="checkbox"name='male' id='one' style={{display:`inline`}} onChange={handleCheckboxChangeAll}/>  
 FOB<input type="checkbox"name='female' id='two' style={{display:`inline`}} onChange={handleCheckboxChange2}/>
 CIF<input type="checkbox"name='other' id='three' style={{display:`inline`}} onChange={handleCheckboxChange5}/>*/}
<label class="flipBox" aria-label="FOB">
<input type="checkbox"name='female' id='two' style={{display:`inline`}} onChange={handleCheckboxChange2}/>
    <span>FOB</span>
    <div class="flipBox_boxOuter">
      <div class="flipBox_box">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div class="flipBox_shadow"></div>
  </label>
  <label class="flipBox" aria-label="CIF">
<input type="checkbox"name='other' id='three' style={{display:`inline`}} onChange={handleCheckboxChange5}/>
    <span>CIF</span>
    <div class="flipBox_boxOuter">
      <div class="flipBox_box">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div class="flipBox_shadow"></div>
  </label>


</div>

	<div>
	</div>
{ 
	  showFormall && (
	<div>
    
<div class="row1">
<span>
    <input class="gate" id="FullName" type="number" placeholder="EXW"  
   onChange={(e)=>setExw(e.target.value)}
   value={exw} /><label for="FullName">EXW</label>
  </span><br/>
  <span>
    <input class="gate" id="InlandC" type="number" placeholder="Inland Cost" 
    value={inlandcost}
      onChange={(e)=>setInlandcost(e.target.value)}/><label for="InlandC">Inland Cost</label>
  </span>
  </div>
  
{/* <div class="form-group">
    <label for="FullName">exw</label>
    <input type="number" class="form-control" id="FullName"  
   onChange={(e)=>setExw(e.target.value)}
   value={exw}
    placeholder="Enter Exw"/>
  </div> */}
  {/* <div class="form-group">
    <label for="Email">Inland Cost</label>
    <input type="number" class="form-control" id="Email"  
   value={inlandcost}
      onChange={(e)=>setInlandcost(e.target.value)}
    placeholder="Enter inland cost"/>
  </div> */}

  <div class="checkboxes">
  <label class="flipBox" aria-label="Sea Freight">
<input type="checkbox" style={{display:`inline`}} onChange={handleCheckboxChange3}/>
    <span>Sea Freight</span>
    <div class="flipBox_boxOuter">
      <div class="flipBox_box">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div class="flipBox_shadow"></div>
  </label>
  <label class="flipBox" aria-label="Air Freight">
<input type="checkbox" style={{display:`inline`}} onChange={handleCheckboxChange4}/>
    <span>Air Freight</span>
    <div class="flipBox_boxOuter">
      <div class="flipBox_box">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div class="flipBox_shadow"></div>
  </label>
  </div>
		{/* <input type="checkbox" onChange={handleCheckboxChange3} />Sea Freight&nbsp;&nbsp;&nbsp;
		<input type="checkbox" onChange={handleCheckboxChange4} />Air Freight&nbsp;&nbsp;&nbsp; */}
		
		
		{    showForm3 && (

<div>

{showForm3 && (
    
	<div>        
          <h3>Add Sea Fright</h3>          
		

          <div class="row1">
<span>
    <input class="gate" id="addSeaFright" type="number" placeholder="Add SeaFright"  
   onChange={(e)=>setfrght(e.target.value)}
   value={fright} /><label for="addSeaFright">Add SeaFright</label>
  </span>
{/* <label>Add SeaFright</label><br></br>
      <input type="number"style={{width:"50%"}}   onChange={(e) => setfrght(e.target.value)} value={fright} class="form-control"  placeholder="SeaFright"/> */}
 <span>
    <input class="gate" id="Insurance" type="number" placeholder="Insurance"  
   onChange={(e)=>setInsurance(e.target.value)}
   value={insurance} /><label for="Insurance">Insurance</label>
  </span>
      {/* <input type="number"style={{width:"50%"}}   onChange={(e) => setInsurance(e.target.value)} value={insurance} class="form-control"  placeholder="Insurance"/> */}
    </div>
										
 <div class="row1">
<label>Tax</label>
<div style={{ border: "4px solid #007cff", marginLeft: "30px", marginRight: "50px", padding: "20px" }}>
											<div class="row">
<span>
    <input class="gate" id="Rate" type="number" placeholder="Rate"  
   onChange={(e)=>setRate(e.target.value)}
   value={rate} /><label for="Rate">Rate</label>
  </span>
    </div>
			<div>
	<div class="row">
<span>
    <input class="gate" id="Percent" type="number" placeholder="percent %"  
   onChange={(e)=>setPercent(e.target.value)}
   value={percent} /><label for="Percent">Percent</label>
  </span>
    </div>
</div>
	</div>
  </div>
  <div class="row1">
{/* <label>Black</label><br></br> */}
<span>
    <input class="gate" id="black" type="number" placeholder="Black"  
   onChange={(e)=>setBlack(e.target.value)}
   value={black} /><label for="black">Black</label>
  </span>
      {/* <input type="number"style={{width:"50%"}}  onChange={(e) => setBlack(e.target.value)} value={black} class="form-control"  placeholder="black"/> */}
    </div>
											</div>
											
										
											)}

</div>

		)}

{showForm4 && (
  
  <>
    <h3>Add Air Fright</h3>  
  
	<div class="row1">
<span>
    <input class="gate" id="AirFright" type="number" placeholder="Air Fright"  
   onChange={(e)=>setfrght(e.target.value)}
   value={fright} /><label for="AirFright">Air Fright</label>
  </span>
    </div>
<div class="row1">
<label>Tax</label>
<div style={{ border: "4px solid #007cff", marginLeft: "30px", marginRight: "50px", padding: "20px" }}>
		<div class="row">
<span>
    <input class="gate" id="Rate" type="number" placeholder="Rate"  
   onChange={(e)=>setRate(e.target.value)}
   value={rate} /><label for="Rate">Rate</label>
  </span>
    </div>
			<div>
	<div class="row">
<span>
    <input class="gate" id="Percent" type="number" placeholder="percent %"  
   onChange={(e)=>setPercent(e.target.value)}
   value={percent} /><label for="Percent">Percent</label>
  </span>
    </div>
</div>
	</div>
  </div>	


  <div class="row1">
<span>
    <input class="gate" id="black" type="number" placeholder="Black"  
   onChange={(e)=>setBlack(e.target.value)}
   value={black} /><label for="black">Black</label>
  </span>
    </div>
	 </>
)}
		</div>
	  )}



{showForm2 && (
	<>
	<form>
	  <h1>Add FOB </h1>  
    
    <div class="row1">
<span>
    <input class="gate" id="FOB" type="number" placeholder="FOB"  
   onChange={(e)=>setFob(e.target.value)}
   value={fob} /><label for="FOB">FOB</label>
  </span>
    </div>

    <div class="row1">
<span>
    <input class="gate" id="Fright" type="number" placeholder="Fright"  
   onChange={(e)=>setfrght(e.target.value)}
   value={fright} /><label for="Fright">Fright</label>
  </span>
    </div>

    <div class="row1">
<span>
    <input class="gate" id="Insurance" type="number" placeholder="Insurance"  
   onChange={(e)=>setInsurance(e.target.value)}
   value={insurance} /><label for="Insurance">Insurance</label>
  </span>
    </div>

    <div class="row1">
<span>
    <input class="gate" id="inlandcost" type="number" placeholder="inlandcost"  
   onChange={(e)=>setInlandcost(e.target.value)}
   value={inlandcost} /><label for="inlandcost">inlandcost</label>
  </span>
    </div>
	

  <div class="row1">
<label>Tax</label>
<div style={{ border: "4px solid #007cff", marginLeft: "30px", marginRight: "50px", padding: "20px" }}>
		<div class="row">
<span>
    <input class="gate" id="Rate" type="number" placeholder="Rate"  
   onChange={(e)=>setRate(e.target.value)}
   value={rate} /><label for="Rate">Rate</label>
  </span>
    </div>
			<div>
	<div class="row">
<span>
    <input class="gate" id="Percent" type="number" placeholder="percent %"  
   onChange={(e)=>setPercent(e.target.value)}
   value={percent} /><label for="Percent">Percent</label>
  </span>
    </div>
</div>
	</div>
  </div>	

<div class="row1">
<span>
    <input class="gate" id="black" type="number" placeholder="black"  
   onChange={(e)=>setBlack(e.target.value)}
   value={black} /><label for="black">Black</label>
  </span>
</div>
											</form>
											</>

										

											)}


{showForm5 && (
    
	<>
	<form>
	  <h1>ADD CIF</h1>  
    <div class="row1">
 <span>
    <input class="gate" id="CIF" type="number" placeholder="CIF"  
   onChange={(e)=>setCif(e.target.value)}
   value={cif} /><label for="CIF">CIF</label>
  </span>
	 </div>

 <div class="row1">
<label>Tax</label>
<div style={{ border: "4px solid #007cff", marginLeft: "30px", marginRight: "50px", padding: "20px" }}>
		<div class="row">
<span>
    <input class="gate" id="Rate" type="number" placeholder="Rate"  
   onChange={(e)=>setRate(e.target.value)}
   value={rate} /><label for="Rate">Rate</label>
  </span>
    </div>
			<div>
	<div class="row">
<span>
    <input class="gate" id="Percent" type="number" placeholder="percent %"  
   onChange={(e)=>setPercent(e.target.value)}
   value={percent} /><label for="Percent">Percent</label>
  </span>
    </div>
</div>
	</div>
  </div>	
 
	<div class="row1">
  <span>
    <input class="gate" id="black" type="number" placeholder="black"  
   onChange={(e)=>setBlack(e.target.value)}
   value={black} /><label for="black">Black</label>
  </span> 
	 </div>
			    </form>
		   
									   </> 
	   )}
		 

</Modal.Body>
<Modal.Footer>
<div class="modal-footer">
  <Button variant="danger" onClick={handlefinopration1}>
    Close
  </Button>
  <button type="button" onClick={handleRequestfinancial} class="btn btn-primary">Save changes</button>

   </div>
  
 
</Modal.Footer>
</Modal>

<Modal style={{width:'1500px'}}
show={viewfinanciialcsv}
onHide={handleviewfinancialcsv1}
backdrop="static"
size="lg"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Financial<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>For {tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<div><br/>
<button type="button"onClick={FcsvCalculation}  class="btn btn-success">Calculate</button>


	 <input type="file" onChange={handleFileSelect} />
      {csvHeaders.map((header) => (
        <div key={header} class='d-flex flex-row gap-5 mb-4 '>
          <label htmlFor={header}>{header}:</label>
          <select    className='form-select w-25' id={header} onChange={(e) => handleFieldMapping(header, e.target.value)}>       

            <option value="">Select Field</option>
            <option value="Tid">Tid</option>

            <option value="item_no">Item no</option>
            <option value="item_name"> item name</option>

            <option value="description">description</option>
            <option value="qty">qty</option>
            <option value="unit">unit</option>
            <option value="cdate">cdate</option>



            {/* Add more options for other schema fields */}
          </select>
        </div>
      ))}
      <button className='btn btn-info' onClick={handleFileUpload2}>Upload Financial</button>


    </div>



<table  >
<thead>

<th>Tid</th>

<th>Item no</th>

<th>Quantity</th>
<th>Unit cost</th>
<th>Total Ucost</th>
<th>UnitPrice</th>
<th>upwv</th>
<th>tup</th>
<th>tupwv</th>


</thead>
<tbody>
{viewunitcost.map((tecb, i) => (

              <tr key={tecb._id}>
               <td>{tecb.tid}</td>
			   <td>{tecb.item_no}</td>
				<td>{tecb.qty}</td>
        <td>{tecb.unitcost}</td>
        <td>{tecb.tuc}</td>
        <td>{tecb.unitprice}</td>
        <td>{tecb.upwv}</td>
        <td>{tecb.tup}</td>
        <td>{tecb.tupwv}</td>




	
				

                {/*  <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    */}
					<td>
                    {/* <button type="button" class="btn"onClick={() => downloadFile(tecb._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button> */}

                    </td> 
		
                </tr>
))}
</tbody>
</table>

</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewfinancialcsv1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>



<Modal style={{width:'1500px'}}
show={viewfinanciial}
onHide={handleviewfinancial1}
backdrop="static"
size="lg"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Financial<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>For {tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<div><br/>
  

	 <input type="file" onChange={handleFileSelect} />
      {csvHeaders.map((header) => (
        <div key={header} class='d-flex flex-row gap-5 mb-4 '>
          <label htmlFor={header}>{header}:</label>
          <select    className='form-select w-25' id={header} onChange={(e) => handleFieldMapping(header, e.target.value)}>       

            <option value="">Select Field</option>
            <option value="Tid">Tid</option>

            <option value="item_no">Item no</option>
            <option value="item_name"> item name</option>

            <option value="description">description</option>
            <option value="qty">qty</option>
            <option value="unit">unit</option>
            <option value="cdate">cdate</option>



            {/* Add more options for other schema fields */}
          </select>
        </div>
      ))}
      <button className='btn btn-success' onClick={handleFileUpload2}>Upload Financial</button>
      <button type="button" class="btn"onClick={() => handleviewfinancialcsv()} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-plus"></i>
                   Add Csv Financial </button>

    </div>



<table  >
<thead>

<th>Tid</th>

<th>Item no</th>

<th>Quantity</th>
<th>Unit cost</th>
<th>Total Ucost</th>
<th>UnitPrice</th>
</thead>
<tbody>
{viewcomplience.map((tecb, i) => (

              <tr key={tecb._id}>
               <td>{tecb.Tid}</td>
			   <td>{tecb.item_no}</td>
				<td>{tecb.qty}</td>
			<td><button type="button" class="btn"onClick={() => handlefinopration(tecb)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-plus"></i>
                    </button></td>
					<td><button type="button" class="btn"onClick={() => handlefinoprationtuc(tecb)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-plus"></i>
                    </button></td>
					<td><button type="button" class="btn" data-toggle="modal"onClick={() => handleUNitPrice(tecb)}  data-target="#exampleModalLong">
                      <i class="fa fa-plus"></i>
                    </button></td>
				

                {/*  <button type="button" class="btn"onClick={() => deletePost(data._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow(data)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    */}
					<td>
                    {/* <button type="button" class="btn"onClick={() => downloadFile(tecb._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="bi bi-download"></i>
                    </button> */}

                    </td> 
		
                </tr>
))}
</tbody>
</table>

</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleviewfinancial1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>
<Modal
show={viewcompany}
onHide={handleviewcompany1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h2>Company-Profile<span></span></h2>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>For {tecid}</p>
        </div>
    </div>
</div> </Modal.Title>
</Modal.Header>
<Modal.Body>

<table style={{width:`100%`}}>
<thead>

<th>Title</th>
<th>Tid</th>
<th>Action</th>

</thead>
<tbody>
{teccompany.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>
                <td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
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
  <Button variant="secondary" onClick={handleviewcompany1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>
<Modal
show={viewauthorization}
onHide={handleviewauthorization1}
backdrop="static"
keyboard={true}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Authorization<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for {tecid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<table style={{width:`100%`}}>
<thead>

<th>Type</th>
<th>Tid</th>
<th>status</th>
<th>Action</th>

</thead>
<tbody>
{technicals.map((tec, i) => (

              <tr key={tec._id}>
            
                <td>{tec.type}</td>
				<td>{tec.tenderid}</td>
				<td>{tec.status}</td>
                <td> <button type="button" class="btn"onClick={() => deletePost(tec._id)} data-toggle="modal" data-target="#exampleModalLong">
                      <i class="fa fa-trash"></i>
                    </button>
                    
                    <button type="button" class="btn" data-toggle="modal" onClick={() => handleShow1(tec)} >
                      <i class="fa fa-edit"></i>
                    </button>
                    
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
  <Button variant="secondary" onClick={handleviewauthorization1}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>


<Modal
show={cv1}
onHide={handleCvClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>CV<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button"onClick={handleViewAudit1} class="btn btn-danger" >Close</button>
        <button type="button"onClick={addCv}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>

<Modal
show={company1}
onHide={handleCompClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h2>Company-Profile<span></span></h2>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adCompany}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>
<Modal
show={experiance1}
onHide={handleExpClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Experiance<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={adExprience}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>
<Modal
show={license1}
onHide={handleLicClose}
backdrop="static"
keyboard={false}
centered
// size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>License<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>for{tid}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>  
      <form>
  <div class="row">
    <div class="col">
      <input  onChange={(e) => setTenderid(e.target.value)} value=""hidden   />
    </div><br></br>
	<div class="row">
      <input type="text"  onChange={(e) => setType(e.target.value)} value={type} class="form-control"hidden  placeholder="type"/>
    </div><br></br>
    <div class="row">
      <input type="file"ref={fileInputRef} class="form-control" placeholder="file"/>
    </div>
  </div>
</form> 
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" >Close</button>
        <button type="button"onClick={addLicense}  class="btn btn-success">Save changes</button>
      </div>
</Modal.Body>
</Modal>
<Modal
show={more}
onHide={handleMoreClose}
backdrop="static"
keyboard={false}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Action<span></span></h1>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

  
     
	 {/* <table class="table table-striped table-sm">
	 <div class="row">
        <div class="col-md-6">
				            <tr>
                                <th>RID</th>
                                <td>{rid}</td></tr>
                            <tr>
                                <th>Tender-Name</th>
                                <td>{tenderno}</td>
                            </tr>
                            <tr>
                                <th>Organization-ID</th>
                                <td>{oid}</td>
                                </tr>
                             <tr>
                                <th>Organization-Name</th>
                                <td>{oname}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{address}</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>{city}</td>
                            </tr>
							<tr>
                                <th>Country</th>
                                <td>{country}</td>
							</tr>

                                </div>
								<div class="col-md-6">
						
                            <tr>
                                <th>Region</th>
                                <td>{region}</td>
                            </tr>
                            <tr>
                                <th>Bid-Bind</th>
                                <td>{binbind}</td>
                                </tr>
                             <tr>
                                <th>Document-Fee</th>
                                <td>{docfee}</td>
                            </tr>
                            <tr>
                                <th>Catagory</th>
                                <td>{catalog}</td>
                            </tr>
                            <tr>
                                <th>Project-Manager</th>
                                <td>{projectmanager}</td>
                            </tr>	
							<tr>
                                <th>Description</th>
                                <td>{description}</td>
                            </tr>	
							</div>
								</div>
                         
                    </table>
      <br/><br/> */}
     

<button type="button" class="btn-flip" data-back="Tender" data-front="Upload" style={{color:"white"}}  onClick={() =>handleUpload(hh)}>
Upload
</button>&nbsp;&nbsp;&nbsp;
<button type="button" class="btn-flip" data-back="Tender" data-front="Create" style={{color:"white"}}  onClick={() =>handleTenderuser(hh)}>
Tender
</button>&nbsp;&nbsp;&nbsp;
{/* <button type="button" className="btn btn-info"style={{color:"white"}}  onClick={() =>handleTenderuser(hh)}>
Compliance Sheet
</button>&nbsp;&nbsp;&nbsp;
<button className="btn btn-info"style={{color:"white"}} onClick={() =>handleViewDocument()}>
                    
					Documentation</button>  */}

<button type="button" class="btn-flip" data-back="Tender" data-front="Edit" onClick={() =>handleEdit1(hh)}>
  {/* <i className='fas fa-edit'></i> */}
</button>&nbsp;&nbsp;&nbsp;

<button type="button" class="btn-flip" data-back="Tender" data-front="Delete"   onClick={() =>deletePost1(hh)} data-target="#deletedata">
  {/* <i className='fas fa-trash'></i> */}
</button>


   
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>


<Modal
show={upload}
onHide={handleUploadClose}
backdrop="static"
keyboard={false}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>UPLOAD<span></span></h1>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

    {/* <Link to="/addcsv" >Add Upload(CSV)</Link> */}
<button type="button" class="btn-flip" data-back="Upload" data-front="Add(CSV)"  onClick={() =>handleAddUploadCsv()}>
</button>
&nbsp;&nbsp;&nbsp;
<button type="button" class="btn-flip" data-back="Upload" data-front="Add"  onClick={() =>handleAddUpload(hh)}>
</button>&nbsp;&nbsp;&nbsp;
<button type="button" class="btn-flip" data-back="Tender" data-front="Check"  onClick={() =>handleCheck(hh)}></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
{/* <button type="button" class="btn-flip" data-back="Tender" data-front="Delete"  onClick={() =>handleAddUpload(hh)}>
All  Upload
</button>&nbsp;&nbsp;&nbsp; */}
<div class="card-box mb-30">
						
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap"
							>
								<thead>
									<tr>
										<th class="table-plus datatable-nosort">TID</th>
										<th>Item-Number</th>
										<th>Item-Name</th>
										<th>Unit</th>
										<th>Quality</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
								{applicants1.map((user, i) =>(
						<tr key={user._id}>
										<td class="table-plus">{user.Tid}</td>
										<td>{user.item_no}</td>
										<td>{user.item_name}</td>
										<td>{user.unit}</td>
										<td>{user.qty}</td>
                    <td>
					<button type="button" class="btn btn-danger" >
  <i className='fas fa-trash'></i>
</button>&nbsp;&nbsp;&nbsp;

                 

					<button type="button" class="btn btn-primary" onClick={() =>handleeditupload(user)} >
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;
					</td>
									</tr>
								))}
									
								</tbody>
							</table>
						</div>
					</div>

      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
	  </Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>


<Modal
show={addupload}
onHide={handleAddupClose}
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
            <p>Upload</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>
   {/* onSubmit={handleSubmit2} onChange={(e)=>setTid(e.target.value)}*/}
<form>
            <div class="form-group">
    <label for="TID">TID</label>
    <input type="text" class="form-control" id="TID" defaultValue={tid} name='tid'
	 value={tid} 
	 placeholder="TID"/>
  </div>
  <div class="form-group">
    <label for="itemno">Item-Number</label>
    <input type="text" class="form-control" id="itemno"  
	value={itemno} name='itemno' onChange={(e)=>setItemno1(e.target.value)}
	placeholder="Enter Item-Number"/>
  </div>
  <div class="form-group">
    <label for="itemname">Item-Name</label>
    <input type="text" class="form-control" id="itemname" 
	value={itemname} name='itemname' onChange={(e)=>setItemname1(e.target.value)}
	placeholder="Enter Unit"/>
  </div>
  <div class="form-group">
    <label for="Unit">Unit</label>
    <input type="text" class="form-control" id="Unit" 
	value={unit} name='unit' onChange={(e)=>setUnit(e.target.value)}
	placeholder="Enter Unit"/>
  </div>
  <div class="form-group">
    <label for="qty">Quantity</label>
    <input type="text" class="form-control" id="qty" 
	value={quality} name='qty' onChange={(e)=>setQuality1(e.target.value)}
	placeholder="Enter Quality"/>
  </div>
  <div class="form-group">
    <label for="Description">Description</label>
    <input type="text" class="form-control" id="Description"  
	value={description} name='description'  onChange={(e)=>setDescription(e.target.value)}
	placeholder="Enter Description"/>
  </div>

  <div class="modal-footer">
      <Button variant="danger" onClick={handleAddupClose}>
    Close
  </Button> 
  <button type="button" class="btn btn-success" 
      onClick={() => handleRequest1()}
        >Add Upload</button>
      </div>
	</form>
    

</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>

<Modal
show={editupload}

backdrop="static"
keyboard={false}
>
<Modal.Header handleeditupload1>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>EDIT<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>Upload</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>
   {/* onSubmit={handleSubmit2} onChange={(e)=>setTid(e.target.value)}*/}
<form onSubmit={handlecsvUpdate}>
            <div class="form-group">
    <label for="TID">TID</label>
    <input type="text" class="form-control" id="TID" defaultValue={tid} name='tid'
	
	 placeholder="TID"/>
  </div>
  <div class="form-group">
    <label for="itemno">Item-Number</label>
    <input type="text" class="form-control" id="itemno"  
	value={item_nos} name='item_no' 
	onChange={changeCsv}
	placeholder="Enter Item-Number"/>
  </div>
  <div class="form-group">
    <label for="itemname">Item-Name</label>

    <input type="text" class="form-control" id="itemname" 
	defaultValue={item_names} name='item_name' 
	onChange={changeCsv}
	placeholder="Enter Unit"/>
  </div>
  <div class="form-group">
    <label for="Unit">Unit</label>
    <input type="text" class="form-control" id="Unit" 
		onChange={changeCsv}
	defaultValue={units} name='unit' 
	placeholder="Enter Unit"/>
  </div>
  <div class="form-group">
    <label for="qty">Quantity</label>
	
    <input type="text" class="form-control" id="qty" 
	defaultValue={qtys} name='qty' 
	onChange={changeCsv}
	placeholder="Enter Quality"/>
  </div>
  <div class="form-group">
    <label for="Description">Description</label>
    <input type="text" class="form-control" id="Description"  
	defaultValue={descriptions} name='description'  
	onChange={changeCsv}
	placeholder="Enter Description"/>
  </div>
  <div class="form-group">
    <label for="Description">Date</label>
    <input type="date" class="form-control" id="Description"  
	defaultValue={cdates} name='cdate'  
	onChange={changeCsv}
	placeholder="Enter Description"/>
  </div>

  <div class="modal-footer">
      <Button variant="danger" onClick={handleeditupload1}>
    Close
  </Button> 
  <button type="submi" class="btn btn-success" 
     
        >update Upload</button>
      </div>
	</form>
    

</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>
<Modal
show={adduploadcsv}
onHide={handleAddcsvClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>ADD(CSV)<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>Upload</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>
   {/* <button className='btn btn-secondary' onClick={() =>handleViewUpload()}>View Upload(CSV)</button><br/> */}
<div><br/>
   

	 <input type="file" onChange={handleFileSelect} />
      {csvHeaders.map((header) => (
        <div key={header} class='d-flex flex-row gap-5 mb-4 '>
          <label htmlFor={header}>{header}:</label>
          <select    className='form-select w-25' id={header} onChange={(e) => handleFieldMapping(header, e.target.value)}>       

            <option value="">Select Field</option>
            <option value="Tid">Tid</option>

            <option value="item_no">Item no</option>
            <option value="item_name"> item name</option>

            <option value="description">description</option>
            <option value="qty">qty</option>
            <option value="unit">unit</option>
            <option value="cdate">cdate</option>



            {/* Add more options for other schema fields */}
          </select>
        </div>
      ))}
      <button className='btn btn-info' onClick={handleFileUpload1}>Uploadccccccccccccccc</button>


    </div>
    

</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>


<Modal
show={viewupload}
onHide={handleViewUploadClose}
backdrop="static"
keyboard={false}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Upload<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>{hh}</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<div class="card-box mb-30">
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap"
							>
								<thead>
									<tr>
										<th class="table-plus datatable-nosort">Name</th>
										<th>Age</th>
										<th>Office</th>
										<th>Address</th>
										<th>Start Date</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td class="table-plus">Gloria F. Mead</td>
										<td>25</td>
										<td>Sagittarius</td>
										<td>2829 Trainer Avenue Peoria, IL 61602</td>
										<td>29-03-2018</td>
                    <td>
                      <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalLong">
                      <i class="icon-copy fi-plus"></i>
</button>
</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
	  </Modal.Body>
<Modal.Footer>
</Modal.Footer>
</Modal>




<Modal
show={check}
onHide={handleCheckClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title><div class="container9">
    <div class="box9">
        <div class="title9">
            <span class="block9"></span>
            <h1>Check<span></span></h1>
        </div>
        <div class="role9">
            <div class="block9"></div>
            <p>Privilage</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>
<form onSubmit={handleSubmit1}>
          <div class="form-group">
		  
			<div class="col-md-12">

      <div class="checkboxes">

			<input type="text" class="form-control" 
					   value={tid}
					   onChange={(e)=>setTid(e.target.value)} readOnly style={{border:`0`}}/>
				
<label class="flipBox" for="Authorization">		
<input type="checkbox" name='authorization' id="Authorization"
             value={1}
             onChange={handleChange1}/>
 {authorization==="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}
  <span>Authorization</span>
<div class="flipBox_boxOuter">
<div class="flipBox_box">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>
</div>
<div class="flipBox_shadow"></div>
</label>

<label class="flipBox" for="Compliance-Sheet">		
<input type="checkbox" name='companyprofile' id="Compliance-Sheet"
             value={1}
             onChange={handleChange1}/>
 {companyprofile==="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}
  <span>Compliance-Sheet</span>
<div class="flipBox_boxOuter">
<div class="flipBox_box">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>
</div>
<div class="flipBox_shadow"></div>
</label>

<label class="flipBox" for="Quality-Certificate">		
<input type="checkbox" name='qualitycertificate' id="Quality-Certificate"
             value={1}
             onChange={handleChange1}/>
 {highquality==="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}
  <span>Quality-Certificate</span>
<div class="flipBox_boxOuter">
<div class="flipBox_box">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>
</div>
<div class="flipBox_shadow"></div>
</label>
<label class="flipBox" for="Audit-Report">		
<input type="checkbox" name='auditreport' id="Audit-Report"
             value={1}
             onChange={handleChange1}/>
  <span>Audit-Report</span>
<div class="flipBox_boxOuter">
<div class="flipBox_box">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>
</div>
<div class="flipBox_shadow"></div>
</label>
             <label class="flipBox" for="Bank-Statement">		
             <input type="checkbox" name='bankstatement' id="Bank-Statement"
                          value={1}
                          onChange={handleChange1}/>
               <span>Bank-Statement</span>
       <div class="flipBox_boxOuter">
         <div class="flipBox_box">
           <div></div><div></div><div></div><div></div><div></div><div></div>
         </div>
       </div>
       <div class="flipBox_shadow"></div>
     </label>

             <label class="flipBox" for="Experiance">		
                       <input type="checkbox" name='experiance' id="Experiance"
                                    value={1}
                                    onChange={handleChange1}/>
                         <span>Experiance</span>
                 <div class="flipBox_boxOuter">
                   <div class="flipBox_box">
                     <div></div><div></div><div></div><div></div><div></div><div></div>
                   </div>
                 </div>
                 <div class="flipBox_shadow"></div>
               </label>


		           <label class="flipBox" for="CV">		
               <input type="checkbox" name='cv' id="CV"
                            value={1}
                            onChange={handleChange1}/>
                {cv==="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i>
                <input type="checked"/>
                </>}
                 <span>CV</span>
         <div class="flipBox_boxOuter">
           <div class="flipBox_box">
             <div></div><div></div><div></div><div></div><div></div><div></div>
           </div>
         </div>
         <div class="flipBox_shadow"></div>
       </label>


           <label class="flipBox" for="License">		
           <input type="checkbox" name='license' id="License"
                        value={1}
                        onChange={handleChange1}/>
            {license==="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}
             <span>License</span>
     <div class="flipBox_boxOuter">
       <div class="flipBox_box">
         <div></div><div></div><div></div><div></div><div></div><div></div>
       </div>
     </div>
     <div class="flipBox_shadow"></div>
   </label>


           <label class="flipBox" for="Methodology">		
        	<input type="checkbox" name='methodology' id="Methodology"
										   value={1}
										   onChange={handleChange1}/>
					 {methodology==="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}
            <span>Methodology</span>
    <div class="flipBox_boxOuter">
      <div class="flipBox_box">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div class="flipBox_shadow"></div>
  </label>
					{/* <input type="checkbox"name='trailing' class="custom-control-input" id="Trailing"
										   value={1}
										   onChange={handleChange1}/> */}

           <label class="flipBox" for="Trailing">		
        	<input type="checkbox" name='trailing' id="Trailing"
										   value={1}
										   onChange={handleChange1}/>
					 {traling==="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}
            <span>Trailing</span>
    <div class="flipBox_boxOuter">
      <div class="flipBox_box">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div class="flipBox_shadow"></div>
  </label>		
					<label class="flipBox" for="Cad-Design">		
        	<input type="checkbox" name='caddesign' id="Cad-Design"
										   value={1}
										   onChange={handleChange1}/>
					 {cad==="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}
            <span>Cad-Design</span>
    <div class="flipBox_boxOuter">
      <div class="flipBox_box">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div class="flipBox_shadow"></div>
  </label>
				{/* <div class="custom-control custom-checkbox mb-3"> */}
					{/* <input type="checkbox"name='financial' class="custom-control-input" id="Financial"
										   value={1}
										   onChange={handleChange1}/> */}
					<label class="flipBox" aria-label="Financial">
          <input type="checkbox" name='financial' id='Financial' style={{display:`inline`}} value={1} onChange={handleChange1}/>
					 {financial==="1"  && <><i class="bi bi-check"style={{fontSize:'27px'}}></i></>}
					  {/* {financial==="0"  && <><h1 style={{marginLeft:"200px"}}>Unchecked</h1></>} */}
            <span>Financial</span>
    <div class="flipBox_boxOuter">
      <div class="flipBox_box">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div class="flipBox_shadow"></div>
  </label>
				{/* </div> */}
				{/* <div class="custom-control custom-checkbox mb-3"> */}
					{/* <input type="checkbox"name='tenderparticipation' class="custom-control-input" id="Tender-Participation"
										   value={1} 
										   onChange={handleChange1}/>*/}
					<label class="flipBox" aria-label="tenderparticipation">
          <input type="checkbox" name='tenderparticipation' id='Tender-Participation' style={{display:`inline`}} value={1} onChange={handleChange1}/>
					 
					 {tendpart==="1"  && <><i class="bi bi-check"style={{fontSize:'27px',marginLeft:"367px"}}></i></>}

					  {/* {tendpart==="0"  && <>Unchecked</>}  */}
            <span>Tender-Participation</span>
    <div class="flipBox_boxOuter">
      <div class="flipBox_box">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
    <div class="flipBox_shadow"></div>
  </label>
				{/* </div> */}
			</div>
      </div>
		
       <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
		<button type="submit" class="btn btn-success" >Save changes</button>      </div>
	</div>
	</form>
	</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>


<Modal
show={editTender}
onHide={handleTendAddClose}
backdrop="static"
keyboard={false}
size="lg"

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
            <p>Tender</p>
        </div>
    </div>
</div></Modal.Title>
</Modal.Header>
<Modal.Body>

<form onSubmit={handleSubmit1} method="POST">
        <div class="row">
        <div class="col-md-6">
 <div class="form-group">
    <label for="TID">TID</label>
    <input type="text" class="form-control"defaultValue={tid}  name='tid' id="FullName" readOnly onChange={handleChange1}   placeholder="TID"/>
  </div>
  <div class="form-group">
    <label for="FullName">RID</label>
    <input type="text" defaultValue={rid} name='rid'     onChange={handleChange1} readOnly
 class="form-control" id="FullName"  placeholder="Enter RID"/>
  </div>
  <div class="form-group">
    <label for="Email">Tender-No</label>
    <input type="text"defaultValue={tenderno}name='tenderno'  onChange={handleChange1} class="form-control" id="Email"  placeholder="Enter Tender-No"/>
  </div>
  <div class="form-group">
    <label for="Gender">Org-ID</label>
   
    <input type="text" class="form-control"defaultValue={oid} name='oid'  onChange={handleChange1} id="Gender"  placeholder="Enter Org-ID"/>
  </div>

  <div class="form-group">
    <label for="Phone">Org-Name</label>
    <input type="text" class="form-control"defaultValue={oname}name='oname' onChange={handleChange1} id="Phone"  placeholder="Enter Org-Name"/>
  </div>
  <div class="form-group">
    <label for="User">Address</label>
    <input type="text" class="form-control" id="User"defaultValue={address} name='address' onChange={handleChange1}  placeholder="Enter Address"/>
  </div>
  <div class="form-group">
    <label for="Password">City</label>
    <input type="text" class="form-control" defaultValue={city} onChange={handleChange1} name='city'  id="Password" placeholder="City"/>
  </div>
  <div class="form-group">
    <label for="Role">Country</label>
    <input type="text" class="form-control" value={country} onChange={handleChange1} name='country' id="Role"  placeholder="Enter Country"/>
  </div>
  </div> <div class="col-md-6">
  <div class="form-group">
  <label for="Photo">Assign-Project-Leader</label>
    {/* <select value={assign} id="selectId"  class="form-control" onChange={e => setAssign(e.target.value)}>
                 
                 {employee.map((item) => (
                  <option value={item.fname} key={item}>
                    {" "}
                    {item.fname}{" "}
                  </option>
                ))}
                 </select> */}
                 
                   </div>
  <div class="form-group">
    <label for="Photo">Bid-Bind</label>
    <input type="text" class="form-control"  defaultValue={binbind} name='binbind'  id="Photo"onChange={handleChange1}  placeholder="Enter Bid-Bind"/>
  </div>
  <div class="form-group">
    <label for="Photo">Document-Fee</label>
    <input type="text" class="form-control"defaultValue={docfee} id="Photo"onChange={handleChange1} name='docfee'   placeholder="Enter Document-Fee"/>
  </div>
  <div class="form-group">
    <label for="Photo">Region</label>
    <input type="text" class="form-control" defaultValue={region} name='region' id="Photo"onChange={(e)=>setRegion(e.target.value)}   placeholder="Enter Region"/>
  </div>
  <div class="form-group">
    <label for="Photo">Category</label>
    <input type="text" class="form-control" value={catagory} name='catagory' id="Photo"  onChange={handleChange1}   placeholder="Enter Category"/>
  </div>
  <div class="form-group">
    <label for="Photo">Project-Manager</label>
    <input type="text" class="form-control" defaultValue={projectmanager} name='projectmanager' id="Photo"onChange={handleChange1}  placeholder="Enter Project-Manager"/>
  </div>
  <div class="form-group">
    <label for="Photo">Open-Date</label>
    <input type="date" class="form-control"defaultValue={opendate} name='start' id="Photo" onChange={handleChange1}   placeholder="Enter Open-Date"/>
  </div>
  <div class="form-group">
    <label for="Photo">Close-Date</label>
    <input type="date" class="form-control"defaultValue={closedate} name='end' id="Photo" onChange={handleChange1} placeholder="Enter Close-Date"/>
  </div>
  <div class="form-group">
    <label for="Photo">Description</label>
    <textarea type="text" class="form-control" defaultValue={description} name='description' onChange={handleChange1}id="Photo"  placeholder="Enter Description"/>
  </div> </div></div>
  

      <div class="modal-footer">
      <Button variant="danger" onClick={handleTendAddClose}>
    Close
  </Button> 
  <button type="submit" class="btn btn-success">Save changes</button>
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

export default Tender


function oneColumnHeader(title,rawData,key,handleOptionChange) {
    return(
        <div className='d-flex flex-row gap-5 mb-4 '   key={key}>
            <p className='w-25'>{title}</p>

            <select className='form-select w-25'
             name={key}
             onChange={handleOptionChange}>
                <option value="" disabled selected hidden>-- Select --</option>
                <option value={"tid"}>Tid</option>
                <option value={"item_no"}>item_no</option>
                <option value={"item_name"}>item_name</option>
                <option value={"unit"}>unit</option>
                <option value={"qty"}>qty</option>
                <option value={"description"}>description</option>
                <option value={"cdate"}>cdate</option>
            </select>

            <p>{rawData}</p>
        </div>
    )
    
}

function postData(data){
  axios
  .post('http://localhost:8005/csvupload', data) 
  .then((response) => {
    // Handle success response
    // console.log('API response:', response.data);
	// window.location.href = "/tender";
	// const [viewupload, setViewUpload] = useState(false);
	// const [upload, setUpload] = useState(false);
	// setViewUpload(true);  
	// setUpload(false); 
  })
  .catch((error) => {
    // Handle error response
    console.error('API error:', error);
  });
}




function getStatusElement(progress) {
	if (progress === "0") {

  return <span class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
	  <div class="progress-bar  bg-warning progress-bar-striped progress-bar-animated" 
	  role="progressbar" style={{width: "100%"}} 
	  aria-valuenow="100" aria-valuemin="0" 
	  aria-valuemax="100">Pending</div>
</span>		
	} 
	else if (progress < "25" && progress >= "1") {
	  return <span class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
	  <div class="progress-bar progress-bar-striped progress-bar-animated" 
	  role="progressbar" style={{width: "25%"}} 
	  aria-valuenow="25" aria-valuemin="0" 
	  aria-valuemax="100">25%</div>
</span>	
	} 
  else if (progress < "50" && progress >= "25") {
	  return <span class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
	  <div class="progress-bar progress-bar-striped progress-bar-animated" 
	  role="progressbar" style={{width: "50%"}} 
	  aria-valuenow="25" aria-valuemin="0" 
	  aria-valuemax="100">50%</div>
</span>	
	} 
  else if (progress < "75" && progress >= "50") {
	  return <span class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
	  <div class="progress-bar progress-bar-striped progress-bar-animated" 
	  role="progressbar" style={{width: "50%"}} 
	  aria-valuenow="25" aria-valuemin="0" 
	  aria-valuemax="100">50%</div>
</span>	
	}
  else if (progress < "99" && progress >= "75") {
	  return <span class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
	  <div class="progress-bar progress-bar-striped progress-bar-animated" 
	  role="progressbar" style={{width: "75%"}} 
	  aria-valuenow="25" aria-valuemin="0" 
	  aria-valuemax="100">75%</div>
</span>	
	}
  else if (progress === "100") {

    return <span class="progress   progress-bar-animated"  style={{height: "25px",width:"100%"}}>
      <div class="progress-bar  bg-info progress-bar-striped progress-bar-animated" 
      role="progressbar" style={{width: "100%"}} 
      aria-valuenow="100" aria-valuemin="0" 
      aria-valuemax="100">completed</div>
  </span>		
    } 
	else {
	  return <span className="btn btn-danger">DisApprove</span>;
	}
  }