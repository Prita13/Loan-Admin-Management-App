import React, { useState, useEffect } from "react";
import  '../ItemMasterManagement/ItemMasterDetails.css';
import axios from 'axios';


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

  const deleteHandler=(id)=>{
    axios
    .post(`http://localhost:8080/item/deleteItem/${id}`, {})
    .then((response) => {
      fetch('http://localhost:8080/item/getAllItems', {
      }).then(response=>response.json())
      .then(response=>{
        console.log(response) 
        setdetail(response)  
      })
      alert("Item deleted");
    })
    .catch((error) => {
      alert("Couldn't Delete Item");
    });
  }

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
          <td onClick={()=>{deleteHandler(details.itemId)}}>Delete</td>
        </tr>

    )
  })}
        
      </table>
      </div>
    )}