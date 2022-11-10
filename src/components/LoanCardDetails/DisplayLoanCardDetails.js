import React, { useState, useEffect } from "react";
import  '../LoanCardDetails/DisplayLoanCardDetails.css';
import axios from 'axios';


export default function DisplayLoanCardDetails() {

    const [detail,setdetail]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8080/loanCard/getAllLoanCards', {
    }).then(response=>response.json())
    .then(response=>{
       console.log(response) 
       setdetail(response)  
    })

  },[])

  const deleteHandler=(id)=>{
    axios
    .post(`http://localhost:8080/loanCard/deleteLoanCard/${id}`, {})
    .then((response) => {
      fetch('http://localhost:8080/loanCard/getAllLoanCards', {
      }).then(response=>response.json())
      .then(response=>{
        console.log(response) 
        setdetail(response)  
      })
      alert("Loan Card deleted");
    })
    .catch((error) => {
      alert("Couldn't Delete Loan Card");
    });
  }

    return (
        <div>
            
            <center>
            
            <div className="display-subheading"><u>Loan Card Data details</u></div>
            
            </center>
        <table>
        <tr>
          <th>Loan_Id</th>
          <th>Loan_Type</th>
          <th>Duration</th>
          
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        

        {detail.map((details)=>{
    return(
        <tr>
          <td>{details.loanId}</td>
          <td>{details.loanType}</td>
          <td>{details.durationInYears}</td>
          
          <td>Edit</td>
          <td onClick={()=>{deleteHandler(details.loanId)}}>Delete</td>
        </tr>

    )
  })}
        
      </table>
      </div>
      

    )}