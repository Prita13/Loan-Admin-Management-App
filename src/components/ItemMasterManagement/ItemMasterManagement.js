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
      <div>
        <h3>Loan User Management</h3>
        <h3>Item Master Data Deatils</h3>
      </div>
      <div>
        <form>
          <div>
            <h5>Item Id</h5>
            <input
              type='text'
              placeholder='Item ID'
              value={id}
              onChange={(event)=>setId(event.target.value)}
            />
          </div>
          <div>
            <h5>Item Description</h5>
            <input
              type='text'
              placeholder='Item Description'
              value={description}
              onChange={(event)=>setDescription(event.target.value)}
            />
          </div>
          <div>
            <h5>Item Value</h5>
            <input
              type='text'
              placeholder='Item Value'
              value={itemValue}
              onChange={(event)=>setItemValue(event.target.value)}
            />
          </div>
          <div>
            <h5>Item Category</h5>
            <select value={itemCategory} onChange={(event)=>setItemCategory(event.target.value)}>
              <option value='Furniture'>Furniture</option>
              <option value='Personal'>Personal</option>
            </select>
          </div>
          <div>
            <h5>Issue Status</h5>
            <select value={issueStatus} onChange={(event)=>setIssueStatus(event.target.value)}>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
          </div>
          <div>
            <h5>Item Make</h5>
            <select value={itemmake} onChange={(event)=>setItemmake(event.target.value)}>
              <option value='Wodden'>Wooden</option>
            </select>
          </div>
          <button type='submit' onClick={handleClick}>Add Data</button>
        </form>
      </div>
    </div>
  );
};

export default ItemMasterManagement;
