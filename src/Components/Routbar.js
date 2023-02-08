import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Designs/Routbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Routbar = () => {
  const navigate = useNavigate()

  // document.addEventListener('DOMContentLoaded', function(){
  //   window.addEventListener('scroll', function(){
  //     if(window.scrollY > 180){
  //       document.getElementById('Rout').classList.add('fixed-top');
  //      let navbar_height = this.document.querySelector('.bar').offsetHeight;
  //       this.document.body.style.paddingTop = navbar_height + "px";
  //     } else {
  //       document.getElementById('Rout').classList.remove('fixed-top');
  //       document.body.style.paddingTop = '0';
  //     }
  //   })
  // });
  return (
    <div id='Rout'>
      {/* <div className='bar'> */}
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><h3><span>Sheshan</span>Shoes</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => {navigate('/')}}><h6>HOME</h6></Nav.Link>
            <Nav.Link onClick={() => {navigate('/adidas')}}><h6>ADIDAS</h6></Nav.Link>
            <Nav.Link onClick={() => {navigate('/nike')}}><h6>NIKE</h6></Nav.Link>
            <Nav.Link onClick={() => {navigate('/bata')}}><h6>BATA</h6></Nav.Link>
            <Nav.Link onClick={() => {navigate('/puma')}}><h6>PUMA</h6></Nav.Link>
            <Nav.Link onClick={() => {navigate('/reebok')}}><h6>REEBOK</h6></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <div className='cart-button'>
              <Button onClick={() => {navigate('/addcart')}}><FaShoppingCart /></Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* </div> */}
    </div>
  )
}

export default Routbar
