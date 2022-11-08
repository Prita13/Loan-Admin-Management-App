import React from "react";

const LoanCardDetails = () => {
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
                <input type='text' name='loanid' />
              </label>
            </div>
            <button type='submit'>Add Data</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanCardDetails;
