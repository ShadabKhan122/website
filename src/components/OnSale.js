import React from 'react'
import img1 from './50sale.png'
import img2 from './saleshoes.png'
function OnSale() {
  return (
    <div>
      <div className='onsale-main'>
        <p className='main-box'></p> 
        <div>
          <img className='saleoff' src={img1} alt='' width={250} height={150} />
          <img className='sale-shoes' src={img2} alt=''  width={750} height={530}/>
        </div>
        <p className=' onsale-cus nike-shoes'>NIKE SHOES</p>
        <p className=' onsale-cus let-do'>LET'S DO IT</p>
        <div className='link-onsale'>
          <p>Place order to</p>
          <p>www.nikeonline.com</p>
        </div>
        <p className='buy-onsale'>Buy Now</p>

      </div>
    </div>
  )
}

export default OnSale

