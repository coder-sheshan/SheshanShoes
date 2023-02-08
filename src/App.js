import React from 'react';
import Footer from './Components/Footer';
import General from './Components/General';
import Homeslide from './Components/Homeslide';
import './Designs/General.css';



const App = () => {
  return (
    <div>
      <Homeslide />
      <General />
      <Footer />
    </div>
  )
}

export default App
