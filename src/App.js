import React from 'react'
import Menu from './components/menu'
import About from './components/about'
import Info from './components/info'
import Technologies from './components/technologies'
import Differrentials from './components/differentials'
import Footer from './components/footer'

import Equip from './components/equip'



import './global.css'


export default function App(){
    return(
        <div id="App">
            <Menu/>  
            <Info/>
            <About/>
            <Technologies/>
            <Differrentials/>
            <Equip/>
            <Footer/>
        </div>
    )
}