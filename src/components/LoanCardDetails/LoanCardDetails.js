import React,{useState} from "react";
import '../CustomerData/CustomerData.css';
import "../loginform.css";

const LoanCardDetails = () => {
  const [loanType,setLoantype]=useState('');
  const [duration,setDuration]=useState('');
  const [loanid,setLoanid]=useState('');

  const LoanDetailHandler=()=>{
    // request stuff
  }

  return (
    <div>

      <div className="customer-data-page">

      <h3 id="customer-page-subheading"><u>Loan Management Application</u></h3>
          <p id="customer-details-heading">Loan Card Master Data Deatils</p>
          <p id="customer-details-heading"> ADD LOAN DATA</p>
        <div>
          <form>
            <table>
              <tr>
                <td>
                  <div className="loan-form">
                  Loan Id 
                  </div>
                </td>
                <td>
                  <input type='text' placeholder='Loan ID' value={loanid} onChange={(event)=>setLoanid(event.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="loan-form">
                    Loan type
                  </div>
                </td>
                <td>
                  <select value={loanType} onChange={(event)=>setLoantype(event.target.value)}>
                      <option value="" selected disabled hidden>Select Loan Type</option>
                      <option value='Furniture'>Furniture</option>
                      <option value='Car'>Car</option>
                      <option value='Home'>Home</option>
                    </select>
                </td>
              </tr>
             
              <tr>
                <td>
                  <div className="loan-form">
                    Duration
                  </div>
                </td>
                
                <td>
                  <input type="number" value={duration} onChange={(event)=>setDuration(event.target.value)}/>
                </td>
              </tr>

            </table>
  
            <button className="customer-add-btn" type='submit' onClick={LoanDetailHandler}>Add Data</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanCardDetails;
