import React from 'react';
import './App.css';
import HomeComponent from './Pages/index.tsx';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs.tsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App