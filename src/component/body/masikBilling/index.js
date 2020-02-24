import React from 'react'
import '../../../assets/CSS/masikBilling.css'
import Statement from './statement'
import Usersummary from './userSummary'
import Payment from './payment'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

export default function Masikbilling() {
    return (
      <div className="container">
        <h2 className="water-header">Masik Billing</h2>
  
        <form className="col-md-12 searchCustomer">
          <label>Customer No:</label>
          <input />
          <label>Date</label>
          <input />
  
          <button
            className="btn btn-sm"
            style={{ background: "#1396bd", borderRadius: "20px", color: "#fff" }}
          >
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
          <button
            className="btn btn-sm"
            style={{ background: "#1396bd", borderRadius: "20px", color: "#fff" }}
          >
            <FontAwesomeIcon icon={faSearch} />
            Smart Search
          </button>
        </form>
  
        <table
          id="dtBasicExample"
          class="table  table-striped table-bordered table-lg table-responsive-sm"
        >
          <thead>
            <tr>
              <th class="th-sm">Customer No.</th>
              <th class="th-sm">Customer Name</th>
              <th class="th-sm">Address (Tole)</th>
              <th class="th-sm">Meter Status</th>
              <th class="th-sm">Old System No.</th>
              <th class="th-sm">Advance Amount</th>
              <th class="th-sm">Customer Type</th>
              <th class="th-sm">Ward</th>
              <th class="th-sm"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
              <td>$320,800</td>
            </tr>
          </tbody>
        </table>
        <Statement/>
        <Usersummary/>
        <Payment/>
        </div>
    )}

  