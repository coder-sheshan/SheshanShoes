import React from 'react';
import '../Designs/Footer.css';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';



const Footer = () => {

    return (
        <div id='Footer'>
            <div className='container'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-2 col-md-2 align-items-stretch'>
                        <h3><span>Sheshan</span>Shoes <br></br>
                            <a href="https://michalsnik.github.io/aos/" target="_blank" ><FaTwitter /></a><br></br>
                            <a href="https://reactjs.org/" target="_blank" ><FaFacebook /></a><br></br>
                            <a href="https://react-icons.github.io/react-icons/search?q=youtube" target="_blank" ><FaInstagram /></a><br></br>
                            <a href="https://www.youtube.com/watch?v=-8i3p4HbbXA" target="_blank" ><FaYoutube /></a>
                        </h3>
                    </div>
                    <div className='col-2 col-md-2 align-items-stretch'>
                        <h6>Products</h6>
                        <p>Home</p>
                        <p>Adidas</p>
                        <p>Nike</p>
                        <p>Bata</p>
                        <p>Puma</p>
                        <p>Reebok</p>
                    </div>
                    <div className='col-2 col-md-2 align-items-stretch'>
                        <h6>Get Help</h6>
                        <p>Order Status</p>
                        <p>Delivery</p>
                        <p>Returns</p>
                        <p>Payment Optins</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='col-2 col-md-2 align-items-stretch'>
                        <h6>About</h6>
                        <p>News</p>
                        <p>Careers</p>
                        <p>Investors</p>
                        <p>Sustainbility</p>
                        <p>Phone Us</p>
                    </div>

                </div>
            </div>
            <div className='container-fluid'>
                <h3>Copyright © 2023. SheshanShoes. All Rights Reserved.</h3>
            </div>
        </div>
    )
}

export default Footer
