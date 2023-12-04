import React from 'react'
import { useEffect } from 'react'
import { GoogleLogin } from "react-google-login"
import { gapi } from "gapi-script"
import { googleAuth } from '../apis/auth'
import { useState } from 'react'
import { loginUser } from '../apis/auth'
import { Link, useNavigate } from 'react-router-dom'
import { BsEmojiLaughing, BsEmojiExpressionless } from "react-icons/bs"
import { toast } from 'react-toastify';
import { validUser } from '../apis/auth'
import './login.css'
import '../admin/Documentscss.css'
const defaultData = {
  email: "",
  password: ""
}
function Login() {
  const [formData, setFormData] = useState(defaultData)
  const [isLoading, setIsLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()
  const googleSuccess = async (res) => {
    if (res?.profileObj) {
      console.log(res.profileObj)
      setIsLoading(true)
      const response = await googleAuth({ tokenId: res.tokenId })
      setIsLoading(false)

      console.log("response :" + res)
      if (response.data.token) {
        localStorage.setItem("userToken", response.data.token)
        localStorage.setItem("chat", response.data)

        navigate("/chats")

      }
    }
  }
  const googleFailure = (error) => {
    // toast.error("Something went Wrong.Try Again!")
  }
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const formSubmit = async (e) => {
    e.preventDefault()
    if (formData.email.includes("@") && formData.password.length > 6) {
      setIsLoading(true)
      const { data } = await loginUser(formData) || {};
      // if(!data){
      //   toast.error("Invalid Credentials!")

      // }
      if (data?.token) {
        localStorage.setItem("userToken", data.token)
        localStorage.setItem("jwt", data.token)

       
        localStorage.setItem("userInformation", JSON.stringify(data))
     

        toast.success("Succesfully Login!")
        setIsLoading(false)
        navigate("/adminhome")
      }
      else {
        setIsLoading(false)
        toast.error("Invalid Credentials!")
        setFormData({ ...formData, password: "" })
      }
    }
    else {
      setIsLoading(false)
      toast.warning("Provide valid Credentials!")
      setFormData(defaultData)

    }
  }
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
    const isValid = async () => {
      const data = await validUser()
      if (data?.user) {
        window.location.href = "/chats"
      }

    }
    isValid()
  }, [])


  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div class="bodylog">





      {/* <div className='bg-[#FFFFFF] w-[100vw] h-[100vh] flex justify-center items-center'>
        <div className='w-[90%] sm:w-[400px] pl-0 ml-0 h-[400px] sm:pl-0 sm:ml-9 mt-20 relative'> */}
          {/* <img className='w-[100px] absolute -top-16 left-28' src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/78c4af118001599.608076cf95739.jpg" alt="" /> */}
          {/* <div className='absolute -top-5 left-0'>
            <h3 className=' text-[25px] font-bold tracking-wider text-[#121418]'>Login</h3>
          </div> */}
          {/* <h2 className='text-2xl text-[#fff] font-bold tracking-wide my-6 text-center'>Login to your Account</h2> */}
          {/* <form className='flex flex-col gap-y-3 mt-[12%]' onSubmit={formSubmit}>
            <div>
              <input className="w-[100%] sm:w-[80%] bg-[#222222] h-[50px] pl-3 text-[#ffff]" onChange={handleOnChange} name="email" type="text" placeholder='Email' value={formData.email} required />

            </div>
            <div className='relative'>

              <input className='w-[100%] sm:w-[80%] bg-[#222222] h-[50px] pl-3 text-[#ffff]' onChange={handleOnChange} type={showPass ? "text" : "password"} name="password" placeholder='Password' value={formData.password} required />
              {
                !showPass ? <button type='button'><BsEmojiLaughing onClick={() => setShowPass(!showPass)} className='text-[#fff] absolute top-3 right-5 sm:right-24 w-[30px] h-[25px]' /></button> : <button type='button'> <BsEmojiExpressionless onClick={() => setShowPass(!showPass)} className='text-[#fff] absolute top-3 right-5 sm:right-24 w-[30px] h-[25px]' /></button>
              }
            </div>

            <button style={{ background: "linear-gradient(90deg, rgba(0,195,154,1) 0%, rgba(224,205,115,1) 100%)" }} className='w-[100%]  sm:w-[80%] h-[50px] font-bold text-[#FFFFFF ] tracking-wide text-[17px] relative' type='submit'>
              <div style={{ display: isLoading ? "" : "none" }} className='absolute -top-[53px] left-[27%] sm:-top-[53px] sm:left-[56px]'> */}

                {/* <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_h9kds1my.json"  speed="1" style={{ width: "200px", height: "160px" }} loop autoplay></lottie-player> */}
              {/* </div>
              <p style={{ color:"white",display: isLoading ? "none" : "block" }} className='test-[#FFFFFF ]'>Login</p>
            </button>
            <p className='text-[#FFFFFF ] text-[12px] tracking-wider font-medium'>No Account ? <Link className='text-[rgba(0,195,154,1)] underline' to="/register">Sign up</Link></p> */}

            {/* <div className='border-t-[1px] w-[100%] sm:w-[80%] my-3' ></div> */}
            {/* <p className='text-[#FFFFFF ] text-center sm:-ml-20'>/</p>
           


          </form>

        </div> */}


{/* <div className={`wrapper0 ${isExpanded ? 'expanded' : ''}`}>
      <div className="login-text0 element">
        <button className="cta0" onClick={handleToggle}>
          <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'} fa-1x`}></i>
        </button>
        <div className={`text0 ${isExpanded ? 'show-hide0' : ''}`}><br/>
          <a href="">Login</a>
          <hr />
          <br />
          <form style={{marginTop: `-10px`}}className='flex flex-col gap-y-3 mt-[12%]' onSubmit={formSubmit}>
            <div>
            <input className="w-[100%] sm:w-[80%] bg-[#222222] h-[50px] pl-3 text-[#ffff]" onChange={handleOnChange} name="email" type="text" placeholder='Email' value={formData.email} required /> */}
               {/* <input onChange={handleOnChange} name="email" type="text" placeholder='Email' value={formData.email}  /><br/> */}
               {/* </div>
            <div className='relative'>
            <input className='w-[100%] sm:w-[80%] bg-[#222222] h-[50px] pl-3 text-[#ffff]' onChange={handleOnChange} type={showPass ? "text" : "password"} name="password" placeholder='Password' value={formData.password} required /> */}
              {/* <input onChange={handleOnChange} type={showPass ? "text" : "password"} name="password" placeholder='Password' value={formData.password} /> */}
              {/* {
                !showPass ? <button type='button'><BsEmojiLaughing onClick={() => setShowPass(!showPass)} className='' /></button> : 
                <button type='button'> <BsEmojiExpressionless onClick={() => setShowPass(!showPass)} className='' /></button>
              }
              </div>
              <br />
              <button style={{ background: `linear-gradient(90deg, rgb(0 92 208) 0%, rgb(0 255 227) 100%)` }} className='w-[100%]  sm:w-[80%] h-[50px] font-bold text-[#FFFFFF ] tracking-wide text-[17px] relative' type='submit'>LOGIN</button>       
            <div style={{ display: isLoading ? "" : "none" }} className='absolute -top-[53px] left-[27%] sm:-top-[53px] sm:left-[56px]'>
              </div>      
      </form> </div></div>
      <div className="call-text0">
        <h1>Click the Button to <span>Login</span>  </h1> */}
        {/* <button>Join the Community</button> */}
      {/* </div>
    </div> */}

      {/* </div> */}
      <div class="containerlog" onclick="">
  <div class="toplog"></div>
  <div class="bottomlog"></div>
  <div class="centerlog">
    <h2>Please Sign In</h2>

    <form onSubmit={formSubmit}>
    
    <input type="email" class="inputlog" onChange={handleOnChange} name="email" placeholder='Email' value={formData.email}/>
    <input class="inputlog" onChange={handleOnChange} type={showPass ? "text" : "password"} name="password" placeholder='Password' value={formData.password}/>
    {
       !showPass ? <button style={{margin: `-8% -11% -14% -12%`}} type='button'><BsEmojiLaughing onClick={() => setShowPass(!showPass)} className='' /></button> : 
       <button style={{margin: `-8% -11% -14% -12%`}} type='button'> <BsEmojiExpressionless onClick={() => setShowPass(!showPass)} className='' /></button>
     }
<button style={{ background: `linear-gradient(90deg, rgb(0 92 208) 0%, rgb(0 255 227) 100%)` }} className='w-[100%]  sm:w-[100%] h-[50px] font-bold text-[#FFFFFF ] tracking-wide text-[17px] relative' type='submit'>LOGIN</button>       

     </form>

    <h2 class="h2log">&nbsp;</h2>
  </div>
</div>
    </div>
  )
}

export default Login