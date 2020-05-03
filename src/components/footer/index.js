import React from 'react';
import './style.css'

import OlistTurbyFooter from './img/Olist Turby.png'
export default function Footer() {
    return (
        <footer className="page-footer mt-5" id="footer">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="text-center mt-2">
                        <img className="img-fluid mt-5" src={OlistTurbyFooter}></img>
                    </div>
                </div>
               
            </div>

        </footer>
    )
}