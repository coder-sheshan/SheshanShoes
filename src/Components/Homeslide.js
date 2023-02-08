import React from 'react';
import '../Designs/Homeslide.css';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../Assets/slide1.jpg';
import Slide2 from '../Assets/slide2.jpg';
import Slide3 from '../Assets/slide3.jpg';
import Slide4 from '../Assets/slide4.jpg';
import Slide5 from '../Assets/slide5.jpg';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Homeslide = () => {

  const navigate = useNavigate()

  useEffect(() => {
    AOS.init();
  }, [ ])
  return (
    <section id='slide'>
      <div className='row'>
        <div className='container'>
        <Carousel variant="dark">
      <Carousel.Item>
        <img data-aos="zoom-in"
          className="d-block"
          src={Slide1}
          alt="First slide"
        />
        <Carousel.Caption data-aos="fade-right">
          <h5>Comfort in every step</h5>
          <div className='para'>
            <p>There are many reasons why you may want to create slogans for your shoes. These might include advertising your business or simply trying to understand what customers want when purchasing a pair of shoes.</p>
            <Button onClick={() => {navigate('/addcart')}} variant="outline-primary" size="lg">Buy a Shoe</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={Slide2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>For every walk of life</h5>
          <div className='para'>
            <p>There are many reasons why you may want to create slogans for your shoes. These might include advertising your business or simply trying to understand what customers want when purchasing a pair of shoes.</p>
            <Button onClick={() => {navigate('/addcart')}} variant="outline-primary" size="lg">Buy a Shoe</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={Slide3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Live full, walk free</h5>
          <div className='para'>
            <p>There are many reasons why you may want to create slogans for your shoes. These might include advertising your business or simply trying to understand what customers want when purchasing a pair of shoes.</p>
            <Button onClick={() => {navigate('/addcart')}} variant="outline-primary" size="lg">Buy a Shoe</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={Slide4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5>Get your Dream Shoes</h5>
          <div className='para'>
            <p>There are many reasons why you may want to create slogans for your shoes. These might include advertising your business or simply trying to understand what customers want when purchasing a pair of shoes.</p>
            <Button onClick={() => {navigate('/addcart')}} variant="outline-primary" size="lg">Buy a Shoe</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={Slide5}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h5>Shoes for the whole world</h5>
          <div className='para'>
            <p>There are many reasons why you may want to create slogans for your shoes. These might include advertising your business or simply trying to understand what customers want when purchasing a pair of shoes.</p>
            <Button onClick={() => {navigate('/addcart')}} variant="outline-primary" size="lg">Buy a Shoe</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Homeslide
