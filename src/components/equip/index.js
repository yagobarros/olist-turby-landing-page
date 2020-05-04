import React from 'react'
import Users from './equip_users'
import EQUIPE from './img/EQUIPE.png'
import Text from './img/text.png'



import './style.css'
export default function Equip() {
    return (
        <section id="Equip">
            <div className="container-fluid">
            
                    <div className="text-center mt-3">
                        <img className="img-fluid mt-2" src={EQUIPE}></img>
                        <br />
                        <img className="img-fluid mt-4" src={Text}></img>
                    </div>
   
                <div className="container">
                    <div className="row mt-5 align-items-center">
                        {Users.map(user => {
                            return (

                                <div className="col-md ml-4">
                                    <a href={user.link}>
                                        <div className="card user-box">
                                            <img className="img-fluid" src={user.photo} />
                                            
                                        </div>
                                        <div className="card-body text-center">
                                            <img className="img-fluid text-center" src={user.name} />
                                            <br />
                                            <div className="text-center mt-1">
                                                <img className="img-fluid text-center" src={user.stack} />
                                            </div>
                                            <hr />
                                        </div> 
                                    </a>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>

        </section>
    )
}