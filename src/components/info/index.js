import React from 'react'
import './style.css'

import Ios from './img/disponivel-na-app-store-botao-1.png'
import Android from './img/disponivel-google-play-png-5.png'
import Smartphone from './img/5cb0633d80f2cf201a4c3253 1.png'
import OlistTurby from './img/OlistTurby.png'
export default function Info() {
return(
    
    <section id="info">
    <div className="container-fluid backgroud-info">
        
        <div className="info col-md-12">
        <div className="ml-5 col-6">
        <img className="img-fluid" src={OlistTurby}></img>
           
             {/* the link is to the application*/}
            <div className="row mt-4">       
                <a href="#"><img className="img-fluid ml-2 mt-2"src={Ios} width="166.84px" height="height: 48px"></img></a>  
                <a href="#"><img className="img-fluid ml-2 mt-2"src={Android} width="166.84px" height="height: 48px"></img></a>
            </div> 

        
        </div>
            <div className="row justify-content-end ol-md-5 ml-auto smartphone">
                <div className="col-12 mt-5 mr-5">
                    <img className=""src={Smartphone}></img>
                </div>
            </div>
        </div>
    
    </div>
    </section>
)
}