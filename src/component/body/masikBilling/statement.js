import React from 'react'
import '../../../assets/CSS/masikBilling.css'

export default function Statement() {
    return (
        <React.Fragment>
              
            <p className="table-header">Statement of customer no.1 as of date</p>
            <div className='table-responsive-xl'>
            <table
              id="dtBasicExample"
              class="table  table-striped table-bordered  "
            >
              <thead>
                <tr>
                  <th class="th-sm"></th>
                  <th class="th-sm">S.N.</th>
                  <th class="th-sm">Date</th>
                  <th class="th-sm">Particulars</th>
                  <th class="th-sm">Units</th>
                  <th class="th-sm">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            style={{marginLeft:"0"}}
          />
                  </td>
                  <td>1</td>
                  <td>2076-09-9</td>
                  <td>Tariff of 2076</td>
                  <td>16.0</td>
                  <td>61</td>
                </tr>
              </tbody>
            </table>
            </div>
            <div className="col-md-12 table-summary">
              <ul>
                <li>Total Tariff:121.98</li>
                <li>Total Discount:0.0</li>
                <li>Total Penalty:323.0</li>
                <li>Total Event:0</li>
                <li>Meter Status:OK</li>
              </ul>
            </div>
            
        </React.Fragment>
    )
}
