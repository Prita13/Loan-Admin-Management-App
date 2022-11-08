import React, { useState } from "react";

const CustomerData = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [doj, setDOJ] = useState("");

  const handleClick=()=>{
    // request stuff
  }

  return (
    <div>
      <div>
        <h3>Loan User Management</h3>
        <h3>Customer Master Data Details</h3>
      </div>
      <div>
        <form>
          <div>
            <h5>Employee ID</h5>
            <input
              type='text's
              placeholder='Enter you Employee ID'
              value={id}
              onChange={(event)=>setId(event.target.value)}
            />
          </div>
          <div>
            <h5>Employee Name</h5>
            <input
              type='text'
              placeholder='Enter your Employee Name'
              value={name}
              onChange={(event)=>setName(event.target.value)}
            />
          </div>
          <div>
            <h5>Designation</h5>
            <select value={designation} onChange={(event)=>setDesignation(event.target.value)}>
              <option value="" selected disabled hidden>Select Designation</option>
              <option value='Manager'>Manager</option>
              <option value='Senoir Software Engineer'>
                Senior Software Engineer
              </option>
              <option value='Software Engineer'>Software Engineer</option>
            </select>
          </div>
          <div>
            <h5>Department</h5>
            <select value={department} onChange={(event)=>setDepartment(event.target.value)}>
            <option value="" selected disabled hidden>Select Department</option>
              <option value='Finance'>Finance</option>
              <option value='Sales'>Sales</option>
              <option value='Technology'>Technology</option>
            </select>
          </div>
          <div>
            <h5>Gender</h5>
            <select value={gender} onChange={(event)=>setGender(event.target.value)}>
            <option value="" selected disabled hidden>Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Prefer not to say'>Prefer Not to say</option>
            </select>
          </div>
          <div>
            <h5>Date of Birth</h5>
            <input type='date' value={dob}
             onChange={(event)=>setDOB(event.target.value)}
            />
          </div>
          <div>
            <h5>Date of Joining</h5>
            <input type='date' value={doj}
             onChange={(event)=>setDOJ(event.target.value)}
            />
          </div>

          <button type='submit' onClick={handleClick}>Add Data</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerData;
