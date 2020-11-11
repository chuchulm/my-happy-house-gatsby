import React from 'react'
import '../styles/main.css';
import FondoVerde from '../images/fondoVerde.jpg';
import elefante from '../images/elefante.png'
import video from '../images/videoHappyHouse.mp4';





function Main(){
    return(
        <>
        
        <section className="contenedor">
                   
                    <div className="sobre-nosotros">
                        
                            <video className="video-about-us"  autoplay controls loop audio>
                              <source src={video} type="video/mp4"></source>
                            </video>
                    </div>

                        <div className="contenido-textos">
                            <div className="contenido-texto">
                                <h3>My <span className='happy'>Happy</span> House</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illo blanditiis incidunt mollitia repudiandae recusandae beatae, itaque modi pariatur repellat eos, laborum facilis architecto quo, fugit voluptatum fuga vitae eveniet.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illo blanditiis incidunt mollitia repudiandae recusandae beatae, itaque modi pariatur repellat eos, laborum facilis architecto quo, fugit voluptatum fuga vitae eveniet.</p>
                            </div>
                        </div>

                        <img src={elefante}  alt='imagen' className='elefante' width="460px" height="250px"/>
                   

            <div className="wave" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave1">
                   <path d="M-15.01,43.71 C280.70,236.15 523.93,-117.14 549.32,207.53 L500.22,150.29 L-4.85,153.25 Z" className="wave2">
                   </path></svg>
            </div>
        </section>
                

        </>
                  
    )
}
export default Main;





/*












*/
