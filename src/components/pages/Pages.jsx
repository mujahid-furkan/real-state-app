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
    <Route exact path='/home' element={<Home />} />        
    <Route exact path='/about' element={<About />} />        
    <Route exact path='/services' element={<Services />} />        
    <Route exact path='/blog' element={<Blog />} />        
    <Route exact path='/pricing' element={<Pricing />} />        
    <Route exact path='/contact' element={<Contact />} />        
      
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  )
}

export default Pages;
