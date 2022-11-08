import React,{useState} from "react";
import '../ItemMasterManagement/ItemMasterManagement.css';

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
          <table className="item-table">
            <tr className="item-data-row">
              <td>
                <div className="item-name">
                  <h4>Item Id</h4>
                </div>
              </td>


              <td>
                <div >
                <input
                  className="item-form-data"
                  type='text'
                  placeholder='Item ID'
                  value={id}
                  onChange={(event)=>setId(event.target.value)}
                />
                </div>
              </td>

              <td>
              <div className="item-name">
                <h4>Item Description</h4>
                </div>
              </td>
              <td>
              <div >
                <input
                  className="item-form-data"
                  type='text'
                  placeholder='Item Description'
                  value={description}
                  onChange={(event)=>setDescription(event.target.value)}
                />
              </div>
              </td>
            </tr>
            <tr className="item-data-row">
              <td>
                <div className="item-name">
                  <h4>Item Value</h4>
                </div>
              </td>
              <td>
                <div >
                  <input
                  className="item-form-data"
                  type='text'
                  placeholder='Item Value'
                  value={itemValue}
                  onChange={(event)=>setItemValue(event.target.value)}
                  />
                </div>
              </td>
              <td>
                <div className="item-name">
                  <h4>Item Category</h4>
                </div>
              </td>
              <td>
                <div>
                  <select  className="item-form-data" value={itemCategory} onChange={(event)=>setItemCategory(event.target.value)}>
                  <option value="" selected disabled hidden>Select Item Category</option>
                  <option value='Furniture'>Furniture</option>
                  <option value='Personal'>Personal</option>
                </select>
                  </div>

              </td>
            </tr>
            <tr className="item-data-row">

            <td>
             <div className="item-name">
              <h4>Issue Status</h4>
              </div>
            </td>
            <td>
              <div >
              <select className="item-form-data" value={issueStatus} onChange={(event)=>setIssueStatus(event.target.value)}>
                <option value="" selected disabled hidden>Select Issue Status</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </select>
              </div>
            </td>
              
            <td>
             <div className="item-name">
              <h4>Item Make</h4>
              </div>
            </td>
            <td>
              <div >
              <select className="item-form-data" value={itemmake} onChange={(event)=>setItemmake(event.target.value)}>
                <option value="" selected disabled hidden>Select Item Make</option>
                <option value='Wooden'>Wooden</option>
                <option value='Plastic'>Plastic</option>
              </select>
            </div>
            </td>
              

            </tr>
          </table>
         <div className = "item-btn-submit" type='submit' onClick={handleClick}>Add Data</div>
        </form>
        </div>

      </div>
    </div>
  );
};

export default ItemMasterManagement;
