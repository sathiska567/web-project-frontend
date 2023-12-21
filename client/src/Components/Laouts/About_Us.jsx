import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import about_img from './images/about02.jpg'
import about_img_01 from './images/about03.jpg'
import join from './images/join.jpg'
import About_us_details from './About_us_details';

export default function Category() {
  return (
    <div>
      <div className='head'>
        <h1 className='head-h1'>ABOUT US</h1>
      </div>
      <br /><br /><br />

      <div>
           <Carousel id="carouselExampleControls" controls={true} className='carousel-section' >
          <Carousel.Item>
            <img className="d-block w-100" src={about_img} alt="Second slide"/>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={about_img_01} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={join} alt="First slide"/>
          </Carousel.Item>
        </Carousel>
      </div><br /><br /><br /><br /><br /><br /><br />

     
     <About_us_details />




    </div>
  );
}
