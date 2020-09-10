import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getUser, getBusiness, getMenu } from '../redux/reducer';
import "../CSS/auth.css"

const Auth = (props) => {
  const [userBusinessToggle, setUserToggle] = useState(true);
  const [signInRegisterToggle, setRegisterToggle] = useState(true);
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [businessEmailInput, setBusinessEmail] = useState("");
  const [businessPasswordInput, setBusinessPassword] = useState("");


  const handleEmailInput = (event) => {
    const {value} = event.target;
    setEmail(value)
  };

  const handleBusinessEmailInput = (event) => {
    const {value} = event.target;
    setBusinessEmail(value)
  };

  const handlePasswordInput = (event) => {
    const {value} = event.target;
    setPassword(event.target.value)
  };

  const handleBusinessPasswordInput = (event) => {
    const {value} = event.target;
    setBusinessPassword(event.target.value)
  };

  const login = () => {
    axios
      .post("/auth/login", {
        email: emailInput,
        password: passwordInput,
      })
      .then((res) => {
        props.getUser();
        props.history.push("/business");
      })
      .catch((err) => {
        alert("email or password incorrect");
      });
  };

  const businessLogin = () => {
    axios
      .post("/business/login", {
        business_email: businessEmailInput,
        business_password: businessPasswordInput,
      })
      .then((res) => {
        // console.log("businessLogin res", res)
        props.getBusiness(res.data.business_id);
        props.history.push("/restaurant");
      })
      .catch((err) => {
        alert("email or password incorrect");
      });
  };

  const register = () => {
    axios
      .post("/auth/register", {
        email: emailInput,
        password: passwordInput,
      })
      .then((res) => {
        props.getUser();
        props.history.push("/business");
      })
      .catch((err) => {
        alert("email or password already registered, do you want to log in?");
      });
  };

  const businessRegister = () => {
    axios
      .post("/business/register", {
        business_email: businessEmailInput,
        business_password: businessPasswordInput,
      })
      .then((res) => {
        props.getBusiness();
        props.history.push("/restaurant");
      })
      .catch((err) => {
        alert("email or password already registered, do you want to log in?");
      });
  };

    return (
      <div className="auth" >

        <div className="title">
        <span className="food"><h1>FOOD</h1></span><span className="dood"><h1>DOOD</h1></span>
        </div>


        <div className="loginContainer">
        <h3 className="inputTitle" >{signInRegisterToggle ? "Login" : "Register"}</h3>
        
        <input
          name="email"
          placeholder="email"
          value={emailInput}
          onChange={handleEmailInput}
        />
        <input
          name="password"
          placeholder="password"
          value={passwordInput}
          onChange={handlePasswordInput}
        />
        {signInRegisterToggle ? (
          <>
          <button className="inputText" onClick={login}>Login</button>
          <button className="inputText"
          onClick={() => {
            setRegisterToggle(!signInRegisterToggle);
          }}
          >
            Haven't signed up yet, Click to register
          </button>
          </>
        ):(
          <>
            <button className="inputText" onClick={register}>Register</button>
            <button className="inputText"
              onClick={() => {
                setRegisterToggle(!signInRegisterToggle);
              }}
            >
              Already signed up? Click to login
            </button>
          </>
        )}

        </div>


        <div className="loginContainer" > 
        <h3 className="inputTitle" >{signInRegisterToggle ? "Business Login" : "Business Register"}</h3>
        
        <input
          name="email"
          placeholder="email"
          value={businessEmailInput}
          onChange={handleBusinessEmailInput}
        />
        <input
          name="password"
          placeholder="password"
          value={businessPasswordInput}
          onChange={handleBusinessPasswordInput}
        />
        {signInRegisterToggle ? (
          <>
          <button className="inputText" onClick={businessLogin}>Login</button>
          <button className="inputText"
          onClick={() => {
            setRegisterToggle(!signInRegisterToggle);
          }}
          >
            Haven't signed up yet, Click to register
          </button>
          </>
        ):(
          <>
            <button className="inputText" onClick={businessRegister}>Register</button>
            <button className="inputText"
              onClick={() => {
                setRegisterToggle(!signInRegisterToggle);
              }}
            >
              Already signed up? Click to login
            </button>
          </>
        )}

        </div>

        
      </div>
    );
  };
  
  export default connect(null, {getUser, getBusiness, getMenu})(Auth);
  