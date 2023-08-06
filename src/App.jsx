import React from 'react'

import Header from './pages/header/Header';
import Navbar from './pages/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

const App = () => {
  return (
    <>
    <Header/>
    <Navbar/> 
    <About/>
   
    <Home/>
    
    <Contact/>
 
    </>
  )
}

export default App