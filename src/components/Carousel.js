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
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: img2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: img3,
    caption: 'Slide 3'
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
        <img src={item.src} alt={item.altText} width="90%" height="650px" className="carouselHouse1"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
 
    <>
     <div className='total'>

      <div><img src={oveja}  alt='imagen' className='oveja' width="460px" height="250px"/></div>

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

   