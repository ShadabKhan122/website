import React from 'react'
import storeimg1 from './store1.png'
import img1 from './img2store.png'
import img2 from './new.png'
function Store() {
  return (
    <div className='store-main'>
      <div>
          <p className='nav-store'>NEWFEATURE / MEN / WOMEN / KIDS</p>
        
        <div>
          <p className='store-box'></p>
          <div>
            <p className='store-submain'></p>
            <p className='line1-store'></p>
            <p className='line2-store'></p>
            <p className='circle-store'></p>
          </div>
          <div>
            <span className='span-store'>NIKE - SNEAKERS</span>
            <p className='shopnow-store'>Shop Now</p>
            <span className='nike-logo-store'> AIR FORCE 1
            </span>
            <p className='discover-blog'>Discover Your's Style Of 2024 with NIKE</p>
            <img className='store-discoverimg' src={storeimg1} alt='' />
            <p className='line3-store'></p>
            <p className='link-store'>click to visit site</p>
            <img className='new-storeimg' src={img2} alt='' /> 
            <p className='logo-store'><i className="fa-solid fa-chevron-right"></i></p>
            <img className='image-store' src={img1} alt='' width={650} height={650} />
            <p className='mcqueen'>NIKE MCQUEEN</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Store
