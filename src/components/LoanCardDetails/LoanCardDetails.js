import React, { useState } from "react";
import axios from "axios";

const LoanCardDetails = () => {
  const [loanType, setLoantype] = useState("");
  const [duration, setDuration] = useState("");
  const [loanid, setLoanid] = useState("");

  const LoanDetailHandler = () => {
    axios
      .post(`http://localhost:8080/loanCard/addLoanCard`, {
        loanId: loanid,
        loanType: loanType,
        durationInYears: duration,
      })
      .then((response) => {
        console.log("Loan Card added");
      })
      .catch((error) => {
        alert("Couldn't Add Loan Card");
      });
  };

  return (
    <div>
      <div>
        <h5>Loan Management Application</h5>
        <h5>Loan Cards Master Data Details</h5>
        <div>
          <form>
            <div>
              <label>
                Loan Id
                <input
                  type='text'
                  placeholder='Loan ID'
                  value={loanid}
                  onChange={(event) => setLoanid(event.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Loan type
                <select
                  value={loanType}
                  onChange={(event) => setLoantype(event.target.value)}>
                  <option value='Furniture'>Furniture</option>
                  <option value='Car'>Car</option>
                  <option value='Home'>Home</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Duration
                <select
                  value={duration}
                  onChange={(event) => setDuration(event.target.value)}>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='5'>5</option>
                  <option value='7'>7</option>
                  <option value='10'>10</option>
                  <option value='15'>15</option>
                </select>
              </label>
            </div>
            <button type='submit' onClick={LoanDetailHandler}>
              Add Data
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanCardDetails;
