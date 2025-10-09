import React from 'react'
import './Portfolio.css'
import Button from './Button'
import { Link } from 'react-router-dom'
const Portfolio = (props) => {
    return (
        <>
            <section>

                <div className="items" id='display'>
                    <img src={props.image} alt="project" />
                    <div className="description">
                        <div className="line"></div>
                        <h2>{props.name}</h2>
                        <p>{props.text}</p>
                        <Link to='/details/1'> <Button /> </Link>
                        <div className="line"></div>
                    </div>
                </div>

                <div className="items" id='displayImg'>
                    <div className="description">
                        <div className="line"></div>
                        <h2>{props.name2}</h2>
                        <p>{props.text2}</p>
                        <Link to='/details/2'><Button /></Link>
                        <div className="line"></div>
                    </div>
                    <img src={props.image2} alt="project" />
                </div>


                <div className="items" id='display'>
                    <img id='img' src={props.image3} alt="project" />
                    <div className="description">
                        <div className="line"></div>
                        <h2>{props.name3}</h2>
                        <p>{props.text3}</p>
                        <Link to='/details/3'> <Button /></Link>
                        <div className="line"></div>
                    </div>

                </div>

                <div className="items" id='displayImg'>
                    <div className="description">
                        <div className="line"></div>
                        <h2>{props.name5}</h2>
                        <p>{props.text5}</p>
                        <Link to='/details/4'> <Button /></Link>
                        <div className="line"></div>
                    </div>
                    <img src={props.image5} alt="project" />
                </div>
            </section>

            <section>
                <div className="align" id='space'>
                    <div className="question"><p>Interested in doing a project together?</p></div>
                    <div className="lineLonger"></div>
                     <Link to='/contact'> <button>contact me</button></Link>
                </div>

            </section>

        </>
    )
}

export default Portfolio