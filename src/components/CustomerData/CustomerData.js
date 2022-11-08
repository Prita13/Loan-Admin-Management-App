import React, { useState } from "react";
import '../CustomerData/CustomerData.css';

const CustomerData = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dob, setdob] = useState("");
  const [doj,setdoj] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");

  const handleClick=()=>{
    // request stuff
  }

  return (
    <div>
      <div className="customer-data-page">
        
          <h3 id="customer-page-subheading"><u>Loan Management Application</u></h3>
          <p id="customer-details-heading">Customer Master Data Deatils</p>
          <p id="customer-details-heading"> ADD CUSTOMER DATA</p>
        
        <div>
          <form>
            <table className="customer-data-table">
              <tr className="data-row">
                <td className="data-row-entry"> <h5>Employee Id</h5> </td>
                <td>
                <input
                  type='text'
                  placeholder='Employee ID'
                  value={id}
                  onChange={(event)=>setId(event.target.value)}
                />
                </td>
                <td><h5>Designation</h5></td>
                <td>
                <div className="selection-designation">
                <select value={designation} onChange={(event)=>setDesignation(event.target.value)}>
                <option value="" selected disabled hidden>Select Designation</option>
                <option value='Manager'>Manager</option>
                <option value='Senoir Software Engineer'>Senoir Software Engineer</option>
                <option value='Software Engineer'>Software Engineer</option>
                </select>
                </div>
                </td>
              </tr>
              <tr>
                <td><h5>Employee Name</h5></td>
                <td>
                <input
                  type='text'
                  placeholder='Employee Name'
                  value={name}
                  onChange={(event)=>setName(event.target.value)}
                />
                </td>
                <td>
                 <h5>
                 Date of Birth
                  </h5> 
                </td>
                <td>
                <input
                  type='date'
                  placeholder='DD/MM/YYYY'
                  onChange={(event)=>setdob(event.target.value)}
                />
                </td>
              </tr>
            
              <tr>
              <td><h5>Department
                </h5></td>

                <td>
              <div className="selection-department">
              <select value={department} onChange={(event)=>setDepartment(event.target.value)}>
              <option value="" selected disabled hidden>Select Department</option>
                <option value='Finance'>Finance</option>
                <option value='Sales'>Sales</option>
                <option value='Technology'>Technology</option>
              </select>
              </div>
              </td>
              <td><h5> Date of Joining</h5>
                  
                </td>
                <td>
                <input
                  type='date'
                  placeholder='DD/MM/YYYY'
                  onChange={(event)=>setdoj(event.target.value)}
                />
                </td>
              </tr>
              <tr>
                <td><h5>Gender</h5></td>
                <td>
                <select value={gender} onChange={(event)=>setGender(event.target.value)}>
                <option value="" selected disabled hidden>Select Gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Prefer not to say'>Prefer Not to say</option>
                </select>
                </td>
              </tr>
              
                
              
            </table>
            <button className="customer-add-btn" type='submit' onClick={handleClick}>Add Data</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerData;
