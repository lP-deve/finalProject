import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <>
   <header>
    <img src="/Combined Shape.svg" alt="logo" />
    

    <nav>
        <ul>
          <Link to="/home"><li>Home</li></Link> 
           <Link to="/proj1"><li>portfolio</li></Link>
           <Link to="/contact"><li>contact me</li></Link>
        </ul>
    </nav>
   </header>
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default Header