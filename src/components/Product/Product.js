import React from 'react'; 
 import './Product.css';

function Product() {
  return (
    <div className='container text-center'>
    <h1 className='text-center heade'>My Smart basket</h1>
    <hr/>
     <div className='row'>
     <div className='product'>
     <div className='product-thumb'>
     <a href='#'><img src="https://www.bigbasket.com/media/uploads/p/s/10000148_30-fresho-onion.jpg" aly="#"/></a> 
     </div>
     <div className='product-body'>
     <div className='title'>
     <hr/>
     <h5>Onion</h5>
     </div>
     <div className='price'>
     <span> 1Kg - Rs.37.00</span>
     </div>
     <div className='footer'>
     <div className='btn'>
     <a href='#' className='btn-custom-primary'>Add <i class="biiiiii bi-basket-fill"></i></a>
      
     </div>
     </div>
     </div>
     </div>

     <div className='product'>
     <div className='product-thumb'>
     <a href='#'><img src="https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg" aly="#"/></a> 
     </div>
     <div className='product-body'>
     <div className='title'>
     <hr/>
     <h5>Tomato</h5>
     </div>
     <div className='price'>
     <span> 1Kg - Rs. 26.00</span>
     </div>
     <div className='footer'>
     <div className='btn'>
     <a href='#' className='btn-custom-primary'>Add <i class="biiiiii bi-basket-fill"></i></a>
     </div>
     </div>
     </div>
     </div>
     <div className='product'>
     <div className='product-thumb'>
     <a href='#'><img src="https://www.bigbasket.com/media/uploads/p/s/40048457_9-fresho-potato-new-crop.jpg" aly="#"/></a> 
     </div>
     <div className='product-body'>
     <div className='title'>
     <hr/>
     <h5> Potato</h5>
     </div>
     <div className='price'>
     <span> 1Kg - Rs. 42.00</span>
     </div>
     <div className='footer'>
     <div className='btn'>
     <a href='#' className='btn-custom-primary'>Add <i class="biiiiii bi-basket-fill"></i></a>
      
     </div>
     </div>
     </div>
     </div>

     <div className='product'>
     <div className='product-thumb'>
     <a href='#'><img src="https://www.bigbasket.com/media/uploads/p/s/126906_8-aashirvaad-atta-whole-wheat.jpg" aly="#"/></a> 
     </div>
     <div className='product-body'>
     <div className='title'>
     <hr/>
     <h5>  Whole Wheat</h5>
     </div>
     <div className='price'>
     <span> 10Kg pouch - Rs. 476.00</span>
     </div>
     <div className='footer'>
     <div className='btn'>
     <a href='#' className='btn-custom-primary'>Add <i class="biiiiii bi-basket-fill"></i></a>
      
     </div>
     </div>
     </div>
     </div>

     <div className='product'>
     <div className='product-thumb'>
     <a href='#'><img src="https://www.bigbasket.com/media/uploads/p/s/40089742_2-fresho-beans-haricot.jpg" aly="#"/></a> 
     </div>
     <div className='product-body'>
     <div className='title'>
     <hr/>
     <h5> Beans</h5>
     </div>
     <div className='price'>
     <span> 1Kg - Rs.34.00</span>
     </div>
     <div className='footer'>
     <div className='btn'>
     <a href='#' className='btn-custom-primary'>Add <i class="biiiiii bi-basket-fill"></i></a>
      
     </div>
     </div>
     </div>
     </div>

     </div>
    </div>
  )
}

export default Product