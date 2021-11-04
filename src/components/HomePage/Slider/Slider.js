import React from 'react';
import './Slider.css';
import slider1 from '../../../img/slide/Dreams holydays/1.png';
import slider2 from '../../../img/slide/Dreams holydays/2.png';
import slider3 from '../../../img/slide/Dreams holydays/3.png';
import slider4 from '../../../img/slide/Dreams holydays/4.png';
import { Carousel } from 'react-bootstrap';
const Slider = () => {
    return (
  <>


<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 >Dream Holidays</h2>
      <h4>Get Out There for happy destination</h4>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider4}
      alt="First slide"
    />
    <Carousel.Caption>
    <h2 >Dream Holidays</h2>
      <h4>Get Out There for happy destination</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2 >Dream Holidays</h2>
      <h4>Get Out There for happy destination</h4>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h2 >Dream Holidays</h2>
      <h4>Get Out There for happy destination</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  </>
        
    );
};

export default Slider;