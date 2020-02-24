import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

export default function Customers() {
  return (
    <div className="container">
      <h2 className="water-header">Search Customer</h2>
      <form className="col-md-12 searchCustomer">
        <label>Customer No:</label>
        <input />
        <label>Zone:</label>
        <input />
        <label>Ward:</label>
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
          <FontAwesomeIcon icon={faPlus} />
          Add Customer
        </button>
      </form>

      <table
        id="dtBasicExample"
        class="table  table-striped table-bordered table-lg table-responsive-sm"
      >
        <thead>
          <tr>
            <th class="th-sm">S.N.</th>

            <th class="th-sm">Name</th>
            <th class="th-sm">Customer No.</th>
            <th class="th-sm">Old System No.</th>
            <th class="th-sm">Mobile Number</th>
            <th class="th-sm">Address (Tole)</th>
            <th class="th-sm">Zone</th>
            <th class="th-sm">Ward</th>
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
    </div>
  );
}
