import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import {Link} from 'react-router-dom'
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome'
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers'
import {faReceipt} from '@fortawesome/free-solid-svg-icons/faReceipt'
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser'
import {faCog} from '@fortawesome/free-solid-svg-icons/faCog'
import {faFileSignature} from '@fortawesome/free-solid-svg-icons/faFileSignature'
import {faHandshake} from '@fortawesome/free-solid-svg-icons/faHandshake'
import '../../assets/CSS/pastEntries.css'

export default function Pastentries() {
  return (
    <div className="container">
        <div class="statement-navbar navbar-expand-lg ">
       
        <div class="statment-nav" >
          <ul class="statement-ul">
            <li class="statement-item ">
            <Link to='/home' class="nav-link" href="#">  <span><FontAwesomeIcon icon={faHome}/></span> Masik Khapat </Link>
            </li>
            <li class="statement-item">
             <Link to='/customer' class="nav-link" href="#"><span><FontAwesomeIcon icon={faUsers}/></span> Masik Billing</Link>
            </li>
            <li class="statement-item">
           <Link to='/billing' class="nav-link" href="#"> <span><FontAwesomeIcon icon={faReceipt}/></span> Statement</Link>
            </li>
            <li class="statement-item">
         <Link to='/report' class="nav-link" href="#">   <span><FontAwesomeIcon icon={faFileSignature}/></span> Outstanding Report</Link>
            </li>
            <li class="statement-item">
           <Link to='/setup' class="nav-link" href="#"> <span><FontAwesomeIcon icon={faCog}/></span> Event Charges</Link>
            </li>
            <li class="statement-item">
           <Link class="nav-link" href="#"> <span><FontAwesomeIcon icon={faHandshake}/></span>  Past Entries</Link>
            </li>
          </ul>
        </div>
      </div>
      <h7>Previous Meter Reading Date of 510319</h7>
      <div className="table-responsive">
         
      <table
        id="dtBasicExample"
        class="table  table-striped table-bordered table-lg table-responsive-sm"
      >
        <thead>
          <tr>
              <th className="th-sm">Edit</th>
            <th class="th-sm">S.N.</th>

            <th class="th-sm">Year</th>
            <th class="th-sm">Month</th>
            <th class="th-sm">Previous Unit</th>
            <th class="th-sm">Current Unit</th>
            <th class="th-sm">Consumed Units</th>
            <th class="th-sm">Upload Date</th>
            <th class="th-sm">Read Date</th>
            <th class="th-sm">Tariff</th>
            <th class="th-sm">Meter Status</th>
            <th class="th-sm">Status</th>
           
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
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
            <td>$320,800</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}
