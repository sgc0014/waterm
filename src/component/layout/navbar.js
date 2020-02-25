import React from 'react'
import '../../assets/CSS/navbar.css'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome'
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers'
import {faReceipt} from '@fortawesome/free-solid-svg-icons/faReceipt'
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser'
import {faCog} from '@fortawesome/free-solid-svg-icons/faCog'
import {faFileSignature} from '@fortawesome/free-solid-svg-icons/faFileSignature'
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars'
import {faHandshake} from '@fortawesome/free-solid-svg-icons/faHandshake'


export default function Navbar() {
    return (
        <nav class="navbar  navbar-expand-lg ">
        <a class="navbar-brand" href="#"><FontAwesomeIcon icon={faUser}/> Profile</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars}/>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav home-nav">
            <li class="nav-item ">
            <Link to='/home' class="nav-link" href="#">  <span><FontAwesomeIcon icon={faHome}/></span> Home </Link>
            </li>
            <li class="nav-item">
             <Link to='/customers' class="nav-link" href="#"><span><FontAwesomeIcon icon={faUsers}/></span> Customers</Link>
            </li>
            <li class="nav-item">
           <Link to='/billing' class="nav-link" href="#"> <span><FontAwesomeIcon icon={faReceipt}/></span> Billing</Link>
            </li>
            <li class="nav-item">
         <Link to='/report' class="nav-link" href="#">   <span><FontAwesomeIcon icon={faFileSignature}/></span> Report</Link>
            </li>
            <li class="nav-item">
           <Link to='/setup' class="nav-link" href="#"> <span><FontAwesomeIcon icon={faCog}/></span> Setup</Link>
            </li>
            <li class="nav-item">
           <Link class="nav-link" href="#"> <span><FontAwesomeIcon icon={faHandshake}/></span>  Help</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}
