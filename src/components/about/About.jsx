import React from "react"
import Back from "../common/Back"
import "./about.css"
import img from '../images/about.jpg'
import Heading from "../common/Heading"
import rightImg from './immio.jpg'
const About = () => {
  return (
    <>
      <section className='about'>
      <Back name='About us' title='About Us - Who We Are?' cover={img}/>
      <div className="container flex mtop">
      <div className="left row">
        <Heading title='Our Agency Story' subtitle='Check out our company srory and wrk peocess'/>      
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, ex harum voluptatibus in illo deserunt eaque, quos temporibus, facilis cum enim vitae aliquam facere ad ducimus! Quibusdam velit cumque modi.</p> 
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, ex harum voluptatibus in illo deserunt eaque, quos temporibus, facilis cum enim vitae aliquam facere ad ducimus! Quibusdam velit cumque modi.</p>
        <button className="btn2"> More About Us</button>
      </div>
      <div className="right row">
        <img src={rightImg} alt="" />
      </div>
      </div>
      </section>
    </>
  )
}

export default About
