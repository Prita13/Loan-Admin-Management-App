import React, { useState } from "react";
import "./loginform.css";
import axios from "axios";

const LoginForm = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post(`http://localhost:8080/admin/login`, {
        adminUsername: userName,
        password,
      })
      .then((response) => {
        props.setIsLoggedIn(true);
      })
      .catch((error) => {
        alert("Wrong Username or Password");
      });
  };

  return (
    <div className='cover'>
      <h1>Admin Login</h1>
      <input
        className='login-input'
        type='text'
        placeholder='Username'
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        className='login-input'
        type='password'
        placeholder='Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <div onClick={login} className='login-btn'>
        Login
      </div>
    </div>
  );
};

export default LoginForm;
