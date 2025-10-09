
import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <>
  <footer>
  <div className="footerItems">
    <img src="" alt="" />
    <ul>
        <Link to='/home'><li>Home</li></Link>
       <Link to='/proj1'> <li>Portfolio</li></Link>
      <Link to="/contact">  <li>Contact me</li></Link>
    </ul>
  </div>
  <div className="socials">
    <img src="/Path.svg" alt="github" />
    <img src="/Path(1).svg" alt="twitter" />
    <img src="/Shape.svg" alt="linkden" />
  </div>

  </footer>
   
   
   </>
  )
}

export default Footer