import React from 'react'
import "./style.css"

import iconAws from './img/Aws.png'
import iconGolang from './img/Golang.png'
import iconNodejs from './img/Nodejs.png'
import iconPython from './img/Python.png'
import iconReact from './img/React.png' 
import Solution from './img/solucao.png'
import Technology from './img/tecnologia.png'

export default function Technologies() {

    const techs = [
        { icon: iconAws },
        { icon: iconGolang },
        { icon: iconNodejs },
        { icon: iconPython },
        { icon: iconReact },


    ]
    return (
        <section id="technologies">
           <div className="tech"></div>
        <div className="container-fluid aaa">
            <div className="row">
                <div className="col-md-12 mt-5 text-center ">
                
                    <img className="img-fluid mt-2" src={Technology}></img>
                    <br></br>
                    <img className="img-fluid mt-5" src={Solution}></img>
                </div>
                </div>
                <div className="container">
                    <div className="row mt-5 align-items-center">
                        {techs.map(item => {
                            return (
                            <div className="col-sm text-center mt-2 ml-2">
                                <div className="card box ml-2">
                                    <div className="card-body mt-5">
                                        <img className="img-fluid" src={item.icon}></img>
                                    </div>
                                </div>
                            </div>)
                        })}


                    </div>
                </div>

            
        </div>
        </section>

    )
}