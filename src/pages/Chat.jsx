import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Model from '../components/Model';
import { BsEmojiSmile, BsFillEmojiSmileFill } from "react-icons/bs"
import { fetchMessages, sendMessage } from '../apis/messages';
import { useEffect } from 'react';
import MessageHistory from '../components/MessageHistory';
import io from "socket.io-client"
import "./home.css"
import { fetchChats, setNotifications } from '../redux/chatsSlice';
import Loading from '../components/ui/Loading';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { getChatName } from '../utils/logics';
import Typing from '../components/ui/Typing';
import { validUser } from '../apis/auth';
const ENDPOINT = process.env.REACT_APP_SERVER_URL
let socket, selectedChatCompare;

function Chat(props) {
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
    <>
      {
        activeChat ?
          <div style={{marginTop:`4%`,border: `1px solid #00acf9`, borderRadius: `0px 22px 22px 0px`, marginRight: `25px`, height: `60%`,padding:`25px 5px`}} className={props.className}>
            <div style={{borderRadius:`43px`, padding: `10px`,background: `linear-gradient(317deg, rgb(33 210 255), transparent)`, borderRadius: `inherit`}}  className='flex justify-between items-center px-5 bg-[#ffff] w-[100%]'>
              <div className='flex items-center gap-x-[10px]'>
                <div  className='flex flex-col items-start justify-center'>
                  <h5 className='text-[17px] text-[#2b2e33] font-bold tracking-wide'>{getChatName(activeChat, activeUser)}</h5>
                  {/* 
                  boxShadow: `rgb(227 227 227 / 28%) 0px -3em 3em inset, white 0px 0px 0px 2px, rgb(135 204 255 / 40%) 1.3em 1.3em 1em`
                  <p className='text-[11px] text-[#aabac8]'>Last seen 5 min ago</p> */}
                </div>
              </div>
              <div>
                <Model />
              </div>
            </div>
            <div className='scrollbar-hide w-[100%] h-[70vh] md:h-[66vh] lg:h-[69vh] flex flex-col overflow-y-scroll p-4'>
              <MessageHistory typing={isTyping} messages={messages} />
              <div className='ml-7 -mb-10'>
                {
                  isTyping ?
                    <Typing width="100" height="100" /> : ""
                }

              </div>
            </div>
            <div style={{width:`100%`,display:`flex`}} className='absolute left-[2%] bottom-[2%]'>
              {
                showPicker && <Picker data={data} onEmojiSelect={(e) => setMessage(message + e.native)} />
              }
              <div style={{background:`#bdd7de`,opacity:`0.7`,borderRadius:`20px 20px 0px 0px`, width: `200%`}} className='border-[1px] border-[#aabac8] px-6 py-3 w-[360px] sm:w-[400px] md:w-[350px] h-[50px] lg:w-[400px] rounded-t-[10px]'>

                <form onKeyDown={(e) => keyDownFunction(e)} onSubmit={(e) => e.preventDefault()}>
                  <input  style={{background:`#bdd7de`, color:`black`, fontSize:`large`}} onChange={(e) => {
                    setMessage(e.target.value)
                    if (!socketConnected) return
                    if (!typing) {
                      setTyping(true)
                      socket.emit('typing', activeChat._id)
                    }
                    let lastTime = new Date().getTime()
                    var time = 3000
                    setTimeout(() => {
                      var timeNow = new Date().getTime()
                      var timeDiff = timeNow - lastTime
                      if (timeDiff >= time && typing) {
                        socket.emit("stop typing", activeChat._id)
                        setTyping(false)
                      }
                    }, time)
                  }} className='focus:outline-0 w-[100%] bg-[#f8f9fa]' type="text" name="message" placeholder="Enter message" value={message} />
                </form>

              </div>

              <div style={{background:`transparent`}} className='border-x-[1px] border-b-[1px] bg-[#f8f9fa] border-[#aabac8] px-6 py-3 w-[360px] sm:w-[400px] md:w-[350px] lg:w-[400px] rounded-b-[10px] h-[50px]'>
                {/* {
                  isTyping ? <div>Loading</div> : ""
                } */}
                <div style={{background:`transparent`}} className='flex justify-between items-start'>

                  <div className='cursor-pointer' onClick={() => setShowPicker(!showPicker)}>

                    {showPicker ? <BsFillEmojiSmileFill className='w-[20px] h-[20px] text-[#ffb02e] border-[black]' /> : <BsEmojiSmile className='w-[20px] h-[20px]' />}
                  </div>
                  <button onClick={(e) => keyDownFunction(e)} className='btn btn-primary bg-[#f8f9fa] border-[2px] border-[#d4d4d4] text-[14px] px-2 py-[3px] text-[#9e9e9e] font-medium rounded-[7px] -mt-1'><i className="fa fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
          </div> :
          <div className={props.className}>
            <div className='relative'>
              <div className='absolute top-[40vh] left-[44%] flex flex-col items-center justify-center gap-y-3'>
                <img className='w-[50px] h-[50px] rounded-[25px]' alt="User profile" src={activeUser.profilePic} />
                <h3 className='text-[#111b21] text-[20px] font-medium tracking-wider'>Welcome <span className='text-[#166e48] text-[19px] font-bold'> {activeUser.name}</span></h3>
              </div>
            </div>
          </div>

      }
    </>
  )
}

export default Chat