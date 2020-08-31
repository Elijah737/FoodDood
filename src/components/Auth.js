import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getUser, getBusiness } from '../redux/reducer';

const Auth = (props) => {
  const [userBusinessToggle, setUserToggle] = useState(true);
  const [signInRegisterToggle, setRegisterToggle] = useState(false);
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");

  const handleEmailInput = (event) => {
    const {value} = event.target;
    setEmail(value)
  };

  const handlePasswordInput = (event) => {
    const {value} = event.target;
    setPassword(event.target.value)
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

    return (
      <div>
        <h1>{signInRegisterToggle ? "Login" : "Register"}</h1>
        <div>
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
          <button onClick={login}>Login</button>
          <button
          onClick={() => {
            setRegisterToggle(!signInRegisterToggle);
          }}
          >
            Haven't signed up yet, Click to register
          </button>
          </>
        ):(
          <>
            <button onClick={register}>Register</button>
            <button
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
  
  export default connect(null, {getUser, getBusiness})(Auth);
  