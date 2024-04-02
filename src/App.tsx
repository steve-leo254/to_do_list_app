import React from 'react';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import './App.css';
import AboutUs from './pages/AboutUs.tsx';
import Login from './pages/login.tsx';
import HomeComponent from './pages/index.tsx';
import Layout from "./components/Layout.tsx"
import ContactUs from './pages/Contact.tsx';
import LogoutPage from './pages/login.tsx';


function App() {
  
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route  element={<Layout />} >
        <Route index element ={<HomeComponent/>}/>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path='/logout' element={<LogoutPage/>}/>
      </Route>
    </Routes>
  );
};

export default App