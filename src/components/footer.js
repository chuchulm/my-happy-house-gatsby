import React from 'react'
import '../styles/footer.css'



function Footer(){
    return(
        
        <div className="footer">
            <div className="contenedor-footer">
                 <div className="content-foo">
                   <h4>Email</h4>
                   <p>myhappyhouse@gmail.com</p>
                 </div>
              <div className="content-foo">
                  <h4>Telefono</h4>
                  <p>0414-0879187</p>
              </div>
              <div className="content-foo">
                 <h4>location</h4>
                 <p>chile</p>
              </div>
            </div>
                 <h2 className="titulo-final">&copy; MY-HAPPY-HOUSE</h2>
        </div>
    ) 
    
}
export default Footer;