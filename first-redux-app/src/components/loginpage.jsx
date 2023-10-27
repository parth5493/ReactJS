import React, { useEffect, useState } from 'react';
import './../login-regist.css'
import { Link, useNavigate, redirect } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import UserDeskBoard from './userdeskboard'
import Customhook from './../hooks/customhook'
import { useDispatch } from 'react-redux'
import { loginUsers , RegisterUsers} from '../actions/users'

const LoginPage = () => {
  const [status, setStatus] = useState(true)
  const [formData, setFormdata] = useState()
  const [loginData, setLoginData] = useState(null)
  const [showpopup, setShowpopup] = useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginmessage, setLoginMessage] = useState('')
  const [loginpopup, setLoginpopup] = useState(false)
  const [cookies, setCookie] = useCookies(['name']);
  const navigate = useNavigate();
  const [value, setValue] = useState("")
  const [message, setMessage] = useState("")
  const dispatch = useDispatch()
  // const [handleChange, inp, errors] = Customhook(formData, {usernameError: ""})

  // This useEffect is used as rerendering. It helps when we use autofilling option while registration
  useEffect(()=>{
    if (formData == "") {
      console.log("called");
    }
  },[formData])

  // This function for taking input fields data on onChange 
  
  const handleData = (event) => {
    setFormdata({ ...formData, [event.target.name]: event.target.value })
  };

  // This function stores all registration datas in db.JSON file on registration button click and get POP UP message
  const Registration = async () => {
    setShowpopup(true)
    const registrationwithrollid = {...formData, roll_id: 2}
    let registrationData =  await dispatch(RegisterUsers(registrationwithrollid))
    
  }

  // This function for close POP UP message and  move to login option
  const closeRegistrationPopup = async () => {
    setShowpopup(false)
    setStatus(!status)
  }

  // This function for getting all registered data and proceed login process
  const loginHandle = async (event) => {
    event.preventDefault();
    let response = await dispatch(loginUsers(formData.username,formData.password))
        if (response.payload.data.length > 0) {
          const user = response.payload.data[0];
          // setCookie("roll_id", user.roll_id);
          // setCookie("user_id", user.id);
      
          if (user.roll_id === 1) {
            navigate("/admin");
          } else {
            navigate("/");
          }
        } else {
          setLoginpopup(true);
        }

    // axios.get(`http://localhost:3004/user?username=${formData.username}&password=${formData.password}`)
    // .then(function (response) {
    //   console.log(response);
    //   console.log(response.data.length);
    //   console.log(response.data[0]);
    //   if (response.data.length > 0) {
    //       setLoginpopup(false)
    //       setCookie("roll_id", response.data[0].roll_id)
    //       setCookie("user_id", response.data[0].id)

    //       if (response.data[0].roll_id === 1) {
    //           navigate("/admin")
    //       }
    //       else{
    //           navigate("/")
    //       }

    //   } else {
    //       setLoginpopup(true)
    //   }
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
    // .finally(function () {
      
    //   // always executed
    // });

    

    // Sencond Method to Login

    // const response = await fetch('http://localhost:3004/user')
    // const data = await response.json()
    // console.log("Data", data);
    
    // const login = data.find((user) => user.username === username && user.password === password);

    // if (login) {    
    //   setCookie('name', "newName");  
    //   setLoginMessage("Login Success")
    //   setLoginpopup(true)  
    //   // redirect('https://github.com/jay-amin-tops/06June_TTS_8/blob/main/ReactJs/project/src/LoginCompo.jsx')    
    //   console.log('Login successful');
    //   // window.open(<UserDeskBoard/>)
    // } else {      
    //   setLoginMessage("Invalid username or password")
    //   setLoginpopup(true)
    //   console.log('Invalid');
    // }

  }

  // This function for close POP UP message
  const closeLoginPopup = async () => {
    setLoginpopup(false)
  }
  
  // Save data by click on sign up button 
  const handleSubmit = (event) => {
    event.preventDefault();
    Registration()
    // if (value === '') {
    //   setMessage("This field must be filled.")
    // }
    // else{
      
    // }
  }
  return (
    <>
      <div className="body-auth">
        <div className={(status) ? "container-auth" : "container-auth log-in"}>
          <div className="box"></div>
          <div className="container-auth-forms position-relative">
            <Link to="/">
              <i className="fa-solid fa-house text-light p-1"></i>
            </Link>
            <div className="container-auth-info">
              <div className="info-item">
                <div className="table">
                  <div className="table-cell">
                    <p>
                      Have an account?
                    </p>
                    <div className="btn-auth" onClick={() => { console.log("called"); setStatus(!status) }}>
                      Log in
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-item">
                <div className="table">
                  <div className="table-cell">
                    <p>
                      Don't have an account?
                    </p>
                    <div className="btn-auth" onClick={() => { console.log("called"); setStatus(!status) }}>
                      Sign up
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-auth-form">
              <div className="form-item log-in">
                <div className="table">
                  <div className="table-cell">
                    {/* {JSON.stringify(formData)} */}
                    <input name="username" onChange={(event) => setFormdata({ ...formData, [event.target.name]: event.target.value })} placeholder="Username" type="text" />
                    <input name="password" onChange={(event) => setFormdata({ ...formData, [event.target.name]: event.target.value })} placeholder="Password" type="Password" />

                    {/* Sencond Method */}
                    {/* <input name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" type="text" />
                    <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="Password" /> */}
                    <div className="btn-auth" onClick={loginHandle}>
                      Log in
                    </div>
                    {loginpopup ? <div className='text-center p-3'>
                                      <b>Invaild Username or Password</b>
                                  </div> 
                                : ""}
                  </div>
                </div>
              </div>
              <div className="form-item sign-up">
                <div className="table">
                  <div className="table-cell">
                    {/* {JSON.stringify(formData)} */}
                    <form action="" onSubmit={handleSubmit}>
                      <input name="email" placeholder="Email" onChange={handleData} type="text" required/>
                      
                      <input name="fullName" placeholder="Full Name" onChange={handleData} type="text" required />
                      <input name="username" placeholder="Username" onChange={handleData} type="text" required />
                      <input name="password" placeholder="Password" onChange={handleData} type="Password" required/>
                      <div className="btn-auth" onClick={handleSubmit}>
                        Sign up
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showpopup &&
          <div className='registrationcomplete text-center p-5 position-absolute font-weight-bold rounded align-middle'>
            <div className='p-5'></div>
            <div className='p-2'></div>
            <p>Registration Complete!</p>
            <button onClick={closeRegistrationPopup}  className='btn btn-secondary'>Close </button>
          </div>
        }
        {/* { loginpopup &&
                <div className='registrationcomplete text-center p-5 position-absolute font-weight-bold rounded align-middle'>
                <div className='p-5'></div>
                <div className='p-2'></div>
                <p>{loginmessage}</p>
                <button onClick={closeLoginPopup}  className='btn btn-secondary'>Close </button> 
                </div> 
        } */}
      </div>


    </>
  );
};

export default LoginPage;