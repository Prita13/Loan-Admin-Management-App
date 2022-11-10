import React, { useState } from "react";
import "../CustomerData/CustomerData.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CustomerData = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dob, setdob] = useState("");
  const [doj, setdoj] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    const obj = {
      employeeId: id,
      employeeName: name,
      designation: designation,
      department: department,
      gender: gender,
      dateOfBirth: dob,
      dateOfJoining: doj,
    };
    fetch("http://localhost:8080/employee/addEmployee", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        navigate("/display");
      });

    axios
      .post(`http://localhost:8080/employee/addEmployee`, {
        employeeId: id,
        employeeName: name,
        designation: designation,
        gender: gender,
        department: department,
        dateOfBirth: dob,
        dateOfJoining: doj,
      })
      .then((response) => {
        alert("Employee added");
      })
      .catch((error) => {
        alert("Couldn't Add Employee");
      });
  };

  return (
    <div>
      <div className='customer-data-page'>
        <h3 id='customer-page-subheading'>
          <u>Loan Management Application</u>
        </h3>
        <p id='customer-details-heading'>Customer Master Data Deatils</p>
        <p id='customer-details-heading'> ADD CUSTOMER DATA</p>

        <div>
          <form>
            <table className='customer-data-table'>
              <tr className='data-row'>
                <td className='data-row-entry-1'>
                  {" "}
                  <h4>Employee Id</h4>{" "}
                </td>
                <td className='data-row-entry-2'>
                  <input
                    className='customer-input'
                    type='text'
                    placeholder='Employee ID'
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                  />
                </td>
                <td>
                  <h4>Designation</h4>
                </td>
                <td className='data-row-entry-2'>
                  <div className='selection-designation'>
                    <select
                      className='customer-input'
                      value={designation}
                      onChange={(event) => setDesignation(event.target.value)}>
                      <option value='' selected disabled hidden>
                        Select Designation
                      </option>
                      <option value='Manager'>Manager</option>
                      <option value='Senoir Software Engineer'>
                        Senoir Software Engineer
                      </option>
                      <option value='Software Engineer'>
                        Software Engineer
                      </option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Employee Name</h4>
                </td>
                <td className='data-row-entry-2'>
                  <input
                    className='customer-input'
                    type='text'
                    placeholder='Employee Name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </td>
                <td>
                  <h4>Date of Birth</h4>
                </td>
                <td className='data-row-entry-2'>
                  <input
                    className='customer-input'
                    type='date'
                    placeholder='DD/MM/YYYY'
                    value={dob}
                    onChange={(event) => setdob(event.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <h4>Department</h4>
                </td>

                <td className='data-row-entry-2'>
                  <div className='selection-department'>
                    <select
                      className='customer-input'
                      value={department}
                      onChange={(event) => setDepartment(event.target.value)}>
                      <option value='' selected disabled hidden>
                        Select Department
                      </option>
                      <option value='Finance'>Finance</option>
                      <option value='Sales'>Sales</option>
                      <option value='Technology'>Technology</option>
                    </select>
                  </div>
                </td>
                <td>
                  <h4> Date of Joining</h4>
                </td>
                <td className='data-row-entry-2'>
                  <input
                    className='customer-input'
                    type='date'
                    placeholder='DD/MM/YYYY'
                    value={doj}
                    onChange={(event) => setdoj(event.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Gender</h4>
                </td>
                <td>
                  <select
                    className='customer-input'
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}>
                    <option value='' selected disabled hidden>
                      Select Gender
                    </option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Prefer not to say'>Prefer Not to say</option>
                  </select>
                </td>
              </tr>
            </table>
            <div
              className='customer-add-btn'
              type='submit'
              onClick={handleClick}>
              {" "}
              Add Data{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerData;
