import React from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>


      <section className='section'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          className="hero-slider"
        >
          <SwiperSlide>
            <img src="/swiper.jpeg" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/swiper4.jpeg" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/swiper3.jpeg" alt="Slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Bitmap@2x.jpg" alt="Slide 4" />
          </SwiperSlide>
        </Swiper>


        <div className="info">
          <h2>Hey, I’m Alex Spencer and I love building beautiful websites</h2>
          <button className="icon" onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}><img src="/Group 3.svg" alt="icon" />
            about me
          </button>
        </div>
      </section>

      <section className='group' id='about'>
        <img id='person' src="./download.jpeg" alt="" />

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