import React,{useState} from "react";

const ItemMasterManagement = () => {
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [itemValue,setItemValue]=useState('');
  const [itemCategory, setItemCategory] = useState("");
  const [issueStatus, setIssueStatus] = useState("");
  const [itemmake, setItemmake] = useState("");

  const handleClick=()=>{
    // request stuff
  }

  return (
    <div>
      

      <div className="customer-data-page">

          <h3 id="customer-page-subheading"><u>Loan Management Application</u></h3>
          <p id="customer-details-heading">Item Master Data Deatils</p>
          <p id="customer-details-heading"> ADD ITEM DATA</p>
      <div>
        <form>
          <table>
            <tr>
              <td>
                <div className="loan-form">
                  <h5>Item Id</h5>
                </div>
              </td>


              <td>
                <div className="loan-form-data">
                <input
                  type='text'
                  placeholder='Item ID'
                  value={id}
                  onChange={(event)=>setId(event.target.value)}
                />
                </div>
              </td>

              <td>
              <div className="loan-form">
                <h5>Item Description</h5>
                </div>
              </td>
              <td>
              <div className="loan-form-data">
                <input
                  type='text'
                  placeholder='Item Description'
                  value={description}
                  onChange={(event)=>setDescription(event.target.value)}
                />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="loan-form">
                  <h5>Item Value</h5>
                </div>
              </td>
              <td>
                <div className="loan-form-data">
                  <input
                  type='text'
                  placeholder='Item Value'
                  value={itemValue}
                  onChange={(event)=>setItemValue(event.target.value)}
                  />
                </div>
              </td>
              <td>
                <div className="loan-form">
                  <h5>Item Category</h5>
                </div>
              </td>
              <td>
                <div className="loan-form-data">
                  <select value={itemCategory} onChange={(event)=>setItemCategory(event.target.value)}>
                  <option value="" selected disabled hidden>Select Item Category</option>
                  <option value='Furniture'>Furniture</option>
                  <option value='Personal'>Personal</option>
                </select>
                  </div>

              </td>
            </tr>
            <tr>

            <td>
             <div className="loan-form">
              <h5>Issue Status</h5>
              </div>
            </td>
            <td>
              <div className="loan-form-data">
              <select value={issueStatus} onChange={(event)=>setIssueStatus(event.target.value)}>
                <option value="" selected disabled hidden>Select Issue Status</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </select>
              </div>
            </td>
              
            <td>
             <div className="loan-form">
              <h5>Item Make</h5>
              </div>
            </td>
            <td>
              <div className="loan-form-data">
              <select value={itemmake} onChange={(event)=>setItemmake(event.target.value)}>
                <option value="" selected disabled hidden>Select Item Make</option>
                <option value='Wooden'>Wooden</option>
                <option value='Plastic'>Plastic</option>
              </select>
            </div>
            </td>
              

            </tr>
          </table>
         <button type='submit' onClick={handleClick}>Add Data</button>
        </form>
        </div>

      </div>
    </div>
  );
};

export default ItemMasterManagement;
