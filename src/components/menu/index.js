import React from 'react'
import './style.css'
import {Link, animateScroll as scroll } from "react-scroll";


import OlistTurbyLogo from './img/Olist Turby (1).png'

export default function Menu() {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg mb-5 navbar-dark justify-content-between menu">
                <button className="navbar-toggler justify-content-end" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    
                </button>
                
                <Link  className="navbar-brand logo menu-option" 
                activeClass="active"
                to="info"
                spy={true}
                smooth={true}
                offset={-50}
                duration= {500}>
                <img src={OlistTurbyLogo}/>
                </Link>

                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                    
                        <form className="form-inline menu-form">
                            <ul className="navbar-nav menu-ul">
                                <li className="nav-item">
                                    <Link className="nav-link menu-option mr-sm-4" 
                                        activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration= {750}>O que é
                                        </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-option mr-sm-4"
                                        activeClass="active"
                                        to="technologies"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration= {750}>
                                        Tecnologias utilizadas
                                        </Link>
                                    
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-option mr-sm-4"
                                        activeClass="active"
                                        to="Differenteials"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration= {750}>
                                        Diferenciais
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-option mr-sm-4"
                                        activeClass="active"
                                        to="Equip"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration= {750}>
                                        Equipe
                                    </Link>
                                </li>
                            </ul>
                        </form>
                </div>
            </nav>  
        </div>
        
    )

}
