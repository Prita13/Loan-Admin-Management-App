import React,{useState} from "react";
import "./loginform.css";

const LoginForm = (props) => {
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const login = () => {
    // do login stuff
    props.setIsLoggedIn(true);
  };

  return (
    <div className='cover'>
      <h1>Admin Login</h1>
      <input className="login-input" type='text' placeholder='Username' value={userName} onChange={(event)=>setUserName(event.target.value)}/>
      <input className="login-input" type='password' placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)} />
      <div onClick={login} className='login-btn'>
        Login
      </div>
    </div>
  );
};

export default LoginForm;
