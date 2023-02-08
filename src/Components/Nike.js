import React from 'react';
import General from './General';
import '../Designs/Adidas.css';
import Button from 'react-bootstrap/esm/Button';
import Adi1 from '../Assets/adi1.jpg';
import Adi2 from '../Assets/adi2.jpg';
import Adi3 from '../Assets/adi3.jpg';
import Adi4 from '../Assets/adi4.jpg';
import Adi5 from '../Assets/adi5.jpg';
import Adi9 from '../Assets/adi9.jpg';
import Adi7 from '../Assets/adi7.jpg';
import Adi8 from '../Assets/adi8.jpg';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Nike = () => {
  const navigate = useNavigate()
  return (
    <div id='Nike'>
      <div className='container' data-aos="fade-up">
        <div className='row align-items-md-center  justify-content-around' data-aos="zoom-in" data-aos-delay="100">
          <div className='col-2 col-md-4 align-items-stretch'>
            <img src={Adi1} alt='adi shoe1'></img>
            <h5><span>1,999/-</span> only</h5>
            <Button onClick={() => { navigate('/addcart') }} variant="outline-primary" size="lg">Add Cart</Button>
          </div>
          <div className='col-2 col-md-4 align-items-stretch' data-aos="zoom-out" data-aos-delay="100">
            <img src={Adi2} alt='adi shoe2'></img>
            <h5><span>2,500/-</span> only</h5>
            <Button onClick={() => { navigate('/addcart') }} variant="outline-primary" size="lg">Add Cart</Button>
          </div>
          <div className='col-2 col-md-4 align-items-stretch' data-aos="zoom-out" data-aos-delay="100">
            <img src={Adi3} alt='adi shoe3'></img>
            <h5><span>3,000/-</span> only</h5>
            <Button onClick={() => { navigate('/addcart') }} variant="outline-primary" size="lg">Add Cart</Button>
          </div>
          <div className='col-2 col-md-4 align-items-stretch' data-aos="zoom-out" data-aos-delay="100">
            <img src={Adi4} alt='adi shoe4'></img>
            <h5><span>3,500/-</span> only</h5>
            <Button onClick={() => { navigate('/addcart') }} variant="outline-primary" size="lg">Add Cart</Button>
          </div>
        </div>

        <div className='row align-items-md-center  justify-content-around'>
          <div className='col-2 col-md-4 align-items-stretch' data-aos="zoom-out" data-aos-delay="100">
            <img src={Adi5} alt='adi shoe5'></img>
            <h5><span>4,200/-</span> only</h5>
            <Button onClick={() => { navigate('/addcart') }} variant="outline-primary" size="lg">Add Cart</Button>
          </div>
          <div className='col-2 col-md-4 align-items-stretch' data-aos="zoom-out" data-aos-delay="100">
            <img src={Adi7} alt='adi shoe6'></img>
            <h5><span>5,500/-</span> only</h5>
            <Button onClick={() => { navigate('/addcart') }} variant="outline-primary" size="lg">Add Cart</Button></div>
          <div className='col-2 col-md-4 align-items-stretch' data-aos="zoom-out" data-aos-delay="100">
            <img src={Adi8} alt='adi shoe7'></img>
            <h5><span>6,300/-</span> only</h5>
            <Button onClick={() => { navigate('/addcart') }} variant="outline-primary" size="lg">Add Cart</Button>
          </div>
          <div className='col-2 col-md-4 align-items-stretch' data-aos="zoom-out" data-aos-delay="100">
            <img src={Adi9} alt='adi shoe8'></img>
            <h5><span>7,600/-</span> only</h5>
            <Button onClick={() => { navigate('/addcart') }} variant="outline-primary" size="lg">Add Cart</Button>
          </div>
        </div>
      </div>
      <General />
      <Footer />
    </div>
  )
}

export default Nike
