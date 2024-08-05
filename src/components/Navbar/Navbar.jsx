import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [menu,setMenu]=useState("home") 

    return (
    <div className='nav'>
      <img src="https://img.freepik.com/free-vector/train-metro-front-view-subway-locomotive_107791-2840.jpg" className='icon'/>
      <h3 className='nav-head'>Trainzz</h3>
      <ul className='nav-middle'>
        <li onClick={()=>setMenu("home")} className={menu ==="home" ?'nav-item active':"nav-item"}>Home</li>
        <li onClick={()=>setMenu("trains")}className={menu ==="trains" ?'nav-item active':"nav-item"}>Trains</li>
        <li onClick={()=>setMenu("mobile")}className={menu ==="mobile" ?'nav-item active':"nav-item"}>Mobile App</li>
        <li onClick={()=>setMenu("contact")} className={menu ==="contact" ?'nav-item active':"nav-item"}>Contact US</li>
      </ul>
      <button className='sign-in-button'>Sign In</button>
    </div>
  )
}

export default Navbar
