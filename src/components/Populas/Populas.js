 
import "./Populas.css";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Populas() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <div className='container'>
    <h1 className='text-center m-5'>Most Poplur</h1>
    <hr/>
    <div className='items'>
  <div className='container'>
  <div className='row'>
  <div className='col-md-3 col-sm-12 pops'>
  <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_winter-mostpopularStorefront_m_480_251222_01.jpg' alt="#"/>
  </div>
  <div className='col-md-3 col-sm-12 pops'>
  <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_stationy-mostpopularStorefront_m_480_251222_02.jpg' alt="#"/>
  </div>
  <div className='col-md-3 col-sm-12 pops'>
  <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_winter-loc-mostpopularStorefront_m_480_251222_03.jpg' alt="#"/>
  </div>
  <div className='col-md-3 col-sm-12 pops'>
  <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/52baa9db-3a18-48de-9d19-31ded0c30604/hp_say-mostpopularStorefront_m_480_251222_04.jpg' alt="#"/>
  </div>
  
  </div>
  </div>  
  </div>


  <h1 className='text-center m-5'>Top Offers</h1>
  <hr/>
  <div className='items'>
<div className='container'>
<div className='row'>
<div className='col-md-3 col-sm-12 pops'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_dow-topoffersStorefront_m_480_251222_01.jpg' alt="#"/>
</div>
<div className='col-md-3 col-sm-12 pops'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_big-packs-topoffersStorefront_m_480_251222_02.jpg' alt="#"/>
</div>
<div className='col-md-3 col-sm-12 pops'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_combos-topoffersStorefront_m_480_251222_03.jpg' alt="#"/>
</div>
<div className='col-md-3 col-sm-12 pops'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/eae9b0cd-6588-4f6c-9204-a9c0c578a38f/hp_30-corner-topoffersStorefront_m_480_251222_04.jpg' alt="#"/>
</div>
</div>
</div>  
</div>

<h1 className='text-center m-5'>Fruits & Vegetables</h1>
<hr/>
<div className='items'>
<div className='container'>
<div className='row'>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_organic-fnc-fnv_Storefront_m_251222_01.jpg' alt="#"/>
</div>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_fresh-fruits-fnv_Storefront_m_251222_02.jpg' alt="#"/>
</div>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_fresh-vegetables-fnv_Storefront_m_251222_03.jpg' alt="#"/>
</div>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_cuts-sprouts-fnv_Storefront_m_251222_04.jpg' alt="#"/>
</div>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_exotic-fruits-fnv_Storefront_m_251222_05.jpg' alt="#"/>
</div>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/ed8bac1c-1a43-4a1b-837f-6ab9c9058268/hp_herbs-seasonings-fnv_Storefront_m_251222_06.jpg' alt="#"/>
</div>
</div>
</div>  
</div>


<h1 className='text-center m-5'> Your Daily Staples</h1>
<hr/>
<div className='items'>
<div className='container'>
<div className='row'>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_atta-flour-staplesStorefront_m_480_251222_01.jpg' alt="#"/>
</div>
<div className='col-md-2  col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_rice-staplesStorefront_m_480_251222_02.jpg' alt="#"/>
</div>
<div className='col-md-2  col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_dals-pulses-staplesStorefront_m_480_251222_03.jpg' alt="#"/>
</div>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_cooking-oils-staplesStorefront_m_480_251222_04.jpg' alt="#"/>
</div>
<div className='col-md-2  col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_dry-fruits-staplesStorefront_m_480_251222_05.jpg' alt="#"/>
</div>
<div className='col-md-2  col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/d9f84366-1b86-4c62-ac86-56d6a33da6b3/hp_salt-staplesStorefront_m_480_251222_06.jpg' alt="#"/>
</div>
</div>
</div>  
</div>

<div className="m-3">
<Carousel activeIndex={index} onSelect={handleSelect}>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_251222_400.jpg"
    alt="First slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_251222_400.jpg"
    alt="Second slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_251222_400.jpg"
    alt="Third slide"
  />
</Carousel.Item>
</Carousel>
</div>


<h1 className='text-center m-5'>Brand Store</h1>
<hr/>
<div className='items'>
<div className='container'>
<div className='row'>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_01.jpg' alt="#"/>
</div>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_02.jpg' alt="#"/>
</div>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_03.jpg' alt="#"/>
</div>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_04.jpg' alt="#"/>
</div>
<div className='col-md-2 col-sm-12 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_05.jpg' alt="#"/>
</div>
<div className='col-md-2 pop'>
<img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7b298a48-7c3d-4120-a032-4d45c2a89673/14d11349-1c62-4803-be77-15a874fe6a4b/hp_brandStorefront_m_480_251222_06.jpg' alt="#"/>
</div>
</div>
</div>  
</div>
<div className="text-center">
<h4>Featured Recipes</h4>
<hr/>
<img style = {{width:"100%"}}src="https://www.bigbasket.com/media/uploads/banner_images/hp_bbw_c_400_web_wellness_banner_dec30_02012023.jpg" alt="#"/>
</div>

    </div>
   
  )
}

export default Populas;

 