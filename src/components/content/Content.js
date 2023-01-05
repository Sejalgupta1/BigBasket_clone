 
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './content.css';

function Content() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <div> 
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.bigbasket.com/media/uploads/banner_images/hp_c_YXTT6571_460_1jan23.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.bigbasket.com/media/uploads/banner_images/hp-EP_Bigs_460px-020122-020122.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.bigbasket.com/media/uploads/banner_images/hp-m-gm_EPbanner_460px-020122.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
    
  <div className='items m-3'>
  <div className='container'>
  <div className='row'>
  <div className='col-md-2 col-sm-12 top'>
  <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_01.png" alt='#'/>
  </div>
  <div className='col-md-2 col-sm-12 top'>
  <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_02.png" alt='#'/>
  </div>
  <div className='col-md-2 col-sm-12 top'>
  <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_03.png" alt='#'/>
  </div>
  <div className='col-md-2 col-sm-12 top'>
  <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_04.png" alt='#'/>
  </div>
  <div className='col-md-2 col-sm-12 top'>
  <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_05.png" alt='#'/>
  </div>
   <div className='col-md-2 col-sm-12 top'>
  <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251122_06.png" alt='#'/>
  </div>
  </div>
  </div>  
  </div>
    </div>
  )
}

export default Content;

 