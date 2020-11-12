import React from 'react'
import '../styles/Header.css'
import { Link } from "gatsby"
import nubeFondo from '../images/nubeFondo.png'
import Venado from '../images/venado.png'
// import Logo from '../images/logo-happy-house-vector3.png'
import NavBar from  './navBar'




function Header() {
    return(
        <>
        <header>
        <NavBar/>

        <div className='header1'>

             <img src={nubeFondo}  alt='imagen' className='nube'/>
             <img src={nubeFondo}  alt='imagen' className='nube1'/>
             <img src={Venado}  alt='imagen' className='venado'/>
            
        </div>

        </header>
       </>
    )
}
export default Header;