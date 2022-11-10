import React, { useState, useEffect } from "react";
import  '../CustomerData/DisplayCustomerDetails.css';
import axios from 'axios';


export default function DisplayCustomerDetails() {

    const [detail,setdetail]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8080/employee/getAllEmployees', {
    }).then(response=>response.json())
    .then(response=>{
       console.log(response) 
       setdetail(response)  
    })
  },[])

  const deleteHandler=(id)=>{
    axios
    .post(`http://localhost:8080/employee/deleteEmployee/${id}`, {})
    .then((response) => {
      fetch('http://localhost:8080/employee/getAllEmployees', {
      }).then(response=>response.json())
      .then(response=>{
        console.log(response) 
        setdetail(response)  
      })
      alert("Employee deleted");
    })
    .catch((error) => {
      alert("Couldn't Delete Employee");
    });
  }

    return (
        <div>
            
            <center>
            
            <div className="display-subheading"><u>Customer Master Data details</u></div>
            
            </center>
        <table>
        <tr>
          <th>Emp_Id</th>
          <th>Emp_Name</th>
          <th>Designation</th>
          <th>Department</th>
          <th>Gender</th>
          <th>Date_Of_Birth</th>
          <th>Date_Of_Joining</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        

        {detail.map((details)=>{
    return(
        <tr>
          <td>{details.employeeId}</td>
          <td>{details.employeeName}</td>
          <td>{details.designation}</td>
          <td>{details.department}</td>
          <td>{details.gender}</td>
          <td>{details.dateOfBirth}</td>
          <td>{details.dateOfJoining}</td>
          <td>Edit</td>
          <td onClick={()=>{deleteHandler(details.employeeId)}}>Delete</td>
        </tr>

    )
  })}
        
      </table>
      </div>
      

    )}