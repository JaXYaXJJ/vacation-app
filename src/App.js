import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import FilterPage from './components/FilterPage';
import Header from './components/Header';
import OpenPage from './components/OpenPage';
import Order from './components/Order';

function App() {
  return (
    <>
    
    <Header />
      
      <Routes>
        <Route path='/' element={<OpenPage />} />
        <Route path='/filterPage' element={<FilterPage />} />
        <Route path='/order' element={<Order />} />
      </Routes>
      
    </>
  );
}

export default App;
