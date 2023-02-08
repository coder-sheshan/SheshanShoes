import React from 'react';
import { FaShippingFast, FaHeadphones, FaAmericanSignLanguageInterpreting } from 'react-icons/fa';

const General = () => {
  return (
    <div id='Geni'>
        
      <div class="container" data-aos="fade-up">

        <div class="row">

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box-1">
              <h4><span><FaShippingFast/></span> 100% Free Shipping</h4>
              <p class="description">We ship all our products for free as long as you buying within the USA.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box-2">
            <h4> <span><FaHeadphones/></span> 24/7 Support</h4>
              <p class="description">Our support team is extremely active, you will get response within 2 minutes.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box-3">
            <h4><span><FaAmericanSignLanguageInterpreting/></span> 30 Day Return</h4>
              <p class="description">Our 30 day return program is open from customers, just fill up a simple form.</p>
            </div>
          </div>

        </div>

      </div>
  
    </div>
  )
}

export default General
