import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
  <>
  
  
  <section className='section'>
    <img src="/Bitmap@2x.jpg" alt="image" />
    <div className="info">
      <h2>Hey, I’m Alex Spencer and I love building beautiful websites</h2>
       <div className="btn"><div className="icon"><img src="/Group 3.svg" alt="icon" /></div><button>about me</button></div>
    </div>
  </section>

  <section className='group'>
   <img id='person' src="/Group 5.jpg" alt="" />

    <div className="aboutPerson">
     <div className="line"></div>
     <h2>About Me</h2>
     <p>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
     <Link to='/proj1'><button>go to portfolio</button></Link>
     <div className="line"></div>
    </div>

  </section>

  <section>
    <div className="align">
    <div className="question"><p>Interested in doing a project together?</p></div>
    <div className="lineLonger"></div>
    <Link to='/contact'> <button>contact me</button></Link>
    </div> 

  </section>
  
  
  
  
  
  
  </>
  )
}

export default Home