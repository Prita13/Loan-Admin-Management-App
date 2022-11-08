import React, { useState } from "react";
import LoginForm from "./components/loginform";
import CustomerData from "./components/CustomerData/CustomerData";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {!isLoggedIn ? (
        <div className='page'>
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        </div>
      ) : (
        <Router>
          <div className='dashboard-page'>
            <AdminDashboard />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
