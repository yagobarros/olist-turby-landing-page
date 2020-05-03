import React from 'react'
import './style.css'
import TextDif from './img/textdiferencias.png'
import MaskGroup from './img/MaskGroup.png'

export default function differentials() {
    return (
        <section id="Differenteials">

            <div className="container-fluid" id="content-backgroud">
                <div className="container">
                        <div className="text-center">
                             <img className="img-fluid mask" src={MaskGroup}></img>
                        </div>
                </div>
                <div className="row mt-5 ml-5">
                    <picture className="col-md-6 mt-2">
                        <p className="text-center">
                             <img className="img-fluid mt-5" src={TextDif}></img>
                        </p>
                    </picture>

                </div>

            </div>
        
        </section>
    )
}