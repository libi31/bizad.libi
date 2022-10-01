import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BizAd from './components/BizAd';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
      <>
          <Header name="BizAd" />

          <Routes>
              <Route path='/' element={<BizAd />} />
              <Route path='/Services' element={<Services />} />
              <Route path='/About' element={<About />} />
              <Route path='/About' element={"button"} />
          </Routes>
      </>
  );
}

export default App;
