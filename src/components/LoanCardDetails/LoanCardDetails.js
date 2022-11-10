import React, { useState } from "react";
import axios from "axios";
import "../LoanCardDetails/LoanCardDetails.css";
import "../loginform.css";
import { useNavigate } from "react-router-dom";

const LoanCardDetails = () => {
  const [loanType, setLoantype] = useState("");
  const [duration, setDuration] = useState("");
  const [loanid, setLoanid] = useState("");

  const navigate = useNavigate();

  const viewData=()=>{
    navigate("/displayItem");
  }

  const LoanDetailHandler = () => {

    const loan_obj={
      loanId:loanid,
      loanType:loanType,
      durationInYears:duration,
    }

    fetch('http://localhost:8080/loanCard/addLoanCard', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( loan_obj )
            })
            
            .then(response => response.json())
            .then(response =>{
              console.log(response)
              navigate("/displayLoan")
              
                
            }
            )
    // axios
    //   .post(`http://localhost:8080/loanCard/addLoanCard`, {
    //     loanId: loanid,
    //     loanType: loanType,
    //     durationInYears: duration,
    //   })
    //   .then((response) => {
    //     alert("Loan Card added");
    //   })
    //   .catch((error) => {
    //     alert("Couldn't Add Loan Card");
    //   });
  };

  return (
    <div>
      <div className='customer-data-page'>
        <h3 id='customer-page-subheading'>
          <u>Loan Management Application</u>
        </h3>
        <p id='customer-details-heading'>Loan Card Master Data Deatils</p>
        <p id='customer-details-heading'> ADD LOAN DATA</p>
        <div>
          <form>
            <table className='loan-data-table'>
              <tr className='loan-data-row'>
                <td>
                  <div className='loan-form'>
                    <h4>Loan Id</h4>
                  </div>
                </td>
                <td>
                  <input
                    className='loan-input-common'
                    type='text'
                    placeholder='Loan ID'
                    value={loanid}
                    onChange={(event) => setLoanid(event.target.value)}
                  />
                </td>
              </tr>
              <tr className='loan-data-row'>
                <td>
                  <div className='loan-form'>
                    <h4>Loan type</h4>
                  </div>
                </td>
                <td>
                  <select
                    className='loan-data-input'
                    value={loanType}
                    onChange={(event) => setLoantype(event.target.value)}>
                    <option value='' selected disabled hidden>
                      Select Loan Type
                    </option>
                    <option value='Furniture'>Furniture</option>
                    <option value='Car'>Car</option>
                    <option value='Home'>Home</option>
                  </select>
                </td>
              </tr>

              <tr className='loan-data-row'>
                <td>
                  <div className='loan-form'>
                    <h4>Duration</h4>
                  </div>
                </td>

                <td>
                  <input
                    className='loan-input-common'
                    type='number'
                    value={duration}
                    onChange={(event) => setDuration(event.target.value)}
                  />
                </td>
              </tr>
            </table>

            <div
              className='loan-add-btn'
              type='submit'
              onClick={LoanDetailHandler}>
                {" "}
              Add Data{" "}
            </div>
            <div
              className='loan-add-btn'
              onClick={viewData}>
              View Loan Card
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanCardDetails;
