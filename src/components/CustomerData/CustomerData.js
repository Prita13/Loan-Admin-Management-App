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
        
          <h3 id="customer-page-subheading"><u>Loan User Management</u></h3>
          <p id="customer-details-heading">Customer Master Data Deatils</p>
        
        <div>
          <form>
            <table className="customer-data-table">
              <tr className="data-row">
                <td>Employee Id</td>
                <input
                  
                  type='text'
                  placeholder='Employee ID'
                  value={id}
                  onChange={(event)=>setId(event.target.value)}
                />
                <td>Designation</td>
                <div className="selection-designation">
                <select value={designation} onChange={(event)=>setDesignation(event.target.value)}>
                <option value='Manager'>Manager</option>
                <option value='Senoir Software Engineer'>Senoir Software Engineer</option>
                <option value='Software Engineer'>Software Engineer</option>
                </select>
                </div>
              </tr>
              <tr>
                <td>Employee Name</td>
                <input
                  type='text'
                  placeholder='Employee Name'
                  value={name}
                  onChange={(event)=>setName(event.target.value)}
                />
                <td>
                  Date of Birth
                </td>
                <input
                  type='date'
                  placeholder='DD/MM/YYYY'
                  onChange={(event)=>setdob(event.target.value)}
                />
              </tr>
            
              <tr>
              <td>Department</td>
              <div className="selection-department">
              <select value={department} onChange={(event)=>setDepartment(event.target.value)}>
                <option value='Finance'>Finance</option>
                <option value='Sales'>Sales</option>
                <option value='Technology'>Technology</option>
              </select>
              </div>
              <td>
                  Date of Joining
                </td>
                <input
                  type='date'
                  placeholder='DD/MM/YYYY'
                  onChange={(event)=>setdoj(event.target.value)}
                />
              </tr>
              <tr>
                <td>Gender</td>
                <select value={gender} onChange={(event)=>setGender(event.target.value)}>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Prefer not to say'>Prefer Not to say</option>
                </select>
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
