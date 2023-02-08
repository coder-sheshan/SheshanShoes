import React, { useEffect, useState } from 'react';
import General from './General';
import '../Designs/Adidas.css';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';

const Adidas = () => {
  
const [resData ,setResData] = useState([{image:"."},{image:"1"},{image:"1"}])
// Make a request for a user with a given ID
axios.get('https://api.escuelajs.co/api/v1/categories')
  .then(function (response) {
    // handle success
    setResData(response.data)
    // console.log(response.data[3].image);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  useEffect(() => {
    console.log(resData[3]?.image)
  },[resData]);

  const navigate = useNavigate()
  return (
    <div id='Adidas'>

      <div className='container' data-aos="fade-up">
        <div className='row align-items-md-center  justify-content-around' data-aos="zoom-in" data-aos-delay="100">
          {resData?.map((dat) => {
            return(
              <div className='col-2 col-md-4 align-items-stretch'>
              <img src={dat?.image} alt='adi shoe1'></img>
              <h5><span>1,999/-</span> only</h5>
              <Button onClick={() => { navigate('/addcart') }} variant="outline-primary" size="lg">Add Cart</Button>
            </div>
            )

          })} 

        </div>


      </div>
      <General />
      <Footer />
    </div>
  )
}

export default Adidas
