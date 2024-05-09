import React from 'react'
import logo from "../images/Vector.png"


export default function Navbar() {
  return (
    <nav className="navbar">
        <img className='nav-logo' src={logo} alt="airbnb logo" />
    </nav>
  )
}
