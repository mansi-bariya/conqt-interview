import React from 'react';
import submittedDataStyles from "./submittedData.module.css";

const SubmittedData = () => {
  return (
    <>
      <div className={submittedDataStyles.detailHead}>
        <h3 className={submittedDataStyles.title}>Submitted Data</h3>
        <span>The data submitted by users will be displayed below</span>
        <button>Save Changes</button>
      </div>
      <div className={submittedDataStyles.tableContainer}>
        <div className={submittedDataStyles.filterWrap}>
          <h4>Uploaded Data</h4>
          <button>Clear All</button>
        </div>
        <table>
          <thead>
            <tr>
              <td>
                <input type="checkbox" name="select" id="select" />
              </td>
              <td>Supplier</td>
              <td>Item Name</td>
              <td>Quantity</td>
              <td>City</td>
              <td>Country</td>
              <td>Email</td>
              <td>Phone Number</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" name="select" id="select" />
              </td>
              <td>Olivia Rhye</td>
              <td>Olivia Rhye</td>
              <td>12</td>
              <td>Cape Town</td>
              <td>South Africa</td>
              <td>jackson.graham@example.com</td>
              <td>(406) 555-0120</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="select" id="select" />
              </td>
              <td>Olivia Rhye</td>
              <td>Olivia Rhye</td>
              <td>12</td>
              <td>Cape Town</td>
              <td>South Africa</td>
              <td>jackson.graham@example.com</td>
              <td>(406) 555-0120</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="select" id="select" />
              </td>
              <td>Olivia Rhye</td>
              <td>Olivia Rhye</td>
              <td>12</td>
              <td>Cape Town</td>
              <td>South Africa</td>
              <td>jackson.graham@example.com</td>
              <td>(406) 555-0120</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="select" id="select" />
              </td>
              <td>Olivia Rhye</td>
              <td>Olivia Rhye</td>
              <td>12</td>
              <td>Cape Town</td>
              <td>South Africa</td>
              <td>jackson.graham@example.com</td>
              <td>(406) 555-0120</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SubmittedData
