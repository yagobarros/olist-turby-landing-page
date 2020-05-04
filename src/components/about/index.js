import React from 'react'
import './style.css'



import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'

const imgs = [
    {id: 1, img: img1},
    {id: 2, img: img2},
    {id: 3, img: img3}
]

export default function About() {
return(
    <section id="about">
    <div className="container" id="content-tech">
        <div className="text-center mt-5">
        <h2 className="text-tittle">O QUE É </h2>
        <p className="text-desc">Sua plataforma automatizadora de respostas para clientes em MarketPlaces</p>
        </div>
        
        <div className="row align-items-center justify-content-center img-about">
            
            {imgs.map(img =>{
                return(
                    <div className="col-sm-4 text-center" key={img.id}>
                    <img src={img.img} className="img-fluid "></img>
                    </div>
                )
                
            })}
        </div>
    </div>
    </section>
)
}