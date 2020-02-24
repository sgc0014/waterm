import React from 'react'
import logo from '../../assets/images/logo.png'
export default function Header() {
    return (
        <div className="header">
            <div className="logo"><span><img style={{width:"162px",height:"auto"}} src={logo}/></span> <h5 style={{fontWeight:"700",textAlign:"center"}}>Paschim Kalikanagar Khanepani Upabhokta tatha Sarsafai Sanstha</h5></div>
            <hr/>
        </div>
    )
}
