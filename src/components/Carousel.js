import React, { useState } from 'react';
import '../styles/carousel.css'
import { UncontrolledCarousel } from 'reactstrap';
import img1 from '../images/myHouse1.png'
import img2 from '../images/myHouse2.jpg'
import img3 from '../images/myHouse3.jpg'
import oveja from '../images/oveja.png'





import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: img1,
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: img2,
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: img3,
    // caption: 'Slide 3'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        
      >
        <img src={item.src} alt={item.altText} className="carouselHouse1"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
 
    <>
     <div className='total'>

     <div className="wave6" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave7">
             <path d="M-24.60,26.94 C149.21,110.81 271.49,-49.99 500.22,40.75 L500.00,0.00 L0.00,0.00 Z" className="wave20"></path></svg>
         </div>

      <div><img src={oveja}  alt='imagen' className='oveja'/></div>

      <div >
       <h3 className="tituloCarousel">Ven a disfrutar<span className='VEN'> esta increible</span> Aventura</h3>
      </div>

    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="indicador"
      
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>

    </div>
    </>
  );

}

export default Example;

   