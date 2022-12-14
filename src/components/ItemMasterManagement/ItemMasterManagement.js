import React, { useState } from "react";
import axios from "axios";
import "../ItemMasterManagement/ItemMasterManagement.css";
import { useNavigate } from "react-router-dom";

const ItemMasterManagement = () => {
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [itemValue, setItemValue] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [issueStatus, setIssueStatus] = useState("");
  const [itemmake, setItemmake] = useState("");

  const navigate = useNavigate();

  const viewData=()=>{
    navigate("/displayItem");
  }

  const handleClick = () => {

    const item_obj = {
      itemId: id,
      itemMake: itemmake,
      itemCategory:itemCategory,
      itemValuation:itemValue,
      issueStatus:issueStatus,
      itemDescription: description,
    }

    fetch('http://localhost:8080/item/addItem', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( item_obj )
            })
            .then(response => response.json())
            .then(response =>{
              console.log(response)
              navigate("/displayItem")
              
                
            }
            )
    // axios
    //   .post(`http://localhost:8080/item/addItem`, {
    //     itemId: id,
    //     itemMake: itemmake,
    //     itemCategory: itemCategory,
    //     itemValuation: itemValue,
    //     issueStatus: issueStatus,
    //     itemDescription: description,
    //   })
    //   .then((response) => {
    //     alert("Item added");
    //   })
    //   .catch((error) => {
    //     alert("Couldn't Add Item");
    //   });
  };

  return (
    <div>
      <div className='customer-data-page'>
        <h3 id='customer-page-subheading'>
          <u>Loan Management Application</u>
        </h3>
        <p id='customer-details-heading'>Item Master Data Deatils</p>
        <p id='customer-details-heading'> ADD ITEM DATA</p>
        <div>
          <form>
            <table className='item-table'>
              <tr className='item-data-row'>
                <td>
                  <div className='item-name'>
                    <h4>Item Id</h4>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      className='item-form-data'
                      type='text'
                      placeholder='Item ID'
                      value={id}
                      onChange={(event) => setId(event.target.value)}
                    />
                  </div>
                </td>

                <td>
                  <div className='item-name'>
                    <h4>Item Description</h4>
                  </div>
                </td>
                <td>
                  <div>
                    <input
                      className='item-form-data'
                      type='text'
                      placeholder='Item Description'
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    />
                  </div>
                </td>
              </tr>
              <tr className='item-data-row'>
                <td>
                  <div className='item-name'>
                    <h4>Item Value</h4>
                  </div>
                </td>
                <td>
                  <div>
                    <input
                      className='item-form-data'
                      type='text'
                      placeholder='Item Value'
                      value={itemValue}
                      onChange={(event) => setItemValue(event.target.value)}
                    />
                  </div>
                </td>
                <td>
                  <div className='item-name'>
                    <h4>Item Category</h4>
                  </div>
                </td>
                <td>
                  <div>
                    <select
                      className='item-form-data'
                      value={itemCategory}
                      onChange={(event) => setItemCategory(event.target.value)}>
                      <option value='' selected disabled hidden>
                        Select Item Category
                      </option>
                      <option value='Furniture'>Furniture</option>
                      <option value='Personal'>Personal</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr className='item-data-row'>
                <td>
                  <div className='item-name'>
                    <h4>Issue Status</h4>
                  </div>
                </td>
                <td>
                  <div>
                    <select
                      className='item-form-data'
                      value={issueStatus}
                      onChange={(event) => setIssueStatus(event.target.value)}>
                      <option value='' selected disabled hidden>
                        Select Issue Status
                      </option>
                      <option value='Yes'>Yes</option>
                      <option value='No'>No</option>
                    </select>
                  </div>
                </td>

                <td>
                  <div className='item-name'>
                    <h4>Item Make</h4>
                  </div>
                </td>
                <td>
                  <div>
                    <select
                      className='item-form-data'
                      value={itemmake}
                      onChange={(event) => setItemmake(event.target.value)}>
                      <option value='' selected disabled hidden>
                        Select Item Make
                      </option>
                      <option value='Wooden'>Wooden</option>
                      <option value='Plastic'>Plastic</option>
                    </select>
                  </div>
                </td>
              </tr>
            </table>
            <div
              className='item-btn-submit'
              type='submit'
              onClick={handleClick}>
              Add Data
            </div>
            <div
              className='item-btn-submit'
              onClick={viewData}>
              View Items
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemMasterManagement;
