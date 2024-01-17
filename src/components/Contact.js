import React from 'react'

function Contact() {
    return (
        <div className='main-contact'>
            <h1 className='head-contact'>CONTACT US</h1>
            <p className='line'></p>

             <div className='sub-container-contact'>
                
                <div className='col-cus one-contact'><i className="fa-solid fa-mobile"></i>
                    PRODUCTS & ORDERS
                    <p className='box1-contact-line1'>1-8000-55-666 </p>
                    <h6 className='box1-contact-line2'>4 am - 11 pm PT</h6>
                    <h6 className='box1-contact-line3'>7 week a day</h6>
                    
                </div>
                <div className='col-cus two-contact'><i className="fa-solid fa-mobile"></i>
                    NRC,NTC & SWOOSH
                    <h6 className='box2-contact-line1'>1-5454-1656</h6>
                    <h6 className='box2-contact-line2' >5 am - 3 pm PT</h6>
                    <h6 className='box2-contact-line3'>Mon - Fri</h6>
                </div>
                <div className='col-cus three-contact'> <i className="fa-solid fa-mobile"></i>
                    COMPANY INFO & INQUIRIES
                    <h6 className='box3-contact-line1'>10-5210-520</h6>
                    <h6 className='box3-contact-line2' >11 am - 7 pm PT</h6>
                    <h6 className='box3-contact-line3'>Mon - Fri</h6>
                </div> 
                <div className='col-cus four-contact'><i className="fa-solid fa-comment-dots"></i>
                    PRODUCTS & ORDERS
                    <h6 className='box4-contact-line1'>CHAT WITH US</h6>
                    <h6 className='box4-contact-line2' >11 am - 7 pm PT</h6>
                    <h6 className='box4-contact-line3'>Mon - Fri</h6>
                </div> 
                <div className='col-cus five-contact'><i className="fa-solid fa-location-dot"></i>
                    STORE LOCATION
                    <h6 className='box4-contact-line1'>Find Nike retail store near you </h6>
                    
                </div> 

                
            </div>
        </div>
        
    )
}

export default Contact
