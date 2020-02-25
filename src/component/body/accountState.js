import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch'
import '../../assets/CSS/accountState.css'


export default function Accountstate() {
    return (
        <div className="container">
            <h2 className="water-header">
             Account Statement   
            </h2>
            <form >
            
                <label>Customer No:</label>
                <input />
                <label>From:</label>
                <input />
                <label>To:</label>
                <input />
                <button className="btn btn-sm" style={{background:"#1396bd",borderRadius:"20px",color:"#fff"}}><FontAwesomeIcon icon={faSearch}/> Search</button>
              
            </form>

            <table id="dtBasicExample" class="table  table-striped table-bordered table-lg table-responsive-sm"  >
  <thead>
    <tr>
    <th class="th-sm">S.N.
      </th>
    
      <th class="th-sm">Date
      </th>
      <th class="th-sm">Particulars
      </th>
      <th class="th-sm">Debit
      </th>
      <th class="th-sm">Credit
      </th>
      <th class="th-sm">Balance
      </th>
  
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
    )
}
