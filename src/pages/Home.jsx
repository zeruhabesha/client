import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchUsers, validUser } from '../apis/auth'
import { setActiveUser } from '../redux/activeUserSlice'
import { RiNotificationBadgeFill } from "react-icons/ri"
import { BsSearch } from "react-icons/bs"
import { BiNotification } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"
import { setShowNotifications, setShowProfile } from '../redux/profileSlice'
import Chat from './Chat'
import Profile from "../components/Profile"
import { acessCreate } from "../apis/chat.js"
import "./home.css"
import { fetchChats, setNotifications } from '../redux/chatsSlice'
import { getSender } from '../utils/logics'
// import Sidebar from '../Sidebar';
import Sidebar from '../admin/Sidebar'
import { Link,useNavigate} from 'react-router-dom';

import { setActiveChat } from '../redux/chatsSlice'
import Group from '../components/Group'
import Contacts from '../components/Contacts'
import { Effect } from "react-notification-badge"
// import NotificationBadge from 'react-notification-badge/lib/components/NotificationBadge';
import NotificationBadge from 'react-notification-badge';
import Search from '../components/group/Search'
import Navadmin from '../admin/Navadmin'
import Footeradmin from '../admin/Footeradmin'
function Home() {
  const dispatch = useDispatch()
  const { showProfile, showNotifications } = useSelector((state) => state.profile)
  const { notifications } = useSelector((state) => state.chats)
  const { activeUser } = useSelector((state) => state)
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = async (e) => {
    setSearch(e.target.value)
  }
  const handleClick = async (e) => {
    await acessCreate({ userId: e._id })
    dispatch(fetchChats())
    setSearch("")
  }
  useEffect(() => {
    const searchChange = async () => {
      setIsLoading(true)
      const { data } = await searchUsers(search)
      setSearchResults(data)
      setIsLoading(false)
    }
    searchChange()
  }, [search])
  useEffect(() => {
    const isValid = async () => {
      const data = await validUser()

      const user = {
        id: data?.user?._id,
        email: data?.user?.email,
        profilePic: data?.user?.profilePic,
        bio: data?.user?.bio,
        name: data?.user?.name
      }
      dispatch(setActiveUser(user))
    }
    isValid()

  }, [dispatch, activeUser])
  const toggleSidebar = () => {
    const sidebar = document.querySelector("nav");
    sidebar.classList.toggle("close");
    localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
  }; 
  
  const [galuak, setGaluak] = useState([])

useEffect(()=>{
  const user = JSON.parse(localStorage.getItem("userInformation"))
 
  if(user){
setGaluak(user)   


}else{
    console.log("error")
  }
},[])

  // useEffect(() => {
  //   if (galuak.chat === "inactive" ) {
  //     navigate("/adminhome");
  //   }
  // }, [galuak]);

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
   
    // const handleClick = () => {
    //   const elem = document.documentElement; // Get the root element of the document
    
    //   if (
    //     document.fullscreenElement ||
    //     document.webkitFullscreenElement ||
    //     document.mozFullScreenElement ||
    //     document.msFullscreenElement
    //   ) {
    //     // If the screen is already in fullscreen mode, exit fullscreen
    //     if (document.exitFullscreen) {
    //       document.exitFullscreen();
    //     } else if (document.webkitExitFullscreen) {
    //       document.webkitExitFullscreen();
    //     } else if (document.mozCancelFullScreen) {
    //       document.mozCancelFullScreen();
    //     } else if (document.msExitFullscreen) {
    //       document.msExitFullscreen();
    //     }
    //   } else {
    //     // If the screen is not in fullscreen mode, enter fullscreen
    //     if (elem.requestFullscreen) {
    //       elem.requestFullscreen();
    //     } else if (elem.mozRequestFullScreen) {
    //       elem.mozRequestFullScreen();
    //     } else if (elem.webkitRequestFullscreen) {
    //       elem.webkitRequestFullscreen();
    //     } else if (elem.msRequestFullscreen) {
    //       elem.msRequestFullscreen();
    //     }
    //   }
    // };
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

{/* shadow-2xl */}
<div class="xs-pd-20-10 pd-ltr-20">
      <div style={{marginTop:`5%`}} className="bg-[#282C35!] scrollbar-hide z-10 h-[110vh]  lg:w-[100%] lg:mx-[0px] overflow-y-hidden ">

        <div className='flex'>
          {
            
            !showProfile ?
            
              <div style={{marginTop:`0px`, borderRight: `thick double #32a1ce`}} className="md:flex md:flex-col min-w-[360px] h-[108vh] md:h-[108vh] bg-[#ffff] relative">

                <div className='h-[61px] px-4'>
                  <div className='flex'>
                    <a className='flex items-center relative  top--8 block h-[90px]' href='/'>

                      <h3 style={{color:`dodgerblue`, fontSize:`xxx-large`}} className='text-[20px] text-[#1f2228] font-body font-extrabold tracking-wider'>CHAT</h3>
                    </a>
                  </div>
                  <div className='absolute top-8 right-5 flex items-center gap-x-3'>
                    <button onClick={() => dispatch(setShowNotifications(!showNotifications))}>
                      <NotificationBadge
                        count={notifications.length}
                        effect={Effect.SCALE}
                        style={{ width: "15px", height: "15px", fontSize: "9px", padding: "4px 2px 2px 2px" }}
                      />
                      {
                        showNotifications ? <RiNotificationBadgeFill style={{ width: "25px", height: "25px", color: "#319268" }} /> : <BiNotification style={{ color: "#319268", width: "25px", height: "25px" }} />
                      }

                    </button>
                    <div  style={{border:`1px solid #96e6f4`}}  className={`${showNotifications ? "overflow-y-scroll scrollbar-hide tracking-wide absolute top-10 -left-32 z-10 w-[240px] bg-[#fafafa] px-4 py-2 shadow-2xl" : "hidden"}`}>
                      <div className='text-[13px]'>

                        {!notifications.length && "No new messages"}
                      </div>
                      {
                        notifications.map((e, index) => {
                          return (
                            <div onClick={() => {
                              dispatch(setActiveChat(e.chatId))
                              dispatch(setNotifications(notifications.filter((data) => data !== e)))

                            }} key={index} className='text-[12.5px] text-black px-2 cursor-pointer' >

                              {e.chatId.isGroup ? `New Message in ${e.chatId.chatName}` : `New Message from ${getSender(activeUser, e.chatId.users)}`}
                            </div>

                          )

                        })
                      }
                    </div>
                    <button onClick={() => dispatch(setShowProfile(true))} className='flex items-center gap-x-1 relative'>
                      <img className='w-[28px] h-[28px] rounded-[25px]' src={activeUser?.profilePic} alt="" />
                      <IoIosArrowDown style={{ color: "#616c76", height: "14px", width: "14px" }} />
                    </button>
                  </div>
                </div>

                <div>

                  <div className='-mt-6 relative pt-20 px-4'>
                    <form style={{borderBottom: `1px solid #948b8b`, padding: `5px`}} onSubmit={(e) => e.preventDefault()}>

                      <input onChange={handleSearch} className='w-[99.5%] bg-[#f6f6f6] text-[#111b21] tracking-wider pl-9 py-[8px] rounded-[9px] outline-0' type="text" name="search" placeholder="Search" />

                    </form>

                    <div style={{fontSize: `x-large`}} className='absolute top-[83px] left-[23px]'>
                      <BsSearch style={{ color: "#c4c4c5" }} />
                    </div>
                    <Group />

                    <div style={{ display: search ? "" : "none" }} className='h-[100vh] absolute z-10 w-[100%] left-[0px] top-[70px] bg-[#fff] flex flex-col gap-y-3 pt-3 px-4'>
                      <Search searchResults={searchResults} isLoading={isLoading} handleClick={handleClick} search={search} />

                    </div>
                  </div>


                  <Contacts />


                </div>

              </div> 
               : 
               <Profile style={{borderRight: `thick double #32a1ce`}} className="min-w-[100%] sm:min-w-[360px] h-[129vh] bg-[#fafafa] shodow-xl relative" />
          }
          <Chat style={{borderRight: `thick double #32a1ce`}} className="chat-page relative lg:w-[100%] h-[100vh] bg-[#fafafa]" />




        </div>
      </div ></div></div></div> 
<Footeradmin/>
        </section>
    </div> 
  )
}

export default Home