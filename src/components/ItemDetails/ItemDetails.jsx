import React from 'react';
import itemDetailsStyles from "./itemDetails.module.css";
import Input from '../Input/Input';

const ItemDetails = () => {
  return (
    <>
      <h3 className={itemDetailsStyles.title}>Item Details</h3>
      <div className={itemDetailsStyles.itemContainer}>
        <div className={itemDetailsStyles.inputGrid}>
          <Input info="Max 50 characters" labelText="Input Name" type="text" placeholder="Enter item name" id="itemName" />
          <Input info="Numeric value" labelText="Quantity" type="text" placeholder="Enter quantity" id="quantity" />
          <Input info="Numeric value (USD)" labelText="Unit Price" type="text" placeholder="Enter unit price" id="unitPrice" />
          <Input info="Format: MM/DD/YYYY" labelText="Date of Submission" type="date" placeholder="select date" id="date" />
        </div>
      </div>
    </>
  )
}

export default ItemDetails
