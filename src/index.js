import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Nike from './Components/Nike';
import Adidas from './Components/Adidas';
import Bata from './Components/Bata';
import Puma from './Components/Puma';
import Reebok from './Components/Reebok';
import Routbar from './Components/Routbar';





// import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter ,Routes, Route

} from "react-router-dom";
import Addcart from './Components/Addcart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routbar />
      <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/adidas" element={<Adidas />} />
          <Route exact path="/nike" element={<Nike />} />
          <Route exact path="/bata" element={<Bata />} />
          <Route exact path="/puma" element={<Puma />} />
          <Route exact path="/reebok" element={<Reebok />} />
          <Route exact path="/addcart" element={<Addcart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
