import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Model from '../components/Model';
import { BsEmojiSmile, BsFillEmojiSmileFill } from "react-icons/bs"
import { fetchMessages, sendMessage } from '../apis/messages';
import { useEffect } from 'react';
import MessageHistory from '../components/MessageHistory';
import io from "socket.io-client"
import "../pages/home.css";
import Sidebar from './Sidebar';
import Navadmin from './Navadmin';
import './chats.css';
import Modal from 'react-bootstrap/Modal';
import { fetchChats, setNotifications } from '../redux/chatsSlice';
import Loading from '../components/ui/Loading';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { getChatName } from '../utils/logics';
import Typing from '../components/ui/Typing';
import { validUser } from '../apis/auth';
const ENDPOINT = process.env.REACT_APP_SERVER_URL
let socket, selectedChatCompare;




const Footeradmin = (props) => {



  const [hide, setHide] = useState(false);

  const toggleChat = () => {
    setHide((prevHide) => (prevHide === false ? true : false));
  };

  const hideChat = (hide) => {
    setHide(hide);
  };

  const [scrolled, setScrolled] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const [isCollapsed2, setIsCollapsed2] = useState(false);
  const [isCollapsed3, setIsCollapsed3] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);


  const [activeChat4, setActiveChat4] = useState('person2');
  const [activePerson4, setActivePerson4] = useState('person2');
  const [activeName4, setActiveName4] = useState('Dog Woofson');
  
  const handlePersonClick = (person, name) => {
    setActiveChat4(person);
    setActivePerson4(person);
    setActiveName4(name);
  };

  const [activeChat1, setActiveChat] = useState('person2');
  const [activePerson, setActivePerson] = useState('Dog Woofson');
  const [friends, setFriends] = useState({
    list: null,
    all: [],
    name: ''
  });
  const [chat, setChat] = useState({
    container: null,
    current: null,
    person: null,
    name: ''
  });

  useEffect(() => {
    const chatContainer = document.querySelector('.container .right');
    const chatList = document.querySelector('ul.people');
    const chatPersons = document.querySelectorAll('.left .person');

    setChat(prevChat => ({
      ...prevChat,
      container: chatContainer
    }));
    setFriends(prevFriends => ({
      ...prevFriends,
      list: chatList,
      all: Array.from(chatPersons)
    }));
  }, []);

  const setAciveChat = (f) => {
    friends.list.querySelector('.active').classList.remove('active');
    f.classList.add('active');

    const currentChat = chat.container.querySelector('.active-chat');
    const person = f.getAttribute('data-chat');

    currentChat.classList.remove('active-chat');
    chat.container.querySelector(`[data-chat="${person}"]`).classList.add('active-chat');

    const name = f.querySelector('.name').innerText;
    setChat(prevChat => ({
      ...prevChat,
      current: currentChat,
      person,
      name
    }));
  };

  useEffect(() => {
    if (chat.current && chat.name) {
      chat.name.innerHTML = activePerson;
    }
  }, [activePerson]);

  useEffect(() => {
    if (chat.current && chat.person) {
      chat.current.classList.remove('active-chat');
      chat.container.querySelector(`[data-chat="${activeChat1}"]`).classList.add('active-chat');
    }
  }, [activeChat1]);




  const toggleSidebar = () => {
    const sidebar = document.querySelector('nav');
    sidebar.classList.toggle('close');
    localStorage.setItem('status', sidebar.classList.contains('close') ? 'close' : 'open');
  };


  

  const percentScrolled = (scrolled / (document.body.clientHeight - window.innerHeight)) * 100;


  
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

  const handleClick1 = () => {
    setShowDropdown(!showDropdown);
  }
  
  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  }
  
  const handleClick5 = () => {
    setOpen(!open);
  }

  const handleClick44 = () => {
    setOpen(!open);
  };





 


  //  useEffect(() => {
  //   scrollToBottom();
  // }, [chatHistoryList]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  };

  const getRandomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const { activeChat, notifications } = useSelector((state) => state.chats)
  const dispatch = useDispatch()
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [socketConnected, setSocketConnected] = useState(false)
  const [typing, setTyping] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showPicker, setShowPicker] = useState(false);
  const activeUser = useSelector((state) => state.activeUser)

  const keyDownFunction = async (e) => {
    if ((e.key === "Enter" || e.type === "click") && (message)) {
      setMessage("")
      socket.emit("stop typing", activeChat._id)
      const data = await sendMessage({ chatId: activeChat._id, message })
      socket.emit("new message", data)
      setMessages([...messages, data])
      dispatch(fetchChats())
    }
  }


  useEffect(() => {
    socket = io(ENDPOINT)
    socket.on("typing", () => setIsTyping(true))
    socket.on("stop typing", () => setIsTyping(false))
  }, [])

  useEffect(() => {
    socket.emit("setup", activeUser)
    socket.on("connected", () => {
      setSocketConnected(true)
    })
  }, [messages, activeUser])
  useEffect(() => {
    const fetchMessagesFunc = async () => {
      if (activeChat) {
        setLoading(true)
        const data = await fetchMessages(activeChat._id)
        setMessages(data)
        socket.emit("join room", activeChat._id)
        setLoading(false)

      }
      return
    }
    fetchMessagesFunc()
    selectedChatCompare = activeChat

  }, [activeChat])
  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if ((!selectedChatCompare || selectedChatCompare._id) !== newMessageRecieved.chatId._id) {
        if (!notifications.includes(newMessageRecieved)) {
          dispatch(setNotifications([newMessageRecieved, ...notifications]))
        }
      }
      else {
        setMessages([...messages, newMessageRecieved])
      }
      dispatch(fetchChats())
    })
  })
  useEffect(() => {
    const isValid = async () => {
      const data = await validUser()
      if (!data?.user) {
        window.location.href = "/login"
      }

    }
    isValid()
  }, [])
  if (loading) {

    return <div className={props.className}>
    <Loading />
  </div>
}
    return (
        <div>


{/* <div className="fabs">
        <div className="chat">
<div className="fab_field">
<a id="fab_camera" className="fab">
  <i className="zmdi zmdi-camera"></i>
</a>
<a id="fab_send" className="fab">
  <i className="zmdi zmdi-mail-send"></i>
</a>
<textarea
  id="chatSend"
  name="chat_message"
  placeholder="Send a message"
  className="chat_field chat_message"
></textarea>
</div>
</div>
<a id="prime" className="fab" onClick={toggleChat}>
<i className={`prime zmdi ${hide === false ? 'zmdi-comment-outline' : 'zmdi-close'}`}></i>
</a>
</div> */}



   <section class="section7">
{/* <h1><span>CSS3 ribbons</span></h1> */}
<div class="ribbons-wrapper">
<div class="ribbon">
<span class="ribbon1"><span>Version 3.2.0</span></span>
<footer class="main-footer"> <div class="box22">
<strong>Copyright © 2023-2025 <a href="#">Betaplc</a>.</strong>
All rights reserved.

</div>
</footer>
</div>
</div>
</section>
</div>
)
}

export default Footeradmin
