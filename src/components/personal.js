import React from 'react'
import '../styles/personal.css';
import Logo from '../images/first-person.jpg'
import rana from '../images/rana.png'
import ranaGrande from '../images/rana-vector.png'
import Jirafa from '../images/Jirafa-vector.png'


function Personal(){
    return(
        <section className="testimony">

         <div className="wave3" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave4">
             <path d="M-24.60,26.94 C149.21,110.81 271.49,-49.99 500.22,40.75 L500.00,0.00 L0.00,0.00 Z" className="wave5"></path></svg>
         </div>


        <div className="container">
            <h3 className="Encabezado"><span className='Encabezado-Nuestra'>Nuestra</span> Familia</h3>
            <p className="Encabezado"> </p>

            <div className="testimony-container">
                <div className="testimony__card">
                    <img src={Logo} className="testimony__img"/>
                    <div className="testimony__copy">
                        <i className='bx bxl-google testimony__logo'></i>
                        <div className="testimony__info">
                            <h3 className="testimony__name">Francisco Puleo </h3>
                            <p className="testimony__position">El mas pato de todos</p>
                        </div>
                    </div>
                </div>

                <div className="testimony__card">
                    <img src={Logo} className="testimony__img"/>
                    <div className="testimony__copy">
                        <i className='bx bxl-apple testimony__logo'></i>
                        <div className="testimony__info">
                            <h3 className="testimony__name">Andres García</h3>
                            <p className="testimony__position">Director de Apple México</p>
                        </div>
                    </div>
                </div>

                <div className="testimony__card">
                    <img src={Logo} className="testimony__img"/>
                    <div className="testimony__copy">
                        <i className='bx bxl-apple testimony__logo'></i>
                        <div className="testimony__info">
                            <h3 className="testimony__name">Carlas Paredes</h3>
                            <p className="testimony__position">Directora</p>
                        </div>
                    </div>
                </div>

                <img src={rana}  alt='imagen' className='rana' width="490px" height="300px"/>
                {/* <img src={ranaGrande}  alt='imagen' className='ranaGrande' width="300px" height="400px"/> */}
                {/* <img src={Jirafa}  alt='imagen' className='Jirafa' width="500px" height="500px"/> */}
            </div>
        </div>

        
    </section>
    )
}
export default Personal;