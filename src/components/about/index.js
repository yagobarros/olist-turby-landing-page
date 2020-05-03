import React from 'react'
import './style.css'
import ImgAbout from './img/O que é.png'

export default function About() {
return(
    <section id="about" className="mb-5">
    <div className="container">
        <div className="row">
            <div className="col align-self-center mt-5">
                <img className="img-fluid mt-2" src={ImgAbout}></img>
            </div>
        </div>
    </div>
    </section>
)
}