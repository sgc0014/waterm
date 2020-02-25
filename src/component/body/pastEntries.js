import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
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
       
       <nav class="navbar  navbar-expand-xl custom ">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown2" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars}/>
        </button>
        <div class="collapse navbar-collapse pastentry-nav" id="navbarNavDropdown2">
          <ul class="navbar-nav nav-custom">
            <li class="nav-item ">
            <Link to='/home' class="nav-link" href="#"> Masik Khapat  </Link>
            </li>
            <li class="nav-item">
             <Link to='/customers' class="nav-link" href="#">Masik Billing</Link>
            </li>
            <li class="nav-item">
           <Link to='/billing' class="nav-link" href="#"> Statement</Link>
            </li>
            <li class="nav-item">
         <Link to='/report' class="nav-link" href="#">Outstanding Report</Link>
            </li>
            <li class="nav-item">
           <Link to='/setup' class="nav-link" href="#"> Event Charges</Link>
            </li>
            <li class="nav-item">
           <Link class="nav-link" href="#">Past Entries</Link>
            </li>
          </ul>
        </div>
      </nav>
      <p className="table-header">Previous Meter Reading Date of 510319</p>
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
