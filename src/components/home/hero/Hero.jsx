import React from "react"
import "./hero.css"
import {BiSearchAlt} from 'react-icons/bi'
import Heading from "../../common/Heading"
const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home' subtitle="Find new & featured property located in your local city"/>
        
        
        <form action="" className="flex">
          <div className="box">
            <span>City/Street</span>
            <input type="text" placeholder="Location"/>
          </div>

          <div className="box">
            <span>Property Type</span>
            <input type="text" placeholder="Property Type"/>
          </div>

          <div className="box">
            <span>Price Range</span>
            <input type="text" placeholder="Price Range"/>
          </div>
          <div className="box">
            <h4>Advance Filter</h4>
          </div>
          <button><BiSearchAlt size={20}/></button>
        </form>
        </div>
      </section>
    </>
  )
}

export default Hero
