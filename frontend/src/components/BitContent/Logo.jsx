import React from 'react'
import logo from '../../assets/logo.png'; 
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
            <div className="flex items-center gap-2">
  {/* Logo Image */}
  <img
    src={logo} // <-- replace with your logo path
    alt="FushionTech Logo"
    className="w-10 h-10 md:w-12 md:h-12 object-contain"
  />

  <div>
    <h1 className="text-lg md:text-xl  font-bold leading-none font-Poppins">Fushion</h1>
    <p className="text-sm md:text-base  font-Poppins font-bold -mt-1">Tech.</p>
  </div>
</div>
    </Link>
  )
}

export default Logo
