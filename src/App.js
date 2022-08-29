import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Order from './components/Order';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/order' element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
