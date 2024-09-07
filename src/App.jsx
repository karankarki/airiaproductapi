// App.js
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';


const App = () => {
  return (

      <BrowserRouter>
        <Routes>

     
          <Route  path="/" element={<Home/>} />
          <Route path='/product/:title' element={<SingleProduct/>}/>
          

          </Routes>
       
      </BrowserRouter>
   
  );
};

export default App;