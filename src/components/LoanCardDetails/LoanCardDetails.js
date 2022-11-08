import React, { useState } from "react";

const LoanCardDetails = () => {
  const [loanID, setLoanID] = useState("");
  const [loanType, setLoanType] = useState("");
  
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
                <input type='text' value={loanID} name='loanid' onChange={(event)=>setLoanID(event.target.value)} />
              </label>
            </div>
            <div>
            <h5>Designation</h5>
            <select value={loanType} onChange={(event)=>setLoanType(event.target.value)}>
              <option value="" selected disabled hidden>Select Loan Type</option>
              <option value='Furniture'>Furniture</option>
              <option value='Stationery'>
                Stationery
              </option>
              <option value='Crockery'>Crockery</option>
            </select>
            </div>
            <button type='submit'>Add Data</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanCardDetails;
