import React from 'react'
import '../styles/navBar.css'
import { Link } from "gatsby"
import Logo from '../images/logo-happy-house-vector3.png'
// import facebook from '../images/facebook.png'
// import instagram from '../images/instagram.png'
// import whatsapp from '../images/whatsapp.png'


function NavBar(){
    return(
        <div className="container2">
              
        
       

        <div >
            <nav className=" navcabecera ">
            <div>
           <img src={Logo} alt="" className="logo"></img>
        </div>
            
              <div><Link to="/" className='nav-link active navColor' >Inicio</Link></div>
              <div><Link to="/" className='nav-link navColor'>Blog</Link></div>
              <div><Link to="/" className='nav-link navColor'>Contacto</Link></div>
            </nav>
        </div>

      

        


  
        </div>

    )
}
export default NavBar;