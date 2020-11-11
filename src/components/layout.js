
import React from "react"
import './layout.css'
import Header from "./Header"
import Main from "./main"
import Carousel from './Carousel'
import Personal from './personal'
import Portafolio from './Portafolio'
import Paralax from './paralax'
import Footer from './footer'



function Layout(){
  return(
    <div>
      <Header/>
      <Main/>
      <Carousel/>
      <Portafolio/>
      <Personal/>
      <Paralax/>
      <Footer/>
    </div>
    
  );
}
export default Layout;