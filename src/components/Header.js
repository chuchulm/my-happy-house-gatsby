import React from 'react'
import '../styles/Header.css'
import imagenHeader from '../images/imagenHeader2.jpg'
import nubeFondo from '../images/nubeFondo.png'
import Venado from '../images/venado.png'
import NavBar from './navBar'



function Header() {
    return(
        <>
        <NavBar/>
        <div >
             <img src={imagenHeader} alt='imagen'  width="100%" height="750" className='header1'/>
             <img src={nubeFondo}  alt='imagen' className='nube' width="260px" height="150px"/>
             <img src={nubeFondo}  alt='imagen' className='nube1' width="260px" height="150px"/>
             <img src={Venado}  alt='imagen' className='venado' width="460px" height="250px"/>
        </div>
       </>
    )
}
export default Header;