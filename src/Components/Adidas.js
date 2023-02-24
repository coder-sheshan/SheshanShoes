import React, { useEffect, useState } from 'react';
import General from './General';
import '../Designs/Adidas.css';
import Button from 'react-bootstrap/esm/Button';
import Footer from './Footer';
import axios from 'axios';


const Adidas = () => {

 
  const [resData, setResData] = useState([{ images:[] }]);

  const myFun = (sample) => {

    let Hello = resData.findIndex(({id}) => id === sample)

  // if(Hello){
  //   setCart(resData.map((id) => id === sample ? 
  //   {...Hello, quantity : Hello.quantity + 1} : id)
  //   );
  // }  else {
  //   setCart([...resData, {...sample, quantity: 1}]);
  // }  
    let Kali = resData[Hello];

    return(
      // console.log(JSON.stringify(Kali.id, Kali.price))
      console.log(Kali)

    )

  }

  
  
  useEffect(() => {

    axios.get('https://api.escuelajs.co/api/v1/products/?categoryId=4')
  .then(function (response) {
    setResData(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
 
  }, []);
   
    
  return (
    <div id='Adidas'>
      <div className='container' data-aos="fade-up">
        <div className='row align-items-md-center  justify-content-around' data-aos="zoom-in" data-aos-delay="100">
          {resData?.map((data) => {
            return (
              <div className='col-2 col-md-4 align-items-stretch'>
                <img src={data?.images[0]} alt='adi shoe1'></img>
                <h5><span>{data?.price}</span></h5>
                <Button onClick={() => {myFun(data.id)}} variant="outline-primary" size="lg">Add Cart</Button>
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
