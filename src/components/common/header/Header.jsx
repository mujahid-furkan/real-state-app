import React from "react"
import "./header.css";
import {Link} from 'react-router-dom'
import {nav} from '../../data/Data'
import logo from './logo.png'
import {FaSignOutAlt,FaTimes} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react";
const Header = () => {
  const [navList,setNavList]=useState(false)


  return (
    <>
      <header>
       <div className="container flex">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="nav">
                <ul className={navList ? "small":"flex"}>
                  {
                    nav.map((item,index)=>(
                      <li key={index} onClick={()=>setNavList(false)}>
                    <Link to={item.path}>{item.text}</Link>
                      </li>
                    ))
                  }
                </ul>
            </div>
            <div className="button flex">
              <h4>
                <span>2</span> My List
              </h4>
              <button className="btn1 flex">
              <span ><FaSignOutAlt size={18}/></span> Sign In
              </button>
            </div>
            <div className="toggole">
              <button onClick={()=>setNavList(!navList)}>
             {
              navList?  <FaTimes size={18} color='white'/> : <AiOutlineMenu size={18} color='white'/> 
             }
              </button>
            </div>
       </div>
      </header>
    </>
  )
}

export default Header;
