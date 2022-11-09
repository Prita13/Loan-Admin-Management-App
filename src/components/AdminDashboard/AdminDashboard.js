import React, { useState } from "react";
import axios from "axios";
import CustomerData from "../CustomerData/CustomerData";
import ItemMasterManagement from "../ItemMasterManagement/ItemMasterManagement";
import LoanCardDetails from "../LoanCardDetails/LoanCardDetails";
import DisplayLoanCardDetails from '../LoanCardDetails/DisplayLoanCardDetails';
import DisplayCustomerDetails from '../CustomerData/DisplayCutomerDetails';
import ItemMasterDetails from '../ItemMasterManagement/ItemMasterDetails';
import { NavLink, Routes, Route } from "react-router-dom";
import "../AdminDashboard/AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import LoginForm from "../loginform";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = (e) => {
      e.preventDefault();
      navigate("/admin");
    
  };


  return (
    <div>
      <div>
        <NavLink to='/' style={{textDecoration:'none'}}>
          <div id="main-heading">Loan Management Application</div>
        </NavLink>
        <div id="page-heading">Admin Dash Board</div>
        <div onclick={logout} id="logout-btn">Logout</div>
      </div>
      <div className="options">
        <NavLink to='/CustomerDataManagement' style={{textDecoration:'none'}}>
          <div className="option-1">Customer Data Management</div>
        </NavLink>
        <NavLink to='/LoanCardManagement' style={{textDecoration:'none'}}>
          <div className="option-2">Loan Card Management</div>
        </NavLink>
        <NavLink to='/ItemsMasterData' style={{textDecoration:'none'}}>
          <div className="option-3">Items Master Data</div>
        </NavLink>
      </div>
      <div>
        <Routes>
          <Route path='/' exact />
          <Route
            path='/CustomerDataManagement'
            exact
            element={<CustomerData />}
          />
          <Route
            path='/LoanCardManagement'
            exact
            element={<LoanCardDetails />}
          />
          <Route
            path='/ItemsMasterData'
            exact
            element={<ItemMasterManagement />}
          />
          <Route
            path='/display'
            exact
            element={<DisplayCustomerDetails />}
            />
          <Route
            path='/displayLoan'
            exact
            element={<DisplayLoanCardDetails />}
            />
          <Route
            path='/displayItem'
            exact
            element={<ItemMasterDetails />}
            />
          <Route
            path='/admin'
            exact
            element={<LoginForm/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
