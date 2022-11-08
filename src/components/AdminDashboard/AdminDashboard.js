import React, { useState } from "react";
import CustomerData from "../CustomerData/CustomerData";
import ItemMasterManagement from "../ItemMasterManagement/ItemMasterManagement";
import LoanCardDetails from "../LoanCardDetails/LoanCardDetails";
import { NavLink, Routes, Route } from "react-router-dom";
import "../AdminDashboard/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div>
      <div>
        <NavLink to='/' style={{textDecoration:'none'}}>
          <div id="main-heading">Loan Management Application</div>
        </NavLink>
        <div id="page-heading">Admin Dash Board</div>
      </div>
      <div className="options">
        <NavLink to='/CustomerDataManagement'>
          <div className="option-1">Customer Data Management</div>
        </NavLink>
        <NavLink to='/LoanCardManagement'>
          <div className="option-2">Loan Card Management</div>
        </NavLink>
        <NavLink to='/ItemsMasterData'>
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
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
