import React, { useState, useEffect } from "react";
import  '../ItemMasterManagement/ItemMasterDetails.css';


export default function DisplayItemMasterDetails() {

    const [detail,setdetail]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8080/item/getAllItems', {
    }).then(response=>response.json())
    .then(response=>{
       console.log(response) 
       setdetail(response)  
    })

  },[])
    return (
        <div>
            
            <center>
            
            <div className="display-subheading"><u>Item Master Data details</u></div>
            
            </center>
        <table>
        <tr>
          <th>Item_Id</th>
          <th>Item_Make</th>
          <th>Item_Category</th>
          <th>Item_Valuation</th>
          <th>Issue_Status</th>
          <th>Item_Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        

        {detail.map((details)=>{
    return(
        <tr>
          <td>{details.itemId}</td>
          <td>{details.itemMake}</td>
          <td>{details.itemCategory}</td>
          <td>{details.itemValuation}</td>
          <td>{details.issueStatus}</td>
          <td>{details.itemDescription}</td>
          
          <td>Edit</td>
          <td>Delete</td>
        </tr>

    )
  })}
        
      </table>
      </div>
    )}