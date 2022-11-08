import React, { useState } from "react";

const CustomerData = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");

  const handleClick=()=>{
    // request stuff
  }

  return (
    <div>
      <div>
        <h3>Loan User Management</h3>
        <h3>Customer Master Data Deatils</h3>
      </div>
      <div>
        <form>
          <div>
            <h5>Employee Id</h5>
            <input
              type='text'
              placeholder='Employee ID'
              value={id}
              onChange={(event)=>setId(event.target.value)}
            />
          </div>
          <div>
            <h5>Employee Name</h5>
            <input
              type='text'
              placeholder='Employee Name'
              value={name}
              onChange={(event)=>setName(event.target.value)}
            />
          </div>
          <div>
            <h5>Designation</h5>
            <select value={designation} onChange={(event)=>setDesignation(event.target.value)}>
              <option value='Manager'>Manager</option>
              <option value='Senoir Software Engineer'>
                Senoir Software Engineer
              </option>
              <option value='Software Engineer'>Software Engineer</option>
            </select>
          </div>
          <div>
            <h5>Department</h5>
            <select value={department} onChange={(event)=>setDepartment(event.target.value)}>
              <option value='Finance'>Finance</option>
              <option value='Sales'>Sales</option>
              <option value='Technology'>Technology</option>
            </select>
          </div>
          <div>
            <h5>Gender</h5>
            <select value={gender} onChange={(event)=>setGender(event.target.value)}>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Prefer not to say'>Prefer Not to say</option>
            </select>
          </div>
          <button type='submit' onClick={handleClick}>Add Data</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerData;
