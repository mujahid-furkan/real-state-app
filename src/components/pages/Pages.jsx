import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "../common/header/Header";
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Pricing from "../pricing/Pricing";
import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path='/' element={<Home />} />        
    <Route path='/about' element={<About />} />        
    <Route path='/services' element={<Services />} />        
    <Route path='/blog' element={<Blog />} />        
    <Route path='/pricing' element={<Pricing />} />        
    <Route path='/contact' element={<Contact />} />        
      
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  )
}

export default Pages;
