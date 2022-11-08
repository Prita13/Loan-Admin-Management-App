import React, { useState } from "react";

const CustomerData = () => {
  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empDesignation, setEmpDesignation] = useState("");

  const empIDChangeHandler = (event) => setEmpId(event.target.value);
  const empNameChangeHandler = (event) => setEmpName(event.target.value);

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
              value={empId}
              onChange={empIDChangeHandler}
            />
          </div>
          <div>
            <h5>Employee Name</h5>
            <input
              type='text'
              placeholder='Employee Name'
              value={empName}
              onChange={empNameChangeHandler}
            />
          </div>
          <div>
            <h5>Designation</h5>
            <select>
              <option value='Manager'>Manager</option>
              <option value='Senoir Software Engineer'>
                Senoir Software Engineer
              </option>
              <option value='Software Engineer'>Software Engineer</option>
            </select>
          </div>
          <div>
            <h5>Department</h5>
            <select>
              <option value='Finance'>Finance</option>
              <option value='Sales'>Sales</option>
              <option value='Technology'>Technology</option>
            </select>
          </div>
          <div>
            <h5>Gender</h5>
            <select>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Prefer not to say'>Prefer Not to say</option>
            </select>
          </div>
          <button type='submit'>Add Data</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerData;
