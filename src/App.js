// Importing Components and Pages

import Login from './pages/Login';
import './App.css';
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Regsiter from './pages/Regsiter';
import Home from './pages/Home';
import Organization from'./admin/Organization';
import Homecomponent1 from "./client/Homecomponent";
import Homecomponent from "./admin/Homecomponent";
import Document from './admin/Document';
import Profile from './admin/Profile';
import Employee from './admin/Employee';
import Request from './admin/Request';
import Iframe from './admin/Iframe';
import FilesList from './admin/FilesList';
import Quatation from './admin/Quatation';
import Report from './admin/Report';
// import Technical from './admin/Technical';
import Tender from './admin/Tender';
import SidebarSup from './admin/SidebarSup';
import F404 from './F404';
import Blog from './client/Blog';
import { useEffect,useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom'

import Org from './admin/Org';
import axios from 'axios';
import Contact from './client/Contact';
import Service from './client/Service';
import Product from './client/Product';
import CompanyProfile from './client/CompanyProfile';
import Ourstaff from './client/Ourstaff';
import Services from './client/Service';
import Experienced from './client/Experienced';
import Itequepment from './client/Itequepment';
// import { useOnlineStatus } from 'react-use-online-status/dist/index';
// import { useOnlineStatus } from 'react-use-online-status';
// import { useOnlineStatus } from 'react-use-online-status';







function App() {

  // const isOnline = useOnlineStatus();
  // const isOnline = useOnlineStatus();


  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (!token) {
    
      // window.location.href = '/login';
      navigate('/login');

    } else {
      axios.get('http://localhost:8005/api/protected', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        const message = response.data.message;
        setMessage(message);
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 401) {
          localStorage.removeItem('userToken');
          navigate('/login');
        } else {
          const errorMessage = error.response.data.message;
          setErrorMessage(errorMessage);
          console.log(errorMessage)
        }
      });
    }
  }, []);



  // const [isOnline, setIsOnline] = useState(true);
  // useEffect(() => {
  //   const handleOffline = () => {
  //     setIsOnline(false);
  //   };
  
  //   const handleOnline = () => {
  //     setIsOnline(true);
  //   };
  
  //   window.addEventListener("offline", handleOffline);
  //   window.addEventListener("online", handleOnline);
  
  //   return () => {
  //     window.removeEventListener("offline", handleOffline);
  //     window.removeEventListener("online", handleOnline);
  //   };
  // }, []);
  return (
    <div className="bg-[#F8F4EA]">
        
        {/* {isOnline ? ( */}
           <Routes> <Route  path="/login" element={<Login />} />
          <Route  path="/register" element={<Regsiter />} />
          <Route  path="/chats" element={<Home />} />
          <Route  path="/employee" element={<Employee />} />
          <Route  path="/adminhome" element={<Homecomponent />} />
          <Route  path="/request" element={<Request />} />
          <Route  path="/Document" element={<Document />} />
          <Route  path="/Profile" element={<Profile />} />
          <Route  path="/" element={<Homecomponent1 />} />
          <Route  path="/iframe" element={<Iframe />} />
          <Route  path="/file" element={<FilesList />} />
          <Route  path="/quatation" element={<Quatation />} />
          <Route  path="/report" element={<Report />} />
          <Route  path="/tender" element={<Tender />} />
          {/* <Route  path="/technical" element={<Technical />} /> */}
          <Route  path="/org" element={<Org />} />
          <Route  path="/Organization" element={<Organization />} />
          <Route  path="/sup" element={<SidebarSup />} />
          <Route  path="/blog" element={<Blog />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/services" element={<Service />} />
          <Route  path="/product" element={<Product />} />
          <Route  path="/staffs" element={<Ourstaff />} />
          <Route  path="/compro" element={<CompanyProfile />} />
          <Route  path="/service" element={<Services />} />
          <Route  path="/experianced" element={<Experienced />} />
          <Route  path="/itequepment" element={<Itequepment />} />
          {/* </Routes>  */}
           {/* ) : ( */}
          {/* <Routes> */}
            <Route  path="/404" element={<F404 />} />
        </Routes>  
        {/* )} */}
    </div>
  );
}

export default App;
