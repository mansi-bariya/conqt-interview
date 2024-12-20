import React from 'react';
import supplierStyles from "./supplierDetails.module.css";
import Input from '../Input/Input';

const SupplierDetails = () => {
  return (
    <>
      <h3 className={supplierStyles.title}>Supplier Details</h3>
      <div className={supplierStyles.supplierContainer}>
        <div className={supplierStyles.inputGrid}>
          <Input info="Max 50 characters" labelText="Supplier Name" placeholder="Enter supplier name" type="text" id="supplierName" />
          <Input info="Max 50 characters" labelText="Company Name" placeholder="Enter company name" type="text" id="companyName" />
          <div>
            <label htmlFor="country" className={supplierStyles.label}>Country</label>
            <select name="country" id="country" className={supplierStyles.customSelect}>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
              <option value="Thailand">Thailand</option>
            </select>
          </div>
          <div>
            <label htmlFor="state" className={supplierStyles.label}>State</label>
            <select name="state" id="state" className={supplierStyles.customSelect}>
              <option value="Florida">Florida</option>
              <option value="opt1">opt1</option>
              <option value="opt2">opt2</option>
              <option value="opt3">opt3</option>
            </select>
          </div>
          <Input info="Max 50 characters" labelText="City" placeholder="Enter city" type="text" id="city" />
          <Input info="Valid email format" labelText="Email Address" placeholder="Enter email address" type="email" id="emailAddress" />
          <Input info="Max 50 characters" labelText="Email Address" placeholder="Enter email address" type="email" id="emailId" />
        </div>
      </div>
    </>
  )
}

export default SupplierDetails
