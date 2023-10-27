import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate} from 'react-router-dom';
import './signup.css';

const EntryPage = () => {
  const [currentView, setCurrentView] = useState("signUp");
  const [formData, setFormData] = useState();
  const [loginpopup, setLoginpopup] = useState(false)
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['name']);

  const changeView = (view) => {
    setCurrentView(view);
  }

  // useEffect(()=>{
  //   // renderView()
  //   if (formData == "") {
  //     console.log("called");
  //   }
  // },[currentView])

   // This function for taking input fields data on onChange 
  
   const handleData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  };

  // This function stores all registration datas in db.JSON file on registration button click and get POP UP message
  const Registration = async () => {
    const registrationwithrollid = {...formData, roll_id: 2}
    await fetch('http://localhost:3001/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'token' : 'Anything' // Will be given by Backend Engineer
      },
      body: JSON.stringify(registrationwithrollid)
    })
      .then(res => res.json())
      .then((results) => { console.log(results); })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    Registration()
  }

  // This function for getting all registered data and proceed login process
  const loginHandle = async (event) => {
    event.preventDefault();
    axios.get(`http://localhost:3001/user?username=${formData.username}&password=${formData.password}`)
    .then(function (response) {
      console.log(response);
      console.log(response.data.length);
      console.log(response.data[0]);
      console.log("Login Successful");
      // setCurrentView("logIn");
      // navigate("/login")
      if (response.data.length > 0) {
          setLoginpopup(false)
          setCookie("roll_id", response.data[0].roll_id)
          setCookie("user_id", response.data[0].id)

          if (response.data[0].roll_id === 1) {
              navigate("/login")
          }
          else{
              navigate("/login")
          }
      } else {
          setLoginpopup(true)
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      
      // always executed
    });
  }
  
  
    
    const renderView = () => {
    switch (currentView) {
      case "signUp":
        return (          
              <form>
                <h2>Sign Up!</h2>
                <fieldset >
                  <legend>Create Account</legend>
                  <ul>
                    <li>
                      <label htmlFor="username">Username:</label>
                      <input type="text" id="username" name="username" required onChange={handleData}/>
                    </li>
                    <li>
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="email" onChange={handleData}/>
                    </li>
                    <li>
                      <label htmlFor="password">Password:</label>
                      <input type="password" id="password" name="password" required onChange={handleData}/>
                    </li>
                  </ul>
                </fieldset>
                <button onClick={handleSubmit} >Submit</button>
                <button type="button" onClick={() => changeView("logIn")}>Have an Account?</button>
              </form>
        );
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name="username" onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} required/>
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} required/>
                </li>
                <li>
                  <i/>
                  <a onClick={() => changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button onClick={loginHandle}>Login</button>
            <button type="button" onClick={() => changeView("signUp")}>Create an Account</button>
            {loginpopup ? <div className='text-center p-3'>
                                      <b>Invaild Username or Password</b>
                                  </div> 
                                : ""}
          </form>
        );
      case "PWReset":
        return (
          <form>
            <h2>Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
              </ul>
            </fieldset>
            <button>Send Reset Link</button>
            <button type="button" onClick={() => changeView("logIn")}>Go Back</button>
          </form>
        );
      default:
        return null;
    }
  }

  return (
    <section id="entry-page">
      {renderView()}
    </section>
    
  );
};

export default EntryPage;


