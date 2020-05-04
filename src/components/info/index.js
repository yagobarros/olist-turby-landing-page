import React from 'react'
import './style.css'

import Ios from './img/disponivel-na-app-store-botao-1.png'
import Android from './img/disponivel-google-play-png-5.png'
import Smartphone from './img/5cb0633d80f2cf201a4c3253 1.png'
import OlistTurby from './img/OlistTurby.png'
import backgroud from './img/download2.png'
export default function Info() {
    return (

        <section id="info">
            <div className="container">
                        <div className="text-center">
                             <img className="img-fluid cuch" src={backgroud}></img>
                        </div>
                </div>
            <div className="container-fluid info">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-7">
                            <img className="img-fluid" src={OlistTurby}></img>
                        </div>

                        <div className="col-sm-2 smartphone">
                            <img src={Smartphone}></img>
                        </div>

                    </div>

                    <div className="row mt-5">
                        <div className="col-md-2 mt-2">
                            <img className="img-fluid" src={Ios} width="166.84px" height="height: 48px" ></img>
                        </div>
                        <div className="col-md-2 mt-2">
                        <img className="img-fluid" src={Android} width="166.84px" height="height: 48px"></img>

                        </div>
                    </div>
                </div>
                

            </div>
            <div className="row justify-content-end ol-md-5 ml-auto smartphone">
                <div className="col-12 mt-5 mr-5">

                </div>
            </div>

        </section>
    )
}