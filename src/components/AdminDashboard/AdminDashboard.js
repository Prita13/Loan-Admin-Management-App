import React, { useState } from "react";
import CustomerData from "../CustomerData/CustomerData";
import ItemMasterManagement from "../ItemMasterManagement/ItemMasterManagement";
import LoanCardDetails from "../LoanCardDetails/LoanCardDetails";
import { NavLink, Routes, Route } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <div>
        <NavLink to='/' activeStyle={{ color: "black" }}>
          <h4>Loan Management Application</h4>
        </NavLink>
        <h4>Admin Dash Board</h4>
      </div>
      <div>
        <NavLink to='/CustomerDataManagement'>
          <div>Customer Data Management</div>
        </NavLink>
        <NavLink to='/LoanCardManagement'>
          <div>Loan Card Management</div>
        </NavLink>
        <NavLink to='/ItemsMasterData'>
          <div>Items Master Data</div>
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
