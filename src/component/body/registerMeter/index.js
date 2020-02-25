import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Basicinfo from "./basicInfo";
import "../../../assets/CSS/registermeter.css";
import Landinfo from "./landinfo";
import Others from "./others";
export default function Registermeter() {
  return (
    <div className="container">
     
    <h2 className='water-header'>Register Meter</h2>
  <div className='nav-registermeter'>
     <a href='/registermeter/basicinfo'>Basic Info</a>
      <a href='/registermeter/landinfo'>Land Info</a>
      <a href='/registermeter/others'>Others</a>
</div>
      <Router>
        <Route path='/registermeter/basicinfo' component={Basicinfo}/>
        <Route path='/registermeter/landinfo' component={Landinfo}/>
        <Route path='/registermeter/others' component={Others}/>
      </Router>
  
       
    
    </div>
  )
}
